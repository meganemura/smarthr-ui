var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import * as React from 'react';
import styled, { css } from 'styled-components';
import { withTheme } from '../../hocs/withTheme';
import { NumberInput, PasswordInput, TextInput } from '../Input';
import { Tag } from '../Tag';
var fieldFactory = function (InputComponent) { return function (_a) {
    var label = _a.label, _b = _a.name, name = _b === void 0 ? '' : _b, _c = _a.value, value = _c === void 0 ? '' : _c, required = _a.required, placeholder = _a.placeholder, disabled = _a.disabled, error = _a.error, help = _a.help, width = _a.width, _d = _a.className, className = _d === void 0 ? '' : _d, onChange = _a.onChange, onBlur = _a.onBlur, theme = _a.theme, children = _a.children;
    var widthStyle = typeof width === 'number' ? width + "px" : width;
    return (React.createElement(Wrapper, { width: widthStyle, className: className },
        React.createElement(LabelHead, { theme: theme },
            React.createElement(Title, { theme: theme },
                label,
                required && (React.createElement(TagWrapper, { theme: theme },
                    React.createElement(Tag, { type: "required" }, "\u5FC5\u9808")))),
            help && React.createElement(Help, { theme: theme }, help)),
        InputComponent ? (React.createElement(InputComponent, { value: value, name: name, required: required, placeholder: placeholder, disabled: disabled, error: !!error, width: width, onChange: onChange, onBlur: onBlur })) : (children),
        error && React.createElement(Error, { theme: theme }, error)));
}; };
export var Field = withTheme(fieldFactory());
export var TextField = withTheme(fieldFactory(TextInput));
export var NumberField = withTheme(fieldFactory(NumberInput));
export var PasswordField = withTheme(fieldFactory(PasswordInput));
var Wrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-block;\n  width: ", ";\n"], ["\n  display: inline-block;\n  width: ", ";\n"])), function (_a) {
    var width = _a.width;
    return width;
});
var LabelHead = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme;
    return css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: ", ";\n    line-height: 1.4;\n  "], ["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: ", ";\n    line-height: 1.4;\n  "])), theme.size.pxToRem(theme.size.space.XXS));
});
var Title = styled.p(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme;
    return css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    margin: 0;\n    color: ", ";\n    font-weight: bold;\n    font-size: ", ";\n  "], ["\n    margin: 0;\n    color: ", ";\n    font-weight: bold;\n    font-size: ", ";\n  "])), theme.palette.TEXT_GREY, theme.size.pxToRem(theme.size.font.TALL));
});
var Help = styled.p(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme;
    return css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    margin: 0;\n    font-size: ", ";\n    color: ", ";\n  "], ["\n    margin: 0;\n    font-size: ", ";\n    color: ", ";\n  "])), theme.size.pxToRem(theme.size.font.SHORT), theme.palette.TEXT_GREY);
});
var Error = styled.p(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme;
    return css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n    margin: ", " 0 0 0;\n    font-size: ", ";\n    color: ", ";\n    line-height: 1.4;\n  "], ["\n    margin: ", " 0 0 0;\n    font-size: ", ";\n    color: ", ";\n    line-height: 1.4;\n  "])), theme.size.pxToRem(theme.size.space.XXS), theme.size.pxToRem(theme.size.font.TALL), theme.palette.DANGER);
});
var TagWrapper = styled.span(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme;
    return css(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n    margin-left: ", ";\n  "], ["\n    margin-left: ", ";\n  "])), theme.size.pxToRem(theme.size.space.XXS));
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11;
//# sourceMappingURL=Field.js.map