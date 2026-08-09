import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
const app = express()
app.use(cors());

app.listen(process.env.PORT, () => {
    console.log("Server running");
});