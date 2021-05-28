export interface AppState {
    username: string;
    showWishlistForm: boolean;
    showRegisterForm: boolean;
    showLoginForm: boolean;
    showItemForm: boolean;
    allWishlists: { id: number; title: string; wishListDate: string }[];
    isLoggedIn: boolean;
    token: string;
    editWishlistId: number;
    wishlistModal: boolean;
    wishlistModalId: number;
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
    link: string;
    price: string;
    currency: string;
    description: string;
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
