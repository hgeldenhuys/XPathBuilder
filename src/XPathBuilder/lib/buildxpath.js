// Builder
define(["dojo/_base/array"], function (dojoArray) {
    "use strict";
    var OperatorTypeEnum;
    (function (OperatorTypeEnum) {
        OperatorTypeEnum[OperatorTypeEnum["Equals"] = 0] = "Equals";
        OperatorTypeEnum[OperatorTypeEnum["GreaterThan"] = 1] = "GreaterThan";
        OperatorTypeEnum[OperatorTypeEnum["GreaterEqualsTo"] = 2] = "GreaterEqualsTo";
        OperatorTypeEnum[OperatorTypeEnum["LessThan"] = 3] = "LessThan";
        OperatorTypeEnum[OperatorTypeEnum["LessEqualsTo"] = 4] = "LessEqualsTo";
    })(OperatorTypeEnum || (OperatorTypeEnum = {}));
    var PathTypeEnum;
    (function (PathTypeEnum) {
        PathTypeEnum[PathTypeEnum["None"] = 0] = "None";
        PathTypeEnum[PathTypeEnum["Enum"] = 1] = "Enum";
        PathTypeEnum[PathTypeEnum["String"] = 2] = "String";
        PathTypeEnum[PathTypeEnum["Float"] = 3] = "Float";
        PathTypeEnum[PathTypeEnum["Currency"] = 4] = "Currency";
        PathTypeEnum[PathTypeEnum["AutoNumber"] = 5] = "AutoNumber";
        PathTypeEnum[PathTypeEnum["Binary"] = 6] = "Binary";
        PathTypeEnum[PathTypeEnum["Boolean"] = 7] = "Boolean";
        PathTypeEnum[PathTypeEnum["DateTime"] = 8] = "DateTime";
        PathTypeEnum[PathTypeEnum["Decimal"] = 9] = "Decimal";
        PathTypeEnum[PathTypeEnum["HashString"] = 10] = "HashString";
        PathTypeEnum[PathTypeEnum["Integer"] = 11] = "Integer";
        PathTypeEnum[PathTypeEnum["Long"] = 12] = "Long";
        PathTypeEnum[PathTypeEnum["ObjectReference"] = 13] = "ObjectReference";
        PathTypeEnum[PathTypeEnum["ObjectReferenceSet"] = 14] = "ObjectReferenceSet";
        PathTypeEnum[PathTypeEnum["Variable"] = 15] = "Variable";
        PathTypeEnum[PathTypeEnum["Entity"] = 16] = "Entity";
        PathTypeEnum[PathTypeEnum["StringValue"] = 17] = "StringValue";
        PathTypeEnum[PathTypeEnum["DecimalValue"] = 18] = "DecimalValue";
        PathTypeEnum[PathTypeEnum["BooleanValue"] = 19] = "BooleanValue";
        PathTypeEnum[PathTypeEnum["NumberValue"] = 20] = "NumberValue";
        PathTypeEnum[PathTypeEnum["DateValue"] = 21] = "DateValue";
        PathTypeEnum[PathTypeEnum["EnumValue"] = 22] = "EnumValue";
        PathTypeEnum[PathTypeEnum["DateConstant"] = 23] = "DateConstant";
        PathTypeEnum[PathTypeEnum["NoValue"] = 24] = "NoValue";
    })(PathTypeEnum || (PathTypeEnum = {}));
    var PathType = {
        None: 0,
        Enum: 1,
        String: 2,
        Float: 3,
        Currency: 4,
        AutoNumber: 5,
        Binary: 6,
        Boolean: 7,
        DateTime: 8,
        Decimal: 9,
        HashString: 10,
        Integer: 11,
        Long: 12,
        ObjectReference: 13,
        ObjectReferenceSet: 14,
        Variable: 15,
        Entity: 16,
        StringValue: 17,
        DecimalValue: 18,
        BooleanValue: 19,
        NumberValue: 20,
        DateValue: 21,
        EnumValue: 22,
        DateConstant: 23,
        NoValue: 24
    };
    var BooleanOperandsEnum;
    (function (BooleanOperandsEnum) {
        BooleanOperandsEnum[BooleanOperandsEnum["None"] = 0] = "None";
        BooleanOperandsEnum[BooleanOperandsEnum["And"] = 1] = "And";
        BooleanOperandsEnum[BooleanOperandsEnum["Or"] = 2] = "Or";
    })(BooleanOperandsEnum || (BooleanOperandsEnum = {}));
    var BooleanOperands = { None: 0, And: 1, Or: 2 };
    var ComparisonsExpressionEnums = {
        Equals: 1,
        Greater: 2,
        GreaterEqual: 3,
        Less: 4,
        LessEqual: 5
    };
    var StringExpressionEnums = {
        Contains: 6,
        StartsWith: 7,
        EndsWith: 8,
        Length: 10
    };
    var DateExpressionEnums = {
        SecondsFrom: 11,
        MinutesFrom: 12,
        HoursFrom: 13,
        DayFrom: 14,
        DayOfYearFrom: 15,
        WeekDayFrom: 16,
        WeekFrom: 17,
        MonthFrom: 18,
        QuarterFrom: 19,
        YearFrom: 20
    };
    var OtherExpressionEnums = {
        None: 0,
        True: 9,
        Exist: 22,
        Range: 23,
        Empty: 24,
        False: 25
    };
    var OperationExpressionEnums = {
        Remove: 26
    };
    var ExpressionTypeEnum;
    (function (ExpressionTypeEnum) {
        ExpressionTypeEnum[ExpressionTypeEnum["None"] = 0] = "None";
        ExpressionTypeEnum[ExpressionTypeEnum["Equals"] = 1] = "Equals";
        ExpressionTypeEnum[ExpressionTypeEnum["Greater"] = 2] = "Greater";
        ExpressionTypeEnum[ExpressionTypeEnum["GreaterEqual"] = 3] = "GreaterEqual";
        ExpressionTypeEnum[ExpressionTypeEnum["Less"] = 4] = "Less";
        ExpressionTypeEnum[ExpressionTypeEnum["LessEqual"] = 5] = "LessEqual";
        ExpressionTypeEnum[ExpressionTypeEnum["Contains"] = 6] = "Contains";
        ExpressionTypeEnum[ExpressionTypeEnum["StartsWith"] = 7] = "StartsWith";
        ExpressionTypeEnum[ExpressionTypeEnum["EndsWith"] = 8] = "EndsWith";
        ExpressionTypeEnum[ExpressionTypeEnum["True"] = 9] = "True";
        ExpressionTypeEnum[ExpressionTypeEnum["Length"] = 10] = "Length";
        ExpressionTypeEnum[ExpressionTypeEnum["SecondsFrom"] = 11] = "SecondsFrom";
        ExpressionTypeEnum[ExpressionTypeEnum["MinutesFrom"] = 12] = "MinutesFrom";
        ExpressionTypeEnum[ExpressionTypeEnum["HoursFrom"] = 13] = "HoursFrom";
        ExpressionTypeEnum[ExpressionTypeEnum["DayFrom"] = 14] = "DayFrom";
        ExpressionTypeEnum[ExpressionTypeEnum["DayOfYearFrom"] = 15] = "DayOfYearFrom";
        ExpressionTypeEnum[ExpressionTypeEnum["WeekDayFrom"] = 16] = "WeekDayFrom";
        ExpressionTypeEnum[ExpressionTypeEnum["WeekFrom"] = 17] = "WeekFrom";
        ExpressionTypeEnum[ExpressionTypeEnum["MonthFrom"] = 18] = "MonthFrom";
        ExpressionTypeEnum[ExpressionTypeEnum["QuarterFrom"] = 19] = "QuarterFrom";
        ExpressionTypeEnum[ExpressionTypeEnum["YearFrom"] = 20] = "YearFrom";
        ExpressionTypeEnum[ExpressionTypeEnum["Exist"] = 22] = "Exist";
        ExpressionTypeEnum[ExpressionTypeEnum["Range"] = 23] = "Range";
        ExpressionTypeEnum[ExpressionTypeEnum["Empty"] = 24] = "Empty";
        ExpressionTypeEnum[ExpressionTypeEnum["False"] = 25] = "False";
        ExpressionTypeEnum[ExpressionTypeEnum["Remove"] = 26] = "Remove";
    })(ExpressionTypeEnum || (ExpressionTypeEnum = {}));
    var ExpressionType = {
        None: 0,
        Equals: 1,
        Greater: 2,
        GreaterEqual: 3,
        Less: 4,
        LessEqual: 5,
        Contains: 6,
        StartsWith: 7,
        EndsWith: 8,
        True: 9,
        Length: 10,
        SecondsFrom: 11,
        MinutesFrom: 12,
        HoursFrom: 13,
        DayFrom: 14,
        DayOfYearFrom: 15,
        WeekDayFrom: 16,
        WeekFrom: 17,
        MonthFrom: 18,
        QuarterFrom: 19,
        YearFrom: 20,
        Exist: 22,
        Range: 23,
        Empty: 24,
        False: 25,
        Remove: 26
    };
    var mappedValues = {};
    mappedValues[PathTypeEnum.AutoNumber] = { value: 0, type: PathTypeEnum.NumberValue };
    mappedValues[PathTypeEnum.Boolean] = { value: false, type: PathTypeEnum.BooleanValue };
    mappedValues[PathTypeEnum.Currency] = { value: 0.0, type: PathTypeEnum.DecimalValue };
    mappedValues[PathTypeEnum.DateTime] = { value: (new Date()) + '', type: PathTypeEnum.DateValue };
    mappedValues[PathTypeEnum.Decimal] = { value: 0.0, type: PathTypeEnum.DecimalValue };
    mappedValues[PathTypeEnum.Enum] = { value: '', type: PathTypeEnum.EnumValue };
    mappedValues[PathTypeEnum.Float] = { value: 0, type: PathTypeEnum.DecimalValue };
    mappedValues[PathTypeEnum.Integer] = { value: 0, type: PathTypeEnum.NumberValue };
    mappedValues[PathTypeEnum.Long] = { value: 0, type: PathTypeEnum.NumberValue };
    mappedValues[PathTypeEnum.String] = { value: '', type: PathTypeEnum.StringValue };
    function valueTypeForParameter(value, valueType, inputType) {
        if ((value == null) && (mappedValues.hasOwnProperty(inputType))) {
            return mappedValues[inputType];
        }
        else {
            return { value: value, valueType: valueType };
        }
    }
    var ExpressionConfig = {
        _config: {},
        register: function (expressionType, pathTypes, numberOfArguments) {
            this._config[expressionType] = {
                pathTypes: pathTypes,
                numberOfArguments: numberOfArguments,
                defaults: [],
                addDefault: function (value, valueType) {
                    this.defaults.push(dojo.hitch(this, valueTypeForParameter, value, valueType));
                    return this;
                }
            };
            return this._config[expressionType];
        },
        get: function (expressionType) {
            if (!this._config.hasOwnProperty(expressionType)) {
                console.error(expressionType + " not registered");
                throw expressionType + " not registered";
            }
            return this._config[expressionType];
        },
        validPathForExpression: function (expression, path) {
            return this._config[expression].pathTypes.indexOf(path) !== -1;
        }
    };
    var ExpressionEnums = {
        "Basic": OtherExpressionEnums,
        "Comparisons": ComparisonsExpressionEnums,
        "String": StringExpressionEnums,
        "Date": DateExpressionEnums,
        "Operations": OperationExpressionEnums
    };
    function guid() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    }
    var AllPathTypes = [PathTypeEnum.NoValue, PathTypeEnum.None, PathTypeEnum.Enum, PathTypeEnum.String, PathTypeEnum.Float, PathTypeEnum.Currency, PathTypeEnum.AutoNumber, PathTypeEnum.Binary, PathTypeEnum.Boolean, PathTypeEnum.DateTime, PathTypeEnum.Decimal, PathTypeEnum.HashString, PathTypeEnum.Integer, PathTypeEnum.Long, PathTypeEnum.ObjectReference, PathTypeEnum.ObjectReferenceSet, PathTypeEnum.Variable, PathTypeEnum.Entity, PathTypeEnum.StringValue, PathTypeEnum.DecimalValue, PathTypeEnum.BooleanValue, PathTypeEnum.NumberValue, PathTypeEnum.DateValue, PathTypeEnum.EnumValue, PathTypeEnum.DateConstant];
    var ValueTypes = [PathTypeEnum.NoValue, PathTypeEnum.BooleanValue, PathTypeEnum.DateValue, PathTypeEnum.DecimalValue, PathTypeEnum.NumberValue, PathTypeEnum.StringValue, PathTypeEnum.EnumValue, PathTypeEnum.DateConstant];
    var BooleanTypes = [PathTypeEnum.NoValue, PathTypeEnum.Boolean, PathTypeEnum.BooleanValue, PathTypeEnum.ObjectReference, PathTypeEnum.ObjectReferenceSet];
    var EntityTypes = [PathTypeEnum.NoValue, PathTypeEnum.ObjectReference, PathTypeEnum.ObjectReferenceSet, PathTypeEnum.Entity];
    var ReferenceTypes = [PathTypeEnum.NoValue, PathTypeEnum.ObjectReference, PathTypeEnum.ObjectReferenceSet];
    var DateTypes = [PathTypeEnum.NoValue, PathTypeEnum.DateTime, PathTypeEnum.DateValue, PathTypeEnum.ObjectReference, PathTypeEnum.ObjectReferenceSet, PathTypeEnum.DateConstant];
    var NumberTypes = [PathTypeEnum.NoValue, PathTypeEnum.AutoNumber, PathTypeEnum.Currency, PathTypeEnum.Decimal, PathTypeEnum.DecimalValue, PathTypeEnum.Float, PathTypeEnum.Integer, PathTypeEnum.Long, PathTypeEnum.NumberValue, PathTypeEnum.ObjectReference, PathTypeEnum.ObjectReferenceSet];
    var StringTypes = [PathTypeEnum.NoValue, PathTypeEnum.String, PathTypeEnum.StringValue, PathTypeEnum.ObjectReference, PathTypeEnum.ObjectReferenceSet];
    ExpressionConfig.register(ExpressionTypeEnum.None, AllPathTypes, 1);
    ExpressionConfig.register(ExpressionTypeEnum.Equals, AllPathTypes, 2).addDefault(null);
    ExpressionConfig.register(ExpressionTypeEnum.True, BooleanTypes, 1);
    ExpressionConfig.register(ExpressionTypeEnum.False, BooleanTypes, 1);
    ExpressionConfig.register(ExpressionTypeEnum.Contains, StringTypes, 2).addDefault('', PathTypeEnum.StringValue);
    ExpressionConfig.register(ExpressionTypeEnum.EndsWith, StringTypes, 2).addDefault('', PathTypeEnum.StringValue);
    ExpressionConfig.register(ExpressionTypeEnum.Length, StringTypes, 2).addDefault(0, PathTypeEnum.Integer);
    ExpressionConfig.register(ExpressionTypeEnum.StartsWith, StringTypes, 2).addDefault('', PathTypeEnum.StringValue);
    ExpressionConfig.register(ExpressionTypeEnum.DayFrom, DateTypes, 2).addDefault(0, PathTypeEnum.NumberValue);
    ExpressionConfig.register(ExpressionTypeEnum.DayOfYearFrom, DateTypes, 2).addDefault(0, PathTypeEnum.NumberValue);
    ExpressionConfig.register(ExpressionTypeEnum.HoursFrom, DateTypes, 2).addDefault(0, PathTypeEnum.NumberValue);
    ExpressionConfig.register(ExpressionTypeEnum.MinutesFrom, DateTypes, 2).addDefault(0, PathTypeEnum.NumberValue);
    ExpressionConfig.register(ExpressionTypeEnum.MonthFrom, DateTypes, 2).addDefault(0, PathTypeEnum.NumberValue);
    ExpressionConfig.register(ExpressionTypeEnum.YearFrom, DateTypes, 2).addDefault(0, PathTypeEnum.NumberValue);
    ExpressionConfig.register(ExpressionTypeEnum.QuarterFrom, DateTypes, 2).addDefault(0, PathTypeEnum.NumberValue);
    ExpressionConfig.register(ExpressionTypeEnum.SecondsFrom, DateTypes, 2).addDefault(0, PathTypeEnum.NumberValue);
    ExpressionConfig.register(ExpressionTypeEnum.WeekFrom, DateTypes, 2).addDefault(0, PathTypeEnum.NumberValue);
    ExpressionConfig.register(ExpressionTypeEnum.WeekDayFrom, DateTypes, 2).addDefault(0, PathTypeEnum.NumberValue);
    ExpressionConfig.register(ExpressionTypeEnum.Greater, NumberTypes.concat(DateTypes), 2).addDefault(null);
    ExpressionConfig.register(ExpressionTypeEnum.Less, NumberTypes.concat(DateTypes), 2).addDefault(null);
    ExpressionConfig.register(ExpressionTypeEnum.GreaterEqual, NumberTypes.concat(DateTypes), 2).addDefault(null);
    ExpressionConfig.register(ExpressionTypeEnum.LessEqual, NumberTypes.concat(DateTypes), 2).addDefault(null);
    ExpressionConfig.register(ExpressionTypeEnum.Range, NumberTypes.concat(DateTypes), 2).addDefault(0, PathTypeEnum.NumberValue)
        .addDefault(100, PathTypeEnum.NumberValue);
    ExpressionConfig.register(ExpressionTypeEnum.Empty, AllPathTypes, 1);
    ExpressionConfig.register(ExpressionTypeEnum.Exist, AllPathTypes, 1);
    var makePrettyName = function (str) {
        var result = str.split('.').reverse()[0]
            .replace(/([a-z]_)/g, function (str) {
            if (str.length == 2) {
                return (str[0] == 's') ? "s' " : str[0] + "'s";
            }
        })
            .replace(/([A-Z])/g, ' $1')
            .replace(/^./, function (str) {
            return str.toUpperCase();
        });
        if (result.indexOf('_') !== -1)
            result = result
                .substring(1)
                .replace('  ', ' ');
        return result;
    };
    var populateSelect = function (xpath, selectNode, ignoreAttributes) {
        var entity = xpath.getParent().getMxMeta(), attributes = xpath.getParent().getAttributes(), createGroup = dojo.hitch(xpath, function (attributes, label, values, type) {
            var attrGroup = mxui.dom.create('optgroup', { label: label });
            dojo.place(attrGroup, selectNode);
            values.forEach(dojo.hitch(xpath, function (attribute, index) {
                if (type === 'attribute')
                    dojo.place(mxui.dom.create('option', {
                        value: attribute,
                        type: type,
                        pathType: attributes[attribute]
                    }, makePrettyName(attribute)), attrGroup);
                else if (type === 'reference')
                    dojo.place(mxui.dom.create('option', {
                        value: attribute + '/' + this.getParent().getAssociations()[attribute],
                        type: type,
                        pathType: attributes[attribute]
                    }, makePrettyName(attribute)), attrGroup);
                else
                    dojo.place(mxui.dom.create('option', {
                        value: attribute,
                        type: type,
                        pathType: attributes[attribute]
                    }, makePrettyName(attribute)), attrGroup);
            }));
        });
        var option = mxui.dom.create('option', { value: "" }, "Select Field");
        dojo.place(option, selectNode);
        // Populate Attributes
        var attributesWithoutReferences = entity.getAttributesWithoutReferences().sort().filter(function (item, index) {
            return (ignoreAttributes.indexOf(item) == -1);
        });
        var attributesReferences = Object.keys(xpath.getParent().getAssociations()).sort().filter(function (item, index) {
            return ((ignoreAttributes.indexOf(item) == -1));
        });
        createGroup(attributes, "Pseudo", ['id'], 'attribute');
        createGroup(attributes, "Attributes", attributesWithoutReferences, 'attribute');
        // Populate Relationships
        createGroup(attributes, "Related", attributesReferences, 'reference');
        // Populate Value Types
        var attrGroup = mxui.dom.create('optgroup', { label: 'Value Types' });
        dojo.place(attrGroup, selectNode);
        ValueTypes.forEach(dojo.hitch(xpath, function (attribute) {
            dojo.place(mxui.dom.create('option', {
                value: attribute,
                type: 'value',
                pathType: attribute
            }, makePrettyName(PathTypeEnum[attribute])), attrGroup);
        }));
        if (xpath.isPath()) {
            var operationGroup = mxui.dom.create('optgroup', { label: 'Operation' });
            dojo.place(operationGroup, selectNode);
            dojo.place(mxui.dom.create('option', { value: 'remove', type: 'operation' }, "Remove"), operationGroup);
        }
        selectNode.setAttribute("entity", entity.getEntity());
        if (ValueTypes.indexOf(xpath.getType()))
            selectNode.value = xpath.getType();
        else
            selectNode.value = xpath.getName();
    };
    var DateConstantsLabels = {
        "'[%CurrentDateTime%]'": "Current date and time",
        "'[%BeginOfCurrentDay%]'": "Beginning of current day",
        "'[%EndOfCurrentDay%]'": "End of current day",
        "'[%BeginOfCurrentHour%]'": "Beginning of current hour",
        "'[%EndOfCurrentHour%]'": "End of current hour",
        "'[%BeginOfCurrentMinute%]'": "Beginning of current minute",
        "'[%EndOfCurrentMinute%]'": "End of current minute",
        "'[%BeginOfCurrentMonth%]'": "Beginning of current month",
        "'[%EndOfCurrentMonth%]'": "End of current month",
        "'[%BeginOfCurrentWeek%]'": "Beginning of current week",
        "'[%EndOfCurrentWeek%]'": "End of current week",
        "'[%BeginOfCurrentYear%]'": "Beginning of current year",
        "'[%EndOfCurrentYear%]'": "End of current year"
    };
    var DateConstants = {
        CurrentDateTime: "'[%CurrentDateTime%]'",
        BeginOfCurrentDay: "'[%BeginOfCurrentDay%]'",
        EndOfCurrentDay: "'[%EndOfCurrentDay%]'",
        BeginOfCurrentHour: "'[%BeginOfCurrentHour%]'",
        EndOfCurrentHour: "'[%EndOfCurrentHour%]'",
        BeginOfCurrentMinute: "'[%BeginOfCurrentMinute%]'",
        EndOfCurrentMinute: "'[%EndOfCurrentMinute%]'",
        BeginOfCurrentMonth: "'[%BeginOfCurrentMonth%]'",
        EndOfCurrentMonth: "'[%EndOfCurrentMonth%]'",
        BeginOfCurrentWeek: "'[%BeginOfCurrentWeek%]'",
        EndOfCurrentWeek: "'[%EndOfCurrentWeek%]'",
        BeginOfCurrentYear: "'[%BeginOfCurrentYear%]'",
        EndOfCurrentYear: "'[%EndOfCurrentYear%]'"
    };
    var DefaultValues = {};
    DefaultValues[PathTypeEnum.BooleanValue] = false;
    DefaultValues[PathTypeEnum.DecimalValue] = 0.0;
    DefaultValues[PathTypeEnum.EnumValue] = "";
    DefaultValues[PathTypeEnum.StringValue] = "";
    DefaultValues[PathTypeEnum.NumberValue] = 0;
    DefaultValues[PathTypeEnum.DateValue] = new Date();
    DefaultValues[PathTypeEnum.DateConstant] = "'[%CurrentDateTime%]'";
    var attributeHtml = function (xpath, selectExpression, containerDom, inputDom) {
        var attributeContainer = mxui.dom.create('tr', { class: "attribute-div" });
        var attributeTable = mxui.dom.create('table', { class: "attribute-table" }, attributeContainer);
        var attributeSpan = mxui.dom.create('span', {
            class: "attribute-span-view xpath-focus xpath-read " + PathTypeEnum[xpath.getType()],
            title: makePrettyName(PathTypeEnum[xpath.getType()])
        }, ''
            + (xpath.getType() === PathTypeEnum.NoValue ?
                '..' : (xpath.getType() === PathTypeEnum.DateConstant ? DateConstantsLabels[xpath.getValue()] :
                (''
                    + (!xpath.isRoot() && !xpath.isReference() && !xpath.isAttributeType() ? PathCompiler[xpath.getType()].xpath(xpath) :
                        makePrettyName(xpath.getName()))))));
        var handles = [];
        if (xpath.getType() !== PathTypeEnum.Entity) {
            var attributeSelect = mxui.dom.create('select', { class: "attribute-select xpath-focus xpath-write hidden" });
            populateSelect(xpath, attributeSelect, []);
            if (ValueTypes.indexOf(xpath.getType()) >= 0) {
                attributeSelect.value = xpath.getType();
            }
            else {
                attributeSelect.value = xpath.getFullyQualifiedName();
            }
            var handles_1 = [];
            // On Click of labels
            handles_1.push(dojo.connect(attributeSpan, "onclick", dojo.hitch(xpath, function (attributeSpan, attributeSelect, inputDom, event) {
                dojo.addClass(attributeSpan, 'hidden');
                dojo.removeClass(attributeSelect, 'hidden');
                if (inputDom) {
                    dojo.removeClass(inputDom, 'hidden');
                    inputDom.focus();
                    if (inputDom['select'])
                        inputDom.select();
                }
                else
                    attributeSelect.focus();
            }, attributeSpan, attributeSelect, inputDom)));
            var onBlur = function (attributeSpan, attributeSelect, inputDom, event) {
                if (!event.relatedTarget || !dojo.hasClass((event.relatedTarget), "xpath-focus")) {
                    dojo.removeClass(attributeSpan, 'hidden');
                    dojo.addClass(attributeSelect, 'hidden');
                    if (inputDom && dojo.hasClass(inputDom, 'xpath-focus'))
                        dojo.addClass(inputDom, 'hidden');
                }
            };
            // On Blur of select
            handles_1.push(dojo.connect(attributeSelect, "onblur", dojo.hitch(xpath, onBlur, attributeSpan, attributeSelect, inputDom)));
            if (inputDom)
                handles_1.push(dojo.connect(inputDom, "onblur", dojo.hitch(xpath, onBlur, attributeSpan, attributeSelect, inputDom)));
            dojo.connect(attributeSelect, "onchange", dojo.hitch(xpath, function (attributeSelect, containerDom, selectExpression, handles, event) {
                if (attributeSelect.value === 'remove') {
                    dojo.empty(containerDom);
                    this.getParent().setNextPath(null);
                }
                else {
                    var value = isNaN(attributeSelect.value) ? attributeSelect.value : parseInt(attributeSelect.value);
                    if (ValueTypes.indexOf(value) >= 0) {
                        this.changeType("Arg" + this._nthPath, DefaultValues[value], value);
                    }
                    else {
                        this.changeType(value, null, PathTypeEnum.None);
                    }
                    this.setExpressionType(this.getExpressionType());
                    for (var handle in handles) {
                        dojo.disconnect(handles[handle]);
                    }
                    if (selectExpression && !this.isParameter())
                        selectExpression.onChange(selectExpression.expressionRow, selectExpression.expressionSelect, selectExpression.attributeSelect, selectExpression.handles, event);
                    else {
                        dojo.empty(containerDom);
                        //dojo.place(xpath.compileAttributeHTML(), containerDom);
                        PathCompiler[this.getType()].createHTML(xpath, containerDom, selectExpression);
                    }
                }
                this.getRoot().changed();
            }, attributeSelect, containerDom, selectExpression, handles_1));
            dojo.place(mxui.dom.create('td', {}, attributeSpan), attributeContainer);
            dojo.place(mxui.dom.create('td', {}, attributeSelect), attributeContainer);
        }
        else {
            dojo.place(mxui.dom.create('td', {}, attributeSpan), attributeContainer);
        }
        if (inputDom)
            dojo.place(mxui.dom.create('td', {}, inputDom), attributeContainer);
        dojo.place(attributeTable, containerDom);
    };
    var ExpressionCompiler = {};
    var PathCompiler = {};
    PathCompiler[PathTypeEnum.None] = {
        // XPATH
        xpath: function (xpath) {
            console.error(123);
            //throw "No compiler for None";
        },
        html: function (xpath) {
            console.error(123);
            //throw "No compiler for None";
        }
    };
    PathCompiler[PathTypeEnum.ObjectReference] = {
        // XPATH
        xpath: function (xpath) {
            var constraints = xpath.getXPathCriterias().map(function (xpathConstraint) {
                return ExpressionCompiler[xpathConstraint.getExpressionType()].xpath(xpathConstraint);
            }).join(' ');
            constraints = (constraints ? "[" + constraints + "]" : '');
            var path = xpath.getPath() ? PathCompiler[xpath.getPath().getType()].xpath(xpath.getPath()) : '';
            return (xpath.isPath() ? '/' : '') + xpath.getFullyQualifiedName() + constraints + path;
            // TODO: Add the rest of the path. Right now only the xpath Criteria is processed.
        },
        createHTML: function (xpath, containerDom, expressionSelect) {
            var tr = PathCompiler[PathTypeEnum.Entity].createHTML(xpath, containerDom, expressionSelect);
            // Add path
            if (Object.keys(xpath.getAttributes()).length > 0) {
                var continuePath = mxui.dom.create('span', { class: "continue-path-link" });
                dojo.place(mxui.dom.create('td', {}, continuePath), tr);
                dojo.connect(continuePath, "onclick", dojo.hitch(xpath, function (containerDom, expressionSelect, event) {
                    this.setNextPath(Object.keys(this.getAttributes())[0]);
                    dojo.empty(containerDom);
                    //dojo.place(xpath.compileAttributeHTML(), containerDom);
                    PathCompiler[this.getType()].createHTML(xpath, containerDom, expressionSelect);
                    this.getRoot().changed();
                }, containerDom, expressionSelect));
            }
            if (xpath.getPath()) {
                var pathTD = mxui.dom.create('td');
                //PathCompiler[xpath.getPath().getType()].html(xpath.getPath(), pathTD);
                dojo.place(mxui.dom.create('td', {}, xpath.getPath().compileAttributeHTML()), tr);
            }
        },
        // HTML
        html: function (xpath, expressionSelect) {
            var containerDom = mxui.dom.create('div', { class: "xpath-container" });
            this.createHTML(xpath, containerDom, expressionSelect);
            return containerDom;
        }
    };
    PathCompiler[PathTypeEnum.Entity] = {
        // XPATH
        xpath: function (xpath) {
            var constraints = xpath.getXPathCriterias().map(function (xpathConstraint) {
                return ExpressionCompiler[xpathConstraint.getExpressionType()].xpath(xpathConstraint);
            }).join(' ');
            constraints = (constraints ? "[" + constraints + "]" : '');
            var path = xpath.getPath() ? PathCompiler[xpath.getPath().getType()].xpath(xpath.getPath()) : '';
            return "//" + xpath.getName() + constraints + path;
            // TODO: Add the rest of the path. Right now only the xpath Criteria is processed.
        },
        createHTML: function (xpath, containerDom, expressionSelect) {
            // Get all expressions/criteria
            var xpathMap = [];
            var constraintDoms = xpath.getXPathCriterias().map(function (xpathCriteria) {
                var constraintDom = mxui.dom.create('td', { class: "constraintDom", 'xpath': xpathCriteria.getName() }, ExpressionCompiler[xpathCriteria.getExpressionType()].html(xpathCriteria));
                xpathMap.push(xpathCriteria);
                return constraintDom;
            });
            // Add button
            var a = mxui.dom.create('a', { class: "add-expression" });
            var tr = mxui.dom.create('tr', {}, mxui.dom.create('td', { class: "align-top" }, a));
            dojo.connect(a, "onclick", dojo.hitch(xpath, function (containerDom, expressionSelect, event) {
                if (Object.keys(this._attributes).length) {
                    this.addXPathCriteria(Object.keys(this._attributes)[0]);
                    dojo.empty(containerDom);
                    PathCompiler[this.getType()].createHTML(this, containerDom, expressionSelect);
                    this.getRoot().changed();
                }
                else
                    mx.ui.warning("Entity " + this.getEntityName() + " has no attributes/relationships.");
            }, containerDom, expressionSelect));
            var inputDom = mxui.dom.create('table', { class: "inputDom-table" }, tr);
            // Has constraints? If so, render them
            if (constraintDoms.length) {
                dojo.place(mxui.dom.create('td', { class: "left-bracket" }, mxui.dom.create('div')), tr);
                var expressionTable = mxui.dom.create('table', { class: "expressionTable" });
                for (var constraintDomIndex in constraintDoms) {
                    var removeLink = mxui.dom.create('td', {}, mxui.dom.create('a', { class: "remove-constraint" }, 'x'));
                    var constraintRow = mxui.dom.create('tr', { class: "allConstraints" }, constraintDoms[constraintDomIndex], removeLink);
                    dojo.place(constraintRow, expressionTable);
                    dojo.connect(removeLink, "onclick", dojo.hitch(this, function (constraintRow, xpath, xpathCriteria, evt) {
                        dojo.destroy(constraintRow);
                        xpath.removeXPathCriteria(xpathCriteria);
                        xpath.getRoot().changed();
                    }, constraintRow, xpath, xpathMap[parseInt(constraintDomIndex)]));
                }
                //dojo.place(mxui.dom.create('tr', {class:"allConstraints"}, constraintDoms[constraint]), expressionTable);
                dojo.place(mxui.dom.create('td', { class: "expressionTable-cell" }, expressionTable), tr);
                dojo.place(mxui.dom.create('td', { class: "right-bracket" }, mxui.dom.create('div')), tr);
            }
            attributeHtml(xpath, !!expressionSelect ? expressionSelect : null, containerDom, inputDom);
            return tr;
        },
        html: PathCompiler[PathTypeEnum.ObjectReference].html
    };
    PathCompiler[PathTypeEnum.ObjectReferenceSet] = PathCompiler[PathTypeEnum.ObjectReference];
    PathCompiler[PathTypeEnum.NoValue] = {
        // XPATH
        xpath: function (xpath) {
            return '';
        },
        createHTML: function (xpath, containerDom, expressionSelect) {
            attributeHtml(xpath, expressionSelect, containerDom);
        },
        html: PathCompiler[PathTypeEnum.ObjectReference].html
    };
    PathCompiler[PathTypeEnum.Enum] = {
        // XPATH
        xpath: function (xpath) {
            return (xpath.isPath() ? '/' : '') + xpath.getName();
        },
        createHTML: function (xpath, containerDom, expressionSelect) {
            attributeHtml(xpath, expressionSelect, containerDom);
        },
        html: PathCompiler[PathTypeEnum.ObjectReference].html
    };
    PathCompiler[PathTypeEnum.Decimal] = PathCompiler[PathTypeEnum.Enum];
    PathCompiler[PathTypeEnum.String] = PathCompiler[PathTypeEnum.Enum];
    PathCompiler[PathTypeEnum.Float] = PathCompiler[PathTypeEnum.Enum];
    PathCompiler[PathTypeEnum.Currency] = PathCompiler[PathTypeEnum.Enum];
    PathCompiler[PathTypeEnum.AutoNumber] = PathCompiler[PathTypeEnum.Enum];
    PathCompiler[PathTypeEnum.Binary] = PathCompiler[PathTypeEnum.Enum];
    PathCompiler[PathTypeEnum.Boolean] = PathCompiler[PathTypeEnum.Enum];
    PathCompiler[PathTypeEnum.DateTime] = PathCompiler[PathTypeEnum.Enum];
    PathCompiler[PathTypeEnum.Decimal] = PathCompiler[PathTypeEnum.Enum];
    PathCompiler[PathTypeEnum.HashString] = PathCompiler[PathTypeEnum.Enum];
    PathCompiler[PathTypeEnum.Integer] = PathCompiler[PathTypeEnum.Enum];
    PathCompiler[PathTypeEnum.Long] = PathCompiler[PathTypeEnum.Enum];
    PathCompiler[PathTypeEnum.DecimalValue] = {
        // XPATH
        xpath: function (xpath) {
            return xpath.getValue();
        },
        createHTML: function (xpath, containerDom, expressionSelect) {
            // TODO: data binding
            var inputDom = mxui.dom.create('input', {
                type: "number",
                class: "hidden xpath-write xpath-focus value-input",
                value: xpath.getValue()
            });
            inputDom.value = xpath.getValue();
            dojo.connect(inputDom, "onchange", dojo.hitch(xpath, function (inputDom, containerDom, expressionSelect, event) {
                this.setValue(parseFloat(inputDom.value), PathTypeEnum.DecimalValue);
                var value = inputDom.value;
                dojo.empty(containerDom);
                PathCompiler[this.getType()].createHTML(xpath, containerDom, expressionSelect);
                inputDom = containerDom.querySelector(".value-input");
                if (inputDom)
                    inputDom.value = value;
                var attributeSelect = containerDom.querySelector("select.attribute-select");
                if (attributeSelect) {
                    var owner = xpath.getParameterOwner(xpath);
                    if (owner !== null)
                        disableOptions(owner.getExpressionType(), attributeSelect);
                }
                this.getRoot().changed();
            }, inputDom, containerDom, expressionSelect));
            attributeHtml(xpath, expressionSelect, containerDom, inputDom);
        },
        html: PathCompiler[PathTypeEnum.ObjectReference].html
    };
    PathCompiler[PathTypeEnum.EnumValue] = {
        // XPATH
        xpath: function (xpath) {
            if (xpath.isParameter())
                return "'" + xpath.getValue() + "'";
            else
                return "Error: You can't have an Enum value here";
        },
        createHTML: function (xpath, containerDom, expressionSelect) {
            // TODO: data binding
            var inputDom = mxui.dom.create('select', {
                class: "hidden xpath-write xpath-focus value-input"
            });
            var enumValues = xpath.getParameterOwner(xpath).getEnumValues();
            dojo.place(mxui.dom.create('option', { value: "" }, ""), inputDom);
            for (var key in xpath.getEnumValues()) {
                dojo.place(mxui.dom.create('option', { value: key }, xpath.getEnumValues()[key]), inputDom);
            }
            ;
            dojo.connect(inputDom, "onchange", dojo.hitch(xpath, function (inputDom, containerDom, expressionSelect, event) {
                this.setValue(inputDom.value, PathTypeEnum.EnumValue);
                var value = inputDom.value;
                dojo.empty(containerDom);
                PathCompiler[this.getType()].createHTML(xpath, containerDom, expressionSelect);
                inputDom = containerDom.querySelector(".value-input");
                if (inputDom)
                    inputDom.value = value;
                var attributeSelect = containerDom.querySelector("select.attribute-select");
                if (attributeSelect) {
                    var owner = xpath.getParameterOwner(xpath);
                    if (owner !== null)
                        disableOptions(owner.getExpressionType(), attributeSelect);
                }
                this.getRoot().changed();
            }, inputDom, containerDom, expressionSelect));
            inputDom.value = xpath.getValue();
            attributeHtml(xpath, expressionSelect, containerDom, inputDom);
        },
        html: PathCompiler[PathTypeEnum.ObjectReference].html
    };
    PathCompiler[PathTypeEnum.NumberValue] = {
        // XPATH
        xpath: function (xpath) {
            return xpath.getValue();
        },
        createHTML: function (xpath, containerDom, expressionSelect) {
            // TODO: data binding
            var inputDom = mxui.dom.create('input', {
                type: "number",
                class: "hidden xpath-write xpath-focus value-input",
                value: xpath.getValue()
            });
            inputDom.value = xpath.getValue();
            dojo.connect(inputDom, "onchange", dojo.hitch(xpath, function (inputDom, containerDom, expressionSelect, event) {
                this.setValue(inputDom.value, PathTypeEnum.NumberValue);
                var value = inputDom.value;
                dojo.empty(containerDom);
                PathCompiler[this.getType()].createHTML(xpath, containerDom, expressionSelect);
                inputDom = containerDom.querySelector(".value-input");
                if (inputDom)
                    inputDom.value = value;
                var attributeSelect = containerDom.querySelector("select.attribute-select");
                if (attributeSelect) {
                    var owner = xpath.getParameterOwner(xpath);
                    if (owner !== null)
                        disableOptions(owner.getExpressionType(), attributeSelect);
                }
                this.getRoot().changed();
            }, inputDom, containerDom, expressionSelect));
            attributeHtml(xpath, expressionSelect, containerDom, inputDom);
        },
        html: PathCompiler[PathTypeEnum.ObjectReference].html
    };
    PathCompiler[PathTypeEnum.StringValue] = {
        // XPATH
        xpath: function (xpath) {
            return "'" + xpath.getValue() + "'";
        },
        createHTML: function (xpath, containerDom, expressionSelect) {
            // TODO: data binding
            var inputDom = mxui.dom.create('input', {
                type: "text",
                class: "hidden xpath-write xpath-focus value-input",
                value: xpath.getValue()
            });
            inputDom.value = xpath.getValue();
            dojo.connect(inputDom, "onchange", dojo.hitch(xpath, function (inputDom, containerDom, expressionSelect, event) {
                this.setValue(inputDom.value, PathTypeEnum.StringValue);
                var value = inputDom.value;
                dojo.empty(containerDom);
                PathCompiler[this.getType()].createHTML(xpath, containerDom, expressionSelect);
                inputDom = containerDom.querySelector(".value-input");
                if (inputDom)
                    inputDom.value = value;
                var attributeSelect = containerDom.querySelector("select.attribute-select");
                if (attributeSelect) {
                    var owner = xpath.getParameterOwner(xpath);
                    if (owner !== null)
                        disableOptions(owner.getExpressionType(), attributeSelect);
                }
                this.getRoot().changed();
            }, inputDom, containerDom, expressionSelect));
            attributeHtml(xpath, expressionSelect, containerDom, inputDom);
        },
        html: PathCompiler[PathTypeEnum.ObjectReference].html
    };
    PathCompiler[PathTypeEnum.BooleanValue] = {
        // XPATH
        xpath: function (xpath) {
            return "" + (xpath.getValue() ? 'true()' : 'false()');
        },
        createHTML: function (xpath, containerDom, expressionSelect) {
            // TODO: data binding
            var inputDom = mxui.dom.create('input', {
                type: "checkbox",
                class: "hidden xpath-write xpath-focus value-input",
                value: xpath.getValue()
            });
            inputDom.checked = xpath.getValue();
            dojo.connect(inputDom, "onchange", dojo.hitch(xpath, function (inputDom, containerDom, expressionSelect, event) {
                this.setValue(inputDom.checked, PathTypeEnum.BooleanValue);
                var value = inputDom.checked;
                dojo.empty(containerDom);
                PathCompiler[this.getType()].createHTML(xpath, containerDom, expressionSelect);
                inputDom = containerDom.querySelector(".value-input");
                if (inputDom)
                    inputDom.value = value;
                var attributeSelect = containerDom.querySelector("select.attribute-select");
                if (attributeSelect) {
                    var owner = xpath.getParameterOwner(xpath);
                    if (owner !== null)
                        disableOptions(owner.getExpressionType(), attributeSelect);
                }
                this.getRoot().changed();
            }, inputDom, containerDom, expressionSelect));
            attributeHtml(xpath, expressionSelect, containerDom, inputDom);
        },
        html: PathCompiler[PathTypeEnum.ObjectReference].html
    };
    PathCompiler[PathTypeEnum.DateValue] = {
        // XPATH
        xpath: function (xpath) {
            return "'" + xpath.getValue().toISOString() + "'";
        },
        createHTML: function (xpath, containerDom, expressionSelect) {
            // TODO: data binding
            var inputDom = mxui.dom.create('input', {
                type: "datetime",
                class: "hidden xpath-write xpath-focus value-input",
                value: xpath.getValue().toISOString()
            });
            inputDom.value = xpath.getValue().toISOString();
            dojo.connect(inputDom, "onchange", dojo.hitch(xpath, function (inputDom, containerDom, expressionSelect, event) {
                this.setValue(new Date(inputDom.value), PathTypeEnum.DateValue);
                dojo.empty(containerDom);
                PathCompiler[this.getType()].createHTML(xpath, containerDom, expressionSelect);
                // inputDom = containerDom.querySelector(".value-input");
                // if (inputDom)
                //     inputDom.value = this.getValue().toISOString();
                var attributeSelect = containerDom.querySelector("select.attribute-select");
                if (attributeSelect) {
                    var owner = xpath.getParameterOwner(xpath);
                    if (owner !== null)
                        disableOptions(owner.getExpressionType(), attributeSelect);
                }
                this.getRoot().changed();
            }, inputDom, containerDom, expressionSelect));
            attributeHtml(xpath, expressionSelect, containerDom, inputDom);
        },
        html: PathCompiler[PathTypeEnum.ObjectReference].html
    };
    PathCompiler[PathTypeEnum.DateConstant] = {
        // XPATH
        xpath: function (xpath) {
            return xpath.getValue();
        },
        createHTML: function (xpath, containerDom, expressionSelect) {
            // TODO: data binding
            var inputDom = mxui.dom.create('select', {
                class: "hidden xpath-write xpath-focus value-input date-constants",
                value: xpath.getValue()
            });
            var dateOption = mxui.dom.create('option', { value: "" }, "");
            dojo.place(dateOption, inputDom);
            for (var dateConstant in DateConstants) {
                dateOption = mxui.dom.create('option', { value: DateConstants[dateConstant] }, makePrettyName(dateConstant));
                dojo.place(dateOption, inputDom);
            }
            inputDom.value = xpath.getValue();
            dojo.connect(inputDom, "onchange", dojo.hitch(xpath, function (inputDom, containerDom, expressionSelect, event) {
                this.setValue(inputDom.value, PathTypeEnum.DateConstant);
                var value = inputDom.value;
                dojo.empty(containerDom);
                PathCompiler[this.getType()].createHTML(xpath, containerDom, expressionSelect);
                inputDom = containerDom.querySelector(".value-input");
                if (inputDom)
                    inputDom.value = value;
                var attributeSelect = containerDom.querySelector("select.attribute-select");
                if (attributeSelect) {
                    var owner = xpath.getParameterOwner(xpath);
                    if (owner !== null)
                        disableOptions(owner.getExpressionType(), attributeSelect);
                }
                this.getRoot().changed();
            }, inputDom, containerDom, expressionSelect));
            attributeHtml(xpath, expressionSelect, containerDom, inputDom);
        },
        html: PathCompiler[PathTypeEnum.ObjectReference].html
    };
    var disableOptions = function (expression, select) {
        dojoArray.forEach(select.querySelectorAll('option'), dojo.hitch(this, function (opt) {
            var value = parseInt(opt.getAttribute("pathtype")), newValue = (([ExpressionTypeEnum.Equals, ExpressionTypeEnum.Empty, ExpressionTypeEnum.Exist].indexOf(expression) == -1)
                && !ExpressionConfig.validPathForExpression(expression, value));
            opt.disabled = newValue;
        }));
    };
    var generateBooleanOperand = function (xpath, expressionRow) {
        var lookUps = {};
        lookUps[BooleanOperandsEnum.And] = { text: " " + xpath.getAndSymbol() + " ", class: "operator-and", switch: BooleanOperandsEnum.Or };
        lookUps[BooleanOperandsEnum.Or] = { text: " " + xpath.getOrSymbol() + " ", class: "operator-or", switch: BooleanOperandsEnum.None };
        lookUps[BooleanOperandsEnum.None] = { text: " " + xpath.getAndOrSymbol() + " ", class: "operator-none", switch: BooleanOperandsEnum.And };
        var operatorTD = mxui.dom.create('td', { class: "expression-cell" + (xpath.getParent().getXPathCriterias().length > 1 ? " bool-operator" : '') });
        if (!xpath.isFirstExpression()) {
            var operatorSpan = mxui.dom.create('span', { class: "operator-yes " + lookUps[xpath.getBooleanOperand()].class }, lookUps[xpath.getBooleanOperand()].text);
            dojo.connect(operatorTD, 'onclick', dojo.hitch(xpath, function (operatorSpan, evt) {
                dojo.removeClass(operatorSpan, lookUps[this.getBooleanOperand()].class);
                xpath.setBooleanOperand(lookUps[this.getBooleanOperand()].switch);
                dojo.addClass(operatorSpan, lookUps[this.getBooleanOperand()].class);
                operatorSpan.innerText = lookUps[this.getBooleanOperand()].text;
                this.getRoot().changed();
            }, operatorSpan));
            dojo.place(operatorSpan, operatorTD);
        }
        else {
            var operatorSpan = mxui.dom.create('span', {});
            dojo.place(operatorSpan, operatorTD);
        }
        dojo.place(operatorTD, expressionRow);
    };
    var generateNotOperand = function (xpath, expressionRow) {
        //Not
        var notTD = mxui.dom.create('td', { class: "expression-cell" });
        var notSpan = mxui.dom.create('span', { class: xpath.getNot() ? "not-yes" : "not-no" }, xpath.getNotSymbol());
        if (xpath.getNot()) {
            dojo.addClass(notSpan, "not-yes");
        }
        else {
            dojo.addClass(notSpan, "not-no");
        }
        dojo.connect(notTD, 'onclick', dojo.hitch(xpath, function (notSpan, evt) {
            dojo.removeClass(notSpan, this.getNot() ? "not-yes" : "not-no");
            xpath.setNot(!this.getNot());
            dojo.addClass(notSpan, this.getNot() ? "not-yes" : "not-no");
            this.getRoot().changed();
        }, notSpan));
        dojo.place(notSpan, notTD);
        dojo.place(notTD, expressionRow);
    };
    var generateLeft = function (xpath, expressionRow) {
        var leftTD = mxui.dom.create('td', { class: "expression-cell" });
        var leftSpan = mxui.dom.create('span', { class: xpath.hasLeftParenthesis() ? "parenthesis-yes" : "parenthesis-no" }, ' (');
        if (xpath.hasLeftParenthesis()) {
            dojo.addClass(leftSpan, "parenthesis-yes");
        }
        dojo.connect(leftTD, 'onclick', dojo.hitch(xpath, function (leftSpan, evt) {
            dojo.removeClass(leftSpan, this.hasLeftParenthesis() ? "parenthesis-yes" : "parenthesis-no");
            this.setLeftParenthesis(!this.hasLeftParenthesis());
            dojo.addClass(leftSpan, this.hasLeftParenthesis() ? "parenthesis-yes" : "parenthesis-no");
            this.getRoot().changed();
        }, leftSpan));
        dojo.place(leftSpan, leftTD);
        dojo.place(leftTD, expressionRow);
    };
    var generateRight = function (xpath, expressionRow) {
        var rightTD = mxui.dom.create('td', { class: "expression-cell" });
        var rightSpan = mxui.dom.create('span', { class: xpath.hasRightParenthesis() ? "parenthesis-yes" : "parenthesis-no" }, ')');
        if (xpath.hasRightParenthesis()) {
            dojo.addClass(rightSpan, "parenthesis-yes");
        }
        dojo.connect(rightTD, 'onclick', dojo.hitch(xpath, function (rightSpan, evt) {
            dojo.removeClass(rightSpan, this.hasRightParenthesis() ? "parenthesis-yes" : "parenthesis-no");
            this.setRightParenthesis(!this.hasRightParenthesis());
            dojo.addClass(rightSpan, this.hasRightParenthesis() ? "parenthesis-yes" : "parenthesis-no");
            this.getRoot().changed();
        }, rightSpan));
        dojo.place(rightSpan, rightTD);
        dojo.place(rightTD, expressionRow);
    };
    var expressionHtml = function (xpath, expressionRow) {
        expressionRow.setAttribute("class", "expression-row");
        generateBooleanOperand.call(this, xpath, expressionRow);
        generateNotOperand.call(this, xpath, expressionRow);
        generateLeft.call(this, xpath, expressionRow);
        //  Function Link: table > tr > td > a:fn + select:exp
        var fnLink = mxui.dom.create('a', { class: "expression-fn xpath-read" }, '∑');
        var fnTD = mxui.dom.create('td', { class: "expression-function-cell" }, fnLink);
        dojo.place(fnTD, expressionRow);
        // Expression Select
        var expressionSelect = mxui.dom.create('select', { class: "hidden xpath-write xpath-focus expression-select" });
        for (var expressionSet in ExpressionEnums) {
            var optionGroup = mxui.dom.create('optgroup', { class: expressionSet, label: expressionSet });
            dojo.place(optionGroup, expressionSelect);
            for (var expression in ExpressionEnums[expressionSet]) {
                var option = mxui.dom.create('option', { value: ExpressionType[expression] }, "" + expression);
                dojo.place(option, optionGroup);
            }
        }
        // For use inside the path types, giving access to outside expression
        var expressionStorageClass = (function () {
            function expressionStorageClass() {
                this.onChange = null;
                this.expressionRow = null;
                this.expressionSelect = null;
                this.attributeSelect = null;
                this.handles = null;
            }
            return expressionStorageClass;
        }());
        ;
        var expressionStorage = new expressionStorageClass();
        var expressionSelectTD = mxui.dom.create('td', {}, expressionSelect);
        dojo.place(expressionSelectTD, expressionRow);
        // Expression
        var attributeDom = PathCompiler[xpath.getType()].html(xpath, expressionStorage);
        var attributeDoms = [attributeDom];
        for (var idx = 0; idx < xpath.numberOfExpressionParameters() - 1; idx++) {
            var xpathParam = xpath.getParam(idx);
            attributeDoms.push(PathCompiler[xpathParam.getType()].html(xpathParam, expressionStorage));
        }
        var expressionTableDom = ExpressionCompiler[xpath.getExpressionType()]
            .renderAttributes(attributeDoms, fnTD, expressionSelectTD, xpath);
        dojo.place(mxui.dom.create('td', {}, expressionTableDom), expressionRow);
        generateRight.call(this, xpath, expressionRow);
        // Hook filters and events
        var attributeSelect = attributeDom.querySelector(".attribute-select");
        disableOptions(xpath.getExpressionType(), attributeSelect);
        var handles = [];
        // On Click of labels
        handles.push(dojo.connect(fnLink, "onclick", dojo.hitch(xpath, function (fnLink, expressionSelect, event) {
            dojo.addClass(fnLink, 'hidden');
            dojo.removeClass(expressionSelect, 'hidden');
            expressionSelect.focus();
            //this.getRoot().changed();
        }, fnLink, expressionSelect)));
        // On Blur of select
        handles.push(dojo.connect(expressionSelect, "onblur", dojo.hitch(xpath, function (fnLink, expressionSelect, event) {
            dojo.removeClass(fnLink, 'hidden');
            dojo.addClass(expressionSelect, 'hidden');
        }, fnLink, expressionSelect)));
        var expressionOnChange = dojo.hitch(xpath, function (expressionRow, expressionSelect, attributeSelect, handles, event) {
            for (var handle in handles) {
                dojo.disconnect(handles[handle]);
            }
            var root = this.getRoot();
            if (parseInt(expressionSelect.value) === ExpressionTypeEnum.Remove) {
                console.error("DELETE " + expressionRow + " " + expressionRow.getAttribute("class"));
                this.getParent().removeXPathCriteria(this);
                dojo.destroy(expressionRow);
            }
            else {
                this.setExpressionType(parseInt(expressionSelect.value));
                dojo.empty(expressionRow);
                expressionHtml(this, expressionRow);
                expressionSelect = expressionRow.querySelector(".expression-select");
                expressionSelect.value = xpath.getExpressionType() + '';
                dojoArray.forEach(expressionRow.querySelectorAll('.attribute-select'), dojo.hitch(this, function (element, index) {
                    disableOptions(this.getExpressionType(), element);
                }));
            }
            root.changed();
        }, expressionRow, expressionSelect, attributeSelect, handles);
        dojo.connect(expressionSelect, "onchange", expressionOnChange);
        dojo.connect(expressionSelect, "onclick", dojo.hitch(this, function (evt) {
            console.log(evt);
        }));
        expressionSelect.value = xpath.getExpressionType() + '';
        expressionStorage.onChange = expressionOnChange;
        expressionStorage.expressionRow = expressionRow;
        expressionStorage.expressionSelect = expressionSelect;
        expressionStorage.attributeSelect = attributeSelect;
        expressionStorage.handles = handles;
        return expressionTableDom;
    };
    var wrapExpressionXpath = function (xpath, expr) {
        return "" +
            (xpath.getBooleanOperand() === BooleanOperandsEnum.And ? "and " : "") +
            (xpath.getBooleanOperand() === BooleanOperandsEnum.Or ? "or " : "") +
            (xpath.getNot() ? "not " : "") +
            (xpath.hasLeftParenthesis() ? "(" : "") +
            expr +
            (xpath.hasRightParenthesis() ? ")" : "");
    };
    var getExpressionsXPath = function (xpath) {
        var attributeDom = PathCompiler[xpath.getType()].xpath(xpath);
        var attributeDoms = [attributeDom];
        for (var idx = 0; idx < xpath.numberOfExpressionParameters() - 1; idx++) {
            var xpathParam = xpath.getParam(idx);
            attributeDoms.push(xpathParam.compileAttributeXPath());
        }
        return attributeDoms;
    };
    // EXPRESSION Compiler
    ExpressionCompiler[ExpressionTypeEnum.None] = {
        xpath: function (xpath) {
            return wrapExpressionXpath(xpath, PathCompiler[xpath.getType()].xpath(xpath));
        },
        // Written in plain XPath
        renderAttributes: function (attributeDoms) {
            var expressionDom = mxui.dom.create('table', { class: "expression-statement" }, mxui.dom.create('tr', {}, attributeDoms[0]));
            return expressionDom;
        },
        html: function (xpath) {
            var expressionRow = mxui.dom.create('tr');
            var expressionContainer = mxui.dom.create('table', { class: "expression-table" }, expressionRow);
            expressionHtml(xpath, expressionRow);
            return expressionContainer;
        }
    };
    // EXPRESSION Compiler
    ExpressionCompiler[ExpressionTypeEnum.Equals] = {
        xpath: function (xpath) {
            var attributeDoms = getExpressionsXPath(xpath);
            return wrapExpressionXpath(xpath, attributeDoms[0] + " = " + attributeDoms[1]);
        },
        // Written in plain XPath
        renderAttributes: function (attributeDoms, fnTD, expressionSelectTD, xpath) {
            fnTD.querySelector("a").innerText = ' = ';
            var tr = mxui.dom.create('tr', {}, attributeDoms[0], expressionSelectTD, fnTD, mxui.dom.create('td', {}, attributeDoms[1]));
            var expressionDom = mxui.dom.create('table', { class: "expression-statement" }, tr);
            return expressionDom;
        },
        html: ExpressionCompiler[ExpressionTypeEnum.None].html
    };
    // EXPRESSION Compiler
    ExpressionCompiler[ExpressionTypeEnum.Contains] = {
        xpath: function (xpath) {
            var attributeDoms = getExpressionsXPath(xpath);
            return wrapExpressionXpath(xpath, "contains(" + attributeDoms[0] + ", " + attributeDoms[1] + ")");
        },
        // Written in plain XPath
        renderAttributes: function (attributeDoms, fnTD, expressionSelectTD, xpath) {
            fnTD.querySelector("a").innerText = ' contains ';
            var tr = mxui.dom.create('tr', {}, attributeDoms[0], fnTD, expressionSelectTD, mxui.dom.create('td', {}, attributeDoms[1]));
            var expressionDom = mxui.dom.create('table', { class: "expression-statement" }, tr);
            return expressionDom;
        },
        html: ExpressionCompiler[ExpressionTypeEnum.None].html
    };
    ExpressionCompiler[ExpressionTypeEnum.DayFrom] = {
        xpath: function (xpath) {
            var attributeDoms = getExpressionsXPath(xpath);
            return wrapExpressionXpath(xpath, "day-from-dateTime(" + attributeDoms[0] + ") = " + attributeDoms[1]);
        },
        // Written in plain XPath
        renderAttributes: function (attributeDoms, fnTD, expressionSelectTD, xpath) {
            fnTD.querySelector("a").innerText = ' Days from '; // Expression
            var tr = mxui.dom.create('tr', {}, fnTD, expressionSelectTD, attributeDoms[0], mxui.dom.create('td', {}, " is "), mxui.dom.create('td', {}, attributeDoms[1]));
            var expressionDom = mxui.dom.create('table', { class: "expression-statement" }, tr);
            return expressionDom;
        },
        html: ExpressionCompiler[ExpressionTypeEnum.None].html
    };
    ExpressionCompiler[ExpressionTypeEnum.DayOfYearFrom] = {
        xpath: function (xpath) {
            // Expression
            var attributeDoms = getExpressionsXPath(xpath);
            return wrapExpressionXpath(xpath, "day-of-year-from-dateTime(" + attributeDoms[0] + ") = " + attributeDoms[1]);
        },
        // Written in plain XPath
        renderAttributes: function (attributeDoms, fnTD, expressionSelectTD, xpath) {
            fnTD.querySelector("a").innerText = ' Day of year from '; // Expression
            var tr = mxui.dom.create('tr', {}, fnTD, expressionSelectTD, attributeDoms[0], mxui.dom.create('td', {}, " is "), mxui.dom.create('td', {}, attributeDoms[1]));
            var expressionDom = mxui.dom.create('table', { class: "expression-statement" }, tr);
            return expressionDom;
        },
        html: ExpressionCompiler[ExpressionTypeEnum.None].html
    };
    ExpressionCompiler[ExpressionTypeEnum.Greater] = {
        xpath: function (xpath) {
            // Expression
            var attributeDoms = getExpressionsXPath(xpath);
            return wrapExpressionXpath(xpath, attributeDoms[0] + " > " + attributeDoms[1]);
        },
        // Written in plain XPath
        renderAttributes: function (attributeDoms, fnTD, expressionSelectTD, xpath) {
            fnTD.querySelector("a").innerText = ' > '; // Expression
            var tr = mxui.dom.create('tr', {}, attributeDoms[0], fnTD, expressionSelectTD, mxui.dom.create('td', {}, attributeDoms[1]));
            var expressionDom = mxui.dom.create('table', { class: "expression-statement" }, tr);
            return expressionDom;
        },
        html: ExpressionCompiler[ExpressionTypeEnum.None].html
    };
    ExpressionCompiler[ExpressionTypeEnum.GreaterEqual] = {
        xpath: function (xpath) {
            // Expression
            var attributeDoms = getExpressionsXPath(xpath);
            return wrapExpressionXpath(xpath, attributeDoms[0] + " >= " + attributeDoms[1]);
        },
        // Written in plain XPath
        renderAttributes: function (attributeDoms, fnTD, expressionSelectTD, xpath) {
            fnTD.querySelector("a").innerText = ' >= '; // Expression
            var tr = mxui.dom.create('tr', {}, attributeDoms[0], fnTD, expressionSelectTD, mxui.dom.create('td', {}, attributeDoms[1]));
            var expressionDom = mxui.dom.create('table', { class: "expression-statement" }, tr);
            return expressionDom;
        },
        html: ExpressionCompiler[ExpressionTypeEnum.None].html
    };
    ExpressionCompiler[ExpressionTypeEnum.Less] = {
        xpath: function (xpath) {
            // Expression
            var attributeDoms = getExpressionsXPath(xpath);
            return wrapExpressionXpath(xpath, attributeDoms[0] + " < " + attributeDoms[1]);
        },
        // Written in plain XPath
        renderAttributes: function (attributeDoms, fnTD, expressionSelectTD, xpath) {
            fnTD.querySelector("a").innerText = ' < '; // Expression
            var tr = mxui.dom.create('tr', {}, attributeDoms[0], fnTD, expressionSelectTD, mxui.dom.create('td', {}, attributeDoms[1]));
            var expressionDom = mxui.dom.create('table', { class: "expression-statement" }, tr);
            return expressionDom;
        },
        html: ExpressionCompiler[ExpressionTypeEnum.None].html
    };
    ExpressionCompiler[ExpressionTypeEnum.LessEqual] = {
        xpath: function (xpath) {
            // Expression
            var attributeDoms = getExpressionsXPath(xpath);
            return wrapExpressionXpath(xpath, attributeDoms[0] + " <= " + attributeDoms[1]);
        },
        // Written in plain XPath
        renderAttributes: function (attributeDoms, fnTD, expressionSelectTD, xpath) {
            fnTD.querySelector("a").innerText = ' <= '; // Expression
            var tr = mxui.dom.create('tr', {}, attributeDoms[0], fnTD, expressionSelectTD, mxui.dom.create('td', {}, attributeDoms[1]));
            var expressionDom = mxui.dom.create('table', { class: "expression-statement" }, tr);
            return expressionDom;
        },
        html: ExpressionCompiler[ExpressionTypeEnum.None].html
    };
    ExpressionCompiler[ExpressionTypeEnum.HoursFrom] = {
        xpath: function (xpath) {
            // Expression
            var attributeDoms = getExpressionsXPath(xpath);
            return wrapExpressionXpath(xpath, "hours-from-dateTime(" + attributeDoms[0] + ") = " + attributeDoms[1]);
        },
        // Written in plain XPath
        renderAttributes: function (attributeDoms, fnTD, expressionSelectTD, xpath) {
            fnTD.querySelector("a").innerText = ' Hours from '; // Expression
            var tr = mxui.dom.create('tr', {}, fnTD, expressionSelectTD, attributeDoms[0], mxui.dom.create('td', {}, " is "), mxui.dom.create('td', {}, attributeDoms[1]));
            var expressionDom = mxui.dom.create('table', { class: "expression-statement" }, tr);
            return expressionDom;
        },
        html: ExpressionCompiler[ExpressionTypeEnum.None].html
    };
    ExpressionCompiler[ExpressionTypeEnum.MinutesFrom] = {
        xpath: function (xpath) {
            // Expression
            var attributeDoms = getExpressionsXPath(xpath);
            return wrapExpressionXpath(xpath, "minutes-from-dateTime(" + attributeDoms[0] + ") = " + attributeDoms[1]);
        },
        // Written in plain XPath
        renderAttributes: function (attributeDoms, fnTD, expressionSelectTD, xpath) {
            fnTD.querySelector("a").innerText = ' Minutes from '; // Expression
            var tr = mxui.dom.create('tr', {}, fnTD, expressionSelectTD, attributeDoms[0], mxui.dom.create('td', {}, " is "), mxui.dom.create('td', {}, attributeDoms[1]));
            var expressionDom = mxui.dom.create('table', { class: "expression-statement" }, tr);
            return expressionDom;
        },
        html: ExpressionCompiler[ExpressionTypeEnum.None].html
    };
    ExpressionCompiler[ExpressionTypeEnum.MonthFrom] = {
        xpath: function (xpath) {
            // Expression
            var attributeDoms = getExpressionsXPath(xpath);
            return wrapExpressionXpath(xpath, "months-from-dateTime(" + attributeDoms[0] + ") = " + attributeDoms[1]);
        },
        // Written in plain XPath
        renderAttributes: function (attributeDoms, fnTD, expressionSelectTD, xpath) {
            fnTD.querySelector("a").innerText = ' Months from '; // Expression
            var tr = mxui.dom.create('tr', {}, fnTD, expressionSelectTD, attributeDoms[0], mxui.dom.create('td', {}, " is "), mxui.dom.create('td', {}, attributeDoms[1]));
            var expressionDom = mxui.dom.create('table', { class: "expression-statement" }, tr);
            return expressionDom;
        },
        html: ExpressionCompiler[ExpressionTypeEnum.None].html
    };
    ExpressionCompiler[ExpressionTypeEnum.QuarterFrom] = {
        xpath: function (xpath) {
            // Expression
            var attributeDoms = getExpressionsXPath(xpath);
            return wrapExpressionXpath(xpath, "quarter-from-dateTime(" + attributeDoms[0] + ") = " + attributeDoms[1]);
        },
        // Written in plain XPath
        renderAttributes: function (attributeDoms, fnTD, expressionSelectTD, xpath) {
            fnTD.querySelector("a").innerText = ' Quarter from '; // Expression
            var tr = mxui.dom.create('tr', {}, fnTD, expressionSelectTD, attributeDoms[0], mxui.dom.create('td', {}, " is "), mxui.dom.create('td', {}, attributeDoms[1]));
            var expressionDom = mxui.dom.create('table', { class: "expression-statement" }, tr);
            return expressionDom;
        },
        html: ExpressionCompiler[ExpressionTypeEnum.None].html
    };
    ExpressionCompiler[ExpressionTypeEnum.Exist] = {
        xpath: function (xpath) {
            // Expression
            var attributeDoms = getExpressionsXPath(xpath);
            return wrapExpressionXpath(xpath, attributeDoms[0] + " != empty");
        },
        // Written in plain XPath
        renderAttributes: function (attributeDoms, fnTD, expressionSelectTD, xpath) {
            fnTD.querySelector("a").innerText = ' Exists '; // Expression
            var tr = mxui.dom.create('tr', {}, attributeDoms[0], fnTD, expressionSelectTD);
            var expressionDom = mxui.dom.create('table', { class: "expression-statement" }, tr);
            return expressionDom;
        },
        html: ExpressionCompiler[ExpressionTypeEnum.None].html
    };
    ExpressionCompiler[ExpressionTypeEnum.Empty] = {
        xpath: function (xpath) {
            // Expression
            var attributeDoms = getExpressionsXPath(xpath);
            return wrapExpressionXpath(xpath, attributeDoms[0] + " = empty");
        },
        // Written in plain XPath
        renderAttributes: function (attributeDoms, fnTD, expressionSelectTD, xpath) {
            fnTD.querySelector("a").innerText = ' is Empty '; // Expression
            var tr = mxui.dom.create('tr', {}, attributeDoms[0], fnTD, expressionSelectTD);
            var expressionDom = mxui.dom.create('table', { class: "expression-statement" }, tr);
            return expressionDom;
        },
        html: ExpressionCompiler[ExpressionTypeEnum.None].html
    };
    ExpressionCompiler[ExpressionTypeEnum.YearFrom] = {
        xpath: function (xpath) {
            // Expression
            var attributeDoms = getExpressionsXPath(xpath);
            return wrapExpressionXpath(xpath, "years-from-dateTime(" + attributeDoms[0] + ") = " + attributeDoms[1]);
        },
        // Written in plain XPath
        renderAttributes: function (attributeDoms, fnTD, expressionSelectTD, xpath) {
            fnTD.querySelector("a").innerText = ' Years from '; // Expression
            var tr = mxui.dom.create('tr', {}, fnTD, expressionSelectTD, attributeDoms[0], mxui.dom.create('td', {}, " is "), mxui.dom.create('td', {}, attributeDoms[1]));
            var expressionDom = mxui.dom.create('table', { class: "expression-statement" }, tr);
            return expressionDom;
        },
        html: ExpressionCompiler[ExpressionTypeEnum.None].html
    };
    ExpressionCompiler[ExpressionTypeEnum.SecondsFrom] = {
        xpath: function (xpath) {
            // Expression
            var attributeDoms = getExpressionsXPath(xpath);
            return wrapExpressionXpath(xpath, "seconds-from-dateTime(" + attributeDoms[0] + ") = " + attributeDoms[1]);
        },
        // Written in plain XPath
        renderAttributes: function (attributeDoms, fnTD, expressionSelectTD, xpath) {
            fnTD.querySelector("a").innerText = ' Seconds from '; // Expression
            var tr = mxui.dom.create('tr', {}, fnTD, expressionSelectTD, attributeDoms[0], mxui.dom.create('td', {}, " is "), mxui.dom.create('td', {}, attributeDoms[1]));
            var expressionDom = mxui.dom.create('table', { class: "expression-statement" }, tr);
            return expressionDom;
        },
        html: ExpressionCompiler[ExpressionTypeEnum.None].html
    };
    ExpressionCompiler[ExpressionTypeEnum.WeekDayFrom] = {
        xpath: function (xpath) {
            // Expression
            var attributeDoms = getExpressionsXPath(xpath);
            return wrapExpressionXpath(xpath, "weekday-from-dateTime(" + attributeDoms[0] + ") = " + attributeDoms[1]);
        },
        // Written in plain XPath
        renderAttributes: function (attributeDoms, fnTD, expressionSelectTD, xpath) {
            fnTD.querySelector("a").innerText = ' Weekday from '; // Expression
            var tr = mxui.dom.create('tr', {}, fnTD, expressionSelectTD, attributeDoms[0], mxui.dom.create('td', {}, " is "), mxui.dom.create('td', {}, attributeDoms[1]));
            var expressionDom = mxui.dom.create('table', { class: "expression-statement" }, tr);
            return expressionDom;
        },
        html: ExpressionCompiler[ExpressionTypeEnum.None].html
    };
    ExpressionCompiler[ExpressionTypeEnum.WeekFrom] = {
        xpath: function (xpath) {
            var attributeDoms = getExpressionsXPath(xpath);
            return wrapExpressionXpath(xpath, "week-from-dateTime(" + attributeDoms[0] + ") = " + attributeDoms[1]);
        },
        // Written in plain XPath
        renderAttributes: function (attributeDoms, fnTD, expressionSelectTD, xpath) {
            fnTD.querySelector("a").innerText = ' Weekday from '; // Expression
            var tr = mxui.dom.create('tr', {}, fnTD, expressionSelectTD, attributeDoms[0], mxui.dom.create('td', {}, " = "), mxui.dom.create('td', {}, attributeDoms[1]));
            var expressionDom = mxui.dom.create('table', { class: "expression-statement" }, tr);
            return expressionDom;
        },
        html: ExpressionCompiler[ExpressionTypeEnum.None].html
    };
    ExpressionCompiler[ExpressionTypeEnum.Length] = {
        xpath: function (xpath) {
            // Expression
            var attributeDoms = getExpressionsXPath(xpath), operator = '';
            if (xpath.getOperator() == OperatorTypeEnum.Equals)
                operator = '=';
            else if (xpath.getOperator() == OperatorTypeEnum.GreaterEqualsTo)
                operator = '>=';
            else if (xpath.getOperator() == OperatorTypeEnum.GreaterThan)
                operator = '>';
            else if (xpath.getOperator() == OperatorTypeEnum.LessEqualsTo)
                operator = '<=';
            else if (xpath.getOperator() == OperatorTypeEnum.LessThan)
                operator = '<';
            return wrapExpressionXpath(xpath, "length(" + attributeDoms[0] + ") " + operator + " " + attributeDoms[1]);
        },
        // Written in plain XPath
        renderAttributes: function (attributeDoms, fnTD, expressionSelectTD, xpath) {
            fnTD.querySelector("a").innerText = ' Length of  '; // Expression
            var operator = mxui.dom.create('select', {}, mxui.dom.create('option', { value: OperatorTypeEnum.Equals }, '='), mxui.dom.create('option', { value: OperatorTypeEnum.GreaterEqualsTo }, '>='), mxui.dom.create('option', { value: OperatorTypeEnum.GreaterThan }, '>'), mxui.dom.create('option', { value: OperatorTypeEnum.LessEqualsTo }, '<='), mxui.dom.create('option', { value: OperatorTypeEnum.LessThan }, '<'));
            operator.value = xpath.getOperator();
            dojo.connect(operator, "onchange", dojo.hitch(this, function () {
                xpath.setOperator(parseInt(operator.value));
                xpath.getRoot().changed();
            }, xpath, operator));
            var tr = mxui.dom.create('tr', {}, fnTD, expressionSelectTD, attributeDoms[0], mxui.dom.create('td', {}, operator), mxui.dom.create('td', {}, attributeDoms[1]));
            var expressionDom = mxui.dom.create('table', { class: "expression-statement" }, tr);
            return expressionDom;
        },
        html: ExpressionCompiler[ExpressionTypeEnum.None].html
    };
    ExpressionCompiler[ExpressionTypeEnum.Range] = {
        xpath: function (xpath) {
            // Expression
            var attributeDoms = getExpressionsXPath(xpath);
            return wrapExpressionXpath(xpath, attributeDoms[1] + " < " + attributeDoms[0] + " < " + attributeDoms[2]);
        },
        // Written in plain XPath
        renderAttributes: function (attributeDoms, fnTD, expressionSelectTD, xpath) {
            fnTD.querySelector("a").innerText = ' in range of '; // Expression
            var tr = mxui.dom.create('tr', {}, attributeDoms[0], fnTD, expressionSelectTD, mxui.dom.create('td', {}, attributeDoms[1]), mxui.dom.create('td', {}, " and "), mxui.dom.create('td', {}, attributeDoms[2]));
            var expressionDom = mxui.dom.create('table', { class: "expression-statement" }, tr);
            return expressionDom;
        },
        html: ExpressionCompiler[ExpressionTypeEnum.None].html
    };
    ExpressionCompiler[ExpressionTypeEnum.Exist] = {
        xpath: function (xpath) {
            // Expression
            var attributeDoms = getExpressionsXPath(xpath);
            return wrapExpressionXpath(xpath, attributeDoms[0] + " != empty");
        },
        // Written in plain XPath
        renderAttributes: function (attributeDoms, fnTD, expressionSelectTD, xpath) {
            fnTD.querySelector("a").innerText = ' exists '; // Expression
            var tr = mxui.dom.create('tr', {}, attributeDoms[0], fnTD, expressionSelectTD);
            var expressionDom = mxui.dom.create('table', { class: "expression-statement" }, tr);
            return expressionDom;
        },
        html: ExpressionCompiler[ExpressionTypeEnum.None].html
    };
    ExpressionCompiler[ExpressionTypeEnum.EndsWith] = {
        xpath: function (xpath) {
            // Expression
            var attributeDoms = getExpressionsXPath(xpath);
            return wrapExpressionXpath(xpath, "ends-with(" + attributeDoms[0] + ", " + attributeDoms[1] + ")");
        },
        // Written in plain XPath
        renderAttributes: function (attributeDoms, fnTD, expressionSelectTD, xpath) {
            fnTD.querySelector("a").innerText = ' ends with '; // Expression
            var tr = mxui.dom.create('tr', {}, attributeDoms[0], fnTD, expressionSelectTD, mxui.dom.create('td', {}, attributeDoms[1]));
            var expressionDom = mxui.dom.create('table', { class: "expression-statement" }, tr);
            return expressionDom;
        },
        html: ExpressionCompiler[ExpressionTypeEnum.None].html
    };
    ExpressionCompiler[ExpressionTypeEnum.StartsWith] = {
        xpath: function (xpath) {
            // Expression
            var attributeDoms = getExpressionsXPath(xpath);
            return wrapExpressionXpath(xpath, "starts-with(" + attributeDoms[0] + ", " + attributeDoms[1] + ")");
        },
        // Written in plain XPath
        renderAttributes: function (attributeDoms, fnTD, expressionSelectTD, xpath) {
            fnTD.querySelector("a").innerText = ' starts with '; // Expression
            var tr = mxui.dom.create('tr', {}, attributeDoms[0], fnTD, expressionSelectTD, mxui.dom.create('td', {}, attributeDoms[1]));
            var expressionDom = mxui.dom.create('table', { class: "expression-statement" }, tr);
            return expressionDom;
        },
        html: ExpressionCompiler[ExpressionTypeEnum.None].html
    };
    ExpressionCompiler[ExpressionTypeEnum.True] = {
        xpath: function (xpath) {
            // Expression
            var attributeDoms = getExpressionsXPath(xpath);
            return wrapExpressionXpath(xpath, attributeDoms[0] + " = true()");
        },
        // Written in plain XPath
        renderAttributes: function (attributeDoms, fnTD, expressionSelectTD, xpath) {
            fnTD.querySelector("a").innerText = ' is true '; // Expression
            var tr = mxui.dom.create('tr', {}, attributeDoms[0], fnTD, expressionSelectTD);
            var expressionDom = mxui.dom.create('table', { class: "expression-statement" }, tr);
            return expressionDom;
        },
        html: ExpressionCompiler[ExpressionTypeEnum.None].html
    };
    ExpressionCompiler[ExpressionTypeEnum.False] = {
        xpath: function (xpath) {
            // Expression
            var attributeDoms = getExpressionsXPath(xpath);
            return wrapExpressionXpath(xpath, attributeDoms[0] + " = false()");
        },
        // Written in plain XPath
        renderAttributes: function (attributeDoms, fnTD, expressionSelectTD, xpath) {
            fnTD.querySelector("a").innerText = ' is false '; // Expression
            var tr = mxui.dom.create('tr', {}, attributeDoms[0], fnTD, expressionSelectTD);
            var expressionDom = mxui.dom.create('table', { class: "expression-statement" }, tr);
            return expressionDom;
        },
        html: ExpressionCompiler[ExpressionTypeEnum.None].html
    };
    ExpressionCompiler[ExpressionTypeEnum.Empty] = {
        xpath: function (xpath) {
            // Expression
            var attributeDoms = getExpressionsXPath(xpath);
            return wrapExpressionXpath(xpath, attributeDoms[0] + " = empty");
        },
        // Written in plain XPath
        renderAttributes: function (attributeDoms, fnTD, expressionSelectTD, xpath) {
            fnTD.querySelector("a").innerText = ' is empty '; // Expression
            var tr = mxui.dom.create('tr', {}, attributeDoms[0], fnTD, expressionSelectTD);
            var expressionDom = mxui.dom.create('table', { class: "expression-statement" }, tr);
            return expressionDom;
        },
        html: ExpressionCompiler[ExpressionTypeEnum.None].html
    };
    var XPath = (function () {
        function XPath(name, parent, value, valueType, asParameter, expectedPathTypes, onchange) {
            this._notSymbol = "not";
            this._andSymbol = "and";
            this._orSymbol = "or";
            this._andorSymbol = "ao";
            this._id = guid();
            this._enumValues = {};
            // DOM node
            this._asParameter = false;
            this._expectedPathTypes = [];
            // The type of the literal value
            this._valueType = PathTypeEnum.None;
            // This Path's excludes the entity name
            this._name = null;
            // The value type of _name
            this._type = PathTypeEnum.None;
            // And/Or
            this._booleanOperand = BooleanOperandsEnum.None;
            // Expression/Functions
            this._expressionType = ExpressionTypeEnum.None;
            // Apply !
            this._not = false;
            // Start left parenthesis
            this._leftParenthesis = false;
            // Close right parenthesis
            this._rightParenthesis = false;
            // All created paths of current query level
            this._xPathCriteria = [];
            this._xPathParameters = [];
            // Level. 0 for root, then root+1..
            this._level = 0;
            // The nth Path Parameter
            this._nthPath = 0;
            // Attributes of Entity
            this._attributes = {};
            // The associations
            this._associations = {};
            this._isPath = false;
            this._operator = OperatorTypeEnum.Equals;
            this._asParameter = asParameter || this._asParameter;
            this._expectedPathTypes = (expectedPathTypes && expectedPathTypes.length) ? expectedPathTypes : AllPathTypes;
            this.getParent = dojo.hitch(this, this._getParent, parent);
            this.setName(name);
            if (!this._type)
                this.setValue(value || null, valueType || PathTypeEnum.None);
            this._level = parent ? parent.getLevel() + 1 : 0;
            this._nthPath = !asParameter ? (parent ? parent.getXPathCriterias().length : 0) : 0;
            if (parent) {
                this.setAndOrSymbol(parent._andorSymbol);
                this.setAndSymbol(parent._andSymbol);
                this.setOrSymbol(parent._orSymbol);
                this.setNotSymbol(parent._notSymbol);
            }
            if (!!onchange)
                this.onChange(onchange);
        }
        XPath.prototype.setNotSymbol = function (symbol) {
            this._notSymbol = symbol;
        };
        XPath.prototype.setAndSymbol = function (symbol) {
            this._andSymbol = symbol;
        };
        XPath.prototype.setOrSymbol = function (symbol) {
            this._orSymbol = symbol;
        };
        XPath.prototype.setAndOrSymbol = function (symbol) {
            this._andorSymbol = symbol;
        };
        XPath.prototype.getNotSymbol = function () {
            return this._notSymbol;
        };
        XPath.prototype.getAndSymbol = function () {
            return this._andSymbol;
        };
        XPath.prototype.getOrSymbol = function () {
            return this._orSymbol;
        };
        XPath.prototype.getAndOrSymbol = function () {
            return this._andorSymbol;
        };
        ;
        // In any XPath there can always be only 1 root, which is the context
        XPath.prototype.isRoot = function () {
            return (!this._asParameter && !this.getParent());
        };
        // Method that will be hitched to avoid circular reference of child -> parent.
        // JSON wont stringify if there are circular references.
        XPath.prototype._getParent = function (parent) {
            if (!parent)
                return null;
            while (!parent.isEntity()) {
                parent = parent.getParent();
            }
            return parent;
        };
        // Parameter is annotated as optional because it will be called with a hitched parent parameter
        XPath.prototype.getParent = function (parent) {
            if (parent)
                return parent;
        };
        // Used to load XPath objects stored as Json
        XPath.prototype.loadJson = function (json) {
            //let onChange = !Object.keys(json).length;
            for (var field in json) {
                this[field] = json[field];
            }
            this.initializeHierarchy();
            //if (onChange)
            this.changed();
            return this;
        };
        ;
        // Hitches the Parent to XPath Criteria and Parameters
        XPath.prototype.initializeHierarchy = function () {
            Object['setPrototypeOf'](this, XPath.prototype);
            //this.setExpressionType(this.getExpressionType());
            for (var idx = 0; idx < this._xPathCriteria.length; idx++) {
                var xpathCriteria = this._xPathCriteria[idx];
                Object['setPrototypeOf'](xpathCriteria, XPath.prototype);
                xpathCriteria.getParent = dojo.hitch(xpathCriteria, XPath.prototype._getParent, this);
                //xpathCriteria.setExpressionType(xpathCriteria.getExpressionType());
                for (var idx2 = 0; idx2 < xpathCriteria._xPathParameters.length; idx2++) {
                    var xpathParameter = xpathCriteria._xPathParameters[idx2];
                    Object['setPrototypeOf'](xpathParameter, XPath.prototype);
                    xpathParameter.getParent = dojo.hitch(xpathParameter, xpathParameter._getParent, this);
                }
                xpathCriteria.initializeHierarchy();
            }
            if (this.getPath()) {
                Object['setPrototypeOf'](this._path, XPath.prototype);
                this._path.getParent = dojo.hitch(this._path, XPath.prototype._getParent, this);
                //this._path.setExpressionType(this._path.getExpressionType());
                this._path.initializeHierarchy();
            }
        };
        ;
        // Checks if name belongs to the Parent's attributes, if not it will be assumed a value, not attribute;
        XPath.prototype.isParentAttribute = function (name) {
            return this.getParent() && this.getParent().hasAttribute(name);
        };
        // Checks if I have an attribute
        XPath.prototype.hasAttribute = function (name) {
            return name in this._attributes;
        };
        // Get type of attribute
        XPath.prototype.getPathTypeOfAttribute = function (name) {
            return this.getParent()._attributes[name];
        };
        // Is attribute an association
        XPath.prototype.isAttributeAnAssociation = function (name) {
            return name in this._associations;
        };
        // Get full association name
        XPath.prototype.getAssociationCompleteName = function (name) {
            this.assert(this.isAttributeAnAssociation(name), name + " is not an association.");
            return name + "/" + this._associations[name];
        };
        // Is "name"/valueType one of the expected path types
        XPath.prototype.validateExpectedPathType = function (name) {
            name = name || this.getName();
            if (this.isParentAttribute(name)) {
                this.assert(this._expectedPathTypes.indexOf(this.getPathTypeOfAttribute(name)) >= 0, "Attribute " + name + " is of type " + this.getPathTypeOfAttribute(name) + " and should be on of the following:\n" + this._expectedPathTypes);
            }
            else {
                this.assert(this._expectedPathTypes.indexOf(this._valueType) >= 0, "Attribute " + name + " is of type " + this._valueType + " and should be on of the following:\n" + this._expectedPathTypes);
            }
        };
        // Get the name of this XPath.
        XPath.prototype.getName = function () {
            return this._name.split('/')[0];
        };
        XPath.prototype.getFullyQualifiedName = function () {
            return this._name;
        };
        // Set's the name, default expression type, resets the criteria and parameters and sets the _type.
        XPath.prototype.setName = function (name) {
            this.assert(name, "XPath name required!");
            // Set attributes
            if (!this.isRoot())
                this.validateExpectedPathType(name.split('/')[0]);
            this.setupAttributes(name.split('/').reverse()[0]);
            this.setExpressionType(ExpressionTypeEnum.None);
            this._xPathCriteria = [];
            this._name = name;
            if (!this.isRoot() && !this._valueType)
                this._type = this.getPathTypeOfAttribute(this.getName());
            else if (this.isRoot())
                this._type = PathTypeEnum.Entity;
            if (this._type === PathTypeEnum.Enum) {
                this._enumValues = this.getParent().getMxMeta().getEnumKVPairs(this.getName());
            }
            return this;
        };
        XPath.prototype.setupAttributes = function (name) {
            if (this.isEntity(name)) {
                var meta_1 = this.getMxMeta(name);
                // Pseudo ID
                this.addPathAttribute('id', PathTypeEnum.Long);
                // Attributes
                meta_1.getAttributesWithoutReferences().sort().forEach(dojo.hitch(this, function (attribute) {
                    var pathType = PathType[meta_1.getAttributeType(attribute)];
                    this.addPathAttribute(attribute, pathType);
                }));
                // Associations
                meta_1.getReferenceAttributes().sort().forEach(dojo.hitch(this, function (association) {
                    var pathType = PathType[meta_1.getAttributeType(association)];
                    this.addPathAttribute(association, pathType, meta_1.getEntity());
                }));
                var objectMap_1 = mx.meta.getMap();
                var objectKeys = Object.keys(objectMap_1);
                objectKeys.forEach(dojo.hitch(this, function (key, idx) {
                    var object = objectMap_1[key];
                    object.getReferenceAttributes().forEach(dojo.hitch(this, function (association, aidx) {
                        if (object.getSelectorEntity(association) === name) {
                            var pathType = PathType[object.getAttributeType(association)];
                            this._attributes[association] = pathType;
                            this._associations[association] = key;
                        }
                    }));
                }));
            }
        };
        // Asserts if name is a valid Mendix Entity
        XPath.prototype.isEntity = function (name) {
            if (this.isRoot())
                return true;
            else if (!name)
                return this._name.split('/').reverse()[0] in mx.meta.getMap();
            else
                return name.split('/').reverse()[0] in mx.meta.getMap();
        };
        ;
        // Get the entity name
        XPath.prototype.getEntityName = function () {
            this.assert(this.isEntity(), "This is not an entity");
            return this._name.split('/').reverse()[0];
        };
        // Returns the parent's entity name
        XPath.prototype.getParentEntityName = function () {
            return this.getParent().getEntityName();
        };
        // Get the Mendix Meta Object
        XPath.prototype.getMxMeta = function (name) {
            if (!name) {
                return mx.meta.getEntity(this._name.split('/').reverse()[0]);
            }
            else
                return mx.meta.getEntity(name);
        };
        // Simple assert method
        XPath.prototype.assert = function (assersion, message) {
            if (!assersion) {
                console.error(message);
                throw message;
            }
        };
        // Boolean getter & Setter
        XPath.prototype.getBooleanOperand = function () {
            return this._booleanOperand;
        };
        XPath.prototype.setBooleanOperand = function (value) {
            if (typeof value === "number")
                this._booleanOperand = value;
            else
                this._booleanOperand = BooleanOperands[value];
            return this;
        };
        XPath.prototype.isFirstExpression = function () {
            return this._nthPath === 0;
        };
        // Expression type getter and setter
        XPath.prototype.getExpressionType = function () {
            return this._expressionType;
        };
        XPath.prototype.setExpressionType = function (value) {
            var oldXpathParameters = this._xPathParameters;
            this._xPathParameters = [];
            // Helper code for strings and numbers
            if (typeof value === "number")
                this._expressionType = value;
            else
                this._expressionType = ExpressionType[value];
            for (var idx = 0; idx < this.numberOfExpressionParameters() - 1; idx++) {
                var xpath = this.addXPathParameter("Unresolved_" + this.getName() + "_" + this._nthPath + "_" + idx);
                xpath._enumValues = this._enumValues;
                var defaults = ExpressionConfig.get(this._expressionType).defaults[idx](this.getType());
                if ((oldXpathParameters[idx]) && (defaults.type == oldXpathParameters[idx].getType()))
                    xpath.setValue(oldXpathParameters[idx].getValue(), oldXpathParameters[idx].getType());
                else if (defaults.type)
                    xpath.setValue(defaults.value, defaults.type);
                else
                    xpath.setValue(null, PathTypeEnum.NoValue);
            }
            return this;
        };
        // Not getter and setter
        XPath.prototype.getNot = function () {
            return this._not;
        };
        XPath.prototype.setNot = function (value) {
            this._not = value;
            return this;
        };
        // Left Parenthesis getter an setter
        XPath.prototype.hasLeftParenthesis = function () {
            return this._leftParenthesis;
        };
        XPath.prototype.setLeftParenthesis = function (value) {
            this._leftParenthesis = value;
            return this;
        };
        // Right Parenthesis getter an setter
        XPath.prototype.hasRightParenthesis = function () {
            return this._rightParenthesis;
        };
        XPath.prototype.setRightParenthesis = function (value) {
            this._rightParenthesis = value;
            return this;
        };
        // XPath Criteria getter
        XPath.prototype.getXPathCriterias = function () {
            return this._xPathCriteria;
        };
        // Level getter/setter
        XPath.prototype.getLevel = function () {
            return this._level;
        };
        XPath.prototype.setLevel = function (value) {
            this._level = value;
            return this;
        };
        // Path getter/setter
        XPath.prototype.getPath = function () {
            return this._path;
        };
        XPath.prototype.setNextPath = function (name) {
            if (name) {
                this.assert(this.hasAttribute(name), "\"" + name + " is not in list of possible values: " + Object.keys(this.getAttributes()).join() + ".");
                //this.assert(ReferenceTypes.indexOf(this._attributes[name]) >= 0, `${name} is of type ${this._attributes[name]} and should be in ${ReferenceTypes}`);
                if (name in this._associations)
                    this._path = new XPath(this.getAssociationCompleteName(name), this);
                else
                    this._path = new XPath(name, this);
                this._path._isPath = true;
                return this._path;
            }
            else {
                this._path = null;
            }
        };
        // Add XPath Search Criteria
        XPath.prototype.addXPathCriteria = function (name) {
            this.assert(this.hasAttribute(name), "\"" + name + " is not in list of possible values: " + Object.keys(this.getAttributes()).join() + ".");
            var xpath;
            if (name in this._associations)
                xpath = new XPath(this.getAssociationCompleteName(name), this);
            else
                xpath = new XPath(name, this);
            if (xpath._nthPath > 0)
                xpath.setBooleanOperand(BooleanOperandsEnum.And);
            this._xPathCriteria.push(xpath);
            return xpath;
        };
        // Move XPath Criteria up and returns true if successful;
        XPath.prototype.moveXPathCriteriaUp = function () {
            var max = this.getParent().getXPathCriterias().length - 1;
            if ((this._nthPath === 0) || (max === 0))
                return false;
            var otherXPathCriteria = this.getParent().getXPathCriterias()[this._nthPath - 1];
            this.getParent().getXPathCriterias()[this._nthPath] = otherXPathCriteria;
            this.getParent().getXPathCriterias()[this._nthPath - 1] = this;
            this._nthPath -= 1;
            otherXPathCriteria._nthPath += 1;
            return true;
        };
        // Move XPath Criteria down and returns true if successful;
        XPath.prototype.moveXPathCriteriaDown = function () {
            var max = this.getParent().getXPathCriterias().length - 1;
            if ((this._nthPath === max))
                return false;
            var otherXPathCriteria = this.getParent().getXPathCriterias()[this._nthPath + 1];
            this.getParent().getXPathCriterias()[this._nthPath] = otherXPathCriteria;
            this.getParent().getXPathCriterias()[this._nthPath + 1] = this;
            this._nthPath += 1;
            otherXPathCriteria._nthPath -= 1;
            return true;
        };
        // Add new XPath Parameter
        XPath.prototype.addXPathParameter = function (name, value, valueType) {
            var xpath;
            if (this.isAttributeAnAssociation(name))
                xpath = new XPath(this.getAssociationCompleteName(name), this, value, valueType, true);
            else
                xpath = new XPath(name, this, value, valueType, true);
            this._xPathParameters.push(xpath);
            return xpath;
        };
        // Remove an XPath criteria
        XPath.prototype.removeXPathCriteria = function (xpathOrPosition) {
            if (typeof xpathOrPosition === "number") {
                var xpath = this._xPathCriteria[xpathOrPosition];
                this._xPathCriteria.splice(xpathOrPosition, 1);
            }
            else {
                var index = this._xPathCriteria.indexOf(xpathOrPosition);
                this._xPathCriteria.splice(index, 1);
            }
            // Re-index
            dojoArray.forEach(this._xPathCriteria, function (item, index) {
                item._nthPath = index;
            });
        };
        // Adds an attribute to the list and checks if it is an association's entity is passed
        XPath.prototype.addPathAttribute = function (path, type, entityName) {
            this._attributes[path] = type;
            if (ReferenceTypes.indexOf(type) >= 0) {
                this.assert(entityName, "Need entityName for association " + path + " on " + this._name);
                this._associations[path] = this.getMxMeta(entityName).getSelectorEntity(path);
            }
            return this;
        };
        // Association getter
        XPath.prototype.getAssociations = function () {
            return this._associations;
        };
        // Returns the number of expected parameters for this function
        XPath.prototype.numberOfExpressionParameters = function () {
            return ExpressionConfig.get(this._expressionType).numberOfArguments;
        };
        // Get value formatted
        XPath.prototype.getValue = function () {
            this.assert(this._valueType !== PathTypeEnum.None, this.getName() + " has no value set.");
            switch (this._valueType) {
                case PathTypeEnum.BooleanValue:
                    return !!this._value;
                case PathTypeEnum.DateValue:
                    return new Date(this._value);
                case PathTypeEnum.DecimalValue:
                    return parseFloat(this._value);
                case PathTypeEnum.EnumValue:
                    return this._value;
                case PathTypeEnum.NumberValue:
                    return parseInt(this._value);
                case PathTypeEnum.StringValue:
                    return this._value;
                case PathTypeEnum.DateConstant:
                    return this._value;
                default:
                    this.assert(false, "Incorrect value type " + this._valueType);
            }
            return null;
        };
        // Change type allows you to set the name and type at the same time
        XPath.prototype.changeType = function (name, value, valueType) {
            this.validateExpectedPathType(name.split('/')[0]);
            this.setupAttributes(name.split('/').reverse()[0]);
            //this.setExpressionType(ExpressionTypeEnum.None);
            this._xPathCriteria = [];
            this._name = name;
            this._value = value;
            this._valueType = valueType;
            if (this.isAttributeType() || this.isReference())
                this._type = this.getPathTypeOfAttribute(this.getName());
            else
                this._type = this._valueType;
            if (this._type === PathTypeEnum.Enum) {
                this._enumValues = this.getParent().getMxMeta().getEnumKVPairs(this.getName());
            }
            return this;
        };
        // Set's the value of a value type path
        XPath.prototype.setValue = function (value, valueType) {
            this.assert(!this.isParentAttribute(this.getName()) || (valueType == PathTypeEnum.None), this.getName() + " is an attribute and cannot have a value. Change the name first.");
            if (valueType)
                if (typeof valueType === "number")
                    this._valueType = valueType;
                else
                    this._valueType = PathType[valueType];
            else if (typeof value == "boolean")
                this._valueType = PathTypeEnum.BooleanValue;
            else if (typeof value == "number")
                this._valueType = PathTypeEnum.NumberValue;
            else if (typeof value == "string")
                this._valueType = PathTypeEnum.StringValue;
            else
                this._valueType = PathTypeEnum.None;
            this._value = value;
            this._type = this._valueType;
            return this;
        };
        // Set the value of a Parameter
        XPath.prototype.setParamValue = function (param, value, valueType) {
            return this._xPathParameters[param].setValue(value, valueType);
        };
        // Get a parameter
        XPath.prototype.getParam = function (param) {
            return this._xPathParameters[param];
        };
        // Getter for type
        XPath.prototype.getType = function () {
            return this._type;
        };
        XPath.prototype.isValueType = function () {
            return ValueTypes.indexOf(this._type) >= 0;
        };
        XPath.prototype.isReference = function () {
            return (this.getType() !== PathTypeEnum.Entity) && (this.getName() in this.getParent()._attributes) && (this._name.indexOf(".") >= 0);
        };
        XPath.prototype.isAttributeType = function () {
            return (this.getType() !== PathTypeEnum.Entity) && (this.getParent() && !this.isReference() && (this.getName() in this.getParent()._attributes));
        };
        XPath.prototype.getEnumValues = function () {
            return this._enumValues;
        };
        XPath.prototype.compileAttributeXPath = function () {
            //this.assert(!this.isReference(), `References have no business here.`)
            return PathCompiler[this._type].xpath(this);
        };
        XPath.prototype.compileAttributeHTML = function () {
            //this.assert(!this.isReference(), `References have no business here.`)
            return PathCompiler[this._type].html(this, null);
        };
        XPath.prototype.getAttributes = function () {
            if (this.isEntity())
                return this._attributes;
            else
                return this.getParent()._attributes;
        };
        XPath.prototype._changed = function (callback) {
            callback(this);
        };
        XPath.prototype.changed = function (callback) {
        };
        XPath.prototype.onChange = function (callback) {
            this.changed = dojo.hitch(this, this._changed, callback);
        };
        XPath.prototype.getRoot = function () {
            if (!this.getParent())
                return this;
            var root = this.getParent();
            while (root.getParent()) {
                root = root.getParent();
            }
            return root;
        };
        XPath.prototype.isParameter = function () {
            return this._asParameter;
        };
        XPath.prototype.getParameterOwner = function (xpath) {
            if (!xpath)
                xpath = this;
            if (!xpath._asParameter)
                return null;
            var parent = xpath;
            while (parent) {
                parent = parent.getParent();
                var criterias = parent.getXPathCriterias();
                for (var criteriaIdx in criterias) {
                    var xpathCriteria = criterias[criteriaIdx];
                    for (var paramIdx in xpathCriteria._xPathParameters) {
                        var param = xpathCriteria._xPathParameters[paramIdx];
                        if (param._id === xpath._id)
                            return xpathCriteria;
                    }
                }
                if (parent._id == parent.getParent()._id)
                    return null;
            }
        };
        XPath.prototype.isPath = function () {
            return this._isPath;
        };
        XPath.prototype.getOperator = function () {
            return this._operator;
        };
        XPath.prototype.setOperator = function (operator) {
            this._operator = operator;
        };
        return XPath;
    }());
    return XPath;
});
//# sourceMappingURL=buildxpath.js.map