export interface NavBarInterface {
    isTransparent?: boolean;
    highlightedLink: Pages;
}

type Pages = "Home" | "Shop" | "About" | "Cart" | "Profile";