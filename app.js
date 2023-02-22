
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ ectended: true }));
app.use(express.static("public"))



var items = ["Buy Food", "Cook Food", "Eat Food"];

app.post("/", function (req, res) {
    var item1 = req.body.item;
    items.push(item1);
    res.redirect("/");
})


app.get("/", function (req, res) {

    var today = new Date()
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    var day = today.toLocaleDateString("en-US", options)


    res.render("list", { kindOfDay: day, newItem: items });
});


app.listen(3000, function () {
    console.log("Server started on port 3000");
});