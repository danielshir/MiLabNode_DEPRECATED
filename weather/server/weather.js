const YQL = require('yql');
const express = require('express');

const PORT = 8080;

function fetchWeatherForTelAviv(cb) {
    const query = new YQL('select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="tel aviv") and u=\'c\'');

    query.exec((err, data) => {
        if (err) return cb(err);
        let location = data.query.results.channel.location;
        let condition = data.query.results.channel.item.condition;
        let forecast = data.query.results.channel.item.forecast[0];

        return cb(null, {
            location: location.city,
            temp: condition.temp,
            desc: condition.text,
            forecast: {
                high: forecast.high,
                low: forecast.low,
                desc: forecast.text
            }
        });
    });
}

let app = express();

app.get('/weather', (req, res, next) => {
    fetchWeatherForTelAviv((err, weather) => {
        if (err) return res.error(err);
        return res.json(weather);
    });
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});