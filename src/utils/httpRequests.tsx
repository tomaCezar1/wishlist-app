import { PostWishlistData } from './interfaces';

export const url = 'https://wishlist-service-qa.herokuapp.com/api';

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

export function registerUser(authData) {
    return fetch(`${url}/auth/register`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(authData),
        // eslint-disable-next-line prettier/prettier
    });

    // .then((res) => console.log(res));
    // .catch((e) => {
    //     throw new Error(e);
    // });
}
