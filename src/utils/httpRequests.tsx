export const url = 'http://localhost:8080/api';

export function createWishlist(data) {
    return fetch(`${url}/wishlists`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
    });
}

export function getWishlists() {
    return fetch(`${url}/wishlists`);
}
