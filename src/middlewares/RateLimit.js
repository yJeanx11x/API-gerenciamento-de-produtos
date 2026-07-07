const ratelimet = require('express-rate-limit')

const limet = ratelimet.rateLimit({
    max: 3,
    windowMs: 10 * 60 * 1000,
    message: 'Limite de requisições excedido. Aguarde alguns instantes e tente novamente. '
})

module.exports = limet