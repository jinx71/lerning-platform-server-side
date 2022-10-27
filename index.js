const express = require("express");
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;
const data = require('./data/data.json')
// const news = require('./data/news.json')
app.use(cors());


app.get('/', (req, res) => {
    res.send(data)
})

app.get("/courses/:id", (req, res) => {
    const id = req.params.id
    console.log(id)
    const course = data.find(d => d.CourseID == id)
    res.send(course)
    console.log(course)
})
app.get("/checkout/:id", (req, res) => {
    const id = req.params.id
    console.log(id)
    const course = data.find(d => d.CourseID == id)
    res.send(course)
    console.log(course)
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

