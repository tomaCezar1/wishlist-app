import { PostWishlistData, RegisterCredentials, LoginCredentials, ItemData } from './interfaces';

// export const url = 'https://wishlist-service-dev.herokuapp.com/api';
export const url = 'https://wishlist-service-qa.herokuapp.com/api';

// Authentication
export function registerUser(registerData: RegisterCredentials) {
    return fetch(`${url}/auth/register`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(registerData),
    });
}

export function loginUser(loginData: LoginCredentials) {
    return fetch(`${url}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(loginData),
    });
}

export function createWishlist(data: PostWishlistData, token: string) {
    return fetch(`${url}/wishlists`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
    });
}

export function getWishlists(token: string) {
    return fetch(`${url}/wishlists`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
}

export function getWishlistById(token: string, id: number) {
    return fetch(`${url}/wishlists/${id}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
}

export function deleteWishlist(token: string, id: number) {
    return fetch(`${url}/wishlists/${id}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }).then((res) => res.json());
}

export function updateWishlist(token: string, id: number, data: PostWishlistData) {
    return fetch(`${url}/wishlists/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
    }).then((res) => res.json());
}

export function createItem(token: string, id: number, data: ItemData) {
    return fetch(`${url}/wishlists/${id}/items`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
    });
}

export function deleteItem(token: string, wishlistId: number, itemId: number) {
    return fetch(`${url}/wishlists/${wishlistId}/items/${itemId}`, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    }).then((res) => res.json());
}
