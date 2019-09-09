"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var styled_components_1 = __importStar(require("styled-components"));
var withTheme_1 = require("../../hocs/withTheme");
var HeadingComponent = function (_a) {
    var _b = _a.tag, tag = _b === void 0 ? 'h1' : _b, _c = _a.type, type = _c === void 0 ? 'ScreenTitle' : _c, children = _a.children, theme = _a.theme;
    return (React.createElement(Wrapper, { as: tag, className: type, theme: theme }, children));
};
exports.Heading = withTheme_1.withTheme(HeadingComponent);
var Wrapper = styled_components_1.default.h1(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme;
    return styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      display: block;\n      margin: 0;\n      padding: 0;\n      line-height: 1;\n\n      &.screenTitle {\n        color: ", ";\n        font-size: ", ";\n        font-weight: normal;\n      }\n\n      &.sectionTitle {\n        color: ", ";\n        font-size: ", ";\n        font-weight: normal;\n      }\n\n      &.blockTitle {\n        color: ", ";\n        font-size: ", ";\n        font-weight: bold;\n      }\n\n      &.subBlockTitle {\n        color: ", ";\n        font-size: ", ";\n        font-weight: bold;\n      }\n\n      &.subSubBlockTitle {\n        color: ", ";\n        font-size: ", ";\n        font-weight: bold;\n      }\n    "], ["\n      display: block;\n      margin: 0;\n      padding: 0;\n      line-height: 1;\n\n      &.screenTitle {\n        color: ", ";\n        font-size: ", ";\n        font-weight: normal;\n      }\n\n      &.sectionTitle {\n        color: ", ";\n        font-size: ", ";\n        font-weight: normal;\n      }\n\n      &.blockTitle {\n        color: ", ";\n        font-size: ", ";\n        font-weight: bold;\n      }\n\n      &.subBlockTitle {\n        color: ", ";\n        font-size: ", ";\n        font-weight: bold;\n      }\n\n      &.subSubBlockTitle {\n        color: ", ";\n        font-size: ", ";\n        font-weight: bold;\n      }\n    "])), theme.palette.TEXT_BLACK, theme.size.pxToRem(theme.size.font.VENTI), theme.palette.TEXT_BLACK, theme.size.pxToRem(theme.size.font.GRANDE), theme.palette.TEXT_BLACK, theme.size.pxToRem(theme.size.font.TALL), theme.palette.TEXT_GREY, theme.size.pxToRem(theme.size.font.TALL), theme.palette.TEXT_GREY, theme.size.pxToRem(theme.size.font.SHORT));
});
var templateObject_1, templateObject_2;
//# sourceMappingURL=Heading.js.map