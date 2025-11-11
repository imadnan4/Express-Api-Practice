import express from 'express'
import {router} from './Routes/apiRoutes.js'
import cors from 'cors'

const app = express()
const PORT = 8000

app.use(cors())
app.use('/api', router)

app.get((req,res)=>{
    res.status(400).json({message:"Invalid Endpoint"})
})
app.listen(PORT,()=>console.log(`Server Running On PORT ${PORT}`))