
const express = require('express')
const app = express()
var cors = require('cors')
const port = 3000
app.use(express.json());
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.post('/api/v1', (req, res) => {
    console.log(req.body)
    res.send('bye')
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
