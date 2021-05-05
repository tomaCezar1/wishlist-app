export function postRequest(data) {
    return fetch('http://localhost:8080/api/wishlists', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
    });
}
