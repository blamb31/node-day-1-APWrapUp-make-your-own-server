const express = require('express')
let {getPeople} = require('./handleFns')

const app = express()
let port = 3000

app.get('/api/people', getPeople )

app.listen(port, () => (console.log(`I'm listening on port: ${port}`)))


