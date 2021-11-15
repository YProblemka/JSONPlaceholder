const express = require('express')
const app = express()
const PORT = process.env.PORT ?? 3000

if(!module.parent){
    app.listen(PORT, () => {
        console.log(`Server has been started on port ${PORT}`)
    })
}

module.exports = app.listen()