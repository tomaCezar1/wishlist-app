export interface AppState {
    username: string;
    showWishlistForm: boolean;
    showRegisterForm: boolean;
    showLoginForm: boolean;
    showItemForm: boolean;
    allWishlists: WishlistData;
    isLoggedIn: boolean;
    token: string;
    editWishlistId: number;
    wishlistModal: boolean;
    wishlistModalId: number;
}

export interface WishlistData {
    wishlists: Wishlists[];
}

export interface Wishlists {
    id: number;
    title: string;
    wishListDate: string;
}

export interface PostWishlistData {
    wishlistDescription: string;
    eventType: string;
    privacyType: string;
    title: string;
    wishListDate: string;
}

export interface ItemData {
    itemName: string;
    itemLink: string;
    price: string;
    currency: string;
    itemDescription: string;
    priority: string;
}

export interface RegisterCredentials {
    fullName: string;
    username: string;
    password: string;
    confirmPassword: string;
}

export interface LoginCredentials {
    username: string;
    password: string;
}

export interface Errors {
    error: boolean;
    description: string;
}

export interface WishlistItems {
    id: number;
    itemName: string;
    itemLink: string;
    price: string;
    currency: string;
    itemDescription: string;
    priority: string;
}
