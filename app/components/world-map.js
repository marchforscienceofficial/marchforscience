import Ember from 'ember';

var { get, set } = Ember;

const targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";

export default Ember.Component.extend({

      tagName: 'world-map',

      didRender(){

        var images = [];

        this.get('satellites').forEach((satellite) => {
          images.push({
            "svgPath": targetSVG,
            "color": "#e8674d",
            "alpha": .333,
            "latitude": get(satellite, 'latitude'),
            "longitude": get(satellite, 'longitude')
          });
        });

        var worldDataProvider = {
          "map": "worldLow",
          "images": images
        };

        var map = AmCharts.makeChart( "chartdiv", {
          "type": "map",
          "theme": "light",
          "projection": "mercator",
          "mouseWheelZoomEnabled": false,
          "dragMap": false,
          "zoomControl": {
            "zoomControlEnabled": false,
            "homeButtonEnabled": false
          },

          "areasSettings": {
            "autoZoom": true,
            "unlistedAreasColor": "#e3e3e3",
            "rollOverOutlineColor": "#e3e3e3",
            "selectedColor": "#e3e3e3",
            "color": "#e3e3e3",
            "rollOverColor": "#e3e3e3"
          },

          "dataProvider": worldDataProvider

        });

    }
});
