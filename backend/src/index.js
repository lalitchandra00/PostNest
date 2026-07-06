import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { DB_NAME } from './constants.js'
import app from './app.js'

dotenv.config({ path: './.env' })

async function connectDB() {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    console.log("MongoDB connected")
    app.listen(process.env.PORT, () => {
      console.log(`Server listening on port ${process.env.PORT}`)
    })
  } catch (error) {
    console.error("DB connection error:", error)
  }
}
connectDB()