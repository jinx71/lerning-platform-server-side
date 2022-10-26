const express = require("express");
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;
const data = require('./data/data.json')
// const news = require('./data/news.json')
app.use(cors())


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
// app.get("/categories", (req, res) => {
//   res.send(data)
// });
// app.get("/home", (req, res) => {
//   res.send(news)
// });
// app.get("/news/:id", (req, res) => {
//   // console.log(req.params.id)
//   const id = req.params.id
//   const selectedNews = news.filter(n => n._id === id)
//   res.send(selectedNews)
// })
// app.get("/category/:id", (req, res) => {
//   const id = req.params.id

//   if (id === "08") {
//     res.send(news);
//   }
//   else {
//     const sortedByCategory = news.filter(n => n.category_id === id)
//     res.send(sortedByCategory)
//   }
// })
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

