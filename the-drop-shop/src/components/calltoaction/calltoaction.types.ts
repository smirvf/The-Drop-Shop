export interface CallToActionInterface {
    href: string;
    children: string | JSX.Element | JSX.Element[];
    isTransparent?: boolean;
}