export interface PageLinkInterface {
    href: string;
    children: string | JSX.Element | JSX.Element[];
    isLarge?: boolean;
    isActive?: boolean;
    isSecondary?: boolean;
}