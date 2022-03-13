"use strict";
exports.__esModule = true;
exports.useTypedSelector = exports.useTypedDispatch = void 0;
var react_redux_1 = require("react-redux");
// Use throughout your app instead of plain `useDispatch` and `useSelector`
var useTypedDispatch = function () { return (0, react_redux_1.useDispatch)(); };
exports.useTypedDispatch = useTypedDispatch;
exports.useTypedSelector = react_redux_1.useSelector;
