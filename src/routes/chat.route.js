const { sendRequestFrien, CheckisChatOrCreate } = require("../controller/chat.controller");
const { isAuth } = require("../middleware/auth.middleware");
const { User } = require("../models/user.model");

const router = require("express").Router();



router.post('/getandCreateChat',isAuth,CheckisChatOrCreate);

router.post('/getUnReadMessages',isAuth,async (req,res,next)=>{
   try {
    if (req.userId) {
        const user = await User.findById(data?.userId);
        if (user) {
            let unReadMessages
            if(user.unReadMessages.length != 0){
              unReadMessages = user?.unReadMessages;
              user.unReadMessages = []
              await user.save()
              res.json({res:unReadMessages,message:"get unReadMessages True "})
            } else {
             next({status:401,message:"unauthorized error"})
            }
          }
    }
   } catch (error) {
    next({status:error.status,message:error})
   }
});


module.exports = router;