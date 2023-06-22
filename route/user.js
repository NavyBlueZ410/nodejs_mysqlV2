const express = require('express')
const router = express.Router()
const {createUser,getAllUser,findUser,updateUser,deleteUser,test} = require('../controller/user')

router.post('/createUser',createUser)
router.get('/getAllUser',getAllUser)
router.get('/findUser',findUser)
router.put('/updateUser',updateUser)
router.delete('/deleteUser/',deleteUser)

module.exports = router