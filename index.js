const express = require('express')
const ZingMp3 = require('zingmp3-api')
const bodyParser = require('body-parser')

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
var port = process.env.PORT || 3333;

app.listen(port, function() {
	console.log('Server running!');
});



app.get('/getHome', (req, res, next) => {

    console.log('Getting')
    ZingMp3.getHome()
    .then(result => {
        console.log('Done')
        res.json(result)
    })
    .catch(e => {
        next(JSON.stringify(e))
    })
})

app.get('/getFullInfo', (req, res, next) => {

    console.log('Getting')
    var q = req.query.q;
    ZingMp3.getFullInfo(q)
    .then(result => {
        console.log('Done')
        res.json(result)
    })
    .catch(e => {
        next(JSON.stringify(e))
    })
})

app.get('/getDetailPlaylist', (req, res, next) => {

    console.log('Getting')
    var q = req.query.q;
    ZingMp3.getDetailPlaylist(q)
    .then(result => {
        console.log('Done')
        res.json(result)
    })
    .catch(e => {
        next(JSON.stringify(e))
    })
})

app.get('/search', (req, res, next) => {

    console.log('Getting')
    var q = req.query.q;
    ZingMp3.search(q)
    .then(result => {
        console.log('Done')
        res.json(result)
    })
    .catch(e => {
        next(JSON.stringify(e))
    })
})

app.get('/getChartHome', (req, res, next) => {

    console.log('Getting')
    ZingMp3.getChartHome()
    .then(result => {
        console.log('Done')
        res.json(result)
    })
    .catch(e => {
        next(JSON.stringify(e))
    })
})

app.get('/getWeekChart', (req, res, next) => {

    console.log('Getting')
    var q = req.query.q;
    ZingMp3.getWeekChart(q)
    .then(result => {
        console.log('Done')
        res.json(result)
    })
    .catch(e => {
        next(JSON.stringify(e))
    })
})

app.get('/getNewReleaseChart', (req, res, next) => {

    console.log('Getting')
    ZingMp3.getNewReleaseChart()
    .then(result => {
        console.log('Done')
        res.json(result)
    })
    .catch(e => {
        next(JSON.stringify(e))
    })
})

app.get('/getTop100', (req, res, next) => {

    console.log('Getting')
    ZingMp3.getTop100()
    .then(result => {
        console.log('Done')
        res.json(result)
    })
    .catch(e => {
        next(JSON.stringify(e))
    })
})

app.get('/getDetailArtist', (req, res, next) => {

    console.log('Getting')
    var q = req.query.q;
    ZingMp3.getWeekChart(q)
    .then(result => {
        console.log('Done')
        res.json(result)
    })
    .catch(e => {
        next(JSON.stringify(e))
    })
})