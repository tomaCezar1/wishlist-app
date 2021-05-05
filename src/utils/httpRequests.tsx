export function postRequest(data) {
    console.log(data);
    return fetch('http://localhost:8080/api/wishlists', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
    });
}

export function getWishlist() {
    return fetch('http://localhost:8080/api/wishlists');
}
