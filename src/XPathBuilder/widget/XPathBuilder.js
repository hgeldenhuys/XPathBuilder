// Required module list. Remove unnecessary modules, you can always get them back from the boilerplate.
define([
    "dojo/_base/declare",
    "mxui/widget/_WidgetBase",
    "dijit/_TemplatedMixin",
    "mxui/dom",
    "dojo/dom",
    "dojo/dom-prop",
    "dojo/dom-geometry",
    "dojo/dom-class",
    "dojo/dom-style",
    "dojo/dom-construct",
    "dojo/_base/array",
    "dojo/_base/lang",
    "dojo/text",
    "dojo/html",
    "dojo/_base/event",
    "dojo/text!XPathBuilder/widget/template/XPathBuilder.html",
    "XPathBuilder/lib/buildxpath"
], function (declare, _WidgetBase, _TemplatedMixin, dom, dojoDom, dojoProp, dojoGeometry, dojoClass, dojoStyle, dojoConstruct, dojoArray, dojoLang, dojoText, dojoHtml, dojoEvent, widgetTemplate, XPath) {
    "use strict";
    // Declare widget's prototype.
    return declare("XPathBuilder.widget.XPathBuilder", [_WidgetBase, _TemplatedMixin], {
        // _TemplatedMixin will create our dom node using this HTML template.
        templateString: widgetTemplate,
        // DOM elements
        xpathAttribute: "",
        jsonAttribute: "",
        entityNameAttribute: "",
        // Symbols
        notSymbol: "",
        andSymbol: "",
        orSymbol: "",
        andorSymbol: "",
        // dojo.declare.constructor is called to construct the widget instance. Implement to initialize non-primitive properties.
        constructor: function () {
            this._handles = [];
        },
        // dijit._WidgetBase.postCreate is called after constructing the widget. Implement to do extra setup work.
        postCreate: function () {
            require(["dojo/text!XPathBuilder/widget/template/entity.html"], dojo.hitch(this, function (e) { this.entityHTML = e; }));
            this._updateRendering();
            //this._setupEvents();
        },
        // mxui.widget._WidgetBase.update is called when context is changed or initialized. Implement to re-render and / or fetch data.
        update: function (obj, callback) {
            this._contextObj = obj;
            this.dataObject = {
                object: undefined,
                attribute: undefined,
                json: null,
                get: function () {
                    try {
                        return JSON.parse(this.object.get(this.attribute));
                    }
                    catch (e) {
                        this.object.set(this.attribute, '{}');
                        console.error(e);
                        return {};
                    }
                },
                set: function (obj) {
                    if (!obj)
                        obj = this.jsonAttribute;
                    this.object.set(this.attribute, JSON.stringify(obj, null, 2));
                }
            };
            this._fetchAttribute();
            callback();
        },
        // mxui.widget._WidgetBase.enable is called when the widget should enable editing. Implement to enable editing if widget is input widget.
        enable: function () { },
        // mxui.widget._WidgetBase.enable is called when the widget should disable editing. Implement to disable editing if widget is input widget.
        disable: function () { },
        // mxui.widget._WidgetBase.resize is called when the page's layout is recalculated. Implement to do sizing calculations. Prefer using CSS instead.
        resize: function (box) { },
        // mxui.widget._WidgetBase.uninitialize is called when the widget is destroyed. Implement to do special tear-down work.
        uninitialize: function () {
            dojo.empty(this.domNode);
        },
        // We want to stop events on a mobile device
        _stopBubblingEventOnMobile: function (e) {
            if (typeof document.ontouchstart !== "undefined") {
                dojoEvent.stop(e);
            }
        },
        // Attach events to HTML dom elements
        _setupEvents: function () {
        },
        // Fetch if on association
        _fetchAttribute: function () {
            if (this._contextObj) {
                if (this.jsonAttribute.indexOf('/') == -1) {
                    this.dataObject.object = this._contextObj;
                    this.dataObject.attribute = this.jsonAttribute;
                    this._resetSubscriptions();
                    this._updateRendering();
                }
                else {
                    var parts = this.jsonAttribute.split('/'), attribute = parts.pop();
                    this.dataObject.path = parts.join('/');
                    this.dataObject.attribute = attribute;
                    this._contextObj.fetch(this.dataObject.path, dojo.hitch(this, function (obj) {
                        this.dataObject.object = obj;
                        this._resetSubscriptions();
                        this._updateRendering();
                    }));
                }
            }
        },
        _updateRendering: function () {
            if (!this._contextObj) {
                dom.empty(this.domNode);
                this.domNode.innerHTML = '//Xpath..';
                return;
            }
            if ((!this._placed && !this.refreshData)
                || !(this._contextObj.get(this.xpathAttribute).indexOf('//' + this._contextObj.get(this.entityNameAttribute)) > -1)) {
                dom.empty(this.domNode);
                // Did the entity root change?
                if (!(this._contextObj.get(this.xpathAttribute).indexOf('//' + this._contextObj.get(this.entityNameAttribute)) > -1)
                    && (this._contextObj.get(this.jsonAttribute) !== '{}'))
                    this._contextObj.set(this.jsonAttribute, '{}');
                if (this.xpath)
                    this.xpath.onChange(function () { });
                this.xpath = new XPath(this._contextObj.get(this.entityNameAttribute), null, null, null, false, [], dojo.hitch(this, function () {
                    this.refreshData = true;
                    this._contextObj.set(this.jsonAttribute, JSON.stringify(this.xpath, null, 2));
                    this._contextObj.set(this.xpathAttribute, this.xpath.compileAttributeXPath());
                    dojo.empty(this.domNode);
                    dojo.place(this.xpath.compileAttributeHTML(), this.domNode);
                    this.refreshData = false;
                }));
                this.xpath.setNotSymbol(this.notSymbol);
                this.xpath.setAndSymbol(this.andSymbol);
                this.xpath.setOrSymbol(this.orSymbol);
                this.xpath.setAndOrSymbol(this.andorSymbol);
                try {
                    this.xpath.loadJson(JSON.parse(this._contextObj.get(this.jsonAttribute)));
                }
                catch (e) {
                    console.error('Failed loading JSON:');
                    console.error(e);
                    this.domNode.innerHTML = e.toString();
                }
                this.refreshData = false;
                this._placed = true;
            }
        },
        // Handle validations.
        _handleValidation: function (validations) {
            this._clearValidations();
        },
        // Clear validations.
        _clearValidations: function () {
            dojo.destroy(this._alertDiv);
            this._alertDiv = null;
        },
        // Show an error message.
        _showError: function (message) {
            if (this._alertDiv !== null) {
                dojoHtml.set(this._alertDiv, message);
                return true;
            }
            this._alertDiv = dojoConstruct.create("div", {
                "class": "alert alert-danger",
                "innerHTML": message
            });
            dojo.place(this._alertDiv, this.domNode);
        },
        // Add a validation.
        _addValidation: function (message) {
            this._showError(message);
        },
        // Reset subscriptions.
        _resetSubscriptions: function () {
            // Release handles on previous object, if any.
            if (this._handles) {
                dojoArray.forEach(this._handles, function (handle) {
                    mx.data.unsubscribe(handle);
                });
                this._handles = [];
            }
            // When a mendix object exists create subscribtions.
            if (this._contextObj) {
                // var objectHandle = this.subscribe({
                //     guid: this._contextObj.getGuid(),
                //     callback: dojo.hitch(this, dojo.hitch(this, function(guid) {
                //         this._updateRendering();
                //     }))
                // });
                var entityNameHandle = this.subscribe({
                    guid: this._contextObj.getGuid(),
                    attr: this.entityNameAttribute,
                    callback: dojo.hitch(this, function (guid, attr, attrValue) {
                        this._updateRendering();
                    })
                });
                // var attrHandle = this.subscribe({
                //     guid: this.dataObject.object.getGuid(),
                //     attr: this.dataObject.attribute,
                //     callback: dojo.hitch(this, function(guid, attr, attrValue) {
                //         this._updateRendering();
                //     })
                // });
                // var validationHandle = this.subscribe({
                //     guid: this._contextObj.getGuid(),
                //     val: true,
                //     callback: dojo.hitch(this, this._handleValidation)
                // });
                this._handles = [entityNameHandle];
            }
        },
        newEntity: function (parentNode, json) {
        }
    });
});
require(["XPathBuilder/widget/XPathBuilder"], function () {
    "use strict";
});
//# sourceMappingURL=XPathBuilder.js.map