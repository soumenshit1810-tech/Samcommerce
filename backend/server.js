const express = require('express')
let app = express()
const { dbConnection } = require('./config/db.config')
let cors=require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))


const userRouter = require('./routes/user.router')
// const webRouter = require('./routes/web.route')
// const orderRouter = require('./routes/web.route')
// const wishlistRouter = require('./routes/wishlist.route')

app.use("/user", userRouter)
// app.use("/web", webRouter)
// app.use("/order", orderRouter)
// app.use("/wishlist", wishlistRouter)



let port = process.env.PORT
dbConnection()
    .then(() => {
        app.listen(port, () => {
            console.log(`server Running on http://localhost:${port}`);
        })
    })
