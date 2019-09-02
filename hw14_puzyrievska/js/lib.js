var request = function (method, url, callback, errorCb) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.addEventListener('load', function(e) {
        callback && callback({
            body: e.target.status < 400 ? JSON.parse(e.target.response) : e.target.response,
            status: e.target.status
        });
    });
    xhr.addEventListener('error', function(e) {
        errorCb && errorCb(e);
    });
    xhr.send();
};

