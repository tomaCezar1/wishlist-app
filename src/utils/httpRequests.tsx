export const url = 'https://wishlist-service-app2.herokuapp.com/api';

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

export function deleteWishlist(id: number) {
    return fetch(`${url}/wishlists/${id}`, {
        method: 'DELETE',
    }).then((res) => res.json());
}
