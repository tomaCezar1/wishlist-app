import { PostWishlistData, RegisterCredentials, LoginCredentials } from './interfaces';

export const url = 'https://wishlist-service-dev.herokuapp.com/api';

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

export function deleteWishlist(id: number) {
    return fetch(`${url}/wishlists/${id}`, {
        method: 'DELETE',
    }).then((res) => res.json());
}

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
