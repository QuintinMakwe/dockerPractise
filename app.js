const app = require('express')();

app.get('/', (req, res)=>{
    res.send('Welcome to docker')
})
app.listen(3000, ()=>{
    console.log("::listening on port 3000")
})