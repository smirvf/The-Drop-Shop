import { BasketItem } from "@/types/basketitem";
import { createContext, useReducer } from "react";

export const CartContext = createContext<CartContextInterface>({
    items: [],
    addToCart: undefined,
    removeFromCart: undefined
});

interface CartContextInterface {
    items: BasketItem[],
    addToCart: ((product: BasketItem) => void) | undefined,
    removeFromCart: ((id: string) => void) | undefined
}

type Actions = "ADD" | "REMOVE";

interface CartAction {
    type: Actions;
    payload: {
        items: BasketItem[]
    }
}

//actions that can occur on a cart
const cartReducer = (state: { items: BasketItem[] }, action: CartAction) => {
    const { type, payload } = action;
    
    switch (type) {
        case "ADD":
            return {
                ...state,
                items: payload.items,
            };
    
        case "REMOVE":
            return {
                ...state,
                items: payload.items,
            };
    
        default:
            throw new Error("No case for that type");
    }
};

interface Props {
    children: string | JSX.Element | JSX.Element[]
}

export function CartProvider({children} : Props) {
    const [state, dispatch] = useReducer(cartReducer, { items: [] });

        const addToCart = (product: BasketItem) => {
            const updatedCart = [...state.items, product];

            dispatch({
                type: "ADD",
                payload: {
                    items: updatedCart,
                },
            });
        }

        const removeFromCart = (id: String) => {
            const updatedCart = state.items.filter(
                (product) => product.productId !== id
            );

            dispatch({
                type: "REMOVE",
                payload: {
                    items: updatedCart,
                },
            });
        }

        const value = {
            items: state.items,
            addToCart,
            removeFromCart,
        }
    
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}