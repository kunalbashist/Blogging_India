const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const blogroute = require('./routes/routes')
const authRoute = require('./routes/auth')
const cors = require('cors')

dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS, () =>console.log("Database connected"))

app.use(express.json())
app.use(cors())
app.use('/app/blog', blogroute)
app.use('/app/auth',authRoute);
app.listen(4000, () => console.log("server is up"))