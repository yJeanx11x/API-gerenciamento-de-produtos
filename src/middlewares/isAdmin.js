function isAdmin(req, res, next) {
    try {
        if (!req.user || req.user.role !== 'admin') {
            return res.status(401).json({ message: 'Acesso negado. Somente administradores.' })
        }
        next()
    } catch (error) {
        next(error)
    }
}
module.exports = { isAdmin }