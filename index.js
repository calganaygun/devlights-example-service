const express = require('express')
const curfew = require('./src/curfew')
const app = express()
const port = process.env.PORT || 80

app.get('/', (req, res) => {
    res.send('It is working!')
})

app.get('/:work/:age', (req, res) => {
    const isWorking = (req.params.work === "working") ? true : (req.params.work === "notworking") ? false : undefined;
    const age = parseInt(req.params.age);
    const now = new Date();
    res.json( { 
        isWorking: isWorking,
        age: age,
        canGoOut: curfew(now, age, isWorking),
        currentDateTime: now.toLocaleString('tr-TR', { timeZone: 'UTC' })
    } )
})

app.listen(port, () => {
    console.log(`Curfew app listening at http://localhost:${port}`)
})