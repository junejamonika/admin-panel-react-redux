import store from 'store';

export async function authGateway(METHOD, URL, BODY = null, formData = false) {
    const TOKEN = "testtoken";
    const OPTIONS = {
        method: METHOD,
        headers: {
            // 'access-control-allow-origin': '*',
            ...(!formData) && { 'Content-Type': 'application/json' },
            Authorization: `Bearer ${TOKEN}`,
        },
        body: BODY,
    };
    return await fetch(URL, OPTIONS)
        .then(handleResponse)
        .then((response) => {
            if (response.success !== true) {
                // error handling
            }
            return response;
        });
}

export async function guestGateway(METHOD, URL, BODY = null) {
    const OPTIONS = {
        method: METHOD,
        headers: {
            'Content-Type': 'application/json',
            // 'access-control-allow-origin': '*',
        },
        body: BODY,
    };
    return await fetch(URL, OPTIONS)
        .then(handleResponse)
        .then((response) => {
            if (response.success !== true) {
                //error handling
            }
            return response;
        });
}

function handleResponse(response) {
    return response.text().then((text) => {
        return text && JSON.parse(text);
    });
}
