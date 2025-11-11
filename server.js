import express from 'express'
import {router} from './Routes/apiRoutes.js'

const app = express()
const PORT = 8000

app.use('/api', router)
app.listen(PORT,()=>console.log(`Server Running On PORT ${PORT}`))