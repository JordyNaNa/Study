const express = require('express')
const {alertMove} = require('../util/alertMove.js')
const router = express.Router();
const userRouter = require('./user/index.js')
const boardRouter = require('./board/index.js')

router.get('/', (req, res)=>{
    let {user} = req.session
    res.render('../views/user/index_login.html', {
        user
    })
})

router.use('/user', userRouter)

const Auth = (req, res, next) => {
    const {user} = req.session;
    if (user != underfined) {
        next()
   } else {
    res.send(alertMove('회원만 이용가능한 페이지 입니다.', '/'))
   }
}

router.use('/board', Auth, boardRouter)

module.exports = router;