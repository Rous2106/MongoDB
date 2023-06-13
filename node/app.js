import express from "express"
import cors from 'cors'
//importamos la conexion a la DB
import db from './database/db.js'
//importamos nuestro enrutador
import blogRouters from './routes/routes.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use( express.urlencoded({extended:true}))
app.use('/blogs', blogRouters)
app.listen(8000, ()=>{
    console.log('Server UP running in http://localhost:8000/')
    
})

