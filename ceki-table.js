(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactCekiTable"] = factory(require("react"));
	else
		root["ReactCekiTable"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.bodyMoveClass = exports.thClassActiveReverse = exports.thClassActive = exports.thClassDragZoneAfter = exports.thClassDragZoneBefore = exports.thClassDragZoneBefore_ = exports.thClassDragZoneActive_ = exports.thClassDragZone = exports.thClassMove = exports.thClassText = exports.thClassDrag = exports.thClass = exports.colClassActive = exports.colClass = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var initialSortState = {
    sortBy: null,
    sortReverseOrder: false
};
var initialState = Object.assign({
    columnOrder: null
}, initialSortState);

var colClass = exports.colClass = 'ceki-table__col';
var colClassActive = exports.colClassActive = 'ceki-table__col ceki-table__col--active';

var thClass = exports.thClass = 'ceki-table__th';
var thClassDrag = exports.thClassDrag = 'ceki-table__th-drag';
var thClassText = exports.thClassText = 'ceki-table__th-text';
var thClassMove = exports.thClassMove = 'ceki-table__th--move';

var thClassDragZone = exports.thClassDragZone = 'ceki-table__th-dragzone';
var thClassDragZoneActive_ = exports.thClassDragZoneActive_ = thClassDragZone + '--active';
var thClassDragZoneBefore_ = exports.thClassDragZoneBefore_ = thClassDragZone + '--before';
var thClassDragZoneBefore = exports.thClassDragZoneBefore = thClassDragZone + ' ' + thClassDragZoneBefore_;
var thClassDragZoneAfter = exports.thClassDragZoneAfter = thClassDragZone + ' ' + thClassDragZone + '--after';

var thClassActive = exports.thClassActive = 'ceki-table__th ceki-table__th--active';
var thClassActiveReverse = exports.thClassActiveReverse = 'ceki-table__th ceki-table__th--active ceki-table__th--reverse';

var bodyMoveClass = exports.bodyMoveClass = 'ceki-table-move';

var CekiTable = function (_Component) {
    _inherits(CekiTable, _Component);

    function CekiTable() {
        _classCallCheck(this, CekiTable);

        var _this = _possibleConstructorReturn(this, (CekiTable.__proto__ || Object.getPrototypeOf(CekiTable)).call(this));

        _this.state = initialState;
        return _this;
    }

    _createClass(CekiTable, [{
        key: 'handleHeaderClick',
        value: function handleHeaderClick(header) {
            var state = { sortBy: header };
            if (header === this.state.sortBy) {
                var sortReverseOrder = this.state.sortReverseOrder;

                if (sortReverseOrder !== initialSortState.sortReverseOrder) {
                    return this.setState(initialSortState);
                }
                state.sortReverseOrder = !this.state.sortReverseOrder;
            }
            this.setState(state);
        }
    }, {
        key: 'getSortedRows',
        value: function getSortedRows(rows) {
            var sortBy = this.state.sortBy;
            var sortByIndex = this.props.headers.indexOf(sortBy);
            var sortReverseOrder = this.state.sortReverseOrder;
            if (sortBy === null || sortBy === undefined) {
                return rows;
            }
            var rowsCopy = rows.concat();
            var prevLess = sortReverseOrder ? 1 : -1;
            var prevMore = sortReverseOrder ? -1 : 1;
            // TODO: cache
            return rowsCopy.sort(function (prevRow, nextRow) {
                var prevVal = prevRow[sortByIndex];
                var nextVal = nextRow[sortByIndex];
                if (prevVal < nextVal) {
                    return prevLess;
                }
                if (prevVal > nextVal) {
                    return prevMore;
                }
                return 0;
            });
        }
    }, {
        key: 'getSortedColumns',
        value: function getSortedColumns(headers, rows) {
            var columnOrder = this.state.columnOrder;

            if (!columnOrder) {
                return { headers: headers, rows: rows };
            }
            var sortedRows = [];
            for (var i = 0; i < rows.length; i++) {
                var currentRow = rows[i];
                var newRow = [];
                for (var _i = 0; _i < columnOrder.length; _i++) {
                    var sortedHeader = columnOrder[_i];
                    var currentIndex = headers.indexOf(sortedHeader);
                    newRow.push(currentRow[currentIndex]);
                }
                sortedRows.push(newRow);
            }
            return { headers: columnOrder, rows: sortedRows };
        }
    }, {
        key: 'changeColumnOrder',
        value: function changeColumnOrder(currentIndex, newIndex, insertBefore) {
            var bounds = insertBefore ? -1 : 1;
            if (currentIndex === newIndex + bounds) {
                return;
            }
            var order = this.state.columnOrder || this.props.headers.concat();
            var maxIndex = order.length - 1;
            newIndex = Math.min(newIndex, maxIndex);
            newIndex = Math.max(0, newIndex);
            var columnName = order[currentIndex];
            order.splice(currentIndex, 1);
            order.splice(newIndex, 0, columnName);
            this.setState({ columnOrder: order });
        }
    }, {
        key: 'moveAt',
        value: function moveAt(element, clientX) {
            element.style.left = clientX + 'px';
        }
    }, {
        key: 'handleTableMouseDown',
        value: function handleTableMouseDown(e) {
            var _this2 = this;

            if (!e.target.classList.contains(thClassDrag)) {
                return;
            }
            var originalElement = e.target.parentNode;
            originalElement.classList.add(thClassMove);
            var dragElement = originalElement.cloneNode(true);
            var currentIndex = Number(dragElement.getAttribute('data-column-index'));
            dragElement.style.position = 'fixed';
            dragElement.style.top = e.clientY + 'px';
            dragElement.style.pointerEvents = 'none';
            document.body.classList.add(bodyMoveClass);
            document.body.appendChild(dragElement);
            this.moveAt(dragElement, e.clientX);
            var mousemove = function mousemove(e) {
                var target = e.target;

                if (target.classList.contains(thClassDragZone)) {
                    (function () {
                        var removeClass = function removeClass(e) {
                            target.classList.remove(thClassDragZoneActive_);
                            target.removeEventListener('mouseout', removeClass);
                        };
                        target.addEventListener('mouseout', removeClass);
                        target.classList.add(thClassDragZoneActive_);
                    })();
                }
                _this2.moveAt(dragElement, e.clientX);
                return false;
            };
            var mouseup = function mouseup(e) {
                e.stopPropagation();
                var target = e.target;

                document.removeEventListener('mousemove', mousemove, true);
                document.removeEventListener('mouseup', mouseup, true);
                document.body.classList.remove(bodyMoveClass);
                dragElement.remove();
                originalElement.classList.remove(thClassMove);
                if (target.classList.contains(thClassDragZone)) {
                    var wantIndex = Number(target.getAttribute('data-target-column-index'));
                    var insertBefore = target.classList.contains(thClassDragZoneBefore_);
                    _this2.changeColumnOrder(currentIndex, wantIndex, insertBefore);
                }
            };
            document.addEventListener('mousemove', mousemove, true);
            document.addEventListener('mouseup', mouseup, true);
            return false;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var _getSortedColumns = this.getSortedColumns(this.props.headers, this.props.rows);

            var headers = _getSortedColumns.headers;
            var rows = _getSortedColumns.rows;

            rows = this.getSortedRows(rows);

            var _state = this.state;
            var sortBy = _state.sortBy;
            var sortReverseOrder = _state.sortReverseOrder;

            var thActive = sortReverseOrder ? thClassActiveReverse : thClassActive;
            return _react2.default.createElement(
                'table',
                { className: 'ceki-table',
                    onMouseDown: this.handleTableMouseDown.bind(this)
                },
                _react2.default.createElement(
                    'colgroup',
                    null,
                    headers.map(function (header) {
                        return _react2.default.createElement('col', { key: header, className: sortBy === header ? colClassActive : colClass });
                    })
                ),
                _react2.default.createElement(
                    'thead',
                    null,
                    _react2.default.createElement(
                        'tr',
                        { key: headers },
                        headers.map(function (header, index) {
                            return _react2.default.createElement(
                                'th',
                                { key: header,
                                    className: sortBy === header ? thActive : thClass,
                                    onClick: function onClick() {
                                        return _this3.handleHeaderClick(header);
                                    },
                                    'data-column-index': index
                                },
                                _react2.default.createElement('div', { className: thClassDragZoneBefore,
                                    'data-target-column-index': index }),
                                _react2.default.createElement('div', { className: thClassDragZoneAfter,
                                    'data-target-column-index': index }),
                                _react2.default.createElement(
                                    'span',
                                    { className: thClassDrag },
                                    '\u2550'
                                ),
                                _react2.default.createElement(
                                    'span',
                                    { className: thClassText },
                                    header
                                )
                            );
                        })
                    )
                ),
                _react2.default.createElement(
                    'tbody',
                    null,
                    rows.map(function (row) {
                        return _react2.default.createElement(
                            'tr',
                            { key: row },
                            row.map(function (cell, index) {
                                return _react2.default.createElement(
                                    'td',
                                    { key: cell },
                                    cell
                                );
                            })
                        );
                    })
                )
            );
        }
    }]);

    return CekiTable;
}(_react.Component);

CekiTable.propTypes = {
    headers: _react.PropTypes.array.isRequired,
    rows: _react.PropTypes.arrayOf(_react.PropTypes.array).isRequired
};

exports.default = CekiTable;

/***/ }
/******/ ])
});
;