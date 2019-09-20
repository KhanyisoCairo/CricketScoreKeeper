const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const CricketScoreKeeper = require('./CricketScoreKeeper');

var app = express();

const cricketScoreKeeper = CricketScoreKeeper();

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', function (req, res) {
    let game = cricketScoreKeeper.startGame()
    res.render('index', {
        totals: game,
    });
});
app.get('/action', function (req, res) {
    
    res.redirect('/');
})
app.get('/scorekeeper', function (req, res) {
    res.redirect('/');
});

app.post('/scorekeeper', function (req, res) {
    res.render("index", {

        CricketScoreKeeper: CricketScoreKeeper()
    })
});

const PORT = process.env.PORT || 2807;
app.listen(PORT, function () {

    console.log("App started at port:", PORT)

});