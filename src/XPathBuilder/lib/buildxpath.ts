// Builder

declare var mx;
declare var mxui;
declare var dojo;
declare var define;
declare var require;

define(["dojo/_base/array"], function (dojoArray) {
    "use strict";

    enum OperatorTypeEnum {
        Equals = 0,
        GreaterThan = 1,
        GreaterEqualsTo = 2,
        LessThan = 3,
        LessEqualsTo = 4
    }

    enum PathTypeEnum {
        None = 0,
        Enum = 1,
        String = 2,
        Float = 3,
        Currency = 4,
        AutoNumber = 5,
        Binary = 6,
        Boolean = 7,
        DateTime = 8,
        Decimal = 9,
        HashString = 10,
        Integer = 11,
        Long = 12,
        ObjectReference = 13,
        ObjectReferenceSet = 14,
        Variable = 15,
        Entity = 16,
        StringValue = 17,
        DecimalValue = 18,
        BooleanValue = 19,
        NumberValue = 20,
        DateValue = 21,
        EnumValue = 22,
        DateConstant = 23,
        NoValue = 24
    }

    const PathType = {
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


    enum BooleanOperandsEnum {
        None = 0,
        And = 1,
        Or = 2
    }
    const BooleanOperands = {None: 0, And: 1, Or: 2};

    let ComparisonsExpressionEnums = {
        Equals: 1,
        Greater: 2,
        GreaterEqual: 3,
        Less: 4,
        LessEqual: 5
    };

    let StringExpressionEnums = {
        Contains: 6,
        StartsWith: 7,
        EndsWith: 8,
        Length: 10
    };

    let DateExpressionEnums = {
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

    let OtherExpressionEnums = {
        None: 0,
        True: 9,
        Exist: 22,
        Range: 23,
        Empty: 24,
        False: 25
    };

    let OperationExpressionEnums = {
        Remove: 26
    };

    enum ExpressionTypeEnum {
        None = 0,
        Equals = 1,
        Greater = 2,
        GreaterEqual = 3,
        Less = 4,
        LessEqual = 5,
        Contains = 6,
        StartsWith = 7,
        EndsWith = 8,
        True = 9,
        Length = 10,
        SecondsFrom = 11,
        MinutesFrom = 12,
        HoursFrom = 13,
        DayFrom = 14,
        DayOfYearFrom = 15,
        WeekDayFrom = 16,
        WeekFrom = 17,
        MonthFrom = 18,
        QuarterFrom = 19,
        YearFrom = 20,
        Exist = 22,
        Range = 23,
        Empty = 24,
        False = 25,
        Remove = 26
    }

    const ExpressionType = {
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
    var mappedValues = {

    };
    mappedValues[PathTypeEnum.AutoNumber]=  {value:0, type: PathTypeEnum.NumberValue};
    mappedValues[PathTypeEnum.Boolean]=     {value:false, type: PathTypeEnum.BooleanValue};
    mappedValues[PathTypeEnum.Currency]=    {value:0.0, type: PathTypeEnum.DecimalValue};
    mappedValues[PathTypeEnum.DateTime]=    {value:(new Date())+'', type: PathTypeEnum.DateValue};
    mappedValues[PathTypeEnum.Decimal]=     {value:0.0, type: PathTypeEnum.DecimalValue};
    mappedValues[PathTypeEnum.Enum]=        {value:'', type: PathTypeEnum.EnumValue};
    mappedValues[PathTypeEnum.Float]=       {value:0, type: PathTypeEnum.DecimalValue};
    mappedValues[PathTypeEnum.Integer]=     {value:0, type: PathTypeEnum.NumberValue};
    mappedValues[PathTypeEnum.Long]=        {value:0, type: PathTypeEnum.NumberValue};
    mappedValues[PathTypeEnum.String]=      {value:'', type: PathTypeEnum.StringValue};

    function valueTypeForParameter(value:any, valueType:PathTypeEnum, inputType) {
        if ((value == null) && (mappedValues.hasOwnProperty(inputType))) {
            return mappedValues[inputType];
        } else {
            return {value: value, valueType: valueType};
        }
    }

    const ExpressionConfig = {
        _config: {},
        register(expressionType:ExpressionTypeEnum, pathTypes:PathTypeEnum[], numberOfArguments:number) {
            this._config[expressionType] = {
                pathTypes: pathTypes,
                numberOfArguments: numberOfArguments,
                defaults: [],
                addDefault(value:any, valueType:PathTypeEnum) {
                    this.defaults.push(dojo.hitch(this, valueTypeForParameter, value, valueType));
                    return this;
                }
            };
            return this._config[expressionType];
        },
        get(expressionType:ExpressionTypeEnum) {
            if (!this._config.hasOwnProperty(expressionType)) {
                console.error(`${expressionType} not registered`);
                throw `${expressionType} not registered`;
            }
            return this._config[expressionType];
        },
        validPathForExpression(expression, path) {
            return this._config[expression].pathTypes.indexOf(path) !== -1;
        }
    };

    const ExpressionEnums = {
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

    const AllPathTypes = [PathTypeEnum.NoValue, PathTypeEnum.None, PathTypeEnum.Enum, PathTypeEnum.String, PathTypeEnum.Float, PathTypeEnum.Currency, PathTypeEnum.AutoNumber, PathTypeEnum.Binary, PathTypeEnum.Boolean, PathTypeEnum.DateTime, PathTypeEnum.Decimal, PathTypeEnum.HashString, PathTypeEnum.Integer, PathTypeEnum.Long, PathTypeEnum.ObjectReference, PathTypeEnum.ObjectReferenceSet, PathTypeEnum.Variable, PathTypeEnum.Entity, PathTypeEnum.StringValue, PathTypeEnum.DecimalValue, PathTypeEnum.BooleanValue, PathTypeEnum.NumberValue, PathTypeEnum.DateValue, PathTypeEnum.EnumValue, PathTypeEnum.DateConstant];
    const ValueTypes = [PathTypeEnum.NoValue, PathTypeEnum.BooleanValue, PathTypeEnum.DateValue, PathTypeEnum.DecimalValue, PathTypeEnum.NumberValue, PathTypeEnum.StringValue, PathTypeEnum.EnumValue, PathTypeEnum.DateConstant];
    const BooleanTypes = [PathTypeEnum.NoValue, PathTypeEnum.Boolean, PathTypeEnum.BooleanValue, PathTypeEnum.ObjectReference, PathTypeEnum.ObjectReferenceSet];
    const EntityTypes = [PathTypeEnum.NoValue, PathTypeEnum.ObjectReference, PathTypeEnum.ObjectReferenceSet, PathTypeEnum.Entity];
    const ReferenceTypes = [PathTypeEnum.NoValue, PathTypeEnum.ObjectReference, PathTypeEnum.ObjectReferenceSet];
    const DateTypes = [PathTypeEnum.NoValue, PathTypeEnum.DateTime, PathTypeEnum.DateValue, PathTypeEnum.ObjectReference, PathTypeEnum.ObjectReferenceSet, PathTypeEnum.DateConstant];
    const NumberTypes = [PathTypeEnum.NoValue, PathTypeEnum.AutoNumber, PathTypeEnum.Currency, PathTypeEnum.Decimal, PathTypeEnum.DecimalValue, PathTypeEnum.Float, PathTypeEnum.Integer, PathTypeEnum.Long, PathTypeEnum.NumberValue, PathTypeEnum.ObjectReference, PathTypeEnum.ObjectReferenceSet];
    const StringTypes = [PathTypeEnum.NoValue, PathTypeEnum.String, PathTypeEnum.StringValue, PathTypeEnum.ObjectReference, PathTypeEnum.ObjectReferenceSet];

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


    let makePrettyName = function (str) {
        var result = str.split('.').reverse()[0]
            .replace(/([a-z]_)/g, function (str) {
                if (str.length == 2) {
                    return (str[0] == 's') ? "s' " : str[0] + "'s"
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

    let populateSelect = function (xpath:XPath, selectNode, ignoreAttributes:string[]) {
        let entity = xpath.getParent().getMxMeta(),
            attributes = xpath.getParent().getAttributes(),
            createGroup = dojo.hitch(xpath, function (attributes, label, values, type) {
                let attrGroup = mxui.dom.create('optgroup', {label: label});
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
        let option = mxui.dom.create('option', {value: ""}, "Select Field");
        dojo.place(option, selectNode);

        // Populate Attributes
        let attributesWithoutReferences = entity.getAttributesWithoutReferences().sort().filter(function (item, index) {
            return (ignoreAttributes.indexOf(item) == -1);
        });

        let attributesReferences = Object.keys(xpath.getParent().getAssociations()).sort().filter(function (item, index) {
            return ((ignoreAttributes.indexOf(item) == -1));
        });

        createGroup(attributes, "Pseudo", ['id'], 'attribute');
        createGroup(attributes, "Attributes", attributesWithoutReferences, 'attribute');
        // Populate Relationships
        createGroup(attributes, "Related", attributesReferences, 'reference');
        // Populate Value Types
        let attrGroup = mxui.dom.create('optgroup', {label: 'Value Types'});
        dojo.place(attrGroup, selectNode);
        ValueTypes.forEach(dojo.hitch(xpath, function (attribute) {
            dojo.place(mxui.dom.create('option', {
                value: attribute,
                type: 'value',
                pathType: attribute
            }, makePrettyName(PathTypeEnum[attribute])), attrGroup);
        }));

        if (xpath.isPath()) {
            let operationGroup = mxui.dom.create('optgroup', {label: 'Operation'});
            dojo.place(operationGroup, selectNode);
            dojo.place(mxui.dom.create('option', {value: 'remove', type: 'operation'}, "Remove"), operationGroup);
        }

        selectNode.setAttribute("entity", entity.getEntity());

        if (ValueTypes.indexOf(xpath.getType()))
            selectNode.value = xpath.getType();
        else
            selectNode.value = xpath.getName();
    };

    const DateConstantsLabels = {
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

    const DateConstants = {
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

    const DefaultValues = {};
    DefaultValues[PathTypeEnum.BooleanValue] = false;
    DefaultValues[PathTypeEnum.DecimalValue] = 0.0;
    DefaultValues[PathTypeEnum.EnumValue] = "";
    DefaultValues[PathTypeEnum.StringValue] = "";
    DefaultValues[PathTypeEnum.NumberValue] = 0;
    DefaultValues[PathTypeEnum.DateValue] = new Date();
    DefaultValues[PathTypeEnum.DateConstant] = "'[%CurrentDateTime%]'";


    let attributeHtml = function (xpath:XPath, selectExpression, containerDom, inputDom?) {
        let attributeContainer = mxui.dom.create('tr', {class: "attribute-div"});
        let attributeTable = mxui.dom.create('table', {class:"attribute-table"}, attributeContainer);
        let attributeSpan = mxui.dom.create('span', {
                class: "attribute-span-view xpath-focus xpath-read " + PathTypeEnum[xpath.getType()],
                title: makePrettyName(PathTypeEnum[xpath.getType()])
            },

            ''
            + (xpath.getType() === PathTypeEnum.NoValue ?
                '..' : (xpath.getType() === PathTypeEnum.DateConstant ? DateConstantsLabels[xpath.getValue()] :
                (''
                    + (!xpath.isRoot() && !xpath.isReference() && !xpath.isAttributeType() ? PathCompiler[xpath.getType()].xpath(xpath) :
                        makePrettyName(xpath.getName()))
                )))
        );
        let handles = [];

        if (xpath.getType() !== PathTypeEnum.Entity) {

            let attributeSelect = mxui.dom.create('select', {class: "attribute-select xpath-focus xpath-write hidden"});
            populateSelect(xpath, attributeSelect, []);
            if (ValueTypes.indexOf(xpath.getType()) >= 0) {
                attributeSelect.value = xpath.getType();
            } else {
                attributeSelect.value = xpath.getFullyQualifiedName();
            }
            let handles = [];

            // On Click of labels
            handles.push(dojo.connect(attributeSpan, "onclick", dojo.hitch(xpath, function (attributeSpan, attributeSelect, inputDom, event) {
                dojo.addClass(attributeSpan, 'hidden');
                dojo.removeClass(attributeSelect, 'hidden');
                if (inputDom) {
                    dojo.removeClass(inputDom, 'hidden');
                    inputDom.focus();
                    if (inputDom['select'])
                        inputDom.select();
                } else
                    attributeSelect.focus();
            }, attributeSpan, attributeSelect, inputDom)));

            let onBlur = function (attributeSpan, attributeSelect, inputDom, event) {
                if (!event.relatedTarget || !dojo.hasClass((event.relatedTarget), "xpath-focus")) {
                    dojo.removeClass(attributeSpan, 'hidden');
                    dojo.addClass(attributeSelect, 'hidden');
                    if (inputDom && dojo.hasClass(inputDom, 'xpath-focus'))
                        dojo.addClass(inputDom, 'hidden');
                }
            };

            // On Blur of select
            handles.push(dojo.connect(attributeSelect, "onblur", dojo.hitch(xpath, onBlur, attributeSpan, attributeSelect, inputDom)));
            if (inputDom)
                handles.push(dojo.connect(inputDom, "onblur", dojo.hitch(xpath, onBlur, attributeSpan, attributeSelect, inputDom)));

            dojo.connect(attributeSelect, "onchange", dojo.hitch(xpath, function (attributeSelect, containerDom, selectExpression, handles, event) {

                if (attributeSelect.value === 'remove') {
                    dojo.empty(containerDom);
                    this.getParent().setNextPath(null);
                } else {

                    let value = isNaN(attributeSelect.value) ? attributeSelect.value : parseInt(attributeSelect.value);
                    if (ValueTypes.indexOf(value) >= 0) {
                        this.changeType("Arg" + this._nthPath, DefaultValues[value], value);
                    } else {
                        this.changeType(value, null, PathTypeEnum.None);
                    }
                    this.setExpressionType(this.getExpressionType());

                    for (let handle in handles) {
                        dojo.disconnect(handles[handle]);
                    }

                    if (selectExpression && !this.isParameter())
                        selectExpression.onChange(selectExpression.expressionRow, selectExpression.expressionSelect,
                            selectExpression.attributeSelect, selectExpression.handles, event);
                    else {
                        dojo.empty(containerDom);
                        //dojo.place(xpath.compileAttributeHTML(), containerDom);
                        PathCompiler[this.getType()].createHTML(xpath, containerDom, selectExpression);
                    }
                }

                this.getRoot().changed();
            }, attributeSelect, containerDom, selectExpression, handles));


            dojo.place(mxui.dom.create('td', {}, attributeSpan), attributeContainer);
            dojo.place(mxui.dom.create('td', {}, attributeSelect), attributeContainer);
        } else {
            dojo.place(mxui.dom.create('td', {}, attributeSpan), attributeContainer);
        }
        if (inputDom)
            dojo.place(mxui.dom.create('td', {}, inputDom), attributeContainer);

        dojo.place(attributeTable, containerDom);
    };


    let ExpressionCompiler = {};
    let PathCompiler = {};
    PathCompiler[PathTypeEnum.None] = {
        // XPATH
        xpath(xpath:XPath) {
            console.error(123);
            //throw "No compiler for None";
        },
        html(xpath:XPath) {
            console.error(123);
            //throw "No compiler for None";
        }
    };

    PathCompiler[PathTypeEnum.ObjectReference] = {
        // XPATH
        xpath(xpath:XPath) {
            let constraints = xpath.getXPathCriterias().map(function (xpathConstraint) {
                return ExpressionCompiler[xpathConstraint.getExpressionType()].xpath(xpathConstraint)
            }).join(' ');

            constraints = (constraints ? `[${constraints}]` : '');

            let path = xpath.getPath() ? PathCompiler[xpath.getPath().getType()].xpath(xpath.getPath()) : '';

            return (xpath.isPath() ? '/' : '') + xpath.getFullyQualifiedName() + constraints + path;
            // TODO: Add the rest of the path. Right now only the xpath Criteria is processed.
        },

        createHTML (xpath:XPath, containerDom, expressionSelect) {
            let tr = PathCompiler[PathTypeEnum.Entity].createHTML(xpath, containerDom, expressionSelect);

            // Add path
            if (Object.keys(xpath.getAttributes()).length > 0) {
                let continuePath = mxui.dom.create('span', {class: "continue-path-link"});
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
                let pathTD = mxui.dom.create('td', );
                //PathCompiler[xpath.getPath().getType()].html(xpath.getPath(), pathTD);

                dojo.place(mxui.dom.create('td', {}, xpath.getPath().compileAttributeHTML()), tr);
            }


        },
        // HTML
        html(xpath:XPath, expressionSelect) {
            let containerDom = mxui.dom.create('div', {class: "xpath-container"});

            this.createHTML(xpath, containerDom, expressionSelect);

            return containerDom;
        }
    };

    PathCompiler[PathTypeEnum.Entity] = {
        // XPATH
        xpath(xpath:XPath) {
            let constraints = xpath.getXPathCriterias().map(function (xpathConstraint) {
                return ExpressionCompiler[xpathConstraint.getExpressionType()].xpath(xpathConstraint)
            }).join(' ');

            constraints = (constraints ? `[${constraints}]` : '');

            let path = xpath.getPath() ? PathCompiler[xpath.getPath().getType()].xpath(xpath.getPath()) : '';

            return `//${xpath.getName()}${constraints}${path}`;
            // TODO: Add the rest of the path. Right now only the xpath Criteria is processed.
        },

        createHTML (xpath:XPath, containerDom, expressionSelect) {
            // Get all expressions/criteria
            let xpathMap = [];
            let constraintDoms = xpath.getXPathCriterias().map(function (xpathCriteria) {
                let constraintDom = mxui.dom.create('td', {class:"constraintDom", 'xpath': xpathCriteria.getName()}, ExpressionCompiler[xpathCriteria.getExpressionType()].html(xpathCriteria));
                xpathMap.push(xpathCriteria);
                return constraintDom;
            });


            // Add button
            let a = mxui.dom.create('a', {class: "add-expression"});
            let tr = mxui.dom.create('tr', {},
                mxui.dom.create('td', {class: "align-top"}, a));

            dojo.connect(a, "onclick", dojo.hitch(xpath, function (containerDom, expressionSelect, event) {
                if (Object.keys(this._attributes).length) {
                    this.addXPathCriteria(Object.keys(this._attributes)[0]);
                    dojo.empty(containerDom);
                    PathCompiler[this.getType()].createHTML(this, containerDom, expressionSelect);

                    this.getRoot().changed();
                } else
                    mx.ui.warning(`Entity ${this.getEntityName()} has no attributes/relationships.`)
            }, containerDom, expressionSelect));

            let inputDom = mxui.dom.create('table', {class:"inputDom-table"}, tr);

            // Has constraints? If so, render them
            if (constraintDoms.length) {
                dojo.place(mxui.dom.create('td', {class:"left-bracket"}, mxui.dom.create('div', )), tr);

                let expressionTable = mxui.dom.create('table', {class:"expressionTable"});

                for (var constraintDomIndex in constraintDoms) {
                    let removeLink = mxui.dom.create('td', {}, mxui.dom.create('a', {class:"remove-constraint"}, 'x'));
                    let constraintRow = mxui.dom.create('tr', {class:"allConstraints"}, constraintDoms[constraintDomIndex], removeLink);

                    dojo.place(constraintRow, expressionTable);

                    dojo.connect(removeLink, "onclick", dojo.hitch(this, function(constraintRow, xpath, xpathCriteria, evt) {
                        dojo.destroy(constraintRow);
                        xpath.removeXPathCriteria(xpathCriteria);
                        xpath.getRoot().changed();
                    }, constraintRow, xpath, xpathMap[parseInt(constraintDomIndex)]));
                }

                //dojo.place(mxui.dom.create('tr', {class:"allConstraints"}, constraintDoms[constraint]), expressionTable);

                dojo.place(mxui.dom.create('td', {class:"expressionTable-cell"}, expressionTable), tr);
                dojo.place(mxui.dom.create('td', {class:"right-bracket"}, mxui.dom.create('div', )), tr);
            }
            attributeHtml(xpath, !!expressionSelect?expressionSelect:null, containerDom, inputDom);
            return tr;
        },
        html: PathCompiler[PathTypeEnum.ObjectReference].html
    };

    PathCompiler[PathTypeEnum.ObjectReferenceSet] = PathCompiler[PathTypeEnum.ObjectReference];

    PathCompiler[PathTypeEnum.NoValue] = {
        // XPATH
        xpath(xpath:XPath) {
            return '';
        },
        createHTML(xpath:XPath, containerDom, expressionSelect) {
            attributeHtml(xpath, expressionSelect, containerDom);
        },
        html: PathCompiler[PathTypeEnum.ObjectReference].html
    };

    PathCompiler[PathTypeEnum.Enum] = {
        // XPATH
        xpath(xpath:XPath) {
            return (xpath.isPath() ? '/' : '') + xpath.getName();
        },
        createHTML(xpath:XPath, containerDom, expressionSelect) {
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
        xpath(xpath:XPath) {
            return xpath.getValue();
        },
        createHTML(xpath:XPath, containerDom, expressionSelect) {
            // TODO: data binding
            let inputDom = mxui.dom.create('input', {
                type: "number",
                class: "hidden xpath-write xpath-focus value-input",
                value: xpath.getValue()
            });
            inputDom.value = xpath.getValue();

            dojo.connect(inputDom, "onchange", dojo.hitch(xpath, function (inputDom, containerDom, expressionSelect, event) {
                this.setValue(parseFloat(inputDom.value), PathTypeEnum.DecimalValue);

                let value = inputDom.value;
                dojo.empty(containerDom);
                PathCompiler[this.getType()].createHTML(xpath, containerDom, expressionSelect);

                inputDom = containerDom.querySelector(".value-input");
                if (inputDom)
                    inputDom.value = value;

                var attributeSelect = containerDom.querySelector("select.attribute-select");
                if (attributeSelect) {
                    var owner = xpath.getParameterOwner(xpath);
                    if (owner!==null)
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
        xpath(xpath:XPath) {
            if (xpath.isParameter())
                return `'${xpath.getValue()}'`;
            else
                return "Error: You can't have an Enum value here";
        },
        createHTML(xpath:XPath, containerDom, expressionSelect) {
            // TODO: data binding
            let inputDom = mxui.dom.create('select', {
                class: "hidden xpath-write xpath-focus value-input"
            });
            let enumValues = xpath.getParameterOwner(xpath).getEnumValues();

            dojo.place(
                mxui.dom.create('option', {value: ""}, ""), inputDom
            );

            for (var key in xpath.getEnumValues()) {
                dojo.place(
                    mxui.dom.create('option', {value: key}, xpath.getEnumValues()[key]),
                    inputDom
                );
            };

            dojo.connect(inputDom, "onchange", dojo.hitch(xpath, function (inputDom, containerDom, expressionSelect, event) {
                this.setValue(inputDom.value, PathTypeEnum.EnumValue);

                let value = inputDom.value;
                dojo.empty(containerDom);
                PathCompiler[this.getType()].createHTML(xpath, containerDom, expressionSelect);

                inputDom = containerDom.querySelector(".value-input");
                if (inputDom)
                    inputDom.value = value;
                var attributeSelect = containerDom.querySelector("select.attribute-select");
                if (attributeSelect) {
                    var owner = xpath.getParameterOwner(xpath);
                    if (owner!==null)
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
        xpath(xpath:XPath) {
            return xpath.getValue();
        },
        createHTML(xpath:XPath, containerDom, expressionSelect) {
            // TODO: data binding
            let inputDom = mxui.dom.create('input', {
                type: "number",
                class: "hidden xpath-write xpath-focus value-input",
                value: xpath.getValue()
            });
            inputDom.value = xpath.getValue();

            dojo.connect(inputDom, "onchange", dojo.hitch(xpath, function (inputDom, containerDom, expressionSelect, event) {
                this.setValue(inputDom.value, PathTypeEnum.NumberValue);

                let value = inputDom.value;
                dojo.empty(containerDom);
                PathCompiler[this.getType()].createHTML(xpath, containerDom, expressionSelect);

                inputDom = containerDom.querySelector(".value-input");
                if (inputDom)
                    inputDom.value = value;
                var attributeSelect = containerDom.querySelector("select.attribute-select");
                if (attributeSelect) {
                    var owner = xpath.getParameterOwner(xpath);
                    if (owner!==null)
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
        xpath(xpath:XPath) {
            return `'${xpath.getValue()}'`;
        },
        createHTML(xpath:XPath, containerDom, expressionSelect) {
            // TODO: data binding
            let inputDom = mxui.dom.create('input', {
                type: "text",
                class: "hidden xpath-write xpath-focus value-input",
                value: xpath.getValue()
            });
            inputDom.value = xpath.getValue();

            dojo.connect(inputDom, "onchange", dojo.hitch(xpath, function (inputDom, containerDom, expressionSelect, event) {
                this.setValue(inputDom.value, PathTypeEnum.StringValue);

                let value = inputDom.value;
                dojo.empty(containerDom);
                PathCompiler[this.getType()].createHTML(xpath, containerDom, expressionSelect);

                inputDom = containerDom.querySelector(".value-input");
                if (inputDom)
                    inputDom.value = value;
                var attributeSelect = containerDom.querySelector("select.attribute-select");
                if (attributeSelect) {
                    var owner = xpath.getParameterOwner(xpath);
                    if (owner!==null)
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
        xpath(xpath:XPath) {
            return `${xpath.getValue() ? 'true()' : 'false()'}`;
        },
        createHTML(xpath:XPath, containerDom, expressionSelect) {
            // TODO: data binding
            let inputDom = mxui.dom.create('input', {
                type: "checkbox",
                class: "hidden xpath-write xpath-focus value-input",
                value: xpath.getValue()
            });
            inputDom.checked = xpath.getValue();

            dojo.connect(inputDom, "onchange", dojo.hitch(xpath, function (inputDom, containerDom, expressionSelect, event) {
                this.setValue(inputDom.checked, PathTypeEnum.BooleanValue);

                let value = inputDom.checked;
                dojo.empty(containerDom);
                PathCompiler[this.getType()].createHTML(xpath, containerDom, expressionSelect);

                inputDom = containerDom.querySelector(".value-input");
                if (inputDom)
                    inputDom.value = value;
                var attributeSelect = containerDom.querySelector("select.attribute-select");
                if (attributeSelect) {
                    var owner = xpath.getParameterOwner(xpath);
                    if (owner!==null)
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
        xpath(xpath:XPath) {
            return `'${xpath.getValue().toISOString()}'`;
        },
        createHTML(xpath:XPath, containerDom, expressionSelect) {
            // TODO: data binding
            let inputDom = mxui.dom.create('input', {
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
                    if (owner!==null)
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
        xpath(xpath:XPath) {
            return xpath.getValue();
        },
        createHTML(xpath:XPath, containerDom, expressionSelect) {
            // TODO: data binding

            let inputDom = mxui.dom.create('select', {
                class: "hidden xpath-write xpath-focus value-input date-constants",
                value: xpath.getValue()
            });
            let dateOption = mxui.dom.create('option', {value: ""}, "");
            dojo.place(dateOption, inputDom);
            for (let dateConstant in DateConstants) {
                dateOption = mxui.dom.create('option', {value: DateConstants[dateConstant]}, makePrettyName(dateConstant));
                dojo.place(dateOption, inputDom);
            }

            inputDom.value = xpath.getValue();

            dojo.connect(inputDom, "onchange", dojo.hitch(xpath, function (inputDom, containerDom, expressionSelect, event) {
                this.setValue(inputDom.value, PathTypeEnum.DateConstant);

                let value = inputDom.value;
                dojo.empty(containerDom);
                PathCompiler[this.getType()].createHTML(xpath, containerDom, expressionSelect);

                inputDom = containerDom.querySelector(".value-input");
                if (inputDom)
                    inputDom.value = value;
                var attributeSelect = containerDom.querySelector("select.attribute-select");
                if (attributeSelect) {
                    var owner = xpath.getParameterOwner(xpath);
                    if (owner!==null)
                        disableOptions(owner.getExpressionType(), attributeSelect);
                }

                this.getRoot().changed();
            }, inputDom, containerDom, expressionSelect));

            attributeHtml(xpath, expressionSelect, containerDom, inputDom);
        },
        html: PathCompiler[PathTypeEnum.ObjectReference].html
    };

    let disableOptions = function (expression, select) {
        dojoArray.forEach(select.querySelectorAll('option'), dojo.hitch(this, function (opt) {
            var value = parseInt(opt.getAttribute("pathtype")),
                newValue = (([ExpressionTypeEnum.Equals, ExpressionTypeEnum.Empty, ExpressionTypeEnum.Exist].indexOf(expression) == -1)
                && !ExpressionConfig.validPathForExpression(expression, value));

            opt.disabled = newValue;
        }));
    };

    var generateBooleanOperand = function (xpath:XPath, expressionRow) {
        let lookUps = {};
        lookUps[BooleanOperandsEnum.And] = {text: ` ${xpath.getAndSymbol()} `, class: "operator-and", switch: BooleanOperandsEnum.Or};
        lookUps[BooleanOperandsEnum.Or] = {text: ` ${xpath.getOrSymbol()} `, class: "operator-or", switch: BooleanOperandsEnum.None};
        lookUps[BooleanOperandsEnum.None] = {text: ` ${xpath.getAndOrSymbol()} `, class: "operator-none", switch: BooleanOperandsEnum.And};

        var operatorTD = mxui.dom.create('td', {class: "expression-cell" + (xpath.getParent().getXPathCriterias().length > 1 ? " bool-operator" : '')});
        if (!xpath.isFirstExpression()) {
            var operatorSpan = mxui.dom.create('span', {class: "operator-yes " + lookUps[xpath.getBooleanOperand()].class},
                lookUps[xpath.getBooleanOperand()].text);

            dojo.connect(operatorTD, 'onclick', dojo.hitch(xpath, function (operatorSpan, evt) {
                dojo.removeClass(operatorSpan, lookUps[this.getBooleanOperand()].class);

                xpath.setBooleanOperand(lookUps[this.getBooleanOperand()].switch);
                dojo.addClass(operatorSpan, lookUps[this.getBooleanOperand()].class);
                operatorSpan.innerText = lookUps[this.getBooleanOperand()].text;

                this.getRoot().changed();
            }, operatorSpan));

            dojo.place(operatorSpan, operatorTD);
        } else {
            var operatorSpan = mxui.dom.create('span', {});
            dojo.place(operatorSpan, operatorTD);
        }
        dojo.place(operatorTD, expressionRow);
    };
    var generateNotOperand = function (xpath:XPath, expressionRow) {
//Not
        var notTD = mxui.dom.create('td', {class: "expression-cell"});
        var notSpan = mxui.dom.create('span', {class: xpath.getNot() ? "not-yes" : "not-no"}, xpath.getNotSymbol());
        if (xpath.getNot()) {
            dojo.addClass(notSpan, "not-yes");
        } else {
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
    var generateLeft = function (xpath:XPath, expressionRow) {
        var leftTD = mxui.dom.create('td', {class: "expression-cell"});
        var leftSpan = mxui.dom.create('span', {class: xpath.hasLeftParenthesis() ? "parenthesis-yes" : "parenthesis-no"}, ' (');
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
    var generateRight = function (xpath:XPath, expressionRow) {
        var rightTD = mxui.dom.create('td', {class: "expression-cell"});
        var rightSpan = mxui.dom.create('span', {class: xpath.hasRightParenthesis() ? "parenthesis-yes" : "parenthesis-no"}, ')');
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
    let expressionHtml = function (xpath:XPath, expressionRow) {

        expressionRow.setAttribute("class", `expression-row`);

        generateBooleanOperand.call(this, xpath, expressionRow);
        generateNotOperand.call(this, xpath, expressionRow);
        generateLeft.call(this, xpath, expressionRow);

        //  Function Link: table > tr > td > a:fn + select:exp
        let fnLink = mxui.dom.create('a', {class: "expression-fn xpath-read"}, '∑');
        let fnTD = mxui.dom.create('td', {class: "expression-function-cell"}, fnLink);
        dojo.place(fnTD, expressionRow);

        // Expression Select
        let expressionSelect = mxui.dom.create('select', {class: "hidden xpath-write xpath-focus expression-select"});

        for (let expressionSet in ExpressionEnums) {
            let optionGroup = mxui.dom.create('optgroup', {class: expressionSet, label: expressionSet});
            dojo.place(optionGroup, expressionSelect);

            for (let expression in ExpressionEnums[expressionSet]) {
                let option = mxui.dom.create('option', {value: ExpressionType[expression]}, "" + expression);
                dojo.place(option, optionGroup);
            }
        }

        // For use inside the path types, giving access to outside expression
        class expressionStorageClass {
            onChange = null;
            expressionRow = null;
            expressionSelect = null;
            attributeSelect = null;
            handles = null;
        };

        let expressionStorage = new expressionStorageClass();

        let expressionSelectTD = mxui.dom.create('td', {}, expressionSelect);
        dojo.place(expressionSelectTD, expressionRow);

        // Expression

        let attributeDom = PathCompiler[xpath.getType()].html(xpath, expressionStorage);
        let attributeDoms = [attributeDom];
        for (let idx = 0; idx < xpath.numberOfExpressionParameters() - 1; idx++) {
            let xpathParam:XPath = xpath.getParam(idx);

            attributeDoms.push(PathCompiler[xpathParam.getType()].html(xpathParam, expressionStorage));
        }
        let expressionTableDom = ExpressionCompiler[xpath.getExpressionType()]
            .renderAttributes(attributeDoms, fnTD, expressionSelectTD, xpath);
        dojo.place(mxui.dom.create('td', {}, expressionTableDom), expressionRow);

        generateRight.call(this, xpath, expressionRow);

        // Hook filters and events
        let attributeSelect = attributeDom.querySelector(".attribute-select");
        disableOptions(xpath.getExpressionType(), attributeSelect);

        let handles = [];

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

        let expressionOnChange = dojo.hitch(xpath, function (expressionRow, expressionSelect, attributeSelect, handles, event) {
            for (let handle in handles) {
                dojo.disconnect(handles[handle]);
            }

            let root = this.getRoot();
            if (parseInt(expressionSelect.value) === ExpressionTypeEnum.Remove) {
                console.error("DELETE "  + expressionRow + " " + expressionRow.getAttribute("class"));
                this.getParent().removeXPathCriteria(this);
                dojo.destroy(expressionRow);
            } else {
                this.setExpressionType(parseInt(expressionSelect.value));

                dojo.empty(expressionRow);
                expressionHtml(this, expressionRow);
                expressionSelect = expressionRow.querySelector(".expression-select");
                expressionSelect.value = xpath.getExpressionType() + '';

                dojoArray.forEach(expressionRow.querySelectorAll('.attribute-select'), dojo.hitch(this, function(element, index) {
                    disableOptions(this.getExpressionType(), element);
                }));
            }
            root.changed();
        }, expressionRow, expressionSelect, attributeSelect, handles);

        dojo.connect(expressionSelect, "onchange", expressionOnChange);
        dojo.connect(expressionSelect, "onclick", dojo.hitch(this, function(evt) {
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

    let wrapExpressionXpath = function (xpath, expr) {
        return "" +
            (xpath.getBooleanOperand() === BooleanOperandsEnum.And ? "and " : "") +
            (xpath.getBooleanOperand() === BooleanOperandsEnum.Or ? "or " : "") +
            (xpath.getNot() ? "not " : "") +
            (xpath.hasLeftParenthesis() ? "(" : "") +
            expr +
            (xpath.hasRightParenthesis() ? ")" : "");
    };

    let getExpressionsXPath = function (xpath) {
        let attributeDom = PathCompiler[xpath.getType()].xpath(xpath);
        let attributeDoms = [attributeDom];
        for (let idx = 0; idx < xpath.numberOfExpressionParameters() - 1; idx++) {
            let xpathParam:XPath = xpath.getParam(idx);
            attributeDoms.push(xpathParam.compileAttributeXPath());
        }
        return attributeDoms;
    };

// EXPRESSION Compiler
    ExpressionCompiler[ExpressionTypeEnum.None] = {
        xpath(xpath:XPath) {
            return wrapExpressionXpath(xpath, PathCompiler[xpath.getType()].xpath(xpath));
        },
        // Written in plain XPath
        renderAttributes(attributeDoms) {
            let expressionDom = mxui.dom.create('table', {class: "expression-statement"}, mxui.dom.create('tr', {}, attributeDoms[0]));
            return expressionDom;
        },
        html(xpath:XPath) {
            let expressionRow = mxui.dom.create('tr', );
            let expressionContainer = mxui.dom.create('table', {class: "expression-table"}, expressionRow);

            expressionHtml(xpath, expressionRow);
            return expressionContainer;
        }
    };

// EXPRESSION Compiler
    ExpressionCompiler[ExpressionTypeEnum.Equals] = {
        xpath(xpath:XPath) {
            let attributeDoms = getExpressionsXPath(xpath);
            return wrapExpressionXpath(xpath, `${attributeDoms[0]} = ${attributeDoms[1]}`);
        },
        // Written in plain XPath
        renderAttributes(attributeDoms, fnTD, expressionSelectTD, xpath) {
            fnTD.querySelector("a").innerText = ' = ';
            let tr = mxui.dom.create('tr', {},
                attributeDoms[0],
                expressionSelectTD,
                fnTD,
                mxui.dom.create('td', {}, attributeDoms[1]));

            let expressionDom = mxui.dom.create('table', {class: "expression-statement"}, tr);
            return expressionDom;
        },
        html:ExpressionCompiler[ExpressionTypeEnum.None].html
    };

// EXPRESSION Compiler
    ExpressionCompiler[ExpressionTypeEnum.Contains] = {
        xpath(xpath:XPath) {
            let attributeDoms = getExpressionsXPath(xpath);
            return wrapExpressionXpath(xpath, `contains(${attributeDoms[0]}, ${attributeDoms[1]})`);
        },
        // Written in plain XPath
        renderAttributes(attributeDoms, fnTD, expressionSelectTD, xpath) {
            fnTD.querySelector("a").innerText = ' contains ';
            let tr = mxui.dom.create('tr', {},
                attributeDoms[0],
                fnTD, expressionSelectTD,
                mxui.dom.create('td', {}, attributeDoms[1]));

            let expressionDom = mxui.dom.create('table', {class: "expression-statement"}, tr);
            return expressionDom;
        },
        html:ExpressionCompiler[ExpressionTypeEnum.None].html
    };

    ExpressionCompiler[ExpressionTypeEnum.DayFrom] = {
        xpath(xpath:XPath) {
            let attributeDoms = getExpressionsXPath(xpath);
            return wrapExpressionXpath(xpath, `day-from-dateTime(${attributeDoms[0]}) = ${attributeDoms[1]}`);
        },
        // Written in plain XPath
        renderAttributes(attributeDoms, fnTD, expressionSelectTD, xpath) {
            fnTD.querySelector("a").innerText = ' Days from ';    // Expression
            let tr = mxui.dom.create('tr', {},
                fnTD, expressionSelectTD,
                attributeDoms[0],
                mxui.dom.create('td', {}, " is "),
                mxui.dom.create('td', {}, attributeDoms[1]));

            let expressionDom = mxui.dom.create('table', {class: "expression-statement"}, tr);
            return expressionDom;
        },
        html:ExpressionCompiler[ExpressionTypeEnum.None].html
    };

    ExpressionCompiler[ExpressionTypeEnum.DayOfYearFrom] = {
        xpath(xpath:XPath) {
            // Expression

            let attributeDoms = getExpressionsXPath(xpath);
            return wrapExpressionXpath(xpath, `day-of-year-from-dateTime(${attributeDoms[0]}) = ${attributeDoms[1]}`);
        },
        // Written in plain XPath
        renderAttributes(attributeDoms, fnTD, expressionSelectTD, xpath) {
            fnTD.querySelector("a").innerText = ' Day of year from ';    // Expression
            let tr = mxui.dom.create('tr', {},
                fnTD, expressionSelectTD,
                attributeDoms[0],
                mxui.dom.create('td', {}, " is "),
                mxui.dom.create('td', {}, attributeDoms[1]));

            let expressionDom = mxui.dom.create('table', {class: "expression-statement"}, tr);
            return expressionDom;
        },
        html:ExpressionCompiler[ExpressionTypeEnum.None].html
    };

    ExpressionCompiler[ExpressionTypeEnum.Greater] = {
        xpath(xpath:XPath) {
            // Expression

            let attributeDoms = getExpressionsXPath(xpath);
            return wrapExpressionXpath(xpath, `${attributeDoms[0]} > ${attributeDoms[1]}`);
        },
        // Written in plain XPath
        renderAttributes(attributeDoms, fnTD, expressionSelectTD, xpath) {
            fnTD.querySelector("a").innerText = ' > ';    // Expression
            let tr = mxui.dom.create('tr', {},
                attributeDoms[0],
                fnTD, expressionSelectTD,
                mxui.dom.create('td', {}, attributeDoms[1]));

            let expressionDom = mxui.dom.create('table', {class: "expression-statement"}, tr);
            return expressionDom;
        },
        html:ExpressionCompiler[ExpressionTypeEnum.None].html
    };

    ExpressionCompiler[ExpressionTypeEnum.GreaterEqual] = {
        xpath(xpath:XPath) {
            // Expression

            let attributeDoms = getExpressionsXPath(xpath);
            return wrapExpressionXpath(xpath, `${attributeDoms[0]} >= ${attributeDoms[1]}`);
        },
        // Written in plain XPath
        renderAttributes(attributeDoms, fnTD, expressionSelectTD, xpath) {
            fnTD.querySelector("a").innerText = ' >= ';    // Expression
            let tr = mxui.dom.create('tr', {},
                attributeDoms[0],
                fnTD, expressionSelectTD,
                mxui.dom.create('td', {}, attributeDoms[1]));

            let expressionDom = mxui.dom.create('table', {class: "expression-statement"}, tr);
            return expressionDom;
        },
        html:ExpressionCompiler[ExpressionTypeEnum.None].html
    };

    ExpressionCompiler[ExpressionTypeEnum.Less] = {
        xpath(xpath:XPath) {
            // Expression

            let attributeDoms = getExpressionsXPath(xpath);
            return wrapExpressionXpath(xpath, `${attributeDoms[0]} < ${attributeDoms[1]}`);
        },
        // Written in plain XPath
        renderAttributes(attributeDoms, fnTD, expressionSelectTD, xpath) {
            fnTD.querySelector("a").innerText = ' < ';    // Expression
            let tr = mxui.dom.create('tr', {},
                attributeDoms[0],
                fnTD, expressionSelectTD,
                mxui.dom.create('td', {}, attributeDoms[1]));

            let expressionDom = mxui.dom.create('table', {class: "expression-statement"}, tr);
            return expressionDom;
        },
        html:ExpressionCompiler[ExpressionTypeEnum.None].html
    };

    ExpressionCompiler[ExpressionTypeEnum.LessEqual] = {
        xpath(xpath:XPath) {
            // Expression

            let attributeDoms = getExpressionsXPath(xpath);
            return wrapExpressionXpath(xpath, `${attributeDoms[0]} <= ${attributeDoms[1]}`);
        },
        // Written in plain XPath
        renderAttributes(attributeDoms, fnTD, expressionSelectTD, xpath) {
            fnTD.querySelector("a").innerText = ' <= ';    // Expression
            let tr = mxui.dom.create('tr', {},
                attributeDoms[0],
                fnTD, expressionSelectTD,
                mxui.dom.create('td', {}, attributeDoms[1]));

            let expressionDom = mxui.dom.create('table', {class: "expression-statement"}, tr);
            return expressionDom;
        },
        html:ExpressionCompiler[ExpressionTypeEnum.None].html
    };

    ExpressionCompiler[ExpressionTypeEnum.HoursFrom] = {
        xpath(xpath:XPath) {
            // Expression

            let attributeDoms = getExpressionsXPath(xpath);
            return wrapExpressionXpath(xpath, `hours-from-dateTime(${attributeDoms[0]}) = ${attributeDoms[1]}`);
        },
        // Written in plain XPath
        renderAttributes(attributeDoms, fnTD, expressionSelectTD, xpath) {
            fnTD.querySelector("a").innerText = ' Hours from ';    // Expression
            let tr = mxui.dom.create('tr', {},
                fnTD, expressionSelectTD,
                attributeDoms[0],
                mxui.dom.create('td', {}, " is "),
                mxui.dom.create('td', {}, attributeDoms[1]));

            let expressionDom = mxui.dom.create('table', {class: "expression-statement"}, tr);
            return expressionDom;
        },
        html:ExpressionCompiler[ExpressionTypeEnum.None].html
    };

    ExpressionCompiler[ExpressionTypeEnum.MinutesFrom] = {
        xpath(xpath:XPath) {
            // Expression

            let attributeDoms = getExpressionsXPath(xpath);
            return wrapExpressionXpath(xpath, `minutes-from-dateTime(${attributeDoms[0]}) = ${attributeDoms[1]}`);
        },
        // Written in plain XPath
        renderAttributes(attributeDoms, fnTD, expressionSelectTD, xpath) {
            fnTD.querySelector("a").innerText = ' Minutes from ';    // Expression
            let tr = mxui.dom.create('tr', {},
                fnTD, expressionSelectTD,
                attributeDoms[0],
                mxui.dom.create('td', {}, " is "),
                mxui.dom.create('td', {}, attributeDoms[1]));

            let expressionDom = mxui.dom.create('table', {class: "expression-statement"}, tr);
            return expressionDom;
        },
        html:ExpressionCompiler[ExpressionTypeEnum.None].html
    };

    ExpressionCompiler[ExpressionTypeEnum.MonthFrom] = {
        xpath(xpath:XPath) {
            // Expression

            let attributeDoms = getExpressionsXPath(xpath);
            return wrapExpressionXpath(xpath, `months-from-dateTime(${attributeDoms[0]}) = ${attributeDoms[1]}`);
        },
        // Written in plain XPath
        renderAttributes(attributeDoms, fnTD, expressionSelectTD, xpath) {
            fnTD.querySelector("a").innerText = ' Months from ';    // Expression
            let tr = mxui.dom.create('tr', {},
                fnTD, expressionSelectTD,
                attributeDoms[0],
                mxui.dom.create('td', {}, " is "),
                mxui.dom.create('td', {}, attributeDoms[1]));

            let expressionDom = mxui.dom.create('table', {class: "expression-statement"}, tr);
            return expressionDom;
        },
        html:ExpressionCompiler[ExpressionTypeEnum.None].html
    };

    ExpressionCompiler[ExpressionTypeEnum.QuarterFrom] = {
        xpath(xpath:XPath) {
            // Expression

            let attributeDoms = getExpressionsXPath(xpath);
            return wrapExpressionXpath(xpath, `quarter-from-dateTime(${attributeDoms[0]}) = ${attributeDoms[1]}`);
        },
        // Written in plain XPath
        renderAttributes(attributeDoms, fnTD, expressionSelectTD, xpath) {
            fnTD.querySelector("a").innerText = ' Quarter from ';    // Expression
            let tr = mxui.dom.create('tr', {},
                fnTD, expressionSelectTD,
                attributeDoms[0],
                mxui.dom.create('td', {}, " is "),
                mxui.dom.create('td', {}, attributeDoms[1]));

            let expressionDom = mxui.dom.create('table', {class: "expression-statement"}, tr);
            return expressionDom;
        },
        html:ExpressionCompiler[ExpressionTypeEnum.None].html
    };

    ExpressionCompiler[ExpressionTypeEnum.Exist] = {
        xpath(xpath:XPath) {
            // Expression

            let attributeDoms = getExpressionsXPath(xpath);
            return wrapExpressionXpath(xpath, `${attributeDoms[0]} != empty`);
        },
        // Written in plain XPath
        renderAttributes(attributeDoms, fnTD, expressionSelectTD, xpath) {
            fnTD.querySelector("a").innerText = ' Exists ';    // Expression
            let tr = mxui.dom.create('tr', {},
                attributeDoms[0],
                fnTD, expressionSelectTD);

            let expressionDom = mxui.dom.create('table', {class: "expression-statement"}, tr);
            return expressionDom;
        },
        html:ExpressionCompiler[ExpressionTypeEnum.None].html
    };

    ExpressionCompiler[ExpressionTypeEnum.Empty] = {
        xpath(xpath:XPath) {
            // Expression

            let attributeDoms = getExpressionsXPath(xpath);
            return wrapExpressionXpath(xpath, `${attributeDoms[0]} = empty`);
        },
        // Written in plain XPath
        renderAttributes(attributeDoms, fnTD, expressionSelectTD, xpath) {
            fnTD.querySelector("a").innerText = ' is Empty ';    // Expression
            let tr = mxui.dom.create('tr', {},
                attributeDoms[0],
                fnTD, expressionSelectTD);

            let expressionDom = mxui.dom.create('table', {class: "expression-statement"}, tr);
            return expressionDom;
        },
        html:ExpressionCompiler[ExpressionTypeEnum.None].html
    };

    ExpressionCompiler[ExpressionTypeEnum.YearFrom] = {
        xpath(xpath:XPath) {
            // Expression

            let attributeDoms = getExpressionsXPath(xpath);
            return wrapExpressionXpath(xpath, `years-from-dateTime(${attributeDoms[0]}) = ${attributeDoms[1]}`);
        },
        // Written in plain XPath
        renderAttributes(attributeDoms, fnTD, expressionSelectTD, xpath) {
            fnTD.querySelector("a").innerText = ' Years from ';    // Expression
            let tr = mxui.dom.create('tr', {},
                fnTD, expressionSelectTD,
                attributeDoms[0],
                mxui.dom.create('td', {}, " is "),
                mxui.dom.create('td', {}, attributeDoms[1]));

            let expressionDom = mxui.dom.create('table', {class: "expression-statement"}, tr);
            return expressionDom;
        },
        html:ExpressionCompiler[ExpressionTypeEnum.None].html
    };

    ExpressionCompiler[ExpressionTypeEnum.SecondsFrom] = {
        xpath(xpath:XPath) {
            // Expression

            let attributeDoms = getExpressionsXPath(xpath);
            return wrapExpressionXpath(xpath, `seconds-from-dateTime(${attributeDoms[0]}) = ${attributeDoms[1]}`);
        },
        // Written in plain XPath
        renderAttributes(attributeDoms, fnTD, expressionSelectTD, xpath) {
            fnTD.querySelector("a").innerText = ' Seconds from ';    // Expression
            let tr = mxui.dom.create('tr', {},
                fnTD, expressionSelectTD,
                attributeDoms[0],
                mxui.dom.create('td', {}, " is "),
                mxui.dom.create('td', {}, attributeDoms[1]));

            let expressionDom = mxui.dom.create('table', {class: "expression-statement"}, tr);
            return expressionDom;
        },
        html:ExpressionCompiler[ExpressionTypeEnum.None].html
    };

    ExpressionCompiler[ExpressionTypeEnum.WeekDayFrom] = {
        xpath(xpath:XPath) {
            // Expression

            let attributeDoms = getExpressionsXPath(xpath);
            return wrapExpressionXpath(xpath, `weekday-from-dateTime(${attributeDoms[0]}) = ${attributeDoms[1]}`);
        },
        // Written in plain XPath
        renderAttributes(attributeDoms, fnTD, expressionSelectTD, xpath) {
            fnTD.querySelector("a").innerText = ' Weekday from ';    // Expression
            let tr = mxui.dom.create('tr', {},
                fnTD, expressionSelectTD,
                attributeDoms[0],
                mxui.dom.create('td', {}, " is "),
                mxui.dom.create('td', {}, attributeDoms[1]));

            let expressionDom = mxui.dom.create('table', {class: "expression-statement"}, tr);
            return expressionDom;
        },
        html:ExpressionCompiler[ExpressionTypeEnum.None].html
    };

    ExpressionCompiler[ExpressionTypeEnum.WeekFrom] = {
        xpath(xpath:XPath) {
            let attributeDoms = getExpressionsXPath(xpath);
            return wrapExpressionXpath(xpath, `week-from-dateTime(${attributeDoms[0]}) = ${attributeDoms[1]}`);
        },
        // Written in plain XPath
        renderAttributes(attributeDoms, fnTD, expressionSelectTD, xpath) {
            fnTD.querySelector("a").innerText = ' Weekday from ';    // Expression
            let tr = mxui.dom.create('tr', {},
                fnTD, expressionSelectTD,
                attributeDoms[0],
                mxui.dom.create('td', {}, " = "),
                mxui.dom.create('td', {}, attributeDoms[1]));

            let expressionDom = mxui.dom.create('table', {class: "expression-statement"}, tr);
            return expressionDom;
        },
        html:ExpressionCompiler[ExpressionTypeEnum.None].html
    };

    ExpressionCompiler[ExpressionTypeEnum.Length] = {
        xpath(xpath:XPath) {
            // Expression
            let attributeDoms = getExpressionsXPath(xpath),
                operator = '';
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
            return wrapExpressionXpath(xpath, `length(${attributeDoms[0]}) ${operator} ${attributeDoms[1]}`);
        },
        // Written in plain XPath
        renderAttributes(attributeDoms, fnTD, expressionSelectTD, xpath) {
            fnTD.querySelector("a").innerText = ' Length of  ';    // Expression
            let operator = mxui.dom.create('select', {},
                    mxui.dom.create('option', {value:OperatorTypeEnum.Equals}, '='),
                    mxui.dom.create('option', {value:OperatorTypeEnum.GreaterEqualsTo}, '>='),
                    mxui.dom.create('option', {value:OperatorTypeEnum.GreaterThan}, '>'),
                    mxui.dom.create('option', {value:OperatorTypeEnum.LessEqualsTo}, '<='),
                    mxui.dom.create('option', {value:OperatorTypeEnum.LessThan}, '<'));
            operator.value = xpath.getOperator();
            dojo.connect(operator, "onchange", dojo.hitch(this, function() {
                xpath.setOperator(parseInt(operator.value));
                xpath.getRoot().changed();
            }, xpath, operator));

            let tr = mxui.dom.create('tr', {},
                fnTD, expressionSelectTD,
                attributeDoms[0],
                mxui.dom.create('td', {}, operator),
                mxui.dom.create('td', {}, attributeDoms[1]));

            let expressionDom = mxui.dom.create('table', {class: "expression-statement"}, tr);
            return expressionDom;
        },
        html:ExpressionCompiler[ExpressionTypeEnum.None].html
    };

    ExpressionCompiler[ExpressionTypeEnum.Range] = {
        xpath(xpath:XPath) {
            // Expression

            let attributeDoms = getExpressionsXPath(xpath);
            return wrapExpressionXpath(xpath, `${attributeDoms[1]} < ${attributeDoms[0]} < ${attributeDoms[2]}`);
        },
        // Written in plain XPath
        renderAttributes(attributeDoms, fnTD, expressionSelectTD, xpath) {
            fnTD.querySelector("a").innerText = ' in range of ';    // Expression
            let tr = mxui.dom.create('tr', {},
                attributeDoms[0],
                fnTD, expressionSelectTD,
                mxui.dom.create('td', {}, attributeDoms[1]),
                mxui.dom.create('td', {}, " and "),
                mxui.dom.create('td', {}, attributeDoms[2]));

            let expressionDom = mxui.dom.create('table', {class: "expression-statement"}, tr);
            return expressionDom;
        },
        html:ExpressionCompiler[ExpressionTypeEnum.None].html
    };

    ExpressionCompiler[ExpressionTypeEnum.Exist] = {
        xpath(xpath:XPath) {
            // Expression

            let attributeDoms = getExpressionsXPath(xpath);
            return wrapExpressionXpath(xpath, `${attributeDoms[0]} != empty`);
        },
        // Written in plain XPath
        renderAttributes(attributeDoms, fnTD, expressionSelectTD, xpath) {
            fnTD.querySelector("a").innerText = ' exists ';    // Expression
            let tr = mxui.dom.create('tr', {},
                attributeDoms[0],
                fnTD, expressionSelectTD);

            let expressionDom = mxui.dom.create('table', {class: "expression-statement"}, tr);
            return expressionDom;
        },
        html:ExpressionCompiler[ExpressionTypeEnum.None].html
    };

    ExpressionCompiler[ExpressionTypeEnum.EndsWith] = {
        xpath(xpath:XPath) {
            // Expression

            let attributeDoms = getExpressionsXPath(xpath);
            return wrapExpressionXpath(xpath, `ends-with(${attributeDoms[0]}, ${attributeDoms[1]})`);
        },
        // Written in plain XPath
        renderAttributes(attributeDoms, fnTD, expressionSelectTD, xpath) {
            fnTD.querySelector("a").innerText = ' ends with ';    // Expression
            let tr = mxui.dom.create('tr', {},
                attributeDoms[0],
                fnTD, expressionSelectTD,
                mxui.dom.create('td', {}, attributeDoms[1]));

            let expressionDom = mxui.dom.create('table', {class: "expression-statement"}, tr);
            return expressionDom;
        },
        html:ExpressionCompiler[ExpressionTypeEnum.None].html
    };

    ExpressionCompiler[ExpressionTypeEnum.StartsWith] = {
        xpath(xpath:XPath) {
            // Expression

            let attributeDoms = getExpressionsXPath(xpath);
            return wrapExpressionXpath(xpath, `starts-with(${attributeDoms[0]}, ${attributeDoms[1]})`);
        },
        // Written in plain XPath
        renderAttributes(attributeDoms, fnTD, expressionSelectTD, xpath) {
            fnTD.querySelector("a").innerText = ' starts with ';    // Expression
            let tr = mxui.dom.create('tr', {},
                attributeDoms[0],
                fnTD, expressionSelectTD,
                mxui.dom.create('td', {}, attributeDoms[1]));

            let expressionDom = mxui.dom.create('table', {class: "expression-statement"}, tr);
            return expressionDom;
        },
        html:ExpressionCompiler[ExpressionTypeEnum.None].html
    };

    ExpressionCompiler[ExpressionTypeEnum.True] = {
        xpath(xpath:XPath) {
            // Expression

            let attributeDoms = getExpressionsXPath(xpath);
            return wrapExpressionXpath(xpath, `${attributeDoms[0]} = true()`);
        },
        // Written in plain XPath
        renderAttributes(attributeDoms, fnTD, expressionSelectTD, xpath) {
            fnTD.querySelector("a").innerText = ' is true ';    // Expression
            let tr = mxui.dom.create('tr', {},
                attributeDoms[0],
                fnTD, expressionSelectTD);

            let expressionDom = mxui.dom.create('table', {class: "expression-statement"}, tr);
            return expressionDom;
        },
        html:ExpressionCompiler[ExpressionTypeEnum.None].html
    };

    ExpressionCompiler[ExpressionTypeEnum.False] = {
        xpath(xpath:XPath) {
            // Expression

            let attributeDoms = getExpressionsXPath(xpath);
            return wrapExpressionXpath(xpath, `${attributeDoms[0]} = false()`);
        },
        // Written in plain XPath
        renderAttributes(attributeDoms, fnTD, expressionSelectTD, xpath) {
            fnTD.querySelector("a").innerText = ' is false ';    // Expression
            let tr = mxui.dom.create('tr', {},
                attributeDoms[0],
                fnTD, expressionSelectTD);

            let expressionDom = mxui.dom.create('table', {class: "expression-statement"}, tr);
            return expressionDom;
        },
        html:ExpressionCompiler[ExpressionTypeEnum.None].html
    };

    ExpressionCompiler[ExpressionTypeEnum.Empty] = {
        xpath(xpath:XPath) {
            // Expression

            let attributeDoms = getExpressionsXPath(xpath);
            return wrapExpressionXpath(xpath, `${attributeDoms[0]} = empty`);
        },
        // Written in plain XPath
        renderAttributes(attributeDoms, fnTD, expressionSelectTD, xpath) {
            fnTD.querySelector("a").innerText = ' is empty ';    // Expression
            let tr = mxui.dom.create('tr', {},
                attributeDoms[0],
                fnTD, expressionSelectTD);

            let expressionDom = mxui.dom.create('table', {class: "expression-statement"}, tr);
            return expressionDom;
        },
        html:ExpressionCompiler[ExpressionTypeEnum.None].html
    };


    class XPath {
        private _notSymbol = "not";
        private _andSymbol = "and";
        private _orSymbol = "or";
        private _andorSymbol = "ao";

        setNotSymbol(symbol) {
            this._notSymbol = symbol;
        }
        setAndSymbol(symbol) {
            this._andSymbol = symbol;
        }
        setOrSymbol(symbol) {
            this._orSymbol = symbol;
        }
        setAndOrSymbol(symbol) {
            this._andorSymbol = symbol;
        }

        getNotSymbol() {
            return this._notSymbol;
        }
        getAndSymbol() {
            return this._andSymbol;
        }
        getOrSymbol() {
            return this._orSymbol;
        }
        getAndOrSymbol() {
            return this._andorSymbol;
        }

        constructor(name:string,
                    parent?:XPath,
                    value?:string,
                    valueType?:PathTypeEnum,
                    asParameter?:boolean,
                    expectedPathTypes?:PathTypeEnum[],
                    onchange?:any) {

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
        };

        // In any XPath there can always be only 1 root, which is the context
        isRoot() {
            return (!this._asParameter && !this.getParent())
        }

        // Method that will be hitched to avoid circular reference of child -> parent.
        // JSON wont stringify if there are circular references.
        _getParent(parent) {
            if (!parent)
                return null;

            while (!parent.isEntity()) {
                parent = parent.getParent();
            }
            return parent;
        }

        // Parameter is annotated as optional because it will be called with a hitched parent parameter
        getParent(parent?):XPath {
            if (parent)
                return parent;
        }

        // Used to load XPath objects stored as Json
        loadJson(json:{}) {
            //let onChange = !Object.keys(json).length;
            for (let field in json) {
                this[field] = json[field];
            }
            this.initializeHierarchy();
            //if (onChange)
            this.changed();
            return this;
        };

        // Hitches the Parent to XPath Criteria and Parameters
        initializeHierarchy() {
            Object['setPrototypeOf'](this, XPath.prototype);
            //this.setExpressionType(this.getExpressionType());

            for (let idx = 0; idx < this._xPathCriteria.length; idx++) {
                let xpathCriteria = this._xPathCriteria[idx];
                Object['setPrototypeOf'](xpathCriteria, XPath.prototype);
                xpathCriteria.getParent = dojo.hitch(xpathCriteria, XPath.prototype._getParent, this);
                //xpathCriteria.setExpressionType(xpathCriteria.getExpressionType());
                for (let idx2 = 0; idx2 < xpathCriteria._xPathParameters.length; idx2++) {
                    let xpathParameter = xpathCriteria._xPathParameters[idx2];
                    Object['setPrototypeOf'](xpathParameter, XPath.prototype);
                    xpathParameter.getParent = dojo.hitch(xpathParameter, xpathParameter._getParent, this);
                    //xpathParameter.setExpressionType(xpathParameter.getExpressionType());
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

        // Checks if name belongs to the Parent's attributes, if not it will be assumed a value, not attribute;
        isParentAttribute(name:string) {
            return this.getParent() && this.getParent().hasAttribute(name);
        }

        // Checks if I have an attribute
        hasAttribute(name:string) {
            return name in this._attributes;
        }

        // Get type of attribute
        getPathTypeOfAttribute(name:string) {
            return this.getParent()._attributes[name];
        }

        // Is attribute an association
        isAttributeAnAssociation(name:string) {
            return name in this._associations;
        }

        // Get full association name
        getAssociationCompleteName(name:string) {
            this.assert(this.isAttributeAnAssociation(name), `${name} is not an association.`)
            return name + "/" + this._associations[name];
        }

        // Is "name"/valueType one of the expected path types
        validateExpectedPathType(name?:string) {
            name = name || this.getName();
            if (this.isParentAttribute(name)) {
                this.assert(this._expectedPathTypes.indexOf(this.getPathTypeOfAttribute(name)) >= 0,
                    `Attribute ${name} is of type ${this.getPathTypeOfAttribute(name)} and should be on of the following:\n${this._expectedPathTypes}`);
            } else {
                this.assert(this._expectedPathTypes.indexOf(this._valueType) >= 0,
                    `Attribute ${name} is of type ${this._valueType} and should be on of the following:\n${this._expectedPathTypes}`);
            }
        }

        // Get the name of this XPath.
        getName():string {
            return this._name.split('/')[0];
        }

        getFullyQualifiedName() {
            return this._name;
        }

        // Set's the name, default expression type, resets the criteria and parameters and sets the _type.
        setName(name) {
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
        }

        private setupAttributes(name) {
            if (this.isEntity(name)) {
                let meta = this.getMxMeta(name);

                // Pseudo ID
                this.addPathAttribute('id', PathTypeEnum.Long);

                // Attributes
                meta.getAttributesWithoutReferences().sort().forEach(dojo.hitch(this, function (attribute:string) {
                    let pathType = PathType[meta.getAttributeType(attribute)];
                    this.addPathAttribute(attribute, pathType);
                }));

                // Associations
                meta.getReferenceAttributes().sort().forEach(dojo.hitch(this, function (association:string) {
                    let pathType = PathType[meta.getAttributeType(association)];
                    this.addPathAttribute(association, pathType, meta.getEntity());
                }));

                let objectMap = mx.meta.getMap();
                let objectKeys = Object.keys(objectMap);

                objectKeys.forEach(dojo.hitch(this, function(key, idx) {
                    let object = objectMap[key];
                    object.getReferenceAttributes().forEach(dojo.hitch(this, function (association, aidx) {
                        if (object.getSelectorEntity(association) === name) {
                            let pathType = PathType[object.getAttributeType(association)];
                            this._attributes[association] = pathType;
                            this._associations[association] = key;
                        }
                    }));
                }));
            }
        }

        // Asserts if name is a valid Mendix Entity
        isEntity(name?:string) {
            if (this.isRoot())
                return true;
            else if (!name)
                return this._name.split('/').reverse()[0] in mx.meta.getMap();
            else
                return name.split('/').reverse()[0] in mx.meta.getMap();
        };

        // Get the entity name
        getEntityName() {
            this.assert(this.isEntity(), `This is not an entity`);
            return this._name.split('/').reverse()[0];
        }

        // Returns the parent's entity name
        getParentEntityName() {
            return this.getParent().getEntityName();
        }

        // Get the Mendix Meta Object
        getMxMeta(name?:string) {
            if (!name) {
                return mx.meta.getEntity(this._name.split('/').reverse()[0]);
            } else return mx.meta.getEntity(name);
        }

        // Simple assert method
        assert(assersion, message) {
            if (!assersion) {
                console.error(message);
                throw message;
            }
        }

        // Boolean getter & Setter
        getBooleanOperand():BooleanOperandsEnum {
            return this._booleanOperand;
        }

        setBooleanOperand(value:any) {
            if (typeof value === "number")
                this._booleanOperand = value;
            else
                this._booleanOperand = BooleanOperands[value];
            return this;
        }

        isFirstExpression():boolean {
            return this._nthPath === 0;
        }

        // Expression type getter and setter
        getExpressionType():ExpressionTypeEnum {
            return this._expressionType;
        }

        setExpressionType(value:any) {
            let oldXpathParameters = this._xPathParameters;
            this._xPathParameters = [];

            // Helper code for strings and numbers
            if (typeof value === "number")
                this._expressionType = value;
            else
                this._expressionType = ExpressionType[value];

            for (let idx = 0; idx < this.numberOfExpressionParameters() - 1; idx++) {
                let xpath = this.addXPathParameter(`Unresolved_${this.getName()}_${this._nthPath}_${idx}`);
                xpath._enumValues = this._enumValues;
                let defaults = ExpressionConfig.get(this._expressionType).defaults[idx](this.getType());
                if ((oldXpathParameters[idx]) && (defaults.type == oldXpathParameters[idx].getType()))
                    xpath.setValue(oldXpathParameters[idx].getValue(), oldXpathParameters[idx].getType());
                else if (defaults.type)
                    xpath.setValue(defaults.value, defaults.type);
                else
                    xpath.setValue(null, PathTypeEnum.NoValue);
            }
            return this;
        }

        // Not getter and setter
        getNot():boolean {
            return this._not;
        }

        setNot(value:boolean) {
            this._not = value;
            return this;
        }

        // Left Parenthesis getter an setter
        hasLeftParenthesis():boolean {
            return this._leftParenthesis;
        }

        setLeftParenthesis(value:boolean) {
            this._leftParenthesis = value;
            return this;
        }

        // Right Parenthesis getter an setter
        hasRightParenthesis():boolean {
            return this._rightParenthesis;
        }

        setRightParenthesis(value:boolean) {
            this._rightParenthesis = value;
            return this;
        }

        // XPath Criteria getter
        getXPathCriterias() {
            return this._xPathCriteria;
        }

        // Level getter/setter
        getLevel():number {
            return this._level;
        }

        setLevel(value:number) {
            this._level = value;
            return this;
        }

        // Path getter/setter
        getPath():XPath {
            return this._path;
        }

        setNextPath(name:string) {
            if (name) {
                this.assert(this.hasAttribute(name), `"${name} is not in list of possible values: ${Object.keys(this.getAttributes()).join()}.`);
                //this.assert(ReferenceTypes.indexOf(this._attributes[name]) >= 0, `${name} is of type ${this._attributes[name]} and should be in ${ReferenceTypes}`);
                if (name in this._associations)
                    this._path = new XPath(this.getAssociationCompleteName(name), this);
                else
                    this._path = new XPath(name, this);
                this._path._isPath = true;
                return this._path;
            } else {
                this._path = null;
            }
        }

        // Add XPath Search Criteria
        addXPathCriteria(name:string):XPath {
            this.assert(this.hasAttribute(name), `"${name} is not in list of possible values: ${Object.keys(this.getAttributes()).join()}.`);
            let xpath:XPath;
            if (name in this._associations)
                xpath = new XPath(this.getAssociationCompleteName(name), this);
            else
                xpath = new XPath(name, this);

            if (xpath._nthPath > 0)
                xpath.setBooleanOperand(BooleanOperandsEnum.And);
            this._xPathCriteria.push(xpath);
            return xpath;
        }

        // Move XPath Criteria up and returns true if successful;
        moveXPathCriteriaUp() {
            let max = this.getParent().getXPathCriterias().length - 1;
            if ((this._nthPath === 0) || (max === 0))
                return false;

            let otherXPathCriteria = this.getParent().getXPathCriterias()[this._nthPath - 1];
            this.getParent().getXPathCriterias()[this._nthPath] = otherXPathCriteria;
            this.getParent().getXPathCriterias()[this._nthPath - 1] = this;
            this._nthPath -= 1;
            otherXPathCriteria._nthPath += 1;
            return true;
        }

        // Move XPath Criteria down and returns true if successful;
        moveXPathCriteriaDown() {
            let max = this.getParent().getXPathCriterias().length - 1;
            if ((this._nthPath === max))
                return false;

            let otherXPathCriteria = this.getParent().getXPathCriterias()[this._nthPath + 1];
            this.getParent().getXPathCriterias()[this._nthPath] = otherXPathCriteria;
            this.getParent().getXPathCriterias()[this._nthPath + 1] = this;
            this._nthPath += 1;
            otherXPathCriteria._nthPath -= 1;
            return true;
        }

        // Add new XPath Parameter
        addXPathParameter(name:string, value?:string, valueType?:PathTypeEnum):XPath {
            let xpath;
            if (this.isAttributeAnAssociation(name))
                xpath = new XPath(this.getAssociationCompleteName(name), this, value, valueType, true);
            else
                xpath = new XPath(name, this, value, valueType, true);

            this._xPathParameters.push(xpath);
            return xpath;
        }

        // Remove an XPath criteria
        removeXPathCriteria(xpathOrPosition:any) {
            if (typeof xpathOrPosition === "number") {
                let xpath = this._xPathCriteria[xpathOrPosition];
                this._xPathCriteria.splice(xpathOrPosition, 1);
            }
            else {
                let index = this._xPathCriteria.indexOf(xpathOrPosition);
                this._xPathCriteria.splice(index, 1);
            }
            // Re-index
            dojoArray.forEach(this._xPathCriteria, function(item, index) {
                item._nthPath = index;
            })
        }

        // Adds an attribute to the list and checks if it is an association's entity is passed
        addPathAttribute(path:string, type:PathTypeEnum, entityName?:string) {
            this._attributes[path] = type;
            if (ReferenceTypes.indexOf(type) >= 0) {
                this.assert(entityName, `Need entityName for association ${path} on ${this._name}`);
                this._associations[path] = this.getMxMeta(entityName).getSelectorEntity(path);
            }
            return this;
        }

        // Association getter
        getAssociations() {
            return this._associations;
        }

        // Returns the number of expected parameters for this function
        numberOfExpressionParameters():number {
            return ExpressionConfig.get(this._expressionType).numberOfArguments;
        }

        // Get value formatted
        getValue():any {
            this.assert(this._valueType !== PathTypeEnum.None, `${this.getName()} has no value set.`);
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
                    this.assert(false, `Incorrect value type ${this._valueType}`);
            }
            return null;
        }

        // Change type allows you to set the name and type at the same time
        changeType(name:string, value:any, valueType:any) {
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
        }

        // Set's the value of a value type path
        setValue(value:any, valueType:any) {
            this.assert(!this.isParentAttribute(this.getName()) || (valueType == PathTypeEnum.None), `${this.getName()} is an attribute and cannot have a value. Change the name first.`)
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
        }

        // Set the value of a Parameter
        setParamValue(param:number, value:any, valueType?:PathTypeEnum) {
            return this._xPathParameters[param].setValue(value, valueType);
        }

        // Get a parameter
        getParam(param:number) {
            return this._xPathParameters[param];
        }

        // Getter for type
        getType() {
            return this._type;
        }

        isValueType() {
            return ValueTypes.indexOf(this._type) >= 0;
        }

        isReference() {
            return (this.getType() !== PathTypeEnum.Entity) && (this.getName() in this.getParent()._attributes) && (this._name.indexOf(".") >= 0);
        }

        isAttributeType() {
            return (this.getType() !== PathTypeEnum.Entity) && (this.getParent() && !this.isReference() && (this.getName() in this.getParent()._attributes));
        }

        getEnumValues() {
            return this._enumValues;
        }

        compileAttributeXPath() {
            //this.assert(!this.isReference(), `References have no business here.`)
            return PathCompiler[this._type].xpath(this);
        }

        compileAttributeHTML() {
            //this.assert(!this.isReference(), `References have no business here.`)
            return PathCompiler[this._type].html(this, null);
        }

        getAttributes() {
            if (this.isEntity())
                return this._attributes;
            else
                return this.getParent()._attributes;
        }

        _changed(callback) {
            callback(this);
        }

        changed(callback?) {

        }

        onChange(callback) {
            this.changed = dojo.hitch(this, this._changed, callback);
        }

        getRoot() {
            if (!this.getParent())
                return this;
            var root = this.getParent();
            while (root.getParent()) {
                root = root.getParent();
            }
            return root;
        }

        isParameter() {
            return this._asParameter;
        }

        getParameterOwner(xpath:XPath) {
            if (!xpath)
                xpath = this;
            if (!xpath._asParameter)
                return null;
            let parent:XPath = xpath;

            while (parent) {
                parent = parent.getParent();
                let criterias = parent.getXPathCriterias();
                for (var criteriaIdx in criterias) {
                    let xpathCriteria = criterias[criteriaIdx];

                    for (var paramIdx in xpathCriteria._xPathParameters) {
                        let param = xpathCriteria._xPathParameters[paramIdx];
                        if (param._id === xpath._id)
                            return xpathCriteria;
                    }
                }
                if (parent._id == parent.getParent()._id)
                    return null;
            }
        }

        isPath() {
            return this._isPath;
        }

        getOperator() {
            return this._operator;
        }

        setOperator(operator: OperatorTypeEnum) {
            this._operator = operator;
        }

        private _id = guid();

        private _enumValues = {};
        // DOM node
        private _asParameter:boolean = false;
        private _expectedPathTypes:PathTypeEnum[] = [];

        // A literal value
        private _value:string;
        // The type of the literal value
        private _valueType:PathTypeEnum = PathTypeEnum.None;
        // Should I
        private _associationOnly:boolean;
        // This Path's excludes the entity name
        private _name:string = null;
        // The value type of _name
        private _type:PathTypeEnum = PathTypeEnum.None;
        // And/Or
        private _booleanOperand:BooleanOperandsEnum = BooleanOperandsEnum.None;
        // Expression/Functions
        private _expressionType:ExpressionTypeEnum = ExpressionTypeEnum.None;
        // Apply !
        private _not:boolean = false;
        // Start left parenthesis
        private _leftParenthesis:boolean = false;
        // Close right parenthesis
        private _rightParenthesis:boolean = false;
        // All created paths of current query level
        private _xPathCriteria:XPath[] = [];
        private _xPathParameters:XPath[] = [];
        // Level. 0 for root, then root+1..
        private _level = 0;
        // The nth Path Parameter
        private _nthPath = 0;
        // Attributes of Entity
        private _attributes = {};
        // The associations
        private _associations = {};
        // Path out of the attributes
        private _path:XPath;
        private _isPath:boolean = false;
        private _operator: OperatorTypeEnum = OperatorTypeEnum.Equals;
    }

    return XPath
});

