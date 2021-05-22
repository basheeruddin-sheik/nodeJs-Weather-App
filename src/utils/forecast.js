const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=df80df470b50b769086cfcec907b429f&query=' + longitude + ',' + latitude

    request({url, json:true}, (error, {body} = {}) => {
        if(error)
        {
            callback('Unable to connect to location services!', undefined)
        }
        else if(body.error)
        {
            callback('Unable to find location. Try another search.', undefined)
        }
        else
        {
            callback(undefined, 'It is currently ' + body.current.temperature + ' degress out. But feels like ' + body.current.feelslike + ' degrees. And humidity is ' + body.current.humidity + '.')
        }
    })
}

module.exports = forecast