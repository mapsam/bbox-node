var express = require('express'),
    bbox = require('./bbox.js');

var geom = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              15.82,
              39.63
            ],
            [
              24.60,
              45.58
            ],
            [
              30.58,
              27.68
            ],
            [
              4.57,
              17.64
            ],
            [
              15.82,
              39.63
            ]
          ]
        ]
      }
    }
  ]
};

var app = express();
app.set('port', (process.env.PORT || 5000));

app.get('/api', function(req, res) {
  data = bbox(geom);
  res.json(data);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

