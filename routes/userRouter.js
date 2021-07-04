const router=require('express').Router()
const userCtrl=require('../controllers/userCtrl')
const auth =require('../middleware/auth')

//Register user

router.post('/register',userCtrl.registerUser)
router.post('/login',userCtrl.loginuser)


// verify token
router.get('/verify',userCtrl.verifiedToken)
 
module.exports=router