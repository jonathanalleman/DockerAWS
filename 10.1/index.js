const express = require('express')
const app = express()
const port = 8082

//notes

app.use(express.json())
app.use('/',(req, res)=>{
    res.send({status:200, message:"Hello World!"})
})
app.listen(port, ()=>{
    console.log(`exapmle app listening at http://localhost:${port}`)
})