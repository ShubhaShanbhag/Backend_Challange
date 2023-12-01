const express = require('express')
const controler = require('../controller/controler')
const router = express.Router()

router.get('/' , controler.getHomePage)
router.all('/add-message' , controler.addMessage)
router.get('/message/:id' , controler.oneMessage)
router.all('/edit-message/:id' , controler.updateMessage)
router.get('/delete-message/:id' , controler.deleteMessage)


module.exports = router