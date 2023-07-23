const router = require("express").Router();
const routerAdmin = require("./admin");
const routerCustomer = require('./customer')

router.use('/admin', routerAdmin)
router.use('/customer', routerCustomer)

module.exports = router