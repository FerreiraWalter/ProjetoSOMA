module.exports = function generalError(error, request, response, next) {
    return response.status(error.status || 500).json({ error: error.message });
}
