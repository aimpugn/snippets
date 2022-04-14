// https://stackoverflow.com/a/61903296
function addScript(url, id, cb) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script')
        script.src = url
        script.id = id;
        script.async = true
        script.onerror = reject
        script.onload = script.onreadystatechange = function (e) {
            e.preventDefault();
            const loadState = this.readyState
            if (loadState && loadState !== 'loaded' && loadState !== 'complete') return
            script.onload = script.onreadystatechange = null
            resolve()
        }
        document.head.appendChild(script)
        if (cb && typeof cb === "function") {
            cb();
        }
    });
}