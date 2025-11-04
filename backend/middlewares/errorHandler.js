export const errorHandler = (err, req, res, next) => {
    console.error("Error: ", err.stack || err.message);

    const status = err.stack || 500
    const message = err.message || 'Something went wrong on the server. Please try again later.'

    res.status(status).json({ success:false, data: message})
}