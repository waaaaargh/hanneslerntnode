module.exports = function(request, response, next) {
    console.log("[r]" + " " + request.method + " " + request.url);
    next();
}
