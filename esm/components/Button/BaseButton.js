var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import * as React from 'react';
import styled, { css } from 'styled-components';
import { hoverable } from '../../hocs/hoverable';
import { isTouchDevice } from '../../libs/ua';
export var buttonFactory = function (tag) { return function (_a) {
    var _b = _a.size, size = _b === void 0 ? 'default' : _b, _c = _a.className, className = _c === void 0 ? '' : _c, _d = _a.square, square = _d === void 0 ? false : _d, _e = _a.children, children = _e === void 0 ? '' : _e, _f = _a.prefix, prefix = _f === void 0 ? '' : _f, _g = _a.suffix, suffix = _g === void 0 ? '' : _g, theme = _a.theme, props = __rest(_a, ["size", "className", "square", "children", "prefix", "suffix", "theme"]);
    var Tag = hoverable()(Base.withComponent(tag));
    // prettier-ignore
    var classNames = size + " " + className + " " + (square ? 'square' : '') + " " + (prefix ? 'prefix' : '') + " " + (suffix ? 'suffix' : '');
    return (React.createElement(Tag, __assign({ className: classNames, theme: theme }, props),
        prefix && React.createElement(Prefix, { theme: theme }, prefix),
        children,
        suffix && React.createElement(Suffix, { theme: theme }, suffix)));
}; };
var Base = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme;
    var frame = theme.frame, size = theme.size, interaction = theme.interaction;
    return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      display: inline-flex;\n      justify-content: center;\n      align-items: center;\n      width: ", ";\n      min-width: 2rem;\n      vertical-align: middle;\n      border-radius: ", ";\n      font-family: inherit;\n      font-weight: bold;\n      text-align: center;\n      text-decoration: none;\n      box-sizing: border-box;\n      cursor: pointer;\n      transition: ", ";\n\n      &.default {\n        font-size: ", ";\n        height: 40px;\n        line-height: 40px;\n        padding: 0 ", ";\n      }\n\n      &.s {\n        font-size: ", ";\n        height: 27px;\n        line-height: 27px;\n        padding: 0 ", ";\n      }\n\n      &.square {\n        width: 40px;\n        line-height: 40px;\n        padding: 0;\n\n        &.s {\n          width: 27px;\n          min-width: 27px;\n        }\n      }\n\n      &[disabled] {\n        cursor: not-allowed;\n      }\n\n      &.suffix {\n        justify-content: space-between;\n      }\n\n      &.prefix {\n        justify-content: left;\n      }\n    "], ["\n      display: inline-flex;\n      justify-content: center;\n      align-items: center;\n      width: ", ";\n      min-width: 2rem;\n      vertical-align: middle;\n      border-radius: ", ";\n      font-family: inherit;\n      font-weight: bold;\n      text-align: center;\n      text-decoration: none;\n      box-sizing: border-box;\n      cursor: pointer;\n      transition: ", ";\n\n      &.default {\n        font-size: ", ";\n        height: 40px;\n        line-height: 40px;\n        padding: 0 ", ";\n      }\n\n      &.s {\n        font-size: ", ";\n        height: 27px;\n        line-height: 27px;\n        padding: 0 ", ";\n      }\n\n      &.square {\n        width: 40px;\n        line-height: 40px;\n        padding: 0;\n\n        &.s {\n          width: 27px;\n          min-width: 27px;\n        }\n      }\n\n      &[disabled] {\n        cursor: not-allowed;\n      }\n\n      &.suffix {\n        justify-content: space-between;\n      }\n\n      &.prefix {\n        justify-content: left;\n      }\n    "])), function (_a) {
        var wide = _a.wide;
        return (wide ? '100%;' : 'auto');
    }, frame.border.radius.m, isTouchDevice ? 'none' : "all " + interaction.hover.animation, size.pxToRem(size.font.TALL), size.pxToRem(size.space.XS), size.pxToRem(size.font.SHORT), size.pxToRem(size.space.XXS));
});
var Prefix = styled.span(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme;
    var size = theme.size;
    return css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      display: inline-flex;\n      margin-right: ", ";\n    "], ["\n      display: inline-flex;\n      margin-right: ", ";\n    "])), size.pxToRem(size.space.XXS));
});
var Suffix = styled.span(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme;
    var size = theme.size;
    return css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n      display: inline-flex;\n      margin-left: ", ";\n    "], ["\n      display: inline-flex;\n      margin-left: ", ";\n    "])), size.pxToRem(size.space.XXS));
});
export var BaseButton = buttonFactory('button');
export var BaseButtonAnchor = buttonFactory('a');
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=BaseButton.js.map