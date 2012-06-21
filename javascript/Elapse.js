(function () {
	var REG_EXP = {
		R_N : /\n/g,
		R_R : /\r/g,
		R_T : /\t/g,
		R_F : /\f/g,
		R_QUOTE : /\"/g,
		R_SLASH : /\\/g,
		R_TRIM : /(^\s*)|(\s*$)/g
	};

	function trim(str) {
		return str.replace(REG_EXP.R_TRIM, "");
	};

	var RUNTIME = "#TERUNTIME";
	var TEMPLATES = {};

	window[RUNTIME] = {
		outputVal : function(value, filter_data) {
			if(filter_data != false)
				return window[RUNTIME].outputUnicode(value);
			else {
				return value;
			}
		},
		outputUnicode : function(str) {
			str += "";
			var newStr = [];
			for(var i = 0, l = str.length; i < l; ++i) {
				newStr.push("&#" + str.charCodeAt(i));
			}
			return newStr.join("");
		},
		register : function(uri, template) {
			TEMPLATES[uri] = template;
		},
		include : function(uri, data) {
			if(TEMPLATES[uri] == undefined)
				throw "include exception: name \"" + uri + "\" not found.";
			return TEMPLATES[uri].render({
				data : data
			});
		}
	};

	//状态码
	var STATE = {
		STATIC_CONTENT : 0,
		JAVASCRIPT : 1,
		OUTPUT_VAL : 2,
		END_MARKER : 3,
		KEYWORD : 4,
		IF_CON : 5,
		ELSEIF_CON : 6,
		FORARR_CON : 7,
		SWITCH_CON : 8,
		CASE_CON : 9,
		FOREACH_CON : 10,
		FOR_CON : 11,
		EVAL_CON : 12,
		SET_CON : 13,
		IDEL : 14,
		NAME_CON : 15,
		INCLUDE_CON : 16,
		LOOP_CON : 17,
		WHILE_CON : 18
	};

	//关键字映射
	var KEYWORD = {
		IF : "if",
		FOREACH : "foreach",
		FORARR : "forarr",
		FOR : "for",
		SWITCH : "switch",
		ELSE : "else",
		ELSE_IF : "elseif",
		CASE : "case",
		BREAK : "break",
		CONTINUE : "continue",
		EVAL : "eval",
		SET : "set",
		NAME : "name",
		INCLUDE : "include",
		LOOP : "loop",
		WHILE : "while",
		DEFAULT : "default"
	};

	//关键字实际值
	var KEYWORD_STR = [];
	for(var keyWordName in KEYWORD) {
		KEYWORD_STR.push(KEYWORD[keyWordName]);
	}

	//字面常量列表
	var WORD_CONSTANT = ["true", "false", "undefined", "null", "NaN", "new", "delete"];

	var SINGLE_KEYWORD = [KEYWORD.BREAK, KEYWORD.CONTINUE, KEYWORD.CASE, KEYWORD.ELSE, KEYWORD.ELSE_IF, KEYWORD.EVAL, KEYWORD.SET, KEYWORD.NAME, KEYWORD.INCLUDE, KEYWORD.DEFAULT];

	//临时变量映射
	var TEMP_VAR_MAP = {
        length: "l",
        index: "i",
        value: "tv",
        key: "k",
        over: "o",
        step: "st"
	};

	//临时变量访问名称
	var TEMP_SHORTVARNAME = [];
	for(var name in TEMP_VAR_MAP) {
		TEMP_SHORTVARNAME.push(TEMP_VAR_MAP[name]);
	}

	var PARSEVAL_STATE = {
		FOUND_VAL : 0,
		FINDING : 1,
		FOUND_STR_START_QUOTE : 2,
		FOUND_STR_START_SINGLEQUOTE : 3,
		FOUND_LEFT_SQUARE : 4,
		FOUND_RIGHT_SQUARE : 5
	};

	var PARSE_ITERVALNAME = {
		FOUND_AS : 1,
		FOUND_STR_START_QUOTE : 2,
		FOUND_STR_START_SINGLEQUOTE : 3,
		FOUND_LEFT_SQUARE : 4,
		FOUND_RIGHT_SQUARE : 5,
		FINDING : 6,
		FOUND_VAL : 7
	};

	var FIND_LOOP_SETTINGS = {
		FOUND_STR_START_QUOTE : 2,
		FOUND_STR_START_SINGLEQUOTE : 3,
		FOUND_LEFT_SQUARE : 4,
		FOUND_RIGHT_SQUARE : 5,
		FINDING : 6,
		FOUND_VAL : 7
	};

	function inArray(value, arr) {
		for(var i = 0, l = arr.length; i < l; ++i) {
			if(arr[i] == value)
				return true;
		}
		return false;
	};

	var Translater = {
		parseStaticContent : function(staticContent) {
			return "cb.push(\"" + staticContent.replace(REG_EXP.R_SLASH, "\\\\").replace(REG_EXP.R_QUOTE, "\\\"") + "\");";
		},
		parseLoopSetting : function(source) {
			var state = FIND_LOOP_SETTINGS.FINDING;
			//目标迭代集合是否找到？
			var settings = [];
			var valBuffer = [];
			source = trim(source);
			for(var i = 0, l = source.length; i < l; ++i) {
				var curChar = source.charAt(i);
				switch(state) {
					case FIND_LOOP_SETTINGS.FINDING:
						if(curChar == ",") {
							settings.push(valBuffer.join(""));
							valBuffer = [];
							continue;
						}
						if(i == source.length - 1) {
                            valBuffer.push(curChar);
							settings.push(valBuffer.join(""));
							valBuffer = [];
							continue;
						}
						valBuffer.push(curChar);
						if(curChar == "\"") {
							state = FIND_LOOP_SETTINGS.FOUND_STR_START_QUOTE;
							continue;
						}
						if(curChar == "\'") {
							state = FIND_LOOP_SETTINGS.FOUND_STR_START_SINGLEQUOTE;
							continue;
						}
						var charCode = curChar.charCodeAt(0);
						if(curChar == "@" || curChar == "#" || charCode == 36 || charCode == 95 || (charCode >= 97 && charCode <= 122 ) || (charCode >= 65 && charCode <= 90 )) {
							state = FIND_LOOP_SETTINGS.FOUND_VAL;
							continue;
						}
						break;
					case FIND_LOOP_SETTINGS.FOUND_STR_START_QUOTE:
						valBuffer.push(curChar);
						if(curChar == "\"") {
							state = FIND_LOOP_SETTINGS.FINDING;
							continue;
						}
						break;
					case FIND_LOOP_SETTINGS.FOUND_STR_START_SINGLEQUOTE:
						valBuffer.push(curChar);
						if(curChar == "\'") {
							state = FIND_LOOP_SETTINGS.FINDING;
							continue;
						}
						break;
					case FIND_LOOP_SETTINGS.FOUND_LEFT_SQUARE:
						valBuffer.push(curChar);
						if(curChar == "]") {
							state = FIND_LOOP_SETTINGS.FOUND_VAL;
							continue;
						}
						break;
					case FIND_LOOP_SETTINGS.FOUND_VAL:
						var charCode = curChar.charCodeAt(0);
						if(curChar == "[") {
							valBuffer.push(curChar);
							state = FIND_LOOP_SETTINGS.FOUND_LEFT_SQUARE;
							continue;
						}
						if(curChar == "#" || parseInt(curChar) == curChar || curChar == "." || curChar == "[" || curChar == "]" || charCode == 36 || charCode == 95 || (charCode >= 97 && charCode <= 122 ) || (charCode >= 65 && charCode <= 90 )) {
							valBuffer.push(curChar);
							continue;
						} else {
							if(curChar == ",")
								--i;
							state = FIND_LOOP_SETTINGS.FINDING;
							continue;
						}
						break;
				}
			}
			return settings;
		},
		parseIterValName : function(source) {
			var state = PARSE_ITERVALNAME.FINDING;
			//目标迭代集合是否找到？
			var parsedSource = [];
			var tmpVars = [];
			var tmpVarBuffer = [];
			for(var i = 0, l = source.length; i < l; ++i) {
				var curChar = source.charAt(i);
				switch(state) {
					case PARSE_ITERVALNAME.FINDING:
						if(curChar == "a" && source.charAt(i + 1) == "s" && source.charAt(i + 2) == " ") {
							i += 2;
							state = PARSE_ITERVALNAME.FOUND_AS;
							continue;
						}
						parsedSource.push(curChar);
						if(curChar == "\"") {
							state = PARSE_ITERVALNAME.FOUND_STR_START_QUOTE;
							continue;
						}
						if(curChar == "\'") {
							state = PARSE_ITERVALNAME.FOUND_STR_START_SINGLEQUOTE;
							continue;
						}
						var charCode = curChar.charCodeAt(0);
						if(curChar == "@" || curChar == "#" || charCode == 36 || charCode == 95 || (charCode >= 97 && charCode <= 122 ) || (charCode >= 65 && charCode <= 90 )) {
							state = PARSE_ITERVALNAME.FOUND_VAL;
							continue;
						}
						break;
					case PARSE_ITERVALNAME.FOUND_AS:
						if(curChar == " " || i == (source.length - 1)) {
							if(tmpVarBuffer.length <= 0)
								continue;
							else {
								tmpVarBuffer.push(curChar);
								state = PARSE_ITERVALNAME.FINDING;
                                tmpVars.push(tmpVarBuffer.join(""));
								tmpVarBuffer = [];
								continue;
							}
						} else {
							tmpVarBuffer.push(curChar);
							continue;
						}
						break;
					case PARSE_ITERVALNAME.FOUND_STR_START_QUOTE:
						parsedSource.push(curChar);
						if(curChar == "\"") {
							state = PARSE_ITERVALNAME.FINDING;
							continue;
						}
						break;
					case PARSE_ITERVALNAME.FOUND_STR_START_SINGLEQUOTE:
						parsedSource.push(curChar);
						if(curChar == "\'") {
							state = PARSE_ITERVALNAME.FINDING;
							continue;
						}
						break;
					case PARSE_ITERVALNAME.FOUND_LEFT_SQUARE:
						parsedSource.push(curChar);
						if(curChar == "]") {
							state = PARSE_ITERVALNAME.FOUND_VAL;
							continue;
						}
						break;
					case PARSE_ITERVALNAME.FOUND_VAL:
						var charCode = curChar.charCodeAt(0);
						if(curChar == "[") {
						parsedSource.push(curChar);
							state = PARSE_ITERVALNAME.FOUND_LEFT_SQUARE;
							continue;
						}
						if(curChar == "#" || parseInt(curChar) == curChar || curChar == "." || curChar == "[" || curChar == "]" || charCode == 36 || charCode == 95 || (charCode >= 97 && charCode <= 122 ) || (charCode >= 65 && charCode <= 90 )) {
						    parsedSource.push(curChar);
							continue;
						} else {
						    parsedSource.push(curChar);
							state = PARSE_ITERVALNAME.FINDING;
							continue;
						}
						break;
				}
			}
			return [parsedSource.join(""), tmpVars[0]];
		},
		/**
		 * 处理变量
		 */
		parseVal : function(source) {
			source += " ";
			var state = PARSEVAL_STATE.FINDING;
			var parsedSource = [];
			var varBuffer = [];
			for(var i = 0, l = source.length; i < l; ++i) {
				var curChar = source.charAt(i);
				switch(state) {
					case PARSEVAL_STATE.FINDING:
						if(curChar == "\"") {
							state = PARSEVAL_STATE.FOUND_STR_START_QUOTE;
							parsedSource.push(curChar);
							continue;
						}
						if(curChar == "\'") {
							state = PARSEVAL_STATE.FOUND_STR_START_SINGLEQUOTE;
							parsedSource.push(curChar);
							continue;
						}
						var charCode = curChar.charCodeAt(0);
						if(curChar == "@" || curChar == "#" || charCode == 36 || charCode == 95 || (charCode >= 97 && charCode <= 122 ) || (charCode >= 65 && charCode <= 90 )) {
							varBuffer = [curChar];
							state = PARSEVAL_STATE.FOUND_VAL;
							continue;
						}
						parsedSource.push(curChar);
						break;
					case PARSEVAL_STATE.FOUND_STR_START_QUOTE:
						parsedSource.push(curChar);
						if(curChar == "\"") {
							state = PARSEVAL_STATE.FINDING;
							continue;
						}
						break;
					case PARSEVAL_STATE.FOUND_STR_START_SINGLEQUOTE:
						parsedSource.push(curChar);
						if(curChar == "\'") {
							state = PARSEVAL_STATE.FINDING;
							continue;
						}
						break;
					case PARSEVAL_STATE.FOUND_LEFT_SQUARE:
						varBuffer.push(curChar);
						if(curChar == "]") {
							//处理方括号内的内容
                            var varBufferStr = varBuffer.join("");
							var leftSquareIndex = varBufferStr.indexOf("[");
							var rightSquareIndex = varBufferStr.lastIndexOf("]");
							if(leftSquareIndex != -1 && rightSquareIndex != -1) {
								//处理值表达式
								var content = Translater.parseVal(trim(varBufferStr.substring(leftSquareIndex + 1, rightSquareIndex)));
								varBufferStr = varBufferStr.substring(0, leftSquareIndex + 1) + content + varBufferStr.substr(rightSquareIndex);
								state = PARSEVAL_STATE.FOUND_VAL;
                                varBuffer = [varBufferStr];
								continue;
							}
						}
						break;
					case PARSEVAL_STATE.FOUND_VAL:
						var charCode = curChar.charCodeAt(0);
						if(curChar == "[") {
							state = PARSEVAL_STATE.FOUND_LEFT_SQUARE;
							varBuffer.push(curChar);
							continue;
						}
						if(curChar == "#" || parseInt(curChar) == curChar || curChar == "." || curChar == "[" || curChar == "]" || charCode == 36 || charCode == 95 || (charCode >= 97 && charCode <= 122 ) || (charCode >= 65 && charCode <= 90 )) {
							varBuffer.push(curChar);
						} else {
							state = PARSEVAL_STATE.FINDING;
                            var varBufferStr = varBuffer.join("");
							if(inArray(varBufferStr, WORD_CONSTANT) == false) {
								//三种变量:
								//#:注入数据,@:全局变量,局部临时变量
								switch(varBufferStr.charAt(0)) {
									//注入数据
									case "#":
										varBufferStr = varBufferStr.substr(1);
										//直接访问子对象?
										if(varBufferStr.charAt(0) == ".")
											varBufferStr = varBufferStr.substr(1);
										//通过判断变量长度来确定是直接访问父对象还是访问子对象
										if(varBufferStr && varBufferStr.length > 0) {
											if(varBufferStr.charAt(0) == "[") {
												varBufferStr = "vsb" + varBufferStr;
											} else {
												varBufferStr = "vsb." + varBufferStr;
											}
										} else {
											varBufferStr = "vsb";
										}
                                        varBuffer = [varBufferStr];
										break;
									//window全局
									case "@":
										varBufferStr = varBufferStr.substr(1);
										//直接访问子对象?
										if(varBufferStr.charAt(0) == ".")
											varBufferStr = varBufferStr.substr(1);
										//通过判断变量长度来确定是直接访问父对象还是访问子对象
										if(varBufferStr && varBufferStr.length > 0) {
											if(varBufferStr.charAt(0) == "[") {
												varBufferStr = "window" + varBufferStr;
											} else {
												varBufferStr = "window." + varBufferStr;
											}
										} else {
											varBufferStr = "window";
										}
                                        varBuffer = [varBufferStr];
										break;
									//临时变量
									default:
                                        var tempNameSplited = varBuffer.join("").split(".");
                                        var subVars = tempNameSplited.shift().split("#");
                                        var varName = subVars.shift();
                                        if(subVars.length > 0)
                                        {
                                            var subVar = TEMP_VAR_MAP[subVars[0]];
                                            if(subVar === undefined)
                                            {
                                                throw "tempvar exception: no such tempvar \"#" + subVar + "\".";
                                                varBuffer = ["\"\""];
                                            }
                                            else
                                            {
                                                tempNameSplited.unshift(subVar);
                                            }
                                        }
                                        else
                                        {
                                            tempNameSplited.unshift("v");
                                        }
                                        var squareSplited = varName.split("[");
                                        if(squareSplited.length > 1)
                                        {
                                        	var nextAll = "v[" + squareSplited.slice(1);
                                        	squareSplited.splice(1);
                                        	squareSplited = squareSplited.concat(nextAll);
                                        	varBuffer = ["tsb." + squareSplited.join(".")];
                                        }
                                        else
                                        {
                                        	varBuffer = ["tsb." + varName + "." + tempNameSplited.join(".")];
                                        }
								}
							}
                            varBuffer.push(curChar);
							parsedSource = parsedSource.concat(varBuffer);
							varBuffer = [];
							continue;
						}
						break;
				}
			}
            parsedSource = parsedSource.join("");
			return parsedSource.substr(0, parsedSource.length - 1);
		},
		/**
		 * 开始翻译
		 * @option source 源代码
		 */
		start : function(source) {
			source += " ";
			var javascriptSource = ["var vsb=arguments[0],tsb={},settings={},rt=window[\"" + RUNTIME + "\"],cb=[];"];
			var staticContentBuffer = [];
			var keywordBuffer = [];
			var outputValBuffer = [];
			var valBuffer = [];
			var codeFound = 0;
			var userSettings = {};
			var state = STATE.STATIC_CONTENT;
			//代码现在是否为回归完成翻译阶段?
			var returnComplete = false;
            for(var i = 0, l = source.length; i < l; ++i) {
                var curChar = source.charAt(i);
                //判断是否离开代码段
                if(curChar == "}") {
                    //进行一些补全操作，将来优化翻译器逻辑可能会避免以下的switch的出现。
                    switch(state) {
                        //如果是输出代码，补全输出语句。
                        case STATE.OUTPUT_VAL:
                            javascriptSource.push("cb.push(rt.outputVal(" + Translater.parseVal(outputValBuffer.join("")) + ",settings[\"filter_data\"]));");
                            outputValBuffer = [];
                            break;
                        //静态内容直接添加到缓存，但是代码回归完成状态除外。
                        case STATE.STATIC_CONTENT:
                            if(returnComplete == false)
                                staticContentBuffer.push(curChar);
                            break;
                    }
                    //如果关键字语句段还未处理完毕，回归到上一次循环，完成关键字代码。
                    if(keywordBuffer.length > 0) {
                        state = STATE.KEYWORD;
                        returnComplete = true;
                        i -= 2;
                        continue;
                    }
                    returnComplete = false;
                    state = STATE.STATIC_CONTENT;
                    continue;
                }
                switch(state) {
                    case STATE.STATIC_CONTENT:
                        //判断是否进入代码段
                        if(curChar == "$" && source.charAt(i + 1) == "{") {
                            if(trim(staticContentBuffer.join("")).length > 0) {
                                //保护代码不被空白内容破坏
                                javascriptSource.push(Translater.parseStaticContent(staticContentBuffer.join("")));
                            }
                            //清空静态缓存，保证不会出问题。
                            staticContentBuffer = [];
                            state = STATE.JAVASCRIPT;
                            //记录翻译器可以识别的代码的发现数量，用于判断每次新发现的位置有一些语法要依据位置，例如直接输出变量{T.abc}，发现$并且codeFound==0即可确认这是输出变量语句。
                            codeFound = 0;
                            ++ i;
                            continue;
                        }
                        staticContentBuffer.push(curChar);
                        break;
                    case STATE.JAVASCRIPT:
                        switch(curChar) {
                            //输出转义静态内容
                            case "\\":
                                if(codeFound == 0) {
                                    staticContentBuffer.push(source.charAt(i + 1));
                                    if(source.charAt(i + 2) != "}") {
                                        return;
                                    }
                                    state = STATE.STATIC_CONTENT; ++i; ++codeFound;
                                    continue;
                                }
                                break;
                            case "/":
                                if(codeFound == 0) {
                                    javascriptSource.push("}");
                                    state = STATE.END_MARKER; ++codeFound;
                                    continue;
                                }
                            default:
                                if(curChar != " ") {
                                    keywordBuffer.push(curChar);
                                } else {
                                    if(keywordBuffer.length > 0) {
                                        state = STATE.KEYWORD; ++codeFound;
                                        continue;
                                    }
                                }
                                break;
                        }
                        break;
                    case STATE.OUTPUT_VAL:
                        outputValBuffer.push(curChar);
                        break;
                    case STATE.IF_CON:
                        valBuffer.push(curChar);
                        break;
                    case STATE.ELSEIF_CON:
                        valBuffer.push(curChar);
                        break;
                    case STATE.FORARR_CON:
                        valBuffer.push(curChar);
                        break;
                    case STATE.FOREACH_CON:
                        valBuffer.push(curChar);
                        break;
                    case STATE.FOR_CON:
                        valBuffer.push(curChar);
                        break;
                    case STATE.SWITCH_CON:
                        valBuffer.push(curChar);
                        break;
                    case STATE.CASE_CON:
                        valBuffer.push(curChar);
                        break;
                    case STATE.LOOP_CON:
                        valBuffer.push(curChar);
                        break;
                    case STATE.EVAL_CON:
                        valBuffer.push(curChar);
                        break;
                    case STATE.SET_CON:
                        valBuffer.push(curChar);
                        break;
                    case STATE.END_MARKER:
                        break;
                    case STATE.NAME_CON:
                        valBuffer.push(curChar);
                        break;
                    case STATE.WHILE_CON:
                        valBuffer.push(curChar);
                        break;
                    case STATE.INCLUDE_CON:
                        valBuffer.push(curChar);
                        break;
                    case STATE.IDEL:
                        break;
                    case STATE.KEYWORD:
                        switch(keywordBuffer.join("")) {
                            case KEYWORD.IF:
                                if(valBuffer.length > 0) {
                                    javascriptSource.push(Translater.parseVal(valBuffer.join("")) + "){");
                                    valBuffer = [];
                                    keywordBuffer = [];
                                    state = STATE.STATIC_CONTENT;
                                    continue;
                                } else {
                                    javascriptSource.push("if(");
                                    valBuffer = [curChar];
                                    state = STATE.IF_CON;
                                    continue;
                                }
                                break;
                            case KEYWORD.ELSE:
                                javascriptSource.push("}else{");
                                keywordBuffer = [];
                                state = STATE.STATIC_CONTENT;
                                break;
                            case KEYWORD.ELSE_IF:
                                if(valBuffer.length > 0) {
                                    javascriptSource.push(Translater.parseVal(valBuffer.join("")) + "){");
                                    valBuffer = [];
                                    keywordBuffer = [];
                                    state = STATE.STATIC_CONTENT;
                                    continue;
                                } else {
                                    javascriptSource.push("}else if(");
                                    valBuffer = [curChar];
                                    state = STATE.ELSEIF_CON;
                                }
                                break;
                            case KEYWORD.SWITCH:
                                if(valBuffer.length > 0) {
                                    javascriptSource.push(Translater.parseVal(valBuffer.join("")) + "){");
                                    valBuffer = [];
                                    keywordBuffer = [];
                                    state = STATE.STATIC_CONTENT;
                                    continue;
                                } else {
                                    javascriptSource.push("switch(");
                                    valBuffer = [curChar];
                                    state = STATE.SWITCH_CON;
                                    continue;
                                }
                                break;
                            case KEYWORD.CASE:
                                if(valBuffer.length > 0) {
                                    javascriptSource.push(Translater.parseVal(valBuffer.join("")) + ":");
                                    valBuffer = [];
                                    keywordBuffer = [];
                                    state = STATE.STATIC_CONTENT;
                                    continue;
                                } else {
                                    javascriptSource.push("case ");
                                    valBuffer = [curChar];
                                    state = STATE.CASE_CON;
                                }
                                break;
                            case KEYWORD.BREAK:
                                javascriptSource.push("break;");
                                keywordBuffer = [];
                                state = STATE.STATIC_CONTENT;
                                break;
                            case KEYWORD.CONTINUE:
                                javascriptSource.push("continue;");
                                keywordBuffer = [];
                                state = STATE.STATIC_CONTENT;
                                break;
                            case KEYWORD.DEFAULT:
                                javascriptSource.push("default:");
                                keywordBuffer = [];
                                state = STATE.STATIC_CONTENT;
                                break;
                            case KEYWORD.EVAL:
                                if(valBuffer.length > 0) {
                                    javascriptSource.push(Translater.parseVal(valBuffer.join("")) + ";");
                                    valBuffer = [];
                                    keywordBuffer = [];
                                    state = STATE.STATIC_CONTENT;
                                    continue;
                                } else {
                                    valBuffer = [curChar];
                                    state = STATE.EVAL_CON;
                                    continue;
                                }
                                break;
                            case KEYWORD.SET:
                                if(valBuffer.length > 0) {
                                    var setting = valBuffer.join("").split(":");
                                    javascriptSource.push("settings[\"" + trim(setting[0]) + "\"]=" + trim(setting[1]) + ";");
                                    valBuffer = [];
                                    keywordBuffer = [];
                                    state = STATE.STATIC_CONTENT;
                                    continue;
                                } else {
                                    valBuffer = [curChar];
                                    state = STATE.SET_CON;
                                    continue;
                                }
                                break;
                            case KEYWORD.NAME:
                                if(valBuffer.length > 0) {
                                    userSettings[KEYWORD.NAME] = trim(valBuffer.join(""));
                                    valBuffer = [];
                                    keywordBuffer = [];
                                    state = STATE.STATIC_CONTENT;
                                    continue;
                                } else {
                                    valBuffer = [curChar];
                                    state = STATE.NAME_CON;
                                    continue;
                                }
                                break;
                            case KEYWORD.INCLUDE:
                                if(valBuffer.length > 0) {
                                    var setting = valBuffer.join("").split(":");
                                    setting[1] = setting.length >= 2 ? trim(setting.slice(1).join(":")) : null;
                                    javascriptSource.push("cb.push(rt.include(\"" + setting[0] + "\"," + (setting[1] ? Translater.parseVal(setting[1]) : null) + "));");
                                    userSettings[KEYWORD.INCLUDE] = userSettings[KEYWORD.INCLUDE] || {};
                                    userSettings[KEYWORD.INCLUDE][setting[0]] = true;
                                    valBuffer = [];
                                    keywordBuffer = [];
                                    state = STATE.STATIC_CONTENT;
                                    continue;
                                } else {
                                    valBuffer = [curChar];
                                    state = STATE.INCLUDE_CON;
                                    continue;
                                }
                                break;
                            case KEYWORD.FORARR:
                                if(valBuffer.length > 0) {
                                    var iterInfo = Translater.parseIterValName(valBuffer.join(""));
                                    var tsbval = "tsb[\"" + (iterInfo[1] || new Date().getTime()) + "\"]";
                                    var indexName = tsbval + ".i";
                                    var lengthName = tsbval + ".l";
                                    var finalValName = trim(Translater.parseVal(iterInfo[0]));
                                    javascriptSource.push(tsbval + "={};for(" + indexName + "=0," + lengthName + "=" + finalValName + ".length;" + indexName + "<" + lengthName + ";++" + indexName + "){" + tsbval + ".v" + "=" + finalValName + "[" + indexName + "];");
                                    valBuffer = [];
                                    keywordBuffer = [];
                                    state = STATE.STATIC_CONTENT;
                                    continue;
                                } else {
                                    valBuffer = [curChar];
                                    state = STATE.FORARR_CON;
                                    continue;
                                }
                                break;
                            case KEYWORD.FOREACH:
                                if(valBuffer.length > 0) {
                                    var iterInfo = Translater.parseIterValName(valBuffer.join(""));
                                    var tsbval = "tsb[\"" + (iterInfo[1] || new Date().getTime()) + "\"]";
                                    var keyName = tsbval + ".k";
                                    var finalValName = Translater.parseVal(iterInfo[0]);
                                    javascriptSource.push(tsbval + "={};for(" + keyName + " in " + finalValName + "){" + tsbval + ".v=" + finalValName + "[" + keyName + "];");
                                    valBuffer = [];
                                    keywordBuffer = [];
                                    state = STATE.STATIC_CONTENT;
                                    continue;
                                } else {
                                    valBuffer = [curChar];
                                    state = STATE.FOREACH_CON;
                                    continue;
                                }
                                break;
                            case KEYWORD.LOOP:
                                if(valBuffer.length > 0) {
                                    var iterInfo = Translater.parseIterValName(valBuffer.join(""));
                                    var tsbval = "tsb[\"" + ( iterInfo[1] || new Date().getTime() ) + "\"]";
                                    var indexName = tsbval + ".v";
                                    var lengthName = tsbval + ".o";
                                    var stepName = tsbval + ".st";
                                    var setting = Translater.parseLoopSetting(iterInfo[0]);
                                    if(setting.length <= 1)
                                        setting.push(1);
                                    if(setting.length <= 2)
                                        setting.push(0);
                                    javascriptSource.push(tsbval + "={};for(" + indexName + "=" + Translater.parseVal(setting[2]) + "," + lengthName + "=" + Translater.parseVal(setting[0]) + "," + stepName + "=" + Translater.parseVal(setting[1]) + ";" + indexName + "<" + lengthName + ";" + indexName + "+=" + stepName + "){");
                                    valBuffer = [];
                                    keywordBuffer = [];
                                    state = STATE.STATIC_CONTENT;
                                    continue;
                                } else {
                                    valBuffer = [curChar];
                                    state = STATE.LOOP_CON;
                                    continue;
                                }
                                break;
                            case KEYWORD.WHILE:
                                if(valBuffer.length > 0) {
                                    javascriptSource.push("while(" + Translater.parseVal(valBuffer.join("")) + "){");
                                    valBuffer = [];
                                    keywordBuffer = [];
                                    state = STATE.STATIC_CONTENT;
                                    continue;
                                } else {
                                    valBuffer = [curChar];
                                    state = STATE.WHILE_CON;
                                    continue;
                                }
                                break;
                            default:
                                ++codeFound;
                                //回归完成翻译阶段不要将当前char添加到缓存，会导致char重复。
                                outputValBuffer.push(keywordBuffer.join("") + ( returnComplete ? "" : curChar));
                                state = STATE.OUTPUT_VAL;
                                valBuffer = [];
                                keywordBuffer = [];
                                continue;
                        }
                        break;
                }
			}
			if(staticContentBuffer.length > 0)
				javascriptSource.push(Translater.parseStaticContent(staticContentBuffer.join("")));
			javascriptSource.push("return cb.join(\"\");");
			return {
				builderSource : javascriptSource.join("").replace(REG_EXP.R_N, "\\n").replace(REG_EXP.R_R, "\\r").replace(REG_EXP.R_T, "\\t").replace(REG_EXP.R_F, "\\f"),
				userSettings : userSettings
			};
		}
	};

	/**
	 * @option source
	 * @option complete
	 */
	function Template(options) {
		this.compiled = Translater.start(options.source);
        //console.log(this.compiled.builderSource)
		this.builder = new Function(this.compiled.builderSource);
		var self = this;
		if(this.compiled.userSettings) {
			var name = this.compiled.userSettings[KEYWORD.NAME];
			var includes = this.compiled.userSettings[KEYWORD.INCLUDE];
			var loadCount = 0;
			var hasInclude = false;
			if(includes) {
				for(var includeName in includes) {
					if(TEMPLATES.hasOwnProperty(includeName) == false) {
						hasInclude = true; ++loadCount;
						loadTemplate(includeName, function() {
							if(--loadCount <= 0) {
								if(name)
									window[RUNTIME].register(name, self);
								options.complete(self);
							}
						});
					}
				}
			}
			if(hasInclude == false) {
				if(name)
					window[RUNTIME].register(name, this);
				options.complete(self);
			}
		}
        delete this.compiled;
	};

	/**
	 * data
	 */
	Template.prototype.render = function(options) {
        options  = options || {};
		return this.builder(options.data);
	};
	//模板loader
	var templateLoader = function (name, setter) {
        setter("\"" + name + "\"无法加载，未设置loader。");
    };
	//load模板方法
	function loadTemplate(name, complete) {
		templateLoader(name, function(source) {
			Engine.compile({
				source : source,
				complete : function(template) {
					if(complete)
						complete(template);
				}
			});
		});
	};

	var Engine = {
		/**
		 * loader
		 */
		setLoader : function(options) {
			templateLoader = options.loader;
		},
		/**
		 * return void
		 * @option source
		 * @option data
		 * @option complete
		 */
		renderFromSource : function(options) {
            options  = options || {};
			Engine.compile({
				source : options.source,
				complete : function(template) {
					var text = Engine.render({
						template : template,
						data : options.data
					});
					options.complete(text);
				}
			});
		},
		/**
		 * return String
		 * @option template
		 * @option data
		 */
		render : function(options) {
            options  = options || {};
			return options.template.render({
				data : options.data || {}
			});
		},
		/**
		 * return Template
		 * @option source
		 * @option complete
		 */
		compile : function(options) {
            options  = options || {};
			new Template({
				source : options.source,
				complete : function(template) {
					options.complete(template);
				}
			});
		},
		/**
		 * name
		 * complete
		 */
		getTemplate : function(options) {
            options  = options || {};
			if(TEMPLATES.hasOwnProperty(options.name)) {
				if(options.complete)
					options.complete(TEMPLATES[options.name]);
			} else {
				loadTemplate(options.name, function(template) {
					if(options.complete)
						options.complete(template);
				});
			}
		},
		/**
		 * name
		 */
		removeTemplate : function(options) {
            options  = options || {};
			delete TEMPLATES[options.name];
		}
	};
	window.Elapse = Engine;
})()
