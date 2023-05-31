export interface PageLinkInterface {
    href: string;
    children: string | JSX.Element | JSX.Element[];
    isHighlighted?: boolean;
    isLarge?: boolean;
    isActive?: boolean;
    isSecondary?: boolean;
}