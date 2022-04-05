const express = require('express');
const request = require('request');
const fonts = require('fonts');
const app = express();


fonts('Hello!').print();
app.get('/', function (req, res) {

  request('https://baconipsum.com/api/?type=meat-and-filler', function (error, response, body) {
    let html = `<div style="margin: 10% auto; width: 70%; font-size: 28px;">`;
    let json = JSON.parse(body);
    let info = json.map(function(infoblock) {
      let color = `#${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`;
      return `<p style="background-color: ${color};">${infoblock}</p>`;
    }).join('');
    html += info;
    html += '</div>';

    res.send(html);
  });

});

app.listen(3000);
