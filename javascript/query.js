function getQueryParams() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    return Object.fromEntries(urlSearchParams.entries());
}

function getQueryParamsBy(query) {
    const urlSearchParams = new URLSearchParams(query);
    return Object.fromEntries(urlSearchParams.entries());
}



/**
 * https://stackoverflow.com/a/901144
 * Proxy 사용이 더 성능에 좋다: https://jsben.ch/MeP5G
 * 사용법
 * > let value = params.some_key; // "some_value"
 * @returns {URLSearchParams}
 */
function getQueryParams2() {
    return new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(`${prop}`.trim()),
    });
}

function getQueryParams4() {
    const params = {};
    new URLSearchParams(window.location.search).forEach((val, key) => {
        params[key] = val;
    });
    return params;
}
