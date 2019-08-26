/// <reference types="react" />
interface Props {
    checked: boolean;
    name: string;
    themeColor?: 'light' | 'dark';
    disabled?: boolean;
    className?: string;
    onChange?: (name: string, checked: boolean) => void;
}
export declare const Checkbox: (props: Props) => JSX.Element;
export {};
