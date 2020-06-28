const app = require('express')();

app.get('/', (req, res)=>{
    res.send('Welcome to product service')
})

const port = process.env.PORT

app.listen(port, ()=>{
    console.log(`::listening on port ${port}`)
})