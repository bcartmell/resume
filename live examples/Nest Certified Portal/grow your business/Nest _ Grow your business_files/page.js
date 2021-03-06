
$(document).ready(function() {
    /***************************************************
    *  Setup product cart limits
    ***************************************************/
        var productInfo = [{"s":[{"n":"Next day","p":[{"h":0.0,"s":19.99,"m":1},{"h":0.0,"s":21.99,"m":2},{"h":0.0,"s":23.99,"m":3},{"h":0.0,"s":25.99,"m":4},{"h":0.0,"s":27.99,"m":5},{"h":0.0,"s":29.99,"m":6},{"h":0.0,"s":31.99,"m":7},{"h":0.0,"s":33.99,"m":8},{"h":0.0,"s":35.99,"m":9},{"h":0.0,"s":37.99,"m":999999}],"id":60},{"n":"Second day","p":[{"h":0.0,"s":14.99,"m":1},{"h":0.0,"s":16.99,"m":2},{"h":0.0,"s":18.99,"m":3},{"h":0.0,"s":20.99,"m":4},{"h":0.0,"s":22.99,"m":5},{"h":0.0,"s":24.99,"m":6},{"h":0.0,"s":26.99,"m":7},{"h":0.0,"s":28.99,"m":8},{"h":0.0,"s":30.99,"m":9},{"h":0.0,"s":32.99,"m":999999}],"id":61},{"n":"Ground","p":[{"h":0.0,"s":9.99,"m":1},{"h":0.0,"s":10.99,"m":2},{"h":0.0,"s":11.99,"m":3},{"h":0.0,"s":12.99,"m":4},{"h":0.0,"s":13.99,"m":5},{"h":0.0,"s":14.99,"m":6},{"h":0.0,"s":15.99,"m":7},{"h":0.0,"s":16.99,"m":8},{"h":0.0,"s":17.99,"m":9},{"h":0.0,"s":18.99,"m":999999}],"id":62},{"n":"UPS Ground","p":[{"h":0.0,"s":0.0,"m":999999}],"id":78},{"n":"UPS Express Saver","p":[{"h":0.0,"s":14.99,"m":1},{"h":0.0,"s":19.99,"m":2},{"h":0.0,"s":19.99,"m":3},{"h":0.0,"s":24.99,"m":4},{"h":0.0,"s":29.99,"m":5},{"h":0.0,"s":34.99,"m":6},{"h":0.0,"s":39.99,"m":7},{"h":0.0,"s":39.99,"m":8},{"h":0.0,"s":44.99,"m":9},{"h":0.0,"s":49.99,"m":999999}],"id":79},{"n":"Ground (Free)","p":[{"h":0.0,"s":0.0,"m":999999}],"id":88},{"n":"Ground UK","p":[],"id":142},{"n":"Next Day UK","p":[],"id":143},{"n":"DHL","p":[{"h":0.0,"s":11.5,"m":999999}],"id":150}],"n":"Nest Learning Thermostat","p":[{"s":true,"c":"USD","p":[{"dP":199.0,"p":199.0,"m":999999}],"i":true},{"s":false,"c":"EUR","p":[],"i":false},{"s":false,"c":"CAD","p":[{"dP":249.0,"p":249.0,"m":999999}],"i":true}],"mD":null,"mQ":10,"id":16409},{"s":[{"n":"Next day","p":[],"id":60},{"n":"Second day","p":[],"id":61},{"n":"Ground","p":[],"id":62},{"n":"UPS Ground","p":[],"id":78},{"n":"UPS Express Saver","p":[],"id":79},{"n":"Ground (Free)","p":[],"id":88},{"n":"Ground UK","p":[],"id":142},{"n":"Next Day UK","p":[],"id":143},{"n":"DHL","p":[],"id":150}],"n":"Nest + Clean Bottle","p":[{"s":true,"c":"USD","p":[{"dP":20.0,"p":20.0,"m":999999}],"i":true},{"s":false,"c":"EUR","p":[],"i":false},{"s":false,"c":"CAD","p":[],"i":true}],"mD":null,"mQ":5,"id":80473},{"s":[{"n":"Next day","p":[],"id":60},{"n":"Second day","p":[],"id":61},{"n":"Ground","p":[],"id":62},{"n":"UPS Ground","p":[],"id":78},{"n":"UPS Express Saver","p":[],"id":79},{"n":"Ground (Free)","p":[],"id":88},{"n":"Ground UK","p":[],"id":142},{"n":"Next Day UK","p":[],"id":143},{"n":"DHL","p":[],"id":150}],"n":"Nest + Pendleton Blanket","p":[{"s":true,"c":"USD","p":[{"dP":50.0,"p":50.0,"m":999999}],"i":true},{"s":false,"c":"EUR","p":[],"i":false},{"s":false,"c":"CAD","p":[],"i":true}],"mD":null,"mQ":5,"id":80474},{"s":[{"n":"Next day","p":[{"h":0.0,"s":19.99,"m":1},{"h":0.0,"s":21.99,"m":2},{"h":0.0,"s":23.99,"m":3},{"h":0.0,"s":25.99,"m":4},{"h":0.0,"s":27.99,"m":5},{"h":0.0,"s":29.99,"m":6},{"h":0.0,"s":31.99,"m":7},{"h":0.0,"s":33.99,"m":8},{"h":0.0,"s":35.99,"m":9},{"h":0.0,"s":37.99,"m":999999}],"id":60},{"n":"Second day","p":[{"h":0.0,"s":14.99,"m":1},{"h":0.0,"s":16.99,"m":2},{"h":0.0,"s":18.99,"m":3},{"h":0.0,"s":20.99,"m":4},{"h":0.0,"s":22.99,"m":5},{"h":0.0,"s":24.99,"m":6},{"h":0.0,"s":26.99,"m":7},{"h":0.0,"s":28.99,"m":8},{"h":0.0,"s":30.99,"m":9},{"h":0.0,"s":32.99,"m":999999}],"id":61},{"n":"Ground","p":[{"h":0.0,"s":9.99,"m":1},{"h":0.0,"s":10.99,"m":2},{"h":0.0,"s":11.99,"m":3},{"h":0.0,"s":12.99,"m":4},{"h":0.0,"s":13.99,"m":5},{"h":0.0,"s":14.99,"m":6},{"h":0.0,"s":15.99,"m":7},{"h":0.0,"s":16.99,"m":8},{"h":0.0,"s":17.99,"m":9},{"h":0.0,"s":18.99,"m":999999}],"id":62},{"n":"UPS Ground","p":[{"h":0.0,"s":0.0,"m":999999}],"id":78},{"n":"UPS Express Saver","p":[{"h":0.0,"s":14.99,"m":1},{"h":0.0,"s":19.99,"m":2},{"h":0.0,"s":19.99,"m":3},{"h":0.0,"s":24.99,"m":4},{"h":0.0,"s":29.99,"m":5},{"h":0.0,"s":34.99,"m":6},{"h":0.0,"s":39.99,"m":7},{"h":0.0,"s":39.99,"m":8},{"h":0.0,"s":44.99,"m":9},{"h":0.0,"s":49.99,"m":999999}],"id":79},{"n":"Ground (Free)","p":[{"h":0.0,"s":0.0,"m":999999}],"id":88},{"n":"Ground UK","p":[],"id":142},{"n":"Next Day UK","p":[],"id":143},{"n":"DHL","p":[{"h":0.0,"s":11.5,"m":999999}],"id":150}],"n":"Nest Protect Battery - White","p":[{"s":true,"c":"USD","p":[{"dP":79.0,"p":79.0,"m":999999}],"i":true},{"s":false,"c":"EUR","p":[],"i":false},{"s":false,"c":"CAD","p":[],"i":true}],"mD":null,"mQ":280,"id":82122},{"s":[{"n":"Next day","p":[{"h":0.0,"s":19.99,"m":1},{"h":0.0,"s":21.99,"m":2},{"h":0.0,"s":23.99,"m":3},{"h":0.0,"s":25.99,"m":4},{"h":0.0,"s":27.99,"m":5},{"h":0.0,"s":29.99,"m":6},{"h":0.0,"s":31.99,"m":7},{"h":0.0,"s":33.99,"m":8},{"h":0.0,"s":35.99,"m":9},{"h":0.0,"s":37.99,"m":999999}],"id":60},{"n":"Second day","p":[{"h":0.0,"s":14.99,"m":1},{"h":0.0,"s":16.99,"m":2},{"h":0.0,"s":18.99,"m":3},{"h":0.0,"s":20.99,"m":4},{"h":0.0,"s":22.99,"m":5},{"h":0.0,"s":24.99,"m":6},{"h":0.0,"s":26.99,"m":7},{"h":0.0,"s":28.99,"m":8},{"h":0.0,"s":30.99,"m":9},{"h":0.0,"s":32.99,"m":999999}],"id":61},{"n":"Ground","p":[{"h":0.0,"s":9.99,"m":1},{"h":0.0,"s":10.99,"m":2},{"h":0.0,"s":11.99,"m":3},{"h":0.0,"s":12.99,"m":4},{"h":0.0,"s":13.99,"m":5},{"h":0.0,"s":14.99,"m":6},{"h":0.0,"s":15.99,"m":7},{"h":0.0,"s":16.99,"m":8},{"h":0.0,"s":17.99,"m":9},{"h":0.0,"s":18.99,"m":999999}],"id":62},{"n":"UPS Ground","p":[{"h":0.0,"s":0.0,"m":999999}],"id":78},{"n":"UPS Express Saver","p":[{"h":0.0,"s":14.99,"m":1},{"h":0.0,"s":19.99,"m":2},{"h":0.0,"s":19.99,"m":3},{"h":0.0,"s":24.99,"m":4},{"h":0.0,"s":29.99,"m":5},{"h":0.0,"s":34.99,"m":6},{"h":0.0,"s":39.99,"m":7},{"h":0.0,"s":39.99,"m":8},{"h":0.0,"s":44.99,"m":9},{"h":0.0,"s":49.99,"m":999999}],"id":79},{"n":"Ground (Free)","p":[{"h":0.0,"s":0.0,"m":999999}],"id":88},{"n":"Ground UK","p":[],"id":142},{"n":"Next Day UK","p":[],"id":143},{"n":"DHL","p":[{"h":0.0,"s":11.5,"m":999999}],"id":150}],"n":"Nest Protect Wired - White","p":[{"s":true,"c":"USD","p":[{"dP":79.0,"p":79.0,"m":999999}],"i":true},{"s":false,"c":"EUR","p":[],"i":false},{"s":false,"c":"CAD","p":[],"i":true}],"mD":null,"mQ":280,"id":82124},{"s":[{"n":"Next day","p":[{"h":0.0,"s":20.0,"m":1},{"h":0.0,"s":22.0,"m":2},{"h":0.0,"s":24.0,"m":3},{"h":0.0,"s":26.0,"m":4},{"h":0.0,"s":28.0,"m":5},{"h":0.0,"s":30.0,"m":6},{"h":0.0,"s":32.0,"m":7},{"h":0.0,"s":52.0,"m":8},{"h":0.0,"s":78.0,"m":999999}],"id":60},{"n":"Second day","p":[{"h":0.0,"s":14.99,"m":1},{"h":0.0,"s":16.99,"m":2},{"h":0.0,"s":18.99,"m":3},{"h":0.0,"s":20.99,"m":4},{"h":0.0,"s":22.99,"m":5},{"h":0.0,"s":24.99,"m":6},{"h":0.0,"s":26.99,"m":7},{"h":0.0,"s":28.99,"m":8},{"h":0.0,"s":30.99,"m":9},{"h":0.0,"s":32.99,"m":999999}],"id":61},{"n":"Ground","p":[],"id":62},{"n":"UPS Ground","p":[{"h":0.0,"s":0.0,"m":999999}],"id":78},{"n":"UPS Express Saver","p":[{"h":0.0,"s":100.0,"m":999999}],"id":79},{"n":"Ground (Free)","p":[{"h":0.0,"s":0.0,"m":999999}],"id":88},{"n":"Ground UK","p":[],"id":142},{"n":"Next Day UK","p":[],"id":143},{"n":"DHL","p":[],"id":150}],"n":"Nest Learning Thermostat - 3rd Gen","p":[{"s":true,"c":"USD","p":[{"dP":199.0,"p":199.0,"m":999999}],"i":true},{"s":false,"c":"EUR","p":[],"i":false},{"s":false,"c":"CAD","p":[],"i":true}],"mD":null,"mQ":5,"id":228476},{"s":[{"n":"Next day","p":[{"h":0.0,"s":20.0,"m":1},{"h":0.0,"s":22.0,"m":2},{"h":0.0,"s":24.0,"m":3},{"h":0.0,"s":26.0,"m":4},{"h":0.0,"s":28.0,"m":5},{"h":0.0,"s":30.0,"m":6},{"h":0.0,"s":32.0,"m":7},{"h":0.0,"s":52.0,"m":8},{"h":0.0,"s":78.0,"m":999999}],"id":60},{"n":"Second day","p":[{"h":0.0,"s":14.99,"m":1},{"h":0.0,"s":16.99,"m":2},{"h":0.0,"s":18.99,"m":3},{"h":0.0,"s":20.99,"m":4},{"h":0.0,"s":22.99,"m":5},{"h":0.0,"s":24.99,"m":6},{"h":0.0,"s":26.99,"m":7},{"h":0.0,"s":28.99,"m":8},{"h":0.0,"s":30.99,"m":9},{"h":0.0,"s":32.99,"m":999999}],"id":61},{"n":"Ground","p":[],"id":62},{"n":"UPS Ground","p":[{"h":0.0,"s":0.0,"m":999999}],"id":78},{"n":"UPS Express Saver","p":[{"h":0.0,"s":100.0,"m":999999}],"id":79},{"n":"Ground (Free)","p":[{"h":0.0,"s":0.0,"m":999999}],"id":88},{"n":"Ground UK","p":[],"id":142},{"n":"Next Day UK","p":[],"id":143},{"n":"DHL","p":[],"id":150}],"n":"Nest Protect Wired Black","p":[{"s":true,"c":"USD","p":[{"dP":79.0,"p":79.0,"m":999999}],"i":true},{"s":false,"c":"EUR","p":[],"i":false},{"s":false,"c":"CAD","p":[],"i":true}],"mD":null,"mQ":5,"id":229347},{"s":[{"n":"Next day","p":[{"h":0.0,"s":20.0,"m":1},{"h":0.0,"s":22.0,"m":2},{"h":0.0,"s":24.0,"m":3},{"h":0.0,"s":26.0,"m":4},{"h":0.0,"s":28.0,"m":5},{"h":0.0,"s":30.0,"m":6},{"h":0.0,"s":32.0,"m":7},{"h":0.0,"s":52.0,"m":8},{"h":0.0,"s":78.0,"m":999999}],"id":60},{"n":"Second day","p":[{"h":0.0,"s":14.99,"m":1},{"h":0.0,"s":16.99,"m":2},{"h":0.0,"s":18.99,"m":3},{"h":0.0,"s":20.99,"m":4},{"h":0.0,"s":22.99,"m":5},{"h":0.0,"s":24.99,"m":6},{"h":0.0,"s":26.99,"m":7},{"h":0.0,"s":28.99,"m":8},{"h":0.0,"s":30.99,"m":9},{"h":0.0,"s":32.99,"m":999999}],"id":61},{"n":"Ground","p":[],"id":62},{"n":"UPS Ground","p":[{"h":0.0,"s":0.0,"m":999999}],"id":78},{"n":"UPS Express Saver","p":[{"h":0.0,"s":100.0,"m":999999}],"id":79},{"n":"Ground (Free)","p":[{"h":0.0,"s":0.0,"m":999999}],"id":88},{"n":"Ground UK","p":[],"id":142},{"n":"Next Day UK","p":[],"id":143},{"n":"DHL","p":[],"id":150}],"n":"Nest Protect Battery Black","p":[{"s":true,"c":"USD","p":[{"dP":79.0,"p":79.0,"m":999999}],"i":true},{"s":false,"c":"EUR","p":[],"i":false},{"s":false,"c":"CAD","p":[],"i":true}],"mD":null,"mQ":5,"id":229348},{"s":[{"n":"Next day","p":[{"h":0.0,"s":20.0,"m":1},{"h":0.0,"s":22.0,"m":2},{"h":0.0,"s":24.0,"m":3},{"h":0.0,"s":26.0,"m":4},{"h":0.0,"s":28.0,"m":5},{"h":0.0,"s":30.0,"m":6},{"h":0.0,"s":32.0,"m":7},{"h":0.0,"s":52.0,"m":8},{"h":0.0,"s":78.0,"m":999999}],"id":60},{"n":"Second day","p":[{"h":0.0,"s":14.99,"m":1},{"h":0.0,"s":16.99,"m":2},{"h":0.0,"s":18.99,"m":3},{"h":0.0,"s":20.99,"m":4},{"h":0.0,"s":22.99,"m":5},{"h":0.0,"s":24.99,"m":6},{"h":0.0,"s":26.99,"m":7},{"h":0.0,"s":28.99,"m":8},{"h":0.0,"s":30.99,"m":9},{"h":0.0,"s":32.99,"m":999999}],"id":61},{"n":"Ground","p":[],"id":62},{"n":"UPS Ground","p":[{"h":0.0,"s":0.0,"m":999999}],"id":78},{"n":"UPS Express Saver","p":[{"h":0.0,"s":100.0,"m":999999}],"id":79},{"n":"Ground (Free)","p":[{"h":0.0,"s":0.0,"m":999999}],"id":88},{"n":"Ground UK","p":[],"id":142},{"n":"Next Day UK","p":[],"id":143},{"n":"DHL","p":[],"id":150}],"n":"Nest Protect Wired White","p":[{"s":true,"c":"USD","p":[{"dP":79.0,"p":79.0,"m":999999}],"i":true},{"s":false,"c":"EUR","p":[],"i":false},{"s":false,"c":"CAD","p":[],"i":true}],"mD":null,"mQ":5,"id":229350},{"s":[{"n":"Next day","p":[{"h":0.0,"s":20.0,"m":1},{"h":0.0,"s":22.0,"m":2},{"h":0.0,"s":24.0,"m":3},{"h":0.0,"s":26.0,"m":4},{"h":0.0,"s":28.0,"m":5},{"h":0.0,"s":30.0,"m":6},{"h":0.0,"s":32.0,"m":7},{"h":0.0,"s":52.0,"m":8},{"h":0.0,"s":78.0,"m":999999}],"id":60},{"n":"Second day","p":[{"h":0.0,"s":14.99,"m":1},{"h":0.0,"s":16.99,"m":2},{"h":0.0,"s":18.99,"m":3},{"h":0.0,"s":20.99,"m":4},{"h":0.0,"s":22.99,"m":5},{"h":0.0,"s":24.99,"m":6},{"h":0.0,"s":26.99,"m":7},{"h":0.0,"s":28.99,"m":8},{"h":0.0,"s":30.99,"m":9},{"h":0.0,"s":32.99,"m":999999}],"id":61},{"n":"Ground","p":[],"id":62},{"n":"UPS Ground","p":[{"h":0.0,"s":0.0,"m":999999}],"id":78},{"n":"UPS Express Saver","p":[{"h":0.0,"s":100.0,"m":999999}],"id":79},{"n":"Ground (Free)","p":[{"h":0.0,"s":0.0,"m":999999}],"id":88},{"n":"Ground UK","p":[],"id":142},{"n":"Next Day UK","p":[],"id":143},{"n":"DHL","p":[],"id":150}],"n":"Nest Protect Battery White","p":[{"s":true,"c":"USD","p":[{"dP":79.0,"p":79.0,"m":999999}],"i":true},{"s":false,"c":"EUR","p":[],"i":false},{"s":false,"c":"CAD","p":[],"i":true}],"mD":null,"mQ":5,"id":229351},{"s":[{"n":"Next day","p":[{"h":0.0,"s":20.0,"m":1},{"h":0.0,"s":22.0,"m":2},{"h":0.0,"s":24.0,"m":3},{"h":0.0,"s":26.0,"m":4},{"h":0.0,"s":28.0,"m":5},{"h":0.0,"s":30.0,"m":6},{"h":0.0,"s":32.0,"m":7},{"h":0.0,"s":52.0,"m":8},{"h":0.0,"s":78.0,"m":999999}],"id":60},{"n":"Second day","p":[{"h":0.0,"s":14.99,"m":1},{"h":0.0,"s":16.99,"m":2},{"h":0.0,"s":18.99,"m":3},{"h":0.0,"s":20.99,"m":4},{"h":0.0,"s":22.99,"m":5},{"h":0.0,"s":24.99,"m":6},{"h":0.0,"s":26.99,"m":7},{"h":0.0,"s":28.99,"m":8},{"h":0.0,"s":30.99,"m":9},{"h":0.0,"s":32.99,"m":999999}],"id":61},{"n":"Ground","p":[],"id":62},{"n":"UPS Ground","p":[{"h":0.0,"s":0.0,"m":999999}],"id":78},{"n":"UPS Express Saver","p":[{"h":0.0,"s":100.0,"m":999999}],"id":79},{"n":"Ground (Free)","p":[{"h":0.0,"s":0.0,"m":999999}],"id":88},{"n":"Ground UK","p":[],"id":142},{"n":"Next Day UK","p":[],"id":143},{"n":"DHL","p":[],"id":150}],"n":"Nest Cam","p":[{"s":true,"c":"USD","p":[{"dP":159.0,"p":159.0,"m":999999}],"i":true},{"s":false,"c":"EUR","p":[],"i":false},{"s":false,"c":"CAD","p":[],"i":true}],"mD":null,"mQ":5,"id":229349},{"s":[{"n":"Next day","p":[{"h":0.0,"s":19.99,"m":1},{"h":0.0,"s":21.99,"m":2},{"h":0.0,"s":23.99,"m":3},{"h":0.0,"s":25.99,"m":4},{"h":0.0,"s":27.99,"m":5},{"h":0.0,"s":29.99,"m":6},{"h":0.0,"s":31.99,"m":7},{"h":0.0,"s":33.99,"m":8},{"h":0.0,"s":35.99,"m":9},{"h":0.0,"s":37.99,"m":999999}],"id":60},{"n":"Second day","p":[{"h":0.0,"s":14.99,"m":1},{"h":0.0,"s":16.99,"m":2},{"h":0.0,"s":18.99,"m":3},{"h":0.0,"s":20.99,"m":4},{"h":0.0,"s":22.99,"m":5},{"h":0.0,"s":24.99,"m":6},{"h":0.0,"s":26.99,"m":7},{"h":0.0,"s":28.99,"m":8},{"h":0.0,"s":30.99,"m":9},{"h":0.0,"s":32.99,"m":999999}],"id":61},{"n":"Ground","p":[{"h":0.0,"s":9.99,"m":1},{"h":0.0,"s":10.99,"m":2},{"h":0.0,"s":11.99,"m":3},{"h":0.0,"s":12.99,"m":4},{"h":0.0,"s":13.99,"m":5},{"h":0.0,"s":14.99,"m":6},{"h":0.0,"s":15.99,"m":7},{"h":0.0,"s":16.99,"m":8},{"h":0.0,"s":17.99,"m":9},{"h":0.0,"s":18.99,"m":999999}],"id":62},{"n":"UPS Ground","p":[{"h":0.0,"s":0.0,"m":999999}],"id":78},{"n":"UPS Express Saver","p":[{"h":0.0,"s":14.99,"m":1},{"h":0.0,"s":19.99,"m":2},{"h":0.0,"s":19.99,"m":3},{"h":0.0,"s":24.99,"m":4},{"h":0.0,"s":29.99,"m":5},{"h":0.0,"s":34.99,"m":6},{"h":0.0,"s":39.99,"m":7},{"h":0.0,"s":39.99,"m":8},{"h":0.0,"s":44.99,"m":9},{"h":0.0,"s":49.99,"m":999999}],"id":79},{"n":"Ground (Free)","p":[{"h":0.0,"s":0.0,"m":999999}],"id":88},{"n":"Ground UK","p":[],"id":142},{"n":"Next Day UK","p":[],"id":143},{"n":"DHL","p":[{"h":0.0,"s":11.5,"m":999999}],"id":150}],"n":"Nest Protect Battery - White","p":[{"s":true,"c":"USD","p":[],"i":true},{"s":false,"c":"EUR","p":[{"dP":119.0,"p":119.0,"m":999999}],"i":false},{"s":false,"c":"CAD","p":[],"i":true}],"mD":null,"mQ":280,"id":82131},{"s":[{"n":"Next day","p":[],"id":60},{"n":"Second day","p":[],"id":61},{"n":"Ground","p":[],"id":62},{"n":"UPS Ground","p":[],"id":78},{"n":"UPS Express Saver","p":[],"id":79},{"n":"Ground (Free)","p":[],"id":88},{"n":"Ground UK","p":[{"h":0.0,"s":0.0,"m":999999}],"id":142},{"n":"Next Day UK","p":[{"h":0.0,"s":14.99,"m":1},{"h":0.0,"s":29.98,"m":999999}],"id":143},{"n":"DHL","p":[],"id":150}],"n":"Nest Protect - 2nd Generation, Retail, Battery - White","p":[{"s":true,"c":"USD","p":[],"i":true},{"s":false,"c":"EUR","p":[{"dP":119.0,"p":119.0,"m":999999}],"i":false},{"s":false,"c":"CAD","p":[],"i":true}],"mD":null,"mQ":null,"id":229346},{"s":[{"n":"Next day","p":[{"h":0.0,"s":19.99,"m":1},{"h":0.0,"s":21.99,"m":2},{"h":0.0,"s":23.99,"m":3},{"h":0.0,"s":25.99,"m":4},{"h":0.0,"s":27.99,"m":5},{"h":0.0,"s":29.99,"m":6},{"h":0.0,"s":31.99,"m":7},{"h":0.0,"s":33.99,"m":8},{"h":0.0,"s":35.99,"m":9},{"h":0.0,"s":37.99,"m":999999}],"id":60},{"n":"Second day","p":[{"h":0.0,"s":14.99,"m":1},{"h":0.0,"s":16.99,"m":2},{"h":0.0,"s":18.99,"m":3},{"h":0.0,"s":20.99,"m":4},{"h":0.0,"s":22.99,"m":5},{"h":0.0,"s":24.99,"m":6},{"h":0.0,"s":26.99,"m":7},{"h":0.0,"s":28.99,"m":8},{"h":0.0,"s":30.99,"m":9},{"h":0.0,"s":32.99,"m":999999}],"id":61},{"n":"Ground","p":[{"h":0.0,"s":9.99,"m":1},{"h":0.0,"s":10.99,"m":2},{"h":0.0,"s":11.99,"m":3},{"h":0.0,"s":12.99,"m":4},{"h":0.0,"s":13.99,"m":5},{"h":0.0,"s":14.99,"m":6},{"h":0.0,"s":15.99,"m":7},{"h":0.0,"s":16.99,"m":8},{"h":0.0,"s":17.99,"m":9},{"h":0.0,"s":18.99,"m":999999}],"id":62},{"n":"UPS Ground","p":[{"h":0.0,"s":0.0,"m":999999}],"id":78},{"n":"UPS Express Saver","p":[{"h":0.0,"s":14.99,"m":1},{"h":0.0,"s":19.99,"m":2},{"h":0.0,"s":19.99,"m":3},{"h":0.0,"s":24.99,"m":4},{"h":0.0,"s":29.99,"m":5},{"h":0.0,"s":34.99,"m":6},{"h":0.0,"s":39.99,"m":7},{"h":0.0,"s":39.99,"m":8},{"h":0.0,"s":44.99,"m":9},{"h":0.0,"s":49.99,"m":999999}],"id":79},{"n":"Ground (Free)","p":[{"h":0.0,"s":0.0,"m":999999}],"id":88},{"n":"Ground UK","p":[],"id":142},{"n":"Next Day UK","p":[],"id":143},{"n":"DHL","p":[{"h":0.0,"s":11.5,"m":999999}],"id":150}],"n":"Nest Learning Thermostat","p":[{"s":true,"c":"USD","p":[],"i":true},{"s":false,"c":"EUR","p":[],"i":false},{"s":false,"c":"CAD","p":[{"dP":249.0,"p":249.0,"m":999999}],"i":true}],"mD":null,"mQ":10,"id":12875},{"s":[{"n":"Next day","p":[],"id":60},{"n":"Second day","p":[],"id":61},{"n":"Ground","p":[],"id":62},{"n":"UPS Ground","p":[],"id":78},{"n":"UPS Express Saver","p":[],"id":79},{"n":"Ground (Free)","p":[],"id":88},{"n":"Ground UK","p":[],"id":142},{"n":"Next Day UK","p":[],"id":143},{"n":"DHL","p":[],"id":150}],"n":"Nest Concierge Service","p":[{"s":true,"c":"USD","p":[],"i":true},{"s":false,"c":"EUR","p":[],"i":false},{"s":false,"c":"CAD","p":[{"dP":119.0,"p":119.0,"m":1},{"dP":25.0,"p":25.0,"m":999999}],"i":true}],"mD":null,"mQ":10,"id":13924}];
    simpleCart.initializeProducts(productInfo);
    simpleCart.initialize();
    
    $.datepicker.setDefaults($.datepicker.regional[""]);

    $.extend($.validator.messages, {
      required: "required"
    });

    $.datepicker.setDefaults({
      validateDate: 'Please enter a valid date',
      validateDateMin: 'Please enter a date on or after {0}',
      validateDateMax: 'Please enter a date on or before {0}',
      validateDateMinMax: 'Please enter a date between {0} and {1}',
      validateDateCompare: 'Please enter a date {0} {1}',
      validateDateToday: 'today',
      validateDateOther: 'the other date',
      validateDateEQ: 'equal to',
      validateDateNE: 'not equal to',
      validateDateLT: 'before',
      validateDateGT: 'after',
      validateDateLE: 'not after',
      validateDateGE: 'not before'
    });


    /***************************************************
    *  Setup all field validations
    ***************************************************/
    
    if($(".registria_field:input[name*='user[password]']").exists() && $(".registria_field:input[name*='user[password_confirmation]']").exists()){
      $(".registria_field:input[name*='user[password_confirmation]']").rules("add", {
        equalTo: ".registria_field:input[name*='user[password]']",
        messages: {
          equalTo: "confirmation does not match"
        }
      });
    }

    if($(".registria_field:input[name*='user[email]']").exists() && $(".registria_field:input[name*='user[confirm_email]']").exists()){
      $(".registria_field:input[name*='user[confirm_email]']").rules("add", {
        equalTo: ".registria_field:input[name*='user[email]']",
        messages: {
          equalTo: "confirmation does not match"
        }
      });
    }

  /***************************************************
  *  Page Specific
  ***************************************************/
  
  
  
  
  
  
});

/***************************************************
*  Google Analytics
***************************************************/

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-19609914-23']);
  
      _gaq.push(['_setAllowLinker', true]);
    _gaq.push(['_setDomainName', '.nest.com']);
    _gaq.push(['_setCustomVar', 2, 'Customer_Type', 'consumer', 3]);

      
  _gaq.push(['_trackPageview']);

  $("a[href][href!='#'][href!=''][href!='javascript:;']:not(.item_add):not(.more-info)").live("click", function(){
    _gaq.push(['_trackEvent', (this.hostname === location.hostname) ? 'internal':'external', 'click', $(this).attr('href'), null]);
  });

  $('a.item_add').live('click', function(){
    _gaq.push(['_trackEvent', 'Shopping', 'Item Added', $(this).attr('alt'), null]);
  });

  $('a.more-info').live('click', function(){
    _gaq.push(['_trackEvent', 'More Info', 'click', $(this).attr('href'), null]);
  });

  
  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
                  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/u/ga_debug.js';
              var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
/**
* @preserve HTML5 Shiv v3.6.2pre | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
*/
;(function(window, document) {
/*jshint evil:true */
  /** version */
  var version = '3.6.2pre';

  /** Preset options */
  var options = window.html5 || {};

  /** Used to skip problem elements */
  var reSkip = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i;

  /** Not all elements can be cloned in IE **/
  var saveClones = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i;

  /** Detect whether the browser supports default html5 styles */
  var supportsHtml5Styles;

  /** Name of the expando, to work with multiple documents or to re-shiv one document */
  var expando = '_html5shiv';

  /** The id for the the documents expando */
  var expanID = 0;

  /** Cached data for each document */
  var expandoData = {};

  /** Detect whether the browser supports unknown elements */
  var supportsUnknownElements;

  (function() {
    try {
        var a = document.createElement('a');
        a.innerHTML = '<xyz></xyz>';
        //if the hidden property is implemented we can assume, that the browser supports basic HTML5 Styles
        supportsHtml5Styles = ('hidden' in a);

        supportsUnknownElements = a.childNodes.length == 1 || (function() {
          // assign a false positive if unable to shiv
          (document.createElement)('a');
          var frag = document.createDocumentFragment();
          return (
            typeof frag.cloneNode == 'undefined' ||
            typeof frag.createDocumentFragment == 'undefined' ||
            typeof frag.createElement == 'undefined'
          );
        }());
    } catch(e) {
      // assign a false positive if detection fails => unable to shiv
      supportsHtml5Styles = true;
      supportsUnknownElements = true;
    }

  }());

  /*--------------------------------------------------------------------------*/

  /**
   * Creates a style sheet with the given CSS text and adds it to the document.
   * @private
   * @param {Document} ownerDocument The document.
   * @param {String} cssText The CSS text.
   * @returns {StyleSheet} The style element.
   */
  function addStyleSheet(ownerDocument, cssText) {
    var p = ownerDocument.createElement('p'),
        parent = ownerDocument.getElementsByTagName('head')[0] || ownerDocument.documentElement;

    p.innerHTML = 'x<style>' + cssText + '</style>';
    return parent.insertBefore(p.lastChild, parent.firstChild);
  }

  /**
   * Returns the value of `html5.elements` as an array.
   * @private
   * @returns {Array} An array of shived element node names.
   */
  function getElements() {
    var elements = html5.elements;
    return typeof elements == 'string' ? elements.split(' ') : elements;
  }

    /**
   * Returns the data associated to the given document
   * @private
   * @param {Document} ownerDocument The document.
   * @returns {Object} An object of data.
   */
  function getExpandoData(ownerDocument) {
    var data = expandoData[ownerDocument[expando]];
    if (!data) {
        data = {};
        expanID++;
        ownerDocument[expando] = expanID;
        expandoData[expanID] = data;
    }
    return data;
  }

  /**
   * returns a shived element for the given nodeName and document
   * @memberOf html5
   * @param {String} nodeName name of the element
   * @param {Document} ownerDocument The context document.
   * @returns {Object} The shived element.
   */
  function createElement(nodeName, ownerDocument, data){
    if (!ownerDocument) {
        ownerDocument = document;
    }
    if(supportsUnknownElements){
        return ownerDocument.createElement(nodeName);
    }
    if (!data) {
        data = getExpandoData(ownerDocument);
    }
    var node;

    if (data.cache[nodeName]) {
        node = data.cache[nodeName].cloneNode();
    } else if (saveClones.test(nodeName)) {
        node = (data.cache[nodeName] = data.createElem(nodeName)).cloneNode();
    } else {
        node = data.createElem(nodeName);
    }

    // Avoid adding some elements to fragments in IE < 9 because
    // * Attributes like `name` or `type` cannot be set/changed once an element
    //   is inserted into a document/fragment
    // * Link elements with `src` attributes that are inaccessible, as with
    //   a 403 response, will cause the tab/window to crash
    // * Script elements appended to fragments will execute when their `src`
    //   or `text` property is set
    return node.canHaveChildren && !reSkip.test(nodeName) ? data.frag.appendChild(node) : node;
  }

  /**
   * returns a shived DocumentFragment for the given document
   * @memberOf html5
   * @param {Document} ownerDocument The context document.
   * @returns {Object} The shived DocumentFragment.
   */
  function createDocumentFragment(ownerDocument, data){
    if (!ownerDocument) {
        ownerDocument = document;
    }
    if(supportsUnknownElements){
        return ownerDocument.createDocumentFragment();
    }
    data = data || getExpandoData(ownerDocument);
    var clone = data.frag.cloneNode(),
        i = 0,
        elems = getElements(),
        l = elems.length;
    for(;i<l;i++){
        clone.createElement(elems[i]);
    }
    return clone;
  }

  /**
   * Shivs the `createElement` and `createDocumentFragment` methods of the document.
   * @private
   * @param {Document|DocumentFragment} ownerDocument The document.
   * @param {Object} data of the document.
   */
  function shivMethods(ownerDocument, data) {
    if (!data.cache) {
        data.cache = {};
        data.createElem = ownerDocument.createElement;
        data.createFrag = ownerDocument.createDocumentFragment;
        data.frag = data.createFrag();
    }


    ownerDocument.createElement = function(nodeName) {
      //abort shiv
      if (!html5.shivMethods) {
          return data.createElem(nodeName);
      }
      return createElement(nodeName, ownerDocument, data);
    };

    ownerDocument.createDocumentFragment = Function('h,f', 'return function(){' +
      'var n=f.cloneNode(),c=n.createElement;' +
      'h.shivMethods&&(' +
        // unroll the `createElement` calls
        getElements().join().replace(/\w+/g, function(nodeName) {
          data.createElem(nodeName);
          data.frag.createElement(nodeName);
          return 'c("' + nodeName + '")';
        }) +
      ');return n}'
    )(html5, data.frag);
  }

  /*--------------------------------------------------------------------------*/

  /**
   * Shivs the given document.
   * @memberOf html5
   * @param {Document} ownerDocument The document to shiv.
   * @returns {Document} The shived document.
   */
  function shivDocument(ownerDocument) {
    if (!ownerDocument) {
        ownerDocument = document;
    }
    var data = getExpandoData(ownerDocument);

    if (html5.shivCSS && !supportsHtml5Styles && !data.hasCSS) {
      data.hasCSS = !!addStyleSheet(ownerDocument,
        // corrects block display not defined in IE6/7/8/9
        'article,aside,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}' +
        // adds styling not present in IE6/7/8/9
        'mark{background:#FF0;color:#000}'
      );
    }
    if (!supportsUnknownElements) {
      shivMethods(ownerDocument, data);
    }
    return ownerDocument;
  }

  /*--------------------------------------------------------------------------*/

  /**
   * The `html5` object is exposed so that more elements can be shived and
   * existing shiving can be detected on iframes.
   * @type Object
   * @example
   *
   * // options can be changed before the script is included
   * html5 = { 'elements': 'mark section', 'shivCSS': false, 'shivMethods': false };
   */
  var html5 = {

    /**
     * An array or space separated string of node names of the elements to shiv.
     * @memberOf html5
     * @type Array|String
     */
    'elements': options.elements || 'abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup main mark meter nav output progress section summary time video',

    /**
     * current version of html5shiv
     */
    'version': version,

    /**
     * A flag to indicate that the HTML5 style sheet should be inserted.
     * @memberOf html5
     * @type Boolean
     */
    'shivCSS': (options.shivCSS !== false),

    /**
     * Is equal to true if a browser supports creating unknown/HTML5 elements
     * @memberOf html5
     * @type boolean
     */
    'supportsUnknownElements': supportsUnknownElements,

    /**
     * A flag to indicate that the document's `createElement` and `createDocumentFragment`
     * methods should be overwritten.
     * @memberOf html5
     * @type Boolean
     */
    'shivMethods': (options.shivMethods !== false),

    /**
     * A string to describe the type of `html5` object ("default" or "default print").
     * @memberOf html5
     * @type String
     */
    'type': 'default',

    // shivs the document according to the specified `html5` object options
    'shivDocument': shivDocument,

    //creates a shived element
    createElement: createElement,

    //creates a shived documentFragment
    createDocumentFragment: createDocumentFragment
  };

  /*--------------------------------------------------------------------------*/

  // expose html5
  window.html5 = html5;

  // shiv the document
  shivDocument(document);

}(this, document));

/* == Setup Nest Labs name space == */
NL = {};
NL.lastFormInstance = {};
if (typeof(NL.ui) === 'undefined') NL.ui = {};

/* == Nest Labs Overlay Manager == */
NL.scrollTo = function(target) {
  var elementHref = $(target).attr('href');
  var destination = $(elementHref).offset().top;
  if(destination <200){
      $("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination}, 1000, 'easeOutCubic', function(){if(!$.browser.msie){$(window).scroll();}});
  }else{
      $("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination}, 500,  'easeOutCubic', function(){if(!$.browser.msie){$(window).scroll();}});
  }

    return false;
}

/* == SSO - Single Sign On == */


/* Shim for toISOString for nonsupporting browsers <COUGH>IE8</COUGH> */
if ( !Date.prototype.toISOString ) {
  ( function() {

    function pad(number) {
      if ( number < 10 ) {
        return '0' + number;
      }
      return number;
    }

    Date.prototype.toISOString = function() {
      return this.getUTCFullYear() +
        '-' + pad( this.getUTCMonth() + 1 ) +
        '-' + pad( this.getUTCDate() ) +
        'T' + pad( this.getUTCHours() ) +
        ':' + pad( this.getUTCMinutes() ) +
        ':' + pad( this.getUTCSeconds() ) +
        '.' + (this.getUTCMilliseconds() / 1000).toFixed(3).slice( 2, 5 ) +
        'Z';
    };

  }() );
}
/* end toISOString shim */

var nestSAMLUrl = "https://home.qa.nestlabs.com/";

var Base64 = {
  // private property
  _keyStr : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",

  // public method for encoding
  encode : function (input) {
      var output = "";
      var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
      var i = 0;

      input = Base64._utf8_encode(input);

      while (i < input.length) {

          chr1 = input.charCodeAt(i++);
          chr2 = input.charCodeAt(i++);
          chr3 = input.charCodeAt(i++);

          enc1 = chr1 >> 2;
          enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
          enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
          enc4 = chr3 & 63;

          if (isNaN(chr2)) {
              enc3 = enc4 = 64;
          } else if (isNaN(chr3)) {
              enc4 = 64;
          }

          output = output +
          Base64._keyStr.charAt(enc1) + Base64._keyStr.charAt(enc2) +
          Base64._keyStr.charAt(enc3) + Base64._keyStr.charAt(enc4);

      }

      return output;
  },

  // public method for decoding
  decode : function (input) {
      var output = "";
      var chr1, chr2, chr3;
      var enc1, enc2, enc3, enc4;
      var i = 0;

      input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

      while (i < input.length) {

          enc1 = Base64._keyStr.indexOf(input.charAt(i++));
          enc2 = Base64._keyStr.indexOf(input.charAt(i++));
          enc3 = Base64._keyStr.indexOf(input.charAt(i++));
          enc4 = Base64._keyStr.indexOf(input.charAt(i++));

          chr1 = (enc1 << 2) | (enc2 >> 4);
          chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
          chr3 = ((enc3 & 3) << 6) | enc4;

          output = output + String.fromCharCode(chr1);

          if (enc3 != 64) {
              output = output + String.fromCharCode(chr2);
          }
          if (enc4 != 64) {
              output = output + String.fromCharCode(chr3);
          }

      }

      output = Base64._utf8_decode(output);

      return output;

  },

  // private method for UTF-8 encoding
  _utf8_encode : function (string) {
      string = string.replace(/\r\n/g,"\n");
      var utftext = "";

      for (var n = 0; n < string.length; n++) {

          var c = string.charCodeAt(n);

          if (c < 128) {
              utftext += String.fromCharCode(c);
          }
          else if((c > 127) && (c < 2048)) {
              utftext += String.fromCharCode((c >> 6) | 192);
              utftext += String.fromCharCode((c & 63) | 128);
          }
          else {
              utftext += String.fromCharCode((c >> 12) | 224);
              utftext += String.fromCharCode(((c >> 6) & 63) | 128);
              utftext += String.fromCharCode((c & 63) | 128);
          }

      }

      return utftext;
  },

  // private method for UTF-8 decoding
  _utf8_decode : function (utftext) {
      var string = "";
      var i = 0;
      var c = c1 = c2 = 0;

      while ( i < utftext.length ) {

          c = utftext.charCodeAt(i);

          if (c < 128) {
              string += String.fromCharCode(c);
              i++;
          }
          else if((c > 191) && (c < 224)) {
              c2 = utftext.charCodeAt(i+1);
              string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
              i += 2;
          }
          else {
              c2 = utftext.charCodeAt(i+1);
              c3 = utftext.charCodeAt(i+2);
              string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
              i += 3;
          }

      }
      return string;
  }
}

function post_to_iframe(iframe, path, params, method) {
  method = method || "post"; // Set method to post by default, if not specified.

  var form = document.createElement("form");
  form.setAttribute("method", method);
  form.setAttribute("action", path);
  form.setAttribute("target", iframe);

  for(var key in params) {
    if(params.hasOwnProperty(key)) {
      var hiddenField = document.createElement("input");
      hiddenField.setAttribute("type", "hidden");
      hiddenField.setAttribute("name", key);
      hiddenField.setAttribute("value", params[key]);

      form.appendChild(hiddenField);
    }
  }

  document.body.appendChild(form);
  form.submit();
};

function nestSAMLRequest() {
  // todo: staging versus prod
  var id = Math.floor(Math.random()*99999999999999999).toString(16);
  var xml = "<?xml version='1.0' encoding='UTF-8'?><saml2p:AuthnRequest xmlns:saml2p='urn:oasis:names:tc:SAML:2.0:protocol' AssertionConsumerServiceURL='https://certified.registriastaging.com/nest/sso' Destination='https://home.qa.nestlabs.com/accounts/saml2/idp/post?style=popup' ForceAuthn='false' ID='"+id+"' IsPassive='false' IssueInstant='"+(new Date()).toISOString()+"' ProtocolBinding='urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST' Version='2.0'><saml2:Issuer xmlns:saml2='urn:oasis:names:tc:SAML:2.0:assertion'>https://certified.registriastaging.com</saml2:Issuer></saml2p:AuthnRequest>";
  return Base64.encode(xml);
}

function nestLoginPopup() {
  var saml = encodeURIComponent(nestSAMLRequest());
  var next = encodeURIComponent("/accounts/saml2/idp/complete?SAMLRequest="+saml);
  var link = nestSAMLUrl + "login/?style=popup&next="+next;
  window.location = link;
}

function nestLoginPopupUrl() {
  var saml = encodeURIComponent(nestSAMLRequest());
  var next = encodeURIComponent("/accounts/saml2/idp/complete?SAMLRequest="+saml);
  var link = nestSAMLUrl + "login/?style=popup&next="+next;
  return link;
}

function nestLogout() {
  var next = encodeURIComponent("https://certified.registriastaging.com/logout?next_page=landing");
  var url = nestSAMLUrl + "accounts/logout/?next="+next;
  window.location = url;
}


/* == VIDEO FUNCTIONS == */
function openVideo(targetVideo) {
    var current_scroll_position = $(window).scrollTop() +40;
    $(targetVideo).closest('.modalWrapper').css('top',current_scroll_position);
    $(targetVideo).closest('.modalWrapper').addClass('videoWrapper');
    $(targetVideo).closest('.overlay').addClass('playVideo').fadeIn(400);
}

// function closeVideo(targetVideo) {
//     // Set id of video
//     var playerId = $('.playVideo video').attr('id');
//     if(playerId == undefined) {
//       playerId = $(".playVideo object").parent(".video-js").attr("id");
//     }
//
//     var mPlayer = _V_(playerId);
//     mPlayer.ready(function() {
//         mPlayer.pause();
//     });
//
//     /*
//     if ($('.playVideo .flowplayer').hasClass('is-playing')) {
//       $(targetVideo).siblings('.fp-ui').find('a.fp-play').click();
//     }
//     */
//
//     $('.playVideo').fadeOut(300, function() {
//         $(this).removeClass('playVideo');
//     });
// }

function closeVideo(targetVideo) {
    // Set id of video
    var playerId = $('.playVideo video').attr('id');
    if(playerId == undefined) {
      playerId = $(".playVideo object").parent(".video-js").attr("id");
    }

    var mPlayer = _V_(playerId);
    mPlayer.ready(function() {
        mPlayer.pause();
    });

    $('.playVideo').fadeOut(300, function() {
        $(this).removeClass('playVideo');
    });
}

/* == Dynamic Table Functions == */
var animation_durration = 200;

function hide_details(target, target_header, remove_item) {
  $.each((target).find('td div'), function() {
    $(this).slideUp(animation_durration);
  }).promise().done(function(){
    $(target).hide();
    $(target_header).children('td.details').removeClass('visible');
  }).promise().done(function() {
    if (remove_item == true) {
      $(target).parents('tr').remove();
      $(target_header).animate({
        opacity: 0
      }, animation_durration, function() {
        $(target_header).remove();
      });
    }
  });
}

function show_details(target) {
  $(target).find('td div').each(function() {
    $(this).hide();
  });

  $(target).show();
  $(target).find('td div').each(function() {
    if ($(this).parents('tr').hasClass('referral_response') == false) {
      $(this).slideDown(animation_durration);
    }
  });
}

function set_star_rating() {
  var user_star_rating = $('.star_rating').attr('data-rating');
  var user_star_rating_remainder = ($('.star_rating').attr('data-rating') % 1);

  var rating_i = 1;

  $('.star_rating span').each(function() {
    if (rating_i <= user_star_rating) {
      $(this).addClass('lit');
      rating_i++;
    }
    else if (user_star_rating_remainder > 0) {
      targetWidth = $(this).width() * user_star_rating_remainder ;
      partial_styles = '<style type="text/css">.star_rating span.partial:after {width:'+targetWidth+'px;}</style>'
      $('head').append(partial_styles);
      $(this).addClass('partial');
      user_star_rating_remainder = 0;
    }
    else {
      // Stop. Nothing more to do
    }
  });
}

function light_point_meter(n) {
  var stepSize = 12;
  var maxPoints = 1500;
  //var goldLevel = 600;
  //var platinumLevel = 1500;
  var meter = $('.points_indicator');
  var meterWidth = $('.point-meter').width();

  var current_level = $(meter).attr('data-current-level');
  var targetPoints = $('.points_indicator').attr('data-target-points')/1;
  var accruedPoints = $(meter).attr('data-accrued-points')/1;
  if (accruedPoints > maxPoints) {
    accruedPoints = maxPoints
  }

  var pointsToNextLevel = targetPoints - accruedPoints;

  function calculatePosition(n) {
    var leftPercent = (n / maxPoints) * 100;
    var leftWidth = Math.round((meterWidth * leftPercent ) / 100 );

    if (leftWidth > 0 && leftWidth < meterWidth) {
      while (leftWidth % stepSize != 0) {
        leftWidth ++;
      }
    }
    if (leftWidth > meterWidth) {
      leftWidth = meterWidth;
    }

    return leftWidth;
  }
  var lightsWidth = calculatePosition(accruedPoints);
  var nextLevelPosition = meterWidth - calculatePosition(targetPoints) + 6;

  switch (current_level) {
    case "Gold":
      $('.point-meter').addClass('gold');
      var nextLevelCopy = pointsToNextLevel + ' points to PLATINUM';
      $('.points_indicator .next-level').prepend(nextLevelCopy);
      var nextLevelPosition = nextLevelPosition;
      break;

    case "Platinum":
      $('.point-meter .point-meter-lights').addClass('platinum');
      var nextLevelCopy = 'CONGRATULATIONS';
      $('.points_indicator .next-level').prepend(nextLevelCopy);
      var nextLevelPosition = nextLevelPosition;
      break;

    default:
      var nextLevelCopy = pointsToNextLevel + ' points to GOLD';
      $('.points_indicator .next-level').prepend(nextLevelCopy);
      var nextLevelPosition = nextLevelPosition;
  }

  // $('.points_indicator .next-level').text(nextLevelCopy);
  $('.point-meter .point-meter-lights').animate({width: lightsWidth}, animation_durration*3);
  $('.points_indicator .next-level').css('right', nextLevelPosition).animate({opacity: 1}, animation_durration);

}


function closeModal() {
  var overlay = $('.overlay:visible');
  var modalCloseButton = overlay.find('.close');
  var modalContents = modalCloseButton.next();

  if (modalContents.is('.flowplayer')) {
    closeVideo(modalContents.find('video'));
    overlay.fadeOut(400);
  }
  else if (modalContents.is('.video-js')) {
    closeVideo(modalContents.find('video'));
    overlay.fadeOut(400);
  }
  else if (modalContents.is('iframe')) {
    overlay.fadeOut(400).promise().done(function() {
      modalCloseButton.remove();
      overlay.remove();
    });
  }
  else{
    overlay.fadeOut(400);
  }
}

// close finder2 by when close button is clicked by calling
// the closeFinder2 function on parent window.
function receiveMessage(event) {
  if (event.data == "close finder2")
    closeFinder2();
}
if (window.addEventListener)
  window.addEventListener("message", receiveMessage, false);
else // IE8 fallback method
  window.attachEvent("onmessage", receiveMessage);


function closeFinder2() {
  var overlay = $('.overlay:visible');
  overlay.fadeOut(400).promise().done(function() {
    overlay.remove();
  });
}

function loadIframe(sourcePage, scrolling, iframeHeight, iframeWidth) {
    var current_scroll_position = $(window).scrollTop() +40;
    var page_height = $('#body_wrap').height();

    if (current_scroll_position > (page_height - iframeHeight)) {
      current_scroll_position = current_scroll_position - iframeHeight;
    }

    if (!iframeWidth) {
      var iframeWidth = 798;
    }

    var modal_width = parseInt(iframeWidth)+40;
    var sourcePage = '/' + sourcePage;

    if (sourcePage == '/certified_finder') {
      openFinder2();
    }
    else {
      var overlayMarkup = '<div class="overlay"> <div class="modalWrapper" style="width:'+ modal_width +'px; top:'+current_scroll_position+'px;"> <div class="close"></div> <iframe width="'+iframeWidth+'" height="'+iframeHeight+'" src="' + sourcePage + '" frameborder="0" scrolling="' + scrolling + '" style="overflow-x: hidden; border:none;" allowfullscreen=""> </iframe> </div> </div>';
    }

    $('#body_wrap').append(overlayMarkup);

    var iframe = $('iframe[src="'+sourcePage+'"]');
    $('.overlay').has(iframe).fadeIn(400);
}

$(document).ready(function() {

  var passedCountry = $.queryParams["country"];
  var currentCountry = getCookie("current_country");

  if (currentCountry == "") {
    if (passedCountry !== undefined) {
      if (passedCountry == "gb") {
        setCookie("current_country", "UNITED KINGDOM");
        currentCountry = "UNITED KINGDOM";
        switchLocaleAndCurrency("en_GB", "GBP");
      }
      else {
        setCookie("current_country", "UNITED STATES");
        currentCountry = "UNITED STATES";
        switchLocaleAndCurrency("en_US", "USD");
      }
    }
  }

  if (window.location.hash == "#sso_login") {
    if (screen.width <= 800) {
      window.location = '/sso_login';
    } else {
      loadIframe('sso_login', 'no', 350, 400);
    }
  }

  /* == Dynamic Tables == */
  $('table.dynamic_data tr').click(function() {
    if ($.contains($(this).next('tr'), '.item_details')) {

      var item_details = $(this).next('tr').children('.item_details');
      $(this).children('td.details').toggleClass('visible');

      if ($(this).children('td.details').hasClass('visible')) {
        show_details(item_details);

        if ($(this).attr('data-case-status') === 'new') {
          var caseid = $(this).attr("data-case-id"),
              caseHeaderId = "caseHeader_" + caseid,
              caseDetailsId = "caseDetails_" + caseid;

          Registria.Cases.view($(this).attr('data-case-id'), {
            success: function(){
              $('tr[id="' + caseHeaderId + '"]').attr('data-case-status', 'viewed');
              $('tr[id="' + caseHeaderId + '"] td.status').removeClass("New").addClass("Viewed").text("Viewed");
            },
            error: function(){
              alert("Referral could not be updated.");
            }
          });
        }
      }
      else {
        hide_details($(this).next('tr').children('.item_details'), $(this), false);
      }
    }
  });

  $('.simpleCart_checkout').click(function(e) {
    if (simpleCart.quantity == 0) {
      if ($.currentLocale == "en_gb") {
        alert("Your basket is empty. Please add items to basket and checkout.");
      }
      else {
        alert("Your shopping cart is empty. Please add items to your cart and checkout.");
      }
      e.preventDefault();
    }
  });

  $('.case-respond').click(function() {
    var caseId = $(this).attr('data-caseid');
    $('tr#respond_row_' + caseId + ' div').slideDown(animation_durration, function() {
      $('#referral_response_' + caseId).focus();
    });
  });

  $('.case-respond-cancel').click(function() {
    $(this).parents('tr.referral_response div').slideUp(animation_durration);
  })


/* == Login box == */
  /* Setup Login Form */
  $(document).ready(function(){

      var csrfParam = $("meta[name='csrf-param']").attr("content");
      var csrfToken = $("meta[name='csrf-token']").attr("content");
      $('#registria_login_form').append("<input id='login_token' name='"+ csrfParam +"' type='hidden' value='"+ csrfToken +"'></input>");

      $('#registria_login_form').submit(function(){
      $('#login_next_button').attr('disabled', true);
      oldValue = $('#login_next_button').val();
      $('#login_next_button').val($.translator.t('Please wait'));
      var fieldData = $('#login_username, #login_password, #login_page_name, #next_page, #login_token');

      showError = function(error) {
      if($('#login_next_button').attr('disabled')) {
          $('#login_error_message').show();
          $('#login_next_button').attr('disabled', false);
          $('#login_next_button').val(oldValue);
        }
        else {
          var decoded = $("<div/>").html(error).text();
          $('div.registria.form_messages').hide();
          $('#next_button').attr('disabled', false);
          $('#next_button').val(oldValue);
          $('div.registria.form_errors').html(decoded);
          $('div.registria.form_errors').show();
          scroll(0,0);
        }
      }
      $.ajaxFileUpload({
        url:'/determinator',
        secureuri:false,
        elements: fieldData,
        dataType: 'script',
        success: function (data, status){
        },
        error: function (data, status, e) {
          alert(e);
          $('#login_next_button').attr('disabled', false);
          $('#login_next_button').val(oldValue);
        }
      });
      return false;
    });
    if ("{{ user.organizations.first.status }}" != "approved")
    $("a.disabled").removeAttr('href');
    else
      $("a.disabled").removeClass('disabled');
  });


  $('header .login').click(function() {
    if ($('#loginForm').is(':hidden')) {
      $('.login').css('min-width','290px');
      $('header .login div').addClass('loginFormVisible');
      $('#loginForm').delay(200).slideDown(200);
    }
    else {
      $('#loginForm').slideUp(200);
      $('header .login div').removeClass('loginFormVisible');
      setTimeout(function() {
        $('.login').css('min-width','0');
      }, 200);
    }

  });

  /* == Modals == */
  $('.load_iframe').on('click touch', function() {
    var sourcePage = '/' + $(this).attr('data-target');

    if (screen.width <= 800 && sourcePage !== '/invite_user') {
      window.location = sourcePage;
    } else {
      var current_scroll_position = $(window).scrollTop() +40;

      var iframe_height = $(this).attr('data-iframe-height');
      var page_height = $('#body_wrap').height();

      if (current_scroll_position > (page_height - iframe_height)) {
        current_scroll_position = current_scroll_position - iframe_height;
      }

      var iframe_width = 798;
      if ($(this).attr('data-iframe-width')) {
        iframe_width = $(this).attr('data-iframe-width')
      }
      var modal_width = parseInt(iframe_width)+40;
      var scrolling = $(this).attr('data-scrolling');

      if (sourcePage == '/certified_finder') {
        openFinder2();
      }
      else {
        var overlayMarkup = '<div class="overlay"> <div class="modalWrapper" style="width:'+ modal_width +'px; top:'+current_scroll_position+'px;"> <div class="close"></div> <iframe width="'+iframe_width+'" height="'+iframe_height+'" src="' + sourcePage + '" frameborder="0" scrolling="' + scrolling + '" style="overflow-x: hidden; border:none;" allowfullscreen=""> </iframe> </div> </div>';
      }

      $('#body_wrap').append(overlayMarkup);

      var iframe = $('iframe[src="'+sourcePage+'"]');
      $('.overlay').has(iframe).fadeIn(400);
    }
  });

  $('.overlay .close').live('click', function() {
    $('.overlay:visible').stop();
    closeModal();
  });

/* == Play Videos == */
    $('.videoThumbnail,').click(function() {
      var targetVideo = "#" + $(this).attr('data-target');
      openVideo(targetVideo);
    });

    // Make full file input clickable
    // (IE allows users to type file path manually.
    // this is not desired for our purposes.)
    $('input[type="file"], input[type="file"]+label').focus().trigger('dblclick');


    // Display value for styled file inputs
    $('.file_input_style input[type="file"]').change(function() {
      if ($('.file_input_style input[type="file"]').val()) {
        file_value = /([^\\]+)$/.exec($('.file_input_style input[type="file"]').val())[1];
        $('.file_input_style .chosen_file').text(file_value);
      }
    });

    // Scroll to top on page load
    $(document).scrollTop(0);

    /* Print resource link */
    $('.print_page').click(function() {
      window.print();
    });


    /* ===== Referral status updates ===== */
    $(".case-claim").live("click", function(){
      var link = $(this);
      var caseid = link.attr("data-caseid");
      var caseHeaderId = "caseHeader_" + caseid;
      var caseDetailsId = "caseDetails_" + caseid;

      if(confirm("Are you sure?")){
        Registria.Cases.accept(caseid, {
          success: function(){
            $('tr[id="' + caseHeaderId + '"] td.status').removeClass("Responded").addClass("Accepted").text("Accepted");

            $('tr[id="' + caseDetailsId + '"] .imitationButton').each(function() {
              if ($(this).hasClass('case-claim')) {
                $(this).fadeOut(animation_durration).promise().done(function() {
                  $(this).text('Mark complete').append('<span></span>').removeClass('case-claim').addClass('case-complete').fadeIn(animation_durration);
                });
              }
              else {
                $(this).fadeOut(animation_durration).promise().done(function(){
                  $(this).remove();
                });
              }
            });
            hide_details($('tr[id="' + caseDetailsId + '"] .item_details'), $('tr[id="' + caseHeaderId + '"]'), false);
          },
          error: function(){
            alert("Referral could not be updated.");
          }
        });
      } // end if
    }); // end click function

    $(".case-decline").live("click", function(){
      var link = $(this);
      var caseid = link.attr("data-caseid");
      var caseHeaderId = "caseHeader_" + caseid;
      var caseDetailsId = "caseDetails_" + caseid;
      if(confirm("Are you sure?")){
        Registria.Cases.decline(caseid, {
          success: function(){
            //hide the selected case
            hide_details($('tr[id="' + caseDetailsId + '"] .item_details'), $('tr[id="' + caseHeaderId + '"]'), true)
          },
          error: function(){
            alert("Referral could not be updated.");
          }
        })
      };
    });

    $(".case-complete").live("click", function(){
      var link = $(this);
      var caseid = link.attr("data-caseid");
      var caseHeaderId = "caseHeader_" + caseid;
      var caseDetailsId = "caseDetails_" + caseid;
      if(confirm("Are you sure?")){
        Registria.Cases.close(caseid, {
          success: function(){
            //hide the selected case
            $('tr[id="' + caseHeaderId + '"] td.status').removeClass("Accepted").addClass("Closed").text("Closed");
            $('tr[id="' + caseDetailsId + '"] .imitationButton').each(function() {
              $(this).fadeOut(animation_durration).promise().done(function(){
                $(this).remove();
              });
            });
            hide_details($('tr[id="' + caseDetailsId + '"] .item_details'), $('tr[id="' + caseHeaderId + '"]'), false);

          },
          error: function(){
            alert("Referral could not be updated.");
          }
        })
      };
    });

    $('.post-response').live('click', function() {
      var link = $(this);
      var caseId = $(this).attr('data-caseid');
      var messageContent = $(this).siblings('textarea').val();
      var caseHeaderId = "caseHeader_" + caseId;
      var caseDetailsId = "caseDetails_" + caseId;

      if (messageContent != "") {
        Registria.Cases.comment(caseId, messageContent, {
          success: function(){
            // alert('Message sent.');
            var response_row = $(link).parents('tr.referral_response div');

            $(response_row).slideUp(animation_durration, function() {
              $(this).parents('tr.referral_response').remove();
            });

            $('tr[id="' + caseDetailsId + '"] .imitationButton.case-respond').fadeOut(animation_durration, function() {
                  $(this).html('Accept<span></span>').removeClass('case-respond').addClass('case-claim').fadeIn(animation_durration);
            });

            //hide_details($('tr[id="' + caseDetailsId + '"]>td.item_details'), $('tr[id="' + caseHeaderId + '"]'), false);
            $('tr[id="' + caseHeaderId + '"] td.status').removeClass("Viewed").addClass("Responded").text("Responded");
          },
          error: function(){
            alert('There was a problem sending your message.')
          }
        });
      }
      else {
        alert('Message must not be blank.');
      }
    });

  // EMAIL SIGNUP
  NL.initEmailSubmitFields = function(){
    $('.signup-submit').bind('click', function(e){
      e.preventDefault()
      NL.validateEmailSubmit($(this).prev().val(), $(this).parent());
    });
    $('form.footer-signup').submit(function(e){
      e.preventDefault()
      NL.validateEmailSubmit($(this).prev().val(), $(this).parent());
    });
    var forms = ["#landing_signup", "#footer_signup", "#product_signup", "#press_signup", "#news_signup", "#plus_signup"]
    $.each(forms, function(index, element){
      $(element).bind("keydown", function(event) {
          var keycode = (event.keyCode ? event.keyCode : (event.which ? event.which : event.charCode));
          if (keycode == 13) {
            event.preventDefault();
               $(this).find('.signup-submit').click();
               return false;
          } else  {
              return true;
          }
      });
    })

    $('.validation-message').css({opacity:'0'});
  }
  NL.validateEmailSubmit = function(emailValue, formInstance){
    NL.lastFormInstance = formInstance;
    NL.lastFormInstance.next().find('.validation-message').css({opacity:'0'});
    NL.lastFormInstance.next().find('.validation-message').stop(true,true);

    var filter  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(emailValue === '' || emailValue === 'Your Email Address'){
      NL.lastFormInstance.find('input').focus();
    }else{
       if (!filter.test(emailValue)) {
        NL.emailInvalid();
      }else{
        NL.submitAddress(emailValue)
      }
    }
  }
  NL.submitAddress = function(emailValue){
    var listFlag ="";

    switch(NL.lastFormInstance.attr('id')){
      case 'landing_signup':
        _gaq.push(['_trackEvent', 'home', 'email_submit', 'home']);
        listFlag = 'main';
        break;
      case 'footer_signup':
        //_gaq.push(['_trackEvent', 'global_footer', 'email_submit', 'footer']);
        listFlag='main'
        break;
      case 'plus_signup':
        //signup for plus or main news lists
          _gaq.push(['_trackEvent', 'compatibility', 'plus_email_submit', 'compatibility']);
          listFlag = "plus";
        break;
      case 'news_signup':
      case 'product_signup':
          _gaq.push(['_trackEvent', 'compatibility', 'email_submit', 'compatibility']);
          listFlag = "main";
        break;
      case 'press_signup':
        _gaq.push(['_trackEvent', 'press', 'email_submit', 'press']);
        listFlag = "press";
        break;
    };

    $.post('nest/email_subscribe','email=' + escape(emailValue)+"&list="+listFlag+"&certified=1", function(data){
      //log(data);
      if(data.status == true){
        NL.onEmailCallbackSuccess();
      }else{
        NL.onEmailCallbackFail();
      }
    }, 'json');


  }
  NL.onEmailCallbackSuccess = function(){
    NL.lastFormInstance.next().css({'z-index':99}).find('.success').animate({opacity:'1'},400).delay(3000).animate({opacity:'0'}, 500, "linear", function(){
      $('.validation-window').css({'z-index':0});
      NL.lastFormInstance.find('input').val('');
    });
    if(NL.lastFormInstance.attr('id') ==="press_signup"){
      NL.setPressCookie();
    }
  }
  NL.onEmailCallbackFail = function(){
    NL.lastFormInstance.next().css({'z-index':99}).find('.fail').animate({opacity:'1'},400).delay(3000).animate({opacity:'0'}, 500, "linear",function(){$('.validation-window').css({'z-index':0});});
    NL.lastFormInstance.find('input').focus();
  }
  NL.emailInvalid = function(){
    NL.lastFormInstance.next().css({'z-index':99}).find('.invalid').animate({opacity:'1'},400).delay(3000).animate({opacity:'0'}, 500, "linear",function(){$('.validation-window').css({'z-index':0});});
    NL.lastFormInstance.find('input').focus();
  }

  // End email signup

  // Make sure the next_button is not focused
  $('#next_button').blur();

  // UI_intro
  set_star_rating();
});

$(window).load(function() {
  light_point_meter();
});

$(function(){
  NL.initEmailSubmitFields();
});




/**
 * --------------------------------------------------------------------
 * jQuery-Plugin "pngFix"
 * Version: 1.2, 09.03.2009
 * by Andreas Eberhard, andreas.eberhard@gmail.com
 *                      http://jquery.andreaseberhard.de/
 *
 * Copyright (c) 2007 Andreas Eberhard
 * Licensed under GPL (http://www.opensource.org/licenses/gpl-license.php)
 *
 * Changelog:
 *    09.03.2009 Version 1.2
 *    - Update for jQuery 1.3.x, removed @ from selectors
 *    11.09.2007 Version 1.1
 *    - removed noConflict
 *    - added png-support for input type=image
 *    - 01.08.2007 CSS background-image support extension added by Scott Jehl, scott@filamentgroup.com, http://www.filamentgroup.com
 *    31.05.2007 initial Version 1.0
 * --------------------------------------------------------------------
 * @example $(function(){$(document).pngFix();});
 * @desc Fixes all PNG's in the document on document.ready
 *
 * jQuery(function(){jQuery(document).pngFix();});
 * @desc Fixes all PNG's in the document on document.ready when using noConflict
 *
 * @example $(function(){$('div.examples').pngFix();});
 * @desc Fixes all PNG's within div with class examples
 *
 * @example $(function(){$('div.examples').pngFix( { blankgif:'ext.gif' } );});
 * @desc Fixes all PNG's within div with class examples, provides blank gif for input with png
 * --------------------------------------------------------------------
 */

(function($) {

jQuery.fn.pngFix = function(settings) {

	// Settings
	settings = jQuery.extend({
		blankgif: 'blank.gif'
	}, settings);

	var ie55 = (navigator.appName == "Microsoft Internet Explorer" && parseInt(navigator.appVersion) == 4 && navigator.appVersion.indexOf("MSIE 5.5") != -1);
	var ie6 = (navigator.appName == "Microsoft Internet Explorer" && parseInt(navigator.appVersion) == 4 && navigator.appVersion.indexOf("MSIE 6.0") != -1);

	if (jQuery.browser.msie && (ie55 || ie6)) {

		//fix images with png-source
		jQuery(this).find("img[src$=.png]").each(function() {

			jQuery(this).attr('width',jQuery(this).width());
			jQuery(this).attr('height',jQuery(this).height());

			var prevStyle = '';
			var strNewHTML = '';
			var imgId = (jQuery(this).attr('id')) ? 'id="' + jQuery(this).attr('id') + '" ' : '';
			var imgClass = (jQuery(this).attr('class')) ? 'class="' + jQuery(this).attr('class') + '" ' : '';
			var imgTitle = (jQuery(this).attr('title')) ? 'title="' + jQuery(this).attr('title') + '" ' : '';
			var imgAlt = (jQuery(this).attr('alt')) ? 'alt="' + jQuery(this).attr('alt') + '" ' : '';
			var imgAlign = (jQuery(this).attr('align')) ? 'float:' + jQuery(this).attr('align') + ';' : '';
			var imgHand = (jQuery(this).parent().attr('href')) ? 'cursor:hand;' : '';
			if (this.style.border) {
				prevStyle += 'border:'+this.style.border+';';
				this.style.border = '';
			}
			if (this.style.padding) {
				prevStyle += 'padding:'+this.style.padding+';';
				this.style.padding = '';
			}
			if (this.style.margin) {
				prevStyle += 'margin:'+this.style.margin+';';
				this.style.margin = '';
			}
			var imgStyle = (this.style.cssText);

			strNewHTML += '<span '+imgId+imgClass+imgTitle+imgAlt;
			strNewHTML += 'style="position:relative;white-space:pre-line;display:inline-block;background:transparent;'+imgAlign+imgHand;
			strNewHTML += 'width:' + jQuery(this).width() + 'px;' + 'height:' + jQuery(this).height() + 'px;';
			strNewHTML += 'filter:progid:DXImageTransform.Microsoft.AlphaImageLoader' + '(src=\'' + jQuery(this).attr('src') + '\', sizingMethod=\'scale\');';
			strNewHTML += imgStyle+'"></span>';
			if (prevStyle != ''){
				strNewHTML = '<span style="position:relative;display:inline-block;'+prevStyle+imgHand+'width:' + jQuery(this).width() + 'px;' + 'height:' + jQuery(this).height() + 'px;'+'">' + strNewHTML + '</span>';
			}

			jQuery(this).hide();
			jQuery(this).after(strNewHTML);

		});

		// fix css background pngs
		jQuery(this).find("*").each(function(){
			var bgIMG = jQuery(this).css('background-image');
			if(bgIMG.indexOf(".png")!=-1){
				var iebg = bgIMG.split('url("')[1].split('")')[0];
				jQuery(this).css('background-image', 'none');
				jQuery(this).get(0).runtimeStyle.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + iebg + "',sizingMethod='scale')";
			}
		});
		
		//fix input with png-source
		jQuery(this).find("input[src$=.png]").each(function() {
			var bgIMG = jQuery(this).attr('src');
			jQuery(this).get(0).runtimeStyle.filter = 'progid:DXImageTransform.Microsoft.AlphaImageLoader' + '(src=\'' + bgIMG + '\', sizingMethod=\'scale\');';
   		jQuery(this).attr('src', settings.blankgif)
		});
	
	}
	
	return jQuery;

};

})(jQuery);


/*!
Video.js - HTML5 Video Player
Version GENERATED_AT_BUILD

LGPL v3 LICENSE INFO
This file is part of Video.js. Copyright 2011 Zencoder, Inc.

Video.js is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Video.js is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with Video.js.  If not, see <http://www.gnu.org/licenses/>.
*/

// Self-executing function to prevent global vars and help with minification
;(function(window, undefined){
  var document = window.document;// HTML5 Shiv. Must be in <head> to support older browsers.
document.createElement("video");document.createElement("audio");

var VideoJS = function(id, addOptions, ready){
  var tag; // Element of ID

  // Allow for element or ID to be passed in
  // String ID
  if (typeof id == "string") {

    // Adjust for jQuery ID syntax
    if (id.indexOf("#") === 0) {
      id = id.slice(1);
    }

    // If a player instance has already been created for this ID return it.
    if (_V_.players[id]) {
      return _V_.players[id];

    // Otherwise get element for ID
    } else {
      tag = _V_.el(id)
    }

  // ID is a media element
  } else {
    tag = id;
  }

  // Check for a useable element
  if (!tag || !tag.nodeName) { // re: nodeName, could be a box div also
    throw new TypeError("The element or ID supplied is not valid. (VideoJS)"); // Returns
  }

  // Element may have a player attr referring to an already created player instance.
  // If not, set up a new player and return the instance.
  return tag.player || new _V_.Player(tag, addOptions, ready);
},

// Shortcut
_V_ = VideoJS,

// CDN Version. Used to target right flash swf.
CDN_VERSION = "GENERATED_CDN_VSN";

VideoJS.players = {};

VideoJS.options = {

  // Default order of fallback technology
  techOrder: ["html5","flash"],
  // techOrder: ["flash","html5"],

  html5: {},
  flash: { swf: "http://vjs.zencdn.net/c/video-js.swf" },

  // Default of web browser is 300x150. Should rely on source width/height.
  width: "auto",
  height: "auto",
  
  // defaultVolume: 0.85,
  defaultVolume: 0.00, // The freakin seaguls are driving me crazy!

  // Included control sets
  components: {
    "posterImage": {},
    "textTrackDisplay": {},
    "loadingSpinner": {},
    "bigPlayButton": {},
    "controlBar": {}
  }

  // components: [
  //   "poster",
  //   "loadingSpinner",
  //   "bigPlayButton",
  //   { name: "controlBar", options: {
  //     components: [
  //       "playToggle",
  //       "fullscreenToggle",
  //       "currentTimeDisplay",
  //       "timeDivider",
  //       "durationDisplay",
  //       "remainingTimeDisplay",
  //       { name: "progressControl", options: {
  //         components: [
  //           { name: "seekBar", options: {
  //             components: [
  //               "loadProgressBar",
  //               "playProgressBar",
  //               "seekHandle"
  //             ]}
  //           }
  //         ]}
  //       },
  //       { name: "volumeControl", options: {
  //         components: [
  //           { name: "volumeBar", options: {
  //             components: [
  //               "volumeLevel",
  //               "volumeHandle"
  //             ]}
  //           }
  //         ]}
  //       },
  //       "muteToggle"
  //     ]
  //   }},
  //   "subtitlesDisplay"/*, "replay"*/
  // ]
};

// Set CDN Version of swf
if (CDN_VERSION != "GENERATED_CDN_VSN") {
  _V_.options.flash.swf = "http://vjs.zencdn.net/"+CDN_VERSION+"/video-js.swf"
}_V_.merge = function(obj1, obj2, safe){
  // Make sure second object exists
  if (!obj2) { obj2 = {}; };

  for (var attrname in obj2){
    if (obj2.hasOwnProperty(attrname) && (!safe || !obj1.hasOwnProperty(attrname))) { obj1[attrname]=obj2[attrname]; }
  }
  return obj1;
};
_V_.extend = function(obj){ this.merge(this, obj, true); };

_V_.extend({
  tech: {}, // Holder for playback technology settings
  controlSets: {}, // Holder for control set definitions

  // Device Checks
  isIE: function(){ return !+"\v1"; },
  isFF: function(){ return !!_V_.ua.match("Firefox") },
  isIPad: function(){ return navigator.userAgent.match(/iPad/i) !== null; },
  isIPhone: function(){ return navigator.userAgent.match(/iPhone/i) !== null; },
  isIOS: function(){ return VideoJS.isIPhone() || VideoJS.isIPad(); },
  iOSVersion: function() {
    var match = navigator.userAgent.match(/OS (\d+)_/i);
    if (match && match[1]) { return match[1]; }
  },
  isAndroid: function(){ return navigator.userAgent.match(/Android.*AppleWebKit/i) !== null; },
  androidVersion: function() {
    var match = navigator.userAgent.match(/Android (\d+)\./i);
    if (match && match[1]) { return match[1]; }
  },

  testVid: document.createElement("video"),
  ua: navigator.userAgent,
  support: {},

  each: function(arr, fn){
    if (!arr || arr.length === 0) { return; }
    for (var i=0,j=arr.length; i<j; i++) {
      fn.call(this, arr[i], i);
    }
  },

  eachProp: function(obj, fn){
    if (!obj) { return; }
    for (var name in obj) {
      if (obj.hasOwnProperty(name)) {
        fn.call(this, name, obj[name]);
      }
    }
  },

  el: function(id){ return document.getElementById(id); },
  createElement: function(tagName, attributes){
    var el = document.createElement(tagName),
        attrname;
    for (attrname in attributes){
      if (attributes.hasOwnProperty(attrname)) {
        if (attrname.indexOf("-") !== -1) {
          el.setAttribute(attrname, attributes[attrname]);
        } else {
          el[attrname] = attributes[attrname];
        }
      }
    }
    return el;
  },

  insertFirst: function(node, parent){
    if (parent.firstChild) {
      parent.insertBefore(node, parent.firstChild);
    } else {
      parent.appendChild(node);
    }
  },

  addClass: function(element, classToAdd){
    if ((" "+element.className+" ").indexOf(" "+classToAdd+" ") == -1) {
      element.className = element.className === "" ? classToAdd : element.className + " " + classToAdd;
    }
  },

  removeClass: function(element, classToRemove){
    var inArray = function (array, searchElement ) {
        if (array === void 0 || array === null) {
            throw new TypeError();
        }
        var t = Object(array);
        var len = t.length >>> 0;
        if (len === 0) {
            return -1;
        }
        var n = 0;
        if (arguments.length > 0) {
            n = Number(arguments[1]);
            if (n !== n) { // shortcut for verifying if it's NaN
                n = 0;
            } else if (n !== 0 && n !== (1 / 0) && n !== -(1 / 0)) {
                n = (n > 0 || -1) * Math.floor(Math.abs(n));
            }
        }
        if (n >= len) {
            return -1;
        }
        var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);
        for (; k < len; k++) {
            if (k in t && t[k] === searchElement) {
                return k;
            }
        }
        return -1;
    }

    if (element.className.indexOf(classToRemove) == -1) { return; }
    var classNames = element.className.split(" ");
    classNames.splice(inArray(classNames, classToRemove),1);
    element.className = classNames.join(" ");
  },
  
  remove: function(item, array){
    if (!array) return;
    var inArray = function (array, searchElement ) {
        if (array === void 0 || array === null) {
            throw new TypeError();
        }
        var t = Object(array);
        var len = t.length >>> 0;
        if (len === 0) {
            return -1;
        }
        var n = 0;
        if (arguments.length > 0) {
            n = Number(arguments[1]);
            if (n !== n) { // shortcut for verifying if it's NaN
                n = 0;
            } else if (n !== 0 && n !== (1 / 0) && n !== -(1 / 0)) {
                n = (n > 0 || -1) * Math.floor(Math.abs(n));
            }
        }
        if (n >= len) {
            return -1;
        }
        var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);
        for (; k < len; k++) {
            if (k in t && t[k] === searchElement) {
                return k;
            }
        }
        return -1;
    }

    var i = inArray(array,item);
    if (i != -1) { 
      return array.splice(i, 1)
    };
  },

  // Attempt to block the ability to select text while dragging controls
  blockTextSelection: function(){
    document.body.focus();
    document.onselectstart = function () { return false; };
  },
  // Turn off text selection blocking
  unblockTextSelection: function(){ document.onselectstart = function () { return true; }; },

  // Return seconds as H:MM:SS or M:SS
  // Supplying a guide (in seconds) will include enough leading zeros to cover the length of the guide
  formatTime: function(seconds, guide) {
    guide = guide || seconds; // Default to using seconds as guide
    var s = Math.floor(seconds % 60),
        m = Math.floor(seconds / 60 % 60),
        h = Math.floor(seconds / 3600),
        gm = Math.floor(guide / 60 % 60),
        gh = Math.floor(guide / 3600);

    // Check if we need to show hours
    h = (h > 0 || gh > 0) ? h + ":" : "";

    // If hours are showing, we may need to add a leading zero.
    // Always show at least one digit of minutes.
    m = (((h || gm >= 10) && m < 10) ? "0" + m : m) + ":";

    // Check if leading zero is need for seconds
    s = (s < 10) ? "0" + s : s;

    return h + m + s;
  },

  uc: function(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  },

  // Return the relative horizonal position of an event as a value from 0-1
  getRelativePosition: function(x, relativeElement){
    return Math.max(0, Math.min(1, (x - _V_.findPosX(relativeElement)) / relativeElement.offsetWidth));
  },
  
  getComputedStyleValue: function(element, style){
    return window.getComputedStyle(element, null).getPropertyValue(style);
  },

  trim: function(string){ return string.toString().replace(/^\s+/, "").replace(/\s+$/, ""); },
  round: function(num, dec) {
    if (!dec) { dec = 0; }
    return Math.round(num*Math.pow(10,dec))/Math.pow(10,dec);
  },

  isEmpty: function(object) {
    for (var prop in object) {
      return false;
    }
    return true;
  },

  // Mimic HTML5 TimeRange Spec.
  createTimeRange: function(start, end){
    return {
      length: 1,
      start: function() { return start; },
      end: function() { return end; }
    };
  },

  /* Element Data Store. Allows for binding data to an element without putting it directly on the element.
     Ex. Event listneres are stored here.
     (also from jsninja.com)
  ================================================================================ */
  cache: {}, // Where the data is stored
  guid: 1, // Unique ID for the element
  expando: "vdata" + (new Date).getTime(), // Unique attribute to store element's guid in

  // Returns the cache object where data for the element is stored
  getData: function(elem){
    var id = elem[_V_.expando];
    if (!id) {
      id = elem[_V_.expando] = _V_.guid++;
      _V_.cache[id] = {};
    }
    return _V_.cache[id];
  },
  // Delete data for the element from the cache and the guid attr from element
  removeData: function(elem){
    var id = elem[_V_.expando];
    if (!id) { return; }
    // Remove all stored data
    delete _V_.cache[id];
    // Remove the expando property from the DOM node
    try {
      delete elem[_V_.expando];
    } catch(e) {
      if (elem.removeAttribute) {
        elem.removeAttribute(_V_.expando);
      } else {
        // IE doesn't appear to support removeAttribute on the document element
        elem[_V_.expando] = null;
      }
    }
  },

  /* Proxy (a.k.a Bind or Context). A simple method for changing the context of a function
     It also stores a unique id on the function so it can be easily removed from events
  ================================================================================ */
  proxy: function(context, fn, uid) {
    // Make sure the function has a unique ID
    if (!fn.guid) { fn.guid = _V_.guid++; }

    // Create the new function that changes the context
    var ret = function() {
      return fn.apply(context, arguments);
    }

    // Allow for the ability to individualize this function
    // Needed in the case where multiple objects might share the same prototype
    // IF both items add an event listener with the same function, then you try to remove just one
    // it will remove both because they both have the same guid.
    // when using this, you need to use the proxy method when you remove the listener as well.
    ret.guid = (uid) ? uid + "_" + fn.guid : fn.guid;

    return ret;
  },

  get: function(url, onSuccess, onError){
    // if (netscape.security.PrivilegeManager.enablePrivilege) {
    //   netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead");
    // }

    var local = (url.indexOf("file:") == 0 || (window.location.href.indexOf("file:") == 0 && url.indexOf("http:") == -1));

    if (typeof XMLHttpRequest == "undefined") {
      XMLHttpRequest = function () {
        try { return new ActiveXObject("Msxml2.XMLHTTP.6.0"); } catch (e) {}
        try { return new ActiveXObject("Msxml2.XMLHTTP.3.0"); } catch (f) {}
        try { return new ActiveXObject("Msxml2.XMLHTTP"); } catch (g) {}
        throw new Error("This browser does not support XMLHttpRequest.");
      };
    }

    var request = new XMLHttpRequest();

    try {
      request.open("GET", url);
    } catch(e) {
      _V_.log("VideoJS XMLHttpRequest (open)", e);
      // onError(e);
      return false;
    }

    request.onreadystatechange = _V_.proxy(this, function() {
      if (request.readyState == 4) {
        if (request.status == 200 || local && request.status == 0) {
          onSuccess(request.responseText);
        } else {
          if (onError) {
            onError();
          }
        }
      }
    });

    try {
      request.send();
    } catch(e) {
      _V_.log("VideoJS XMLHttpRequest (send)", e);
      if (onError) {
        onError(e);
      }
    }
  },

  /* Local Storage
  ================================================================================ */
  setLocalStorage: function(key, value){
    // IE was throwing errors referencing the var anywhere without this
    var localStorage = window.localStorage || false;
    if (!localStorage) { return; }
    try {
      localStorage[key] = value;
    } catch(e) {
      if (e.code == 22 || e.code == 1014) { // Webkit == 22 / Firefox == 1014
        _V_.log("LocalStorage Full (VideoJS)", e);
      } else {
        _V_.log("LocalStorage Error (VideoJS)", e);
      }
    }
  },

  // Get abosolute version of relative URL. Used to tell flash correct URL.
  // http://stackoverflow.com/questions/470832/getting-an-absolute-url-from-a-relative-one-ie6-issue
  getAbsoluteURL: function(url){

    // Check if absolute URL
    if (!url.match(/^https?:\/\//)) {
      // Convert to absolute URL. Flash hosted off-site needs an absolute URL.
      url = _V_.createElement('div', {
        innerHTML: '<a href="'+url+'">x</a>'
      }).firstChild.href;
    }

    return url;
  }

});

// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
_V_.log = function(){
  _V_.log.history = _V_.log.history || [];// store logs to an array for reference
  _V_.log.history.push(arguments);
  if(window.console) {
    arguments.callee = arguments.callee.caller;
    var newarr = [].slice.call(arguments);
    (typeof console.log === 'object' ? _V_.log.apply.call(console.log, console, newarr) : console.log.apply(console, newarr));
  }
};

// make it safe to use console.log always
(function(b){function c(){}for(var d="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,timeStamp,profile,profileEnd,time,timeEnd,trace,warn".split(","),a;a=d.pop();){b[a]=b[a]||c}})((function(){try
{console.log();return window.console;}catch(err){return window.console={};}})());

// Offset Left
// getBoundingClientRect technique from John Resig http://ejohn.org/blog/getboundingclientrect-is-awesome/
if ("getBoundingClientRect" in document.documentElement) {
  _V_.findPosX = function(el) {
    var box;

    try {
      box = el.getBoundingClientRect();
    } catch(e) {}

    if (!box) { return 0; }

    var docEl = document.documentElement,
        body = document.body,
        clientLeft = docEl.clientLeft || body.clientLeft || 0,
        scrollLeft = window.pageXOffset || body.scrollLeft,
        left = box.left + scrollLeft - clientLeft;

    return left;
  };
} else {
  _V_.findPosX = function(el) {
    var curleft = el.offsetLeft;
    // _V_.log(obj.className, obj.offsetLeft)
    while(el = obj.offsetParent) {
      if (el.className.indexOf("video-js") == -1) {
        // _V_.log(el.offsetParent, "OFFSETLEFT", el.offsetLeft)
        // _V_.log("-webkit-full-screen", el.webkitMatchesSelector("-webkit-full-screen"));
        // _V_.log("-webkit-full-screen", el.querySelectorAll(".video-js:-webkit-full-screen"));
      } else {
      }
      curleft += el.offsetLeft;
    }
    return curleft;
  };
}
// ECMA-262 is the standard for javascript.
// The following methods are impelemented EXACTLY as described in the standard (according to Mozilla Docs), and do not override the default method if one exists.
// This may conflict with other libraries that modify the array prototype, but those libs should update to use the standard.

// [].indexOf
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/indexOf
//if (!Array.prototype.indexOf) {
    //Array.prototype.indexOf = function (searchElement [>, fromIndex <] ) {
        //"use strict";
        //if (this === void 0 || this === null) {
            //throw new TypeError();
        //}
        //var t = Object(this);
        //var len = t.length >>> 0;
        //if (len === 0) {
            //return -1;
        //}
        //var n = 0;
        //if (arguments.length > 0) {
            //n = Number(arguments[1]);
            //if (n !== n) { // shortcut for verifying if it's NaN
                //n = 0;
            //} else if (n !== 0 && n !== (1 / 0) && n !== -(1 / 0)) {
                //n = (n > 0 || -1) * Math.floor(Math.abs(n));
            //}
        //}
        //if (n >= len) {
            //return -1;
        //}
        //var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);
        //for (; k < len; k++) {
            //if (k in t && t[k] === searchElement) {
                //return k;
            //}
        //}
        //return -1;
    //}
//}

// NOT NEEDED YET
// [].lastIndexOf
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/lastIndexOf
// if (!Array.prototype.lastIndexOf)
// {
//   Array.prototype.lastIndexOf = function(searchElement /*, fromIndex*/)
//   {
//     "use strict";
// 
//     if (this === void 0 || this === null)
//       throw new TypeError();
// 
//     var t = Object(this);
//     var len = t.length >>> 0;
//     if (len === 0)
//       return -1;
// 
//     var n = len;
//     if (arguments.length > 1)
//     {
//       n = Number(arguments[1]);
//       if (n !== n)
//         n = 0;
//       else if (n !== 0 && n !== (1 / 0) && n !== -(1 / 0))
//         n = (n > 0 || -1) * Math.floor(Math.abs(n));
//     }
// 
//     var k = n >= 0
//           ? Math.min(n, len - 1)
//           : len - Math.abs(n);
// 
//     for (; k >= 0; k--)
//     {
//       if (k in t && t[k] === searchElement)
//         return k;
//     }
//     return -1;
//   };
// }


// NOT NEEDED YET
// Array forEach per ECMA standard https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/array/foreach
// Production steps of ECMA-262, Edition 5, 15.4.4.18
// Reference: http://es5.github.com/#x15.4.4.18
// if ( !Array.prototype.forEach ) {
// 
//   Array.prototype.forEach = function( callback, thisArg ) {
// 
//     var T, k;
// 
//     if ( this == null ) {
//       throw new TypeError( " this is null or not defined" );
//     }
// 
//     // 1. Let O be the result of calling ToObject passing the |this| value as the argument.
//     var O = Object(this);
// 
//     // 2. Let lenValue be the result of calling the Get internal method of O with the argument "length".
//     // 3. Let len be ToUint32(lenValue).
//     var len = O.length >>> 0;
// 
//     // 4. If IsCallable(callback) is false, throw a TypeError exception.
//     // See: http://es5.github.com/#x9.11
//     if ( {}.toString.call(callback) != "[object Function]" ) {
//       throw new TypeError( callback + " is not a function" );
//     }
// 
//     // 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
//     if ( thisArg ) {
//       T = thisArg;
//     }
// 
//     // 6. Let k be 0
//     k = 0;
// 
//     // 7. Repeat, while k < len
//     while( k < len ) {
// 
//       var kValue;
// 
//       // a. Let Pk be ToString(k).
//       //   This is implicit for LHS operands of the in operator
//       // b. Let kPresent be the result of calling the HasProperty internal method of O with argument Pk.
//       //   This step can be combined with c
//       // c. If kPresent is true, then
//       if ( k in O ) {
// 
//         // i. Let kValue be the result of calling the Get internal method of O with argument Pk.
//         kValue = O[ Pk ];
// 
//         // ii. Call the Call internal method of callback with T as the this value and
//         // argument list containing kValue, k, and O.
//         callback.call( T, kValue, k, O );
//       }
//       // d. Increase k by 1.
//       k++;
//     }
//     // 8. return undefined
//   };
// }


// NOT NEEDED YET
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/map
// Production steps of ECMA-262, Edition 5, 15.4.4.19
// Reference: http://es5.github.com/#x15.4.4.19
// if (!Array.prototype.map) {
//   Array.prototype.map = function(callback, thisArg) {
// 
//     var T, A, k;
// 
//     if (this == null) {
//       throw new TypeError(" this is null or not defined");
//     }
// 
//     // 1. Let O be the result of calling ToObject passing the |this| value as the argument.
//     var O = Object(this);
// 
//     // 2. Let lenValue be the result of calling the Get internal method of O with the argument "length".
//     // 3. Let len be ToUint32(lenValue).
//     var len = O.length >>> 0;
// 
//     // 4. If IsCallable(callback) is false, throw a TypeError exception.
//     // See: http://es5.github.com/#x9.11
//     if ({}.toString.call(callback) != "[object Function]") {
//       throw new TypeError(callback + " is not a function");
//     }
// 
//     // 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
//     if (thisArg) {
//       T = thisArg;
//     }
// 
//     // 6. Let A be a new array created as if by the expression new Array(len) where Array is
//     // the standard built-in constructor with that name and len is the value of len.
//     A = new Array(len);
// 
//     // 7. Let k be 0
//     k = 0;
// 
//     // 8. Repeat, while k < len
//     while(k < len) {
// 
//       var kValue, mappedValue;
// 
//       // a. Let Pk be ToString(k).
//       //   This is implicit for LHS operands of the in operator
//       // b. Let kPresent be the result of calling the HasProperty internal method of O with argument Pk.
//       //   This step can be combined with c
//       // c. If kPresent is true, then
//       if (k in O) {
// 
//         // i. Let kValue be the result of calling the Get internal method of O with argument Pk.
//         kValue = O[ k ];
// 
//         // ii. Let mappedValue be the result of calling the Call internal method of callback
//         // with T as the this value and argument list containing kValue, k, and O.
//         mappedValue = callback.call(T, kValue, k, O);
// 
//         // iii. Call the DefineOwnProperty internal method of A with arguments
//         // Pk, Property Descriptor {Value: mappedValue, Writable: true, Enumerable: true, Configurable: true},
//         // and false.
// 
//         // In browsers that support Object.defineProperty, use the following:
//         // Object.defineProperty(A, Pk, { value: mappedValue, writable: true, enumerable: true, configurable: true });
// 
//         // For best browser support, use the following:
//         A[ k ] = mappedValue;
//       }
//       // d. Increase k by 1.
//       k++;
//     }
// 
//     // 9. return A
//     return A;
//   };      
// }
// Javascript JSON implementation
// (Parse Method Only)
// https://github.com/douglascrockford/JSON-js/blob/master/json2.js

var JSON;
if (!JSON) { JSON = {}; }

(function(){
  var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;

  if (typeof JSON.parse !== 'function') {
      JSON.parse = function (text, reviver) {
          var j;

          function walk(holder, key) {
              var k, v, value = holder[key];
              if (value && typeof value === 'object') {
                  for (k in value) {
                      if (Object.prototype.hasOwnProperty.call(value, k)) {
                          v = walk(value, k);
                          if (v !== undefined) {
                              value[k] = v;
                          } else {
                              delete value[k];
                          }
                      }
                  }
              }
              return reviver.call(holder, key, value);
          }
          text = String(text);
          cx.lastIndex = 0;
          if (cx.test(text)) {
              text = text.replace(cx, function (a) {
                  return '\\u' +
                      ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
              });
          }

          if (/^[\],:{}\s]*$/
                  .test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
                      .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
                      .replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

              j = eval('(' + text + ')');

              return typeof reviver === 'function' ?
                  walk({'': j}, '') : j;
          }

          throw new SyntaxError('JSON.parse');
      };
  }
}());
// Event System (J.Resig - Secrets of a JS Ninja http://jsninja.com/ [Go read it, really])
// (Book version isn't completely usable, so fixed some things and borrowed from jQuery where it's working)
// 
// This should work very similarly to jQuery's events, however it's based off the book version which isn't as
// robust as jquery's, so there's probably some differences.
// 
// When you add an event listener using _V_.addEvent, 
//   it stores the handler function in seperate cache object, 
//   and adds a generic handler to the element's event,
//   along with a unique id (guid) to the element.

_V_.extend({

  // Add an event listener to element
  // It stores the handler function in a separate cache object
  // and adds a generic handler to the element's event,
  // along with a unique id (guid) to the element.
  addEvent: function(elem, type, fn){
    var data = _V_.getData(elem), handlers;

    // We only need to generate one handler per element
    if (data && !data.handler) {
      // Our new meta-handler that fixes the event object and the context
      data.handler = function(event){
        event = _V_.fixEvent(event);
        var handlers = _V_.getData(elem).events[event.type];
        // Go through and call all the real bound handlers
        if (handlers) {
          
          // Copy handlers so if handlers are added/removed during the process it doesn't throw everything off.
          var handlersCopy = [];
          _V_.each(handlers, function(handler, i){
            handlersCopy[i] = handler;
          })
          
          for (var i = 0, l = handlersCopy.length; i < l; i++) {
            handlersCopy[i].call(elem, event);
          }
        }
      };
    }

    // We need a place to store all our event data
    if (!data.events) { data.events = {}; }

    // And a place to store the handlers for this event type
    handlers = data.events[type];

    if (!handlers) {
      handlers = data.events[ type ] = [];

      // Attach our meta-handler to the element, since one doesn't exist
      if (document.addEventListener) {
        elem.addEventListener(type, data.handler, false);
      } else if (document.attachEvent) {
        elem.attachEvent("on" + type, data.handler);
      }
    }

    if (!fn.guid) { fn.guid = _V_.guid++; }

    handlers.push(fn);
  },

  removeEvent: function(elem, type, fn) {
    var data = _V_.getData(elem), handlers;
    // If no events exist, nothing to unbind
    if (!data.events) { return; }

    // Are we removing all bound events?
    if (!type) {
      for (type in data.events) {
        _V_.cleanUpEvents(elem, type);
      }
      return;
    }

    // And a place to store the handlers for this event type
    handlers = data.events[type];

    // If no handlers exist, nothing to unbind
    if (!handlers) { return; }

    // See if we're only removing a single handler
    if (fn && fn.guid) {
      for (var i = 0; i < handlers.length; i++) {
        // We found a match (don't stop here, there could be a couple bound)
        if (handlers[i].guid === fn.guid) {
          // Remove the handler from the array of handlers
          handlers.splice(i--, 1);
        }
      }
    }

    _V_.cleanUpEvents(elem, type);
  },

  cleanUpEvents: function(elem, type) {
    var data = _V_.getData(elem);
    // Remove the events of a particular type if there are none left

    if (data.events[type].length === 0) {
      delete data.events[type];

      // Remove the meta-handler from the element
      if (document.removeEventListener) {
        elem.removeEventListener(type, data.handler, false);
      } else if (document.detachEvent) {
        elem.detachEvent("on" + type, data.handler);
      }
    }

    // Remove the events object if there are no types left
    if (_V_.isEmpty(data.events)) {
      delete data.events;
      delete data.handler;
    }

    // Finally remove the expando if there is no data left
    if (_V_.isEmpty(data)) {
      _V_.removeData(elem);
    }
  },

  fixEvent: function(event) {
    if (event[_V_.expando]) { return event; }
    // store a copy of the original event object
    // and "clone" to set read-only properties
    var originalEvent = event;
    event = new _V_.Event(originalEvent);

    for ( var i = _V_.Event.props.length, prop; i; ) {
      prop = _V_.Event.props[ --i ];
      event[prop] = originalEvent[prop];
    }

    // Fix target property, if necessary
    if (!event.target) { event.target = event.srcElement || document; }

    // check if target is a textnode (safari)
    if (event.target.nodeType === 3) { event.target = event.target.parentNode; }

    // Add relatedTarget, if necessary
    if (!event.relatedTarget && event.fromElement) {
      event.relatedTarget = event.fromElement === event.target ? event.toElement : event.fromElement;
    }

    // Calculate pageX/Y if missing and clientX/Y available
    if ( event.pageX == null && event.clientX != null ) {
      var eventDocument = event.target.ownerDocument || document,
        doc = eventDocument.documentElement,
        body = eventDocument.body;

      event.pageX = event.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
      event.pageY = event.clientY + (doc && doc.scrollTop  || body && body.scrollTop  || 0) - (doc && doc.clientTop  || body && body.clientTop  || 0);
    }

    // Add which for key events
    if (event.which == null && (event.charCode != null || event.keyCode != null)) {
      event.which = event.charCode != null ? event.charCode : event.keyCode;
    }

    // Add metaKey to non-Mac browsers (use ctrl for PC's and Meta for Macs)
    if ( !event.metaKey && event.ctrlKey ) {
      event.metaKey = event.ctrlKey;
    }

    // Add which for click: 1 === left; 2 === middle; 3 === right
    // Note: button is not normalized, so don't use it
    if ( !event.which && event.button !== undefined ) {
      event.which = (event.button & 1 ? 1 : ( event.button & 2 ? 3 : ( event.button & 4 ? 2 : 0 ) ));
    }

    return event;
  },

  triggerEvent: function(elem, event) {
    var data = _V_.getData(elem),
        parent = elem.parentNode || elem.ownerDocument,
        type = event.type || event,
        handler;

    if (data) { handler = data.handler }

    // Added in attion to book. Book code was broke.
    event = typeof event === "object" ?
      event[_V_.expando] ? 
        event :
        new _V_.Event(type, event) :
      new _V_.Event(type);

    event.type = type;
    if (handler) {
      handler.call(elem, event);
    }

    // Clean up the event in case it is being reused
    event.result = undefined;
    event.target = elem;

    // Bubble the event up the tree to the document,
    // Unless it's been explicitly stopped
    // if (parent && !event.isPropagationStopped()) {
    //   _V_.triggerEvent(parent, event);
    // 
    // // We're at the top document so trigger the default action
    // } else if (!parent && !event.isDefaultPrevented()) {
    //   // log(type);
    //   var targetData = _V_.getData(event.target);
    //   // log(targetData);
    //   var targetHandler = targetData.handler;
    //   // log("2");
    //   if (event.target[event.type]) {
    //     // Temporarily disable the bound handler,
    //     // don't want to execute it twice
    //     if (targetHandler) {
    //       targetData.handler = function(){};
    //     }
    // 
    //     // Trigger the native event (click, focus, blur)
    //     event.target[event.type]();
    // 
    //     // Restore the handler
    //     if (targetHandler) {
    //       targetData.handler = targetHandler;
    //     }
    //   }
    // }
  },
  
  one: function(elem, type, fn) {
    _V_.addEvent(elem, type, function(){
      _V_.removeEvent(elem, type, arguments.callee)
      fn.apply(this, arguments);
    });
  }
});

// Custom Event object for standardizing event objects between browsers.
_V_.Event = function(src, props){
  // Event object
  if (src && src.type) {
    this.originalEvent = src;
    this.type = src.type;

    // Events bubbling up the document may have been marked as prevented
    // by a handler lower down the tree; reflect the correct value.
    this.isDefaultPrevented = (src.defaultPrevented || src.returnValue === false ||
      src.getPreventDefault && src.getPreventDefault()) ? returnTrue : returnFalse;

  // Event type
  } else {
    this.type = src;
  }

  // Put explicitly provided properties onto the event object
  if (props) { _V_.merge(this, props); }

  this.timeStamp = (new Date).getTime();

  // Mark it as fixed
  this[_V_.expando] = true;
};

_V_.Event.prototype = {
  preventDefault: function() {
    this.isDefaultPrevented = returnTrue;

    var e = this.originalEvent;
    if (!e) { return; }

    // if preventDefault exists run it on the original event
    if (e.preventDefault) { 
      e.preventDefault();
    // otherwise set the returnValue property of the original event to false (IE)
    } else {
      e.returnValue = false;
    }
  },
  stopPropagation: function() {
    this.isPropagationStopped = returnTrue;

    var e = this.originalEvent;
    if (!e) { return; }
    // if stopPropagation exists run it on the original event
    if (e.stopPropagation) { e.stopPropagation(); }
    // otherwise set the cancelBubble property of the original event to true (IE)
    e.cancelBubble = true;
  },
  stopImmediatePropagation: function() {
    this.isImmediatePropagationStopped = returnTrue;
    this.stopPropagation();
  },
  isDefaultPrevented: returnFalse,
  isPropagationStopped: returnFalse,
  isImmediatePropagationStopped: returnFalse
};
_V_.Event.props = "altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" ");

function returnTrue(){ return true; }
function returnFalse(){ return false; }

// Using John Resig's Class implementation http://ejohn.org/blog/simple-javascript-inheritance/
// (function(){var initializing=false, fnTest=/xyz/.test(function(){xyz;}) ? /\b_super\b/ : /.*/; _V_.Class = function(){}; _V_.Class.extend = function(prop) { var _super = this.prototype; initializing = true; var prototype = new this(); initializing = false; for (var name in prop) { prototype[name] = typeof prop[name] == "function" && typeof _super[name] == "function" && fnTest.test(prop[name]) ? (function(name, fn){ return function() { var tmp = this._super; this._super = _super[name]; var ret = fn.apply(this, arguments); this._super = tmp; return ret; }; })(name, prop[name]) : prop[name]; } function Class() { if ( !initializing && this.init ) this.init.apply(this, arguments); } Class.prototype = prototype; Class.constructor = Class; Class.extend = arguments.callee; return Class;};})();
(function(){
  var initializing = false, fnTest = /xyz/.test(function(){xyz;}) ? /\b_super\b/ : /.*/;
  _V_.Class = function(){};
  _V_.Class.extend = function(prop) {
    var _super = this.prototype;
    initializing = true;
    var prototype = new this();
    initializing = false;
    for (var name in prop) {
      prototype[name] = typeof prop[name] == "function" &&
        typeof _super[name] == "function" && fnTest.test(prop[name]) ?
        (function(name, fn){
          return function() {
            var tmp = this._super;
            this._super = _super[name];
            var ret = fn.apply(this, arguments);
            this._super = tmp;
            return ret;
          };
        })(name, prop[name]) :
        prop[name];
    }
    function Class() {
      if ( !initializing && this.init ) {
        return this.init.apply(this, arguments);

      // Attempting to recreate accessing function form of class.
      } else if (!initializing) {
        return arguments.callee.prototype.init()
      }
    }
    Class.prototype = prototype;
    Class.constructor = Class;
    Class.extend = arguments.callee;
    return Class;
  };
})();

/* Player Component- Base class for all UI objects
================================================================================ */
_V_.Component = _V_.Class.extend({

  init: function(player, options){
    this.player = player;

    // Allow for overridding default component options
    options = this.options = _V_.merge(this.options || {}, options);

    // Create element if one wasn't provided in options
    if (options.el) {
      this.el = options.el;
    } else {
      this.el = this.createElement();
    }

    // Add any components in options
    this.initComponents();
  },

  destroy: function(){},

  createElement: function(type, attrs){
    return _V_.createElement(type || "div", attrs);
  },

  buildCSSClass: function(){
    // Child classes can include a function that does:
    // return "CLASS NAME" + this._super();
    return "";
  },

  initComponents: function(){
    var options = this.options;
    if (options && options.components) {
      // Loop through components and add them to the player
      this.eachProp(options.components, function(name, opts){

        // Allow waiting to add components until a specific event is called
        var tempAdd = this.proxy(function(){
          // Set property name on player. Could cause conflicts with other prop names, but it's worth making refs easy.
          this[name] = this.addComponent(name, opts);
        });

        if (opts.loadEvent) {
          this.one(opts.loadEvent, tempAdd)
        } else {
          tempAdd();
        }
      });
    }
  },

  // Add child components to this component.
  // Will generate a new child component and then append child component's element to this component's element.
  // Takes either the name of the UI component class, or an object that contains a name, UI Class, and options.
  addComponent: function(name, options){
    var component, componentClass;

    // If string, create new component with options
    if (typeof name == "string") {

      // Make sure options is at least an empty object to protect against errors
      options = options || {};

      // Assume name of set is a lowercased name of the UI Class (PlayButton, etc.)
      componentClass = options.componentClass || _V_.uc(name);

      // Create a new object & element for this controls set
      // If there's no .player, this is a player
      component = new _V_[componentClass](this.player || this, options);

    } else {
      component = name;
    }

    // Add the UI object's element to the container div (box)
    this.el.appendChild(component.el);

    // Return so it can stored on parent object if desired.
    return component;
  },

  removeComponent: function(component){
    this.el.removeChild(component.el);
  },

  /* Display
  ================================================================================ */
  show: function(){
    this.el.style.display = "block";
  },

  hide: function(){
    this.el.style.display = "none";
  },
  
  fadeIn: function(){
    this.removeClass("vjs-fade-out");
    this.addClass("vjs-fade-in");
  },

  fadeOut: function(){
    this.removeClass("vjs-fade-in");
    this.addClass("vjs-fade-out");
  },

  lockShowing: function(){
    var style = this.el.style;
    style.display = "block";
    style.opacity = 1;
    style.visiblity = "visible";
  },

  unlockShowing: function(){
    var style = this.el.style;
    style.display = "";
    style.opacity = "";
    style.visiblity = "";
  },

  addClass: function(classToAdd){
    _V_.addClass(this.el, classToAdd);
  },

  removeClass: function(classToRemove){
    _V_.removeClass(this.el, classToRemove);
  },

  /* Events
  ================================================================================ */
  addEvent: function(type, fn, uid){
    return _V_.addEvent(this.el, type, _V_.proxy(this, fn));
  },
  removeEvent: function(type, fn){
    return _V_.removeEvent(this.el, type, fn);
  },
  triggerEvent: function(type, e){
    return _V_.triggerEvent(this.el, type, e);
  },
  one: function(type, fn) {
    _V_.one(this.el, type, _V_.proxy(this, fn));
  },

  /* Ready - Trigger functions when component is ready
  ================================================================================ */
  ready: function(fn){
    if (!fn) return this;

    if (this.isReady) {
      fn.call(this);
    } else {
      if (this.readyQueue === undefined) {
        this.readyQueue = [];
      }
      this.readyQueue.push(fn);
    }

    return this;
  },

  triggerReady: function(){
    this.isReady = true;
    if (this.readyQueue && this.readyQueue.length > 0) {
      // Call all functions in ready queue
      this.each(this.readyQueue, function(fn){
        fn.call(this);
      });

      // Reset Ready Queue
      this.readyQueue = [];

      // Allow for using event listeners also, in case you want to do something everytime a source is ready.
      this.triggerEvent("ready");
    }
  },

  /* Utility
  ================================================================================ */
  each: function(arr, fn){ _V_.each.call(this, arr, fn); },

  eachProp: function(obj, fn){ _V_.eachProp.call(this, obj, fn); },

  extend: function(obj){ _V_.merge(this, obj) },

  // More easily attach 'this' to functions
  proxy: function(fn, uid){  return _V_.proxy(this, fn, uid); }

});/* UI Component- Base class for all UI objects
================================================================================ */
_V_.Player = _V_.Component.extend({

  init: function(tag, addOptions, ready){

    this.tag = tag; // Store the original tag used to set options

    var el = this.el = _V_.createElement("div"), // Div to contain video and controls
        options = this.options = {},
        width = options.width = tag.getAttribute('width'),
        height = options.height = tag.getAttribute('height'),

        // Browsers default to 300x150 if there's no width/height or video size data.
        initWidth = width || 300,
        initHeight = height || 150;

    // Make player findable on elements
    tag.player = el.player = this;

    // Add callback to ready queue
    this.ready(ready);

    // Wrap video tag in div (el/box) container
    tag.parentNode.insertBefore(el, tag);
    el.appendChild(tag); // Breaks iPhone, fixed in HTML5 setup.

    // Give video tag properties to box
    el.id = this.id = tag.id; // ID will now reference box, not the video tag
    el.className = tag.className;
    // Update tag id/class for use as HTML5 playback tech
    tag.id += "_html5_api";
    tag.className = "vjs-tech";

    // Make player easily findable by ID
    _V_.players[el.id] = this;

    // Make box use width/height of tag, or default 300x150
    el.setAttribute("width", initWidth);
    el.setAttribute("height", initHeight);
    // Enforce with CSS since width/height attrs don't work on divs
    el.style.width = initWidth+"px";
    el.style.height = initHeight+"px";
    // Remove width/height attrs from tag so CSS can make it 100% width/height
    tag.removeAttribute("width");
    tag.removeAttribute("height");

    // Set Options
    _V_.merge(options, _V_.options); // Copy Global Defaults
    _V_.merge(options, this.getVideoTagSettings()); // Override with Video Tag Options
    _V_.merge(options, addOptions); // Override/extend with options from setup call

    // Store controls setting, and then remove immediately so native controls don't flash.
    tag.removeAttribute("controls");

    // Poster will be handled by a manual <img>
    tag.removeAttribute("poster");

    // Empty video tag sources and tracks so the built in player doesn't use them also.
    if (tag.hasChildNodes()) {
      for (var i=0,j=tag.childNodes;i<j.length;i++) {
        if (j[i].nodeName == "SOURCE" || j[i].nodeName == "TRACK") {
          tag.removeChild(j[i]);
        }
      }
    }

    // Cache for video property values.
    this.values = {};

    this.addClass("vjs-paused");

    this.addEvent("ended", this.onEnded);
    this.addEvent("play", this.onPlay);
    this.addEvent("pause", this.onPause);
    this.addEvent("progress", this.onProgress);
    this.addEvent("error", this.onError);

    // When the API is ready, loop through the components and add to the player.
    if (options.controls) {
      this.ready(function(){
        this.initComponents();
      });
    }

    // Tracks defined in tracks.js
    this.textTracks = [];
    if (options.tracks && options.tracks.length > 0) {
      this.addTextTracks(options.tracks);
    }

    // If there are no sources when the player is initialized,
    // load the first supported playback technology.
    if (!options.sources || options.sources.length == 0) {
      for (var i=0,j=options.techOrder; i<j.length; i++) {
        var techName = j[i],
            tech = _V_[techName];

        // Check if the browser supports this technology
        if (tech.isSupported()) {
          this.loadTech(techName);
          break;
        }
      }
    } else {
      // Loop through playback technologies (HTML5, Flash) and check for support. Then load the best source.
      // A few assumptions here:
      //   All playback technologies respect preload false.
      this.src(options.sources);
    }
  },

  // Cache for video property values.
  values: {},

  destroy: function(){
    // Ensure that tracking progress and time progress will stop and plater deleted
    this.stopTrackingProgress();
    this.stopTrackingCurrentTime();
    _V_.players[this.id] = null;
    delete _V_.players[this.id];
    this.tech.destroy();
    this.el.parentNode.removeChild(this.el);
  },

  createElement: function(type, options){},

  getVideoTagSettings: function(){
    var options = {
      sources: [],
      tracks: []
    };

    options.src = this.tag.getAttribute("src");
    options.controls = this.tag.getAttribute("controls") !== null;
    options.poster = this.tag.getAttribute("poster");
    options.preload = this.tag.getAttribute("preload");
    options.autoplay = this.tag.getAttribute("autoplay") !== null; // hasAttribute not IE <8 compatible
    options.loop = this.tag.getAttribute("loop") !== null;
    options.muted = this.tag.getAttribute("muted") !== null;

    if (this.tag.hasChildNodes()) {
      for (var c,i=0,j=this.tag.childNodes;i<j.length;i++) {
        c = j[i];
        if (c.nodeName == "SOURCE") {
          options.sources.push({
            src: c.getAttribute('src'),
            type: c.getAttribute('type'),
            media: c.getAttribute('media'),
            title: c.getAttribute('title')
          });
        }
        if (c.nodeName == "TRACK") {
          options.tracks.push({
            src: c.getAttribute("src"),
            kind: c.getAttribute("kind"),
            srclang: c.getAttribute("srclang"),
            label: c.getAttribute("label"),
            'default': c.getAttribute("default") !== null,
            title: c.getAttribute("title")
          });
        }
      }
    }
    return options;
  },

  /* PLayback Technology (tech)
  ================================================================================ */
  // Load/Create an instance of playback technlogy including element and API methods
  // And append playback element in player div.
  loadTech: function(techName, source){

    // Pause and remove current playback technology
    if (this.tech) {
      this.unloadTech();

    // If the first time loading, HTML5 tag will exist but won't be initialized
    // So we need to remove it if we're not loading HTML5
    } else if (techName != "html5" && this.tag) {
      this.el.removeChild(this.tag);
      this.tag = false;
    }

    this.techName = techName;

    // Turn off API access because we're loading a new tech that might load asynchronously
    this.isReady = false;

    var techReady = function(){
      this.player.triggerReady();

      // Manually track progress in cases where the browser/flash player doesn't report it.
      if (!this.support.progressEvent) {
        this.player.manualProgressOn();
      }

      // Manually track timeudpates in cases where the browser/flash player doesn't report it.
      if (!this.support.timeupdateEvent) {
        this.player.manualTimeUpdatesOn();
      }
    }

    // Grab tech-specific options from player options and add source and parent element to use.
    var techOptions = _V_.merge({ source: source, parentEl: this.el }, this.options[techName])

    if (source) {
      if (source.src == this.values.src && this.values.currentTime > 0) {
        techOptions.startTime = this.values.currentTime;
      }

      this.values.src = source.src;
    }

    // Initialize tech instance
    this.tech = new _V_[techName](this, techOptions);
    this.tech.ready(techReady);
  },

  unloadTech: function(){
    this.tech.destroy();

    // Turn off any manual progress or timeupdate tracking
    if (this.manualProgress) { this.manualProgressOff(); }

    if (this.manualTimeUpdates) { this.manualTimeUpdatesOff(); }

    this.tech = false;
  },

  // There's many issues around changing the size of a Flash (or other plugin) object.
  // First is a plugin reload issue in Firefox that has been around for 11 years: https://bugzilla.mozilla.org/show_bug.cgi?id=90268
  // Then with the new fullscreen API, Mozilla and webkit browsers will reload the flash object after going to fullscreen.
  // To get around this, we're unloading the tech, caching source and currentTime values, and reloading the tech once the plugin is resized.
  // reloadTech: function(betweenFn){
  //   _V_.log("unloadingTech")
  //   this.unloadTech();
  //   _V_.log("unloadedTech")
  //   if (betweenFn) { betweenFn.call(); }
  //   _V_.log("LoadingTech")
  //   this.loadTech(this.techName, { src: this.values.src })
  //   _V_.log("loadedTech")
  // },

  /* Fallbacks for unsupported event types
  ================================================================================ */
  // Manually trigger progress events based on changes to the buffered amount
  // Many flash players and older HTML5 browsers don't send progress or progress-like events
  manualProgressOn: function(){
    this.manualProgress = true;

    // Trigger progress watching when a source begins loading
    this.trackProgress();

    // Watch for a native progress event call on the tech element
    // In HTML5, some older versions don't support the progress event
    // So we're assuming they don't, and turning off manual progress if they do.
    this.tech.addEvent("progress", function(){

      // Remove this listener from the element
      this.removeEvent("progress", arguments.callee);

      // Update known progress support for this playback technology
      this.support.progressEvent = true;

      // Turn off manual progress tracking
      this.player.manualProgressOff();
    });
  },

  manualProgressOff: function(){
    this.manualProgress = false;
    this.stopTrackingProgress();
  },

  trackProgress: function(){
    this.progressInterval = setInterval(_V_.proxy(this, function(){
      // Don't trigger unless buffered amount is greater than last time
      // log(this.values.bufferEnd, this.buffered().end(0), this.duration())
      /* TODO: update for multiple buffered regions */
      if (this.values.bufferEnd < this.buffered().end(0)) {
        this.triggerEvent("progress");
      } else if (this.bufferedPercent() == 1) {
        this.stopTrackingProgress();
        this.triggerEvent("progress"); // Last update
      }
    }), 500);
  },
  stopTrackingProgress: function(){ clearInterval(this.progressInterval); },

  /* Time Tracking -------------------------------------------------------------- */
  manualTimeUpdatesOn: function(){
    this.manualTimeUpdates = true;

    this.addEvent("play", this.trackCurrentTime);
    this.addEvent("pause", this.stopTrackingCurrentTime);
    // timeupdate is also called by .currentTime whenever current time is set

    // Watch for native timeupdate event
    this.tech.addEvent("timeupdate", function(){

      // Remove this listener from the element
      this.removeEvent("timeupdate", arguments.callee);

      // Update known progress support for this playback technology
      this.support.timeupdateEvent = true;

      // Turn off manual progress tracking
      this.player.manualTimeUpdatesOff();
    });
  },

  manualTimeUpdatesOff: function(){
    this.manualTimeUpdates = false;
    this.stopTrackingCurrentTime();
    this.removeEvent("play", this.trackCurrentTime);
    this.removeEvent("pause", this.stopTrackingCurrentTime);
  },

  trackCurrentTime: function(){
    if (this.currentTimeInterval) { this.stopTrackingCurrentTime(); }
    this.currentTimeInterval = setInterval(_V_.proxy(this, function(){
      this.triggerEvent("timeupdate");
    }), 250); // 42 = 24 fps // 250 is what Webkit uses // FF uses 15
  },

  // Turn off play progress tracking (when paused or dragging)
  stopTrackingCurrentTime: function(){ clearInterval(this.currentTimeInterval); },

  /* Player event handlers (how the player reacts to certain events)
  ================================================================================ */
  onEnded: function(){
    if (this.options.loop) {
      this.currentTime(0);
      this.play();
    } else {
      this.pause();
      this.currentTime(0);
      this.pause();
    }
  },

  onPlay: function(){
    _V_.removeClass(this.el, "vjs-paused");
    _V_.addClass(this.el, "vjs-playing");
  },

  onPause: function(){
    _V_.removeClass(this.el, "vjs-playing");
    _V_.addClass(this.el, "vjs-paused");
  },

  onProgress: function(){
    // Add custom event for when source is finished downloading.
    if (this.bufferedPercent() == 1) {
      this.triggerEvent("loadedalldata");
    }
  },

  onError: function(e) {
    _V_.log("Video Error", e);
  },

/* Player API
================================================================================ */

  // Pass values to the playback tech
  techCall: function(method, arg){

    // If it's not ready yet, call method when it is
    if (!this.tech.isReady) {
      this.tech.ready(function(){
        this[method](arg);
      });

    // Otherwise call method now
    } else {
      try {
        this.tech[method](arg);
      } catch(e) {
        _V_.log(e);
      }
    }
  },

  // Get calls can't wait for the tech, and sometimes don't need to.
  techGet: function(method){

    // Make sure tech is ready
    if (this.tech.isReady) {

      // Flash likes to die and reload when you hide or reposition it.
      // In these cases the object methods go away and we get errors.
      // When that happens we'll catch the errors and inform tech that it's not ready any more.
      try {
        return this.tech[method]();
      } catch(e) {

        // When building additional tech libs, an expected method may not be defined yet
        if (this.tech[method] === undefined) {
          _V_.log("Video.js: " + method + " method not defined for "+this.techName+" playback technology.", e);

        } else {

          // When a method isn't available on the object it throws a TypeError
          if (e.name == "TypeError") {
            _V_.log("Video.js: " + method + " unavailable on "+this.techName+" playback technology element.", e);
            this.tech.isReady = false;

          } else {
            _V_.log(e);
          }
        }
      }
    }

    return;
  },

  // Method for calling methods on the current playback technology
  // techCall: function(method, arg){
  // 
  //   // if (this.isReady) {
  //   //   
  //   // } else {
  //   //   _V_.log("The playback technology API is not ready yet. Use player.ready(myFunction)."+" ["+method+"]", arguments.callee.caller.arguments.callee.caller.arguments.callee.caller)
  //   //   return false;
  //   //   // throw new Error("The playback technology API is not ready yet. Use player.ready(myFunction)."+" ["+method+"]");
  //   // }
  // },

  // http://dev.w3.org/html5/spec/video.html#dom-media-play
  play: function(){
    this.techCall("play");
    return this;
  },

  // http://dev.w3.org/html5/spec/video.html#dom-media-pause
  pause: function(){
    this.techCall("pause");
    return this;
  },
  
  // http://dev.w3.org/html5/spec/video.html#dom-media-paused
  // The initial state of paused should be true (in Safari it's actually false)
  paused: function(){
    return (this.techGet("paused") === false) ? false : true;
  },

  // http://dev.w3.org/html5/spec/video.html#dom-media-currenttime
  currentTime: function(seconds){
    if (seconds !== undefined) {

      // Cache the last set value for smoother scrubbing.
      this.values.lastSetCurrentTime = seconds;

      this.techCall("setCurrentTime", seconds);

      // Improve the accuracy of manual timeupdates
      if (this.manualTimeUpdates) { this.triggerEvent("timeupdate"); }

      return this;
    }

    // Cache last currentTime and return
    // Default to 0 seconds
    return this.values.currentTime = (this.techGet("currentTime") || 0);
  },

  // http://dev.w3.org/html5/spec/video.html#dom-media-duration
  // Duration should return NaN if not available. ParseFloat will turn false-ish values to NaN.
  duration: function(){
    return parseFloat(this.techGet("duration"));
  },

  // Calculates how much time is left. Not in spec, but useful.
  remainingTime: function(){
    return this.duration() - this.currentTime();
  },

  // http://dev.w3.org/html5/spec/video.html#dom-media-buffered
  // Buffered returns a timerange object. Kind of like an array of portions of the video that have been downloaded.
  // So far no browsers return more than one range (portion)
  buffered: function(){
    var buffered = this.techGet("buffered"),
        start = 0,
        end = this.values.bufferEnd = this.values.bufferEnd || 0, // Default end to 0 and store in values
        timeRange;

    if (buffered && buffered.length > 0 && buffered.end(0) !== end) {
      end = buffered.end(0);
      // Storing values allows them be overridden by setBufferedFromProgress
      this.values.bufferEnd = end;
    }

    return _V_.createTimeRange(start, end);
  },

  // Calculates amount of buffer is full. Not in spec but useful.
  bufferedPercent: function(){
    return (this.duration()) ? this.buffered().end(0) / this.duration() : 0;
  },

  // http://dev.w3.org/html5/spec/video.html#dom-media-volume
  volume: function(percentAsDecimal){
    var vol;

    if (percentAsDecimal !== undefined) {
      vol = Math.max(0, Math.min(1, parseFloat(percentAsDecimal))); // Force value to between 0 and 1
      this.values.volume = vol;
      this.techCall("setVolume", vol);
      _V_.setLocalStorage("volume", vol);
      return this;
    }

    // Default to 1 when returning current volume.
    vol = parseFloat(this.techGet("volume"));
    return (isNaN(vol)) ? 1 : vol;
  },

  // http://dev.w3.org/html5/spec/video.html#attr-media-muted
  muted: function(muted){
    if (muted !== undefined) {
      this.techCall("setMuted", muted);
      return this;
    }
    return this.techGet("muted") || false; // Default to false
  },

  // http://dev.w3.org/html5/spec/dimension-attributes.html#attr-dim-height
  // Video tag width/height only work in pixels. No percents.
  // We could potentially allow percents but won't for now until we can do testing around it.
  width: function(width, skipListeners){
    if (width !== undefined) {
      this.el.width = width;
      this.el.style.width = width+"px";

      // skipListeners allows us to avoid triggering the resize event when setting both width and height
      if (!skipListeners) { this.triggerEvent("resize"); }
      return this;
    }
    return parseInt(this.el.getAttribute("width"));
  },
  height: function(height){
    if (height !== undefined) {
      this.el.height = height;
      this.el.style.height = height+"px";
      this.triggerEvent("resize");
      return this;
    }
    return parseInt(this.el.getAttribute("height"));
  },
  // Set both width and height at the same time.
  size: function(width, height){
    // Skip resize listeners on width for optimization
    return this.width(width, true).height(height);
  },

  // Check if current tech can support native fullscreen (e.g. with built in controls lik iOS, so not our flash swf)
  supportsFullScreen: function(){ return this.techGet("supportsFullScreen") || false; },

  // Turn on fullscreen (or window) mode
  requestFullScreen: function(){
    var requestFullScreen = _V_.support.requestFullScreen;

    this.isFullScreen = true;

    // Check for browser element fullscreen support
    if (requestFullScreen) {

      // Trigger fullscreenchange event after change
      _V_.addEvent(document, requestFullScreen.eventName, this.proxy(function(){
        this.isFullScreen = document[requestFullScreen.isFullScreen];

        // If cancelling fullscreen, remove event listener.
        if (this.isFullScreen == false) {
          _V_.removeEvent(document, requestFullScreen.eventName, arguments.callee);
        }

        this.triggerEvent("fullscreenchange");
      }));

      // Flash and other plugins get reloaded when you take their parent to fullscreen.
      // To fix that we'll remove the tech, and reload it after the resize has finished.
      if (this.tech.support.fullscreenResize === false && this.options.flash.iFrameMode != true) {

        this.pause();
        this.unloadTech();

        _V_.addEvent(document, requestFullScreen.eventName, this.proxy(function(){
          _V_.removeEvent(document, requestFullScreen.eventName, arguments.callee);
          this.loadTech(this.techName, { src: this.values.src });
        }));

        this.el[requestFullScreen.requestFn]();

      } else {
        this.el[requestFullScreen.requestFn]();
      }

    } else if (this.tech.supportsFullScreen()) {
      this.triggerEvent("fullscreenchange");
      this.techCall("enterFullScreen");

    } else {
      this.triggerEvent("fullscreenchange");
      this.enterFullWindow();
    }

     return this;
   },

   cancelFullScreen: function(){
    var requestFullScreen = _V_.support.requestFullScreen;

    this.isFullScreen = false;

    // Check for browser element fullscreen support
    if (requestFullScreen) {

     // Flash and other plugins get reloaded when you take their parent to fullscreen.
     // To fix that we'll remove the tech, and reload it after the resize has finished.
     if (this.tech.support.fullscreenResize === false && this.options.flash.iFrameMode != true) {

       this.pause();
       this.unloadTech();

       _V_.addEvent(document, requestFullScreen.eventName, this.proxy(function(){
         _V_.removeEvent(document, requestFullScreen.eventName, arguments.callee);
         this.loadTech(this.techName, { src: this.values.src })
       }));

       document[requestFullScreen.cancelFn]();

     } else {
       document[requestFullScreen.cancelFn]();
     }

    } else if (this.tech.supportsFullScreen()) {
     this.techCall("exitFullScreen");
     this.triggerEvent("fullscreenchange");

    } else {
     this.exitFullWindow();
     this.triggerEvent("fullscreenchange");
    }

    return this;
  },

  // When fullscreen isn't supported we can stretch the video container to as wide as the browser will let us.
  enterFullWindow: function(){
    this.isFullWindow = true;

    // Storing original doc overflow value to return to when fullscreen is off
    this.docOrigOverflow = document.documentElement.style.overflow;

    // Add listener for esc key to exit fullscreen
    _V_.addEvent(document, "keydown", _V_.proxy(this, this.fullWindowOnEscKey));

    // Hide any scroll bars
    document.documentElement.style.overflow = 'hidden';

    // Apply fullscreen styles
    _V_.addClass(document.body, "vjs-full-window");
    _V_.addClass(this.el, "vjs-fullscreen");

    this.triggerEvent("enterFullWindow");
  },
  fullWindowOnEscKey: function(event){
    if (event.keyCode == 27) {
      if (this.isFullScreen == true) {
        this.cancelFullScreen();
      } else {
        this.exitFullWindow();
      }
    }
  },

  exitFullWindow: function(){
    this.isFullWindow = false;
    _V_.removeEvent(document, "keydown", this.fullWindowOnEscKey);

    // Unhide scroll bars.
    document.documentElement.style.overflow = this.docOrigOverflow;

    // Remove fullscreen styles
    _V_.removeClass(document.body, "vjs-full-window");
    _V_.removeClass(this.el, "vjs-fullscreen");

    // Resize the box, controller, and poster to original sizes
    // this.positionAll();
    this.triggerEvent("exitFullWindow");
  },

  selectSource: function(sources){

    // Loop through each playback technology in the options order
    for (var i=0,j=this.options.techOrder;i<j.length;i++) {
      var techName = j[i],
          tech = _V_[techName];
          // tech = _V_.tech[techName];

      // Check if the browser supports this technology
      if (tech.isSupported()) {

        // Loop through each source object
        for (var a=0,b=sources;a<b.length;a++) {
          var source = b[a];

          // Check if source can be played with this technology
          if (tech.canPlaySource.call(this, source)) {

            return { source: source, tech: techName };

          }
        }
      }
    }

    return false;
  },

  // src is a pretty powerful function
  // If you pass it an array of source objects, it will find the best source to play and use that object.src
  //   If the new source requires a new playback technology, it will switch to that.
  // If you pass it an object, it will set the source to object.src
  // If you pass it anything else (url string) it will set the video source to that
  src: function(source){
    // Case: Array of source objects to choose from and pick the best to play
    if (source instanceof Array) {

      var sourceTech = this.selectSource(source),
          source,
          techName;

      if (sourceTech) {
          source = sourceTech.source;
          techName = sourceTech.tech;

        // If this technology is already loaded, set source
        if (techName == this.techName) {
          this.src(source); // Passing the source object

        // Otherwise load this technology with chosen source
        } else {
          this.loadTech(techName, source);
        }
      } else {
        _V_.log("No compatible source and playback technology were found.")
      }

    // Case: Source object { src: "", type: "" ... }
    } else if (source instanceof Object) {

      if (_V_[this.techName].canPlaySource(source)) {
        this.src(source.src);
      } else {
        // Send through tech loop to check for a compatible technology.
        this.src([source]);
      }

    // Case: URL String (http://myvideo...)
    } else {
      // Cache for getting last set source
      this.values.src = source;

      if (!this.isReady) {
        this.ready(function(){
          this.src(source);
        });
      } else {
        this.techCall("src", source);
        if (this.options.preload == "auto") {
          this.load();
        }
        if (this.options.autoplay) {
          this.play();
        }
      }
    }
    return this;
  },

  // Begin loading the src data
  // http://dev.w3.org/html5/spec/video.html#dom-media-load
  load: function(){
    this.techCall("load");
    return this;
  },

  // http://dev.w3.org/html5/spec/video.html#dom-media-currentsrc
  currentSrc: function(){
    return this.techGet("currentSrc") || this.values.src || "";
  },

  // Attributes/Options
  preload: function(value){
    if (value !== undefined) {
      this.techCall("setPreload", value);
      this.options.preload = value;
      return this;
    }
    return this.techGet("preload");
  },
  autoplay: function(value){
    if (value !== undefined) {
      this.techCall("setAutoplay", value);
      this.options.autoplay = value;
      return this;
    }
    return this.techGet("autoplay", value);
  },
  loop: function(value){
    if (value !== undefined) {
      this.techCall("setLoop", value);
      this.options.loop = value;
      return this;
    }
    return this.techGet("loop");
  },

  controls: function(){ return this.options.controls; },
  poster: function(){ return this.techGet("poster"); },
  error: function(){ return this.techGet("error"); },
  ended: function(){ return this.techGet("ended"); }

  // Methods to add support for
  // networkState: function(){ return this.techCall("networkState"); },
  // readyState: function(){ return this.techCall("readyState"); },
  // seeking: function(){ return this.techCall("seeking"); },
  // initialTime: function(){ return this.techCall("initialTime"); },
  // startOffsetTime: function(){ return this.techCall("startOffsetTime"); },
  // played: function(){ return this.techCall("played"); },
  // seekable: function(){ return this.techCall("seekable"); },
  // videoTracks: function(){ return this.techCall("videoTracks"); },
  // audioTracks: function(){ return this.techCall("audioTracks"); },
  // videoWidth: function(){ return this.techCall("videoWidth"); },
  // videoHeight: function(){ return this.techCall("videoHeight"); },
  // defaultPlaybackRate: function(){ return this.techCall("defaultPlaybackRate"); },
  // playbackRate: function(){ return this.techCall("playbackRate"); },
  // mediaGroup: function(){ return this.techCall("mediaGroup"); },
  // controller: function(){ return this.techCall("controller"); },
  // defaultMuted: function(){ return this.techCall("defaultMuted"); }
});

// RequestFullscreen API
(function(){
  var requestFn,
      cancelFn,
      eventName,
      isFullScreen,
      playerProto = _V_.Player.prototype;

  // Current W3C Spec
  // http://dvcs.w3.org/hg/fullscreen/raw-file/tip/Overview.html#api
  // Mozilla Draft: https://wiki.mozilla.org/Gecko:FullScreenAPI#fullscreenchange_event
  if (document.cancelFullscreen !== undefined) {
    requestFn = "requestFullscreen";
    cancelFn = "exitFullscreen";
    eventName = "fullscreenchange";
    isFullScreen = "fullScreen";

  // Webkit (Chrome/Safari) and Mozilla (Firefox) have working implementaitons
  // that use prefixes and vary slightly from the new W3C spec. Specifically, using 'exit' instead of 'cancel',
  // and lowercasing the 'S' in Fullscreen.
  // Other browsers don't have any hints of which version they might follow yet, so not going to try to predict by loopeing through all prefixes.
  } else {

    _V_.each(["moz", "webkit"], function(prefix){

      // https://github.com/zencoder/video-js/pull/128
      if ((prefix != "moz" || document.mozFullScreenEnabled) && document[prefix + "CancelFullScreen"] !== undefined) {
        requestFn = prefix + "RequestFullScreen";
        cancelFn = prefix + "CancelFullScreen";
        eventName = prefix + "fullscreenchange";

        if (prefix == "webkit") {
          isFullScreen = prefix + "IsFullScreen";
        } else {
          isFullScreen = prefix + "FullScreen";
        }
      }

    });

  }

  if (requestFn) {
    _V_.support.requestFullScreen = {
      requestFn: requestFn,
      cancelFn: cancelFn,
      eventName: eventName,
      isFullScreen: isFullScreen
    };
  }

})();/* Playback Technology - Base class for playback technologies
================================================================================ */
_V_.PlaybackTech = _V_.Component.extend({
  init: function(player, options){
    // this._super(player, options);

    // Make playback element clickable
    // _V_.addEvent(this.el, "click", _V_.proxy(this, _V_.PlayToggle.prototype.onClick));

    // this.addEvent("click", this.proxy(this.onClick));

    // player.triggerEvent("techready");
  },
  // destroy: function(){},
  // createElement: function(){},
  onClick: function(){
    if (this.player.options.controls) {
      _V_.PlayToggle.prototype.onClick.call(this);
    }
  }
});

// Create placeholder methods for each that warn when a method isn't supported by the current playback technology
_V_.apiMethods = "play,pause,paused,currentTime,setCurrentTime,duration,buffered,volume,setVolume,muted,setMuted,width,height,supportsFullScreen,enterFullScreen,src,load,currentSrc,preload,setPreload,autoplay,setAutoplay,loop,setLoop,error,networkState,readyState,seeking,initialTime,startOffsetTime,played,seekable,ended,videoTracks,audioTracks,videoWidth,videoHeight,textTracks,defaultPlaybackRate,playbackRate,mediaGroup,controller,controls,defaultMuted".split(",");
_V_.each(_V_.apiMethods, function(methodName){
  _V_.PlaybackTech.prototype[methodName] = function(){
    throw new Error("The '"+methodName+"' method is not available on the playback technology's API");
  }
});

/* HTML5 Playback Technology - Wrapper for HTML5 Media API
================================================================================ */
_V_.html5 = _V_.PlaybackTech.extend({

  init: function(player, options, ready){
    this.player = player;
    this.el = this.createElement();
    this.ready(ready);

    this.addEvent("click", this.proxy(this.onClick));

    var source = options.source;

    // If the element source is already set, we may have missed the loadstart event, and want to trigger it.
    // We don't want to set the source again and interrupt playback.
    if (source && this.el.currentSrc == source.src) {
      player.triggerEvent("loadstart");

    // Otherwise set the source if one was provided.
    } else if (source) {
      this.el.src = source.src;
    }

    // Chrome and Safari both have issues with autoplay.
    // In Safari (5.1.1), when we move the video element into the container div, autoplay doesn't work.
    // In Chrome (15), if you have autoplay + a poster + no controls, the video gets hidden (but audio plays)
    // This fixes both issues. Need to wait for API, so it updates displays correctly
    player.ready(function(){
      if (this.options.autoplay && this.paused()) {
        this.tag.poster = null; // Chrome Fix. Fixed in Chrome v16.
        this.play();
      }
    });

    this.setupTriggers();

    this.triggerReady();
  },

  destroy: function(){
    this.player.tag = false;
    this.removeTriggers();
    this.el.parentNode.removeChild(this.el);
  },

  createElement: function(){
    var html5 = _V_.html5,
        player = this.player,

        // If possible, reuse original tag for HTML5 playback technology element
        el = player.tag,
        newEl;

    // Check if this browser supports moving the element into the box.
    // On the iPhone video will break if you move the element,
    // So we have to create a brand new element.
    if (!el || this.support.movingElementInDOM === false) {

      // If the original tag is still there, remove it.
      if (el) {
        player.el.removeChild(el);
      }

      newEl = _V_.createElement("video", {
        id: el.id || player.el.id + "_html5_api",
        className: el.className || "vjs-tech"
      });

      el = newEl;
      _V_.insertFirst(el, player.el);
    }

    // Update tag settings, in case they were overridden
    _V_.each(["autoplay","preload","loop","muted"], function(attr){ // ,"poster"
      if (player.options[attr] !== null) {
        el[attr] = player.options[attr];
      }
    }, this);

    return el;
  },

  // Make video events trigger player events
  // May seem verbose here, but makes other APIs possible.
  setupTriggers: function(){
    _V_.each.call(this, _V_.html5.events, function(type){
      _V_.addEvent(this.el, type, _V_.proxy(this.player, this.eventHandler));
    });
  },
  removeTriggers: function(){
    _V_.each.call(this, _V_.html5.events, function(type){
      _V_.removeEvent(this.el, type, _V_.proxy(this.player, this.eventHandler));
    });
  },
  eventHandler: function(e){
    e.stopPropagation();
    this.triggerEvent(e);
  },

  play: function(){ this.el.play(); },
  pause: function(){ this.el.pause(); },
  paused: function(){ return this.el.paused; },

  currentTime: function(){ return this.el.currentTime; },
  setCurrentTime: function(seconds){
    try {
      this.el.currentTime = seconds;
      } catch(e) {
        _V_.log(e, "Video isn't ready. (VideoJS)");
      // this.warning(VideoJS.warnings.videoNotReady);
    }
  },

  duration: function(){ return this.el.duration || 0; },
  buffered: function(){ return this.el.buffered; },

  volume: function(){ return this.el.volume; },
  setVolume: function(percentAsDecimal){ this.el.volume = percentAsDecimal; },
  muted: function(){ return this.el.muted; },
  setMuted: function(muted){ this.el.muted = muted },

  width: function(){ return this.el.offsetWidth; },
  height: function(){ return this.el.offsetHeight; },

  supportsFullScreen: function(){
    if (typeof this.el.webkitEnterFullScreen == 'function') {

      // Seems to be broken in Chromium/Chrome && Safari in Leopard
      if (!navigator.userAgent.match("Chrome") && !navigator.userAgent.match("Mac OS X 10.5")) {
        return true;
      }
    }
    return false;
  },

  enterFullScreen: function(){
      try {
        this.el.webkitEnterFullScreen();
      } catch (e) {
        if (e.code == 11) {
          // this.warning(VideoJS.warnings.videoNotReady);
          _V_.log("VideoJS: Video not ready.")
        }
      }
  },
  src: function(src){ this.el.src = src; },
  load: function(){ this.el.load(); },
  currentSrc: function(){ return this.el.currentSrc; },

  preload: function(){ return this.el.preload; },
  setPreload: function(val){ this.el.preload = val; },
  autoplay: function(){ return this.el.autoplay; },
  setAutoplay: function(val){ this.el.autoplay = val; },
  loop: function(){ return this.el.loop; },
  setLoop: function(val){ this.el.loop = val; },

  error: function(){ return this.el.error; },
  // networkState: function(){ return this.el.networkState; },
  // readyState: function(){ return this.el.readyState; },
  seeking: function(){ return this.el.seeking; },
  // initialTime: function(){ return this.el.initialTime; },
  // startOffsetTime: function(){ return this.el.startOffsetTime; },
  // played: function(){ return this.el.played; },
  // seekable: function(){ return this.el.seekable; },
  ended: function(){ return this.el.ended; },
  // videoTracks: function(){ return this.el.videoTracks; },
  // audioTracks: function(){ return this.el.audioTracks; },
  // videoWidth: function(){ return this.el.videoWidth; },
  // videoHeight: function(){ return this.el.videoHeight; },
  // textTracks: function(){ return this.el.textTracks; },
  // defaultPlaybackRate: function(){ return this.el.defaultPlaybackRate; },
  // playbackRate: function(){ return this.el.playbackRate; },
  // mediaGroup: function(){ return this.el.mediaGroup; },
  // controller: function(){ return this.el.controller; },
  controls: function(){ return this.player.options.controls; },
  defaultMuted: function(){ return this.el.defaultMuted; }
});

/* HTML5 Support Testing -------------------------------------------------------- */

_V_.html5.isSupported = function(){
  return !!document.createElement("video").canPlayType;
};

_V_.html5.canPlaySource = function(srcObj){
  return !!document.createElement("video").canPlayType(srcObj.type);
  // TODO: Check Type
  // If no Type, check ext
  // Check Media Type
};

// List of all HTML5 events (various uses).
_V_.html5.events = "loadstart,suspend,abort,error,emptied,stalled,loadedmetadata,loadeddata,canplay,canplaythrough,playing,waiting,seeking,seeked,ended,durationchange,timeupdate,progress,play,pause,ratechange,volumechange".split(",");

/* HTML5 Device Fixes ---------------------------------------------------------- */

_V_.html5.prototype.support = {

  // Support for tech specific full screen. (webkitEnterFullScreen, not requestFullscreen)
  // http://developer.apple.com/library/safari/#documentation/AudioVideo/Reference/HTMLVideoElementClassReference/HTMLVideoElement/HTMLVideoElement.html
  // Seems to be broken in Chromium/Chrome && Safari in Leopard
  fullscreen: (typeof _V_.testVid.webkitEnterFullScreen !== undefined) ? (!_V_.ua.match("Chrome") && !_V_.ua.match("Mac OS X 10.5") ? true : false) : false,

  // In iOS, if you move a video element in the DOM, it breaks video playback.
  movingElementInDOM: !_V_.isIOS()

};

// Android
if (_V_.isAndroid()) {

  // Override Android 2.2 and less canPlayType method which is broken
  if (_V_.androidVersion() < 3) {
    document.createElement("video").constructor.prototype.canPlayType = function(type){
      return (type && type.toLowerCase().indexOf("video/mp4") != -1) ? "maybe" : "";
    };
  }
}


/* VideoJS-SWF - Custom Flash Player with HTML5-ish API - https://github.com/zencoder/video-js-swf
================================================================================ */
_V_.flash = _V_.PlaybackTech.extend({

  init: function(player, options){
    this.player = player;

    var source = options.source,

        // Which element to embed in
        parentEl = options.parentEl,

        // Create a temporary element to be replaced by swf object
        placeHolder = this.el = _V_.createElement("div", { id: parentEl.id + "_temp_flash" }),

        // Generate ID for swf object
        objId = player.el.id+"_flash_api",

        // Store player options in local var for optimization
        playerOptions = player.options,

        // Merge default flashvars with ones passed in to init
        flashVars = _V_.merge({

          // SWF Callback Functions
          readyFunction: "_V_.flash.onReady",
          eventProxyFunction: "_V_.flash.onEvent",
          errorEventProxyFunction: "_V_.flash.onError",

          // Player Settings
          autoplay: playerOptions.autoplay,
          preload: playerOptions.preload,
          loop: playerOptions.loop,
          muted: playerOptions.muted

        }, options.flashVars),

        // Merge default parames with ones passed in
        params = _V_.merge({
          wmode: "opaque", // Opaque is needed to overlay controls, but can affect playback performance
          bgcolor: "#000000" // Using bgcolor prevents a white flash when the object is loading
        }, options.params),

        // Merge default attributes with ones passed in
        attributes = _V_.merge({
          id: objId,
          name: objId, // Both ID and Name needed or swf to identifty itself
          'class': 'vjs-tech'
        }, options.attributes)
    ;

    // If source was supplied pass as a flash var.
    if (source) {
      flashVars.src = encodeURIComponent(_V_.getAbsoluteURL(source.src));
    }

    // Add placeholder to player div
    _V_.insertFirst(placeHolder, parentEl);

    // Having issues with Flash reloading on certain page actions (hide/resize/fullscreen) in certain browsers
    // This allows resetting the playhead when we catch the reload
    if (options.startTime) {
      this.ready(function(){
        this.load();
        this.play();
        this.currentTime(options.startTime);
      });
    }

    // Flash iFrame Mode
    // In web browsers there are multiple instances where changing the parent element or visibility of a plugin causes the plugin to reload.
    // - Firefox just about always. https://bugzilla.mozilla.org/show_bug.cgi?id=90268 (might be fixed by version 13)
    // - Webkit when hiding the plugin
    // - Webkit and Firefox when using requestFullScreen on a parent element
    // Loading the flash plugin into a dynamically generated iFrame gets around most of these issues.
    // Issues that remain include hiding the element and requestFullScreen in Firefox specifically

    // There's on particularly annoying issue with this method which is that Firefox throws a security error on an offsite Flash object loaded into a dynamically created iFrame.
    // Even though the iframe was inserted into a page on the web, Firefox + Flash considers it a local app trying to access an internet file.
    // I tried mulitple ways of setting the iframe src attribute but couldn't find a src that worked well. Tried a real/fake source, in/out of domain.
    // Also tried a method from stackoverflow that caused a security error in all browsers. http://stackoverflow.com/questions/2486901/how-to-set-document-domain-for-a-dynamically-generated-iframe
    // In the end the solution I found to work was setting the iframe window.location.href right before doing a document.write of the Flash object.
    // The only downside of this it seems to trigger another http request to the original page (no matter what's put in the href). Not sure why that is.

    // NOTE (2012-01-29): Cannot get Firefox to load the remote hosted SWF into a dynamically created iFrame
    // Firefox 9 throws a security error, unleess you call location.href right before doc.write.
    //    Not sure why that even works, but it causes the browser to look like it's continuously trying to load the page.
    // Firefox 3.6 keeps calling the iframe onload function anytime I write to it, causing an endless loop.

    if (options.iFrameMode == true && !_V_.isFF) {

      // Create iFrame with vjs-tech class so it's 100% width/height
      var iFrm = _V_.createElement("iframe", {
        id: objId + "_iframe",
        name: objId + "_iframe",
        className: "vjs-tech",
        scrolling: "no",
        marginWidth: 0,
        marginHeight: 0,
        frameBorder: 0
      });

      // Update ready function names in flash vars for iframe window
      flashVars.readyFunction = "ready";
      flashVars.eventProxyFunction = "events";
      flashVars.errorEventProxyFunction = "errors";

      // Tried multiple methods to get this to work in all browsers

      // Tried embedding the flash object in the page first, and then adding a place holder to the iframe, then replacing the placeholder with the page object.
      // The goal here was to try to load the swf URL in the parent page first and hope that got around the firefox security error
      // var newObj = _V_.flash.embed(options.swf, placeHolder, flashVars, params, attributes);
      // (in onload)
      //  var temp = _V_.createElement("a", { id:"asdf", innerHTML: "asdf" } );
      //  iDoc.body.appendChild(temp);

      // Tried embedding the flash object through javascript in the iframe source.
      // This works in webkit but still triggers the firefox security error
      // iFrm.src = "javascript: document.write('"+_V_.flash.getEmbedCode(options.swf, flashVars, params, attributes)+"');";

      // Tried an actual local iframe just to make sure that works, but it kills the easiness of the CDN version if you require the user to host an iframe
      // We should add an option to host the iframe locally though, because it could help a lot of issues.
      // iFrm.src = "iframe.html";

      // Wait until iFrame has loaded to write into it.
      _V_.addEvent(iFrm, "load", _V_.proxy(this, function(){

        var iDoc, objTag, swfLoc,
            iWin = iFrm.contentWindow,
            varString = "";


        // The one working method I found was to use the iframe's document.write() to create the swf object
        // This got around the security issue in all browsers except firefox.
        // I did find a hack where if I call the iframe's window.location.href="", it would get around the security error
        // However, the main page would look like it was loading indefinitely (URL bar loading spinner would never stop)
        // Plus Firefox 3.6 didn't work no matter what I tried.
        // if (_V_.ua.match("Firefox")) {
        //   iWin.location.href = "";
        // }

        // Get the iFrame's document depending on what the browser supports
        iDoc = iFrm.contentDocument ? iFrm.contentDocument : iFrm.contentWindow.document;

        // Tried ensuring both document domains were the same, but they already were, so that wasn't the issue.
        // Even tried adding /. that was mentioned in a browser security writeup
        // document.domain = document.domain+"/.";
        // iDoc.domain = document.domain+"/.";

        // Tried adding the object to the iframe doc's innerHTML. Security error in all browsers.
        // iDoc.body.innerHTML = swfObjectHTML;

        // Tried appending the object to the iframe doc's body. Security error in all browsers.
        // iDoc.body.appendChild(swfObject);

        // Using document.write actually got around the security error that browsers were throwing.
        // Again, it's a dynamically generated (same domain) iframe, loading an external Flash swf.
        // Not sure why that's a security issue, but apparently it is.
        iDoc.write(_V_.flash.getEmbedCode(options.swf, flashVars, params, attributes));

        // Setting variables on the window needs to come after the doc write because otherwise they can get reset in some browsers
        // So far no issues with swf ready event being called before it's set on the window.
        iWin.player = this.player;

        // Create swf ready function for iFrame window
        iWin.ready = _V_.proxy(this.player, function(currSwf){
          var el = iDoc.getElementById(currSwf),
              player = this,
              tech = player.tech;

          // Update reference to playback technology element
          tech.el = el;

          // Now that the element is ready, make a click on the swf play the video
          _V_.addEvent(el, "click", tech.proxy(tech.onClick));

          // Make sure swf is actually ready. Sometimes the API isn't actually yet.
          _V_.flash.checkReady(tech);
        });

        // Create event listener for all swf events
        iWin.events = _V_.proxy(this.player, function(swfID, eventName, other){
          var player = this;
          if (player && player.techName == "flash") {
            player.triggerEvent(eventName);
          }
        });

        // Create error listener for all swf errors
        iWin.errors = _V_.proxy(this.player, function(swfID, eventName){
          _V_.log("Flash Error", eventName);
        });

      }));

      // Replace placeholder with iFrame (it will load now)
      placeHolder.parentNode.replaceChild(iFrm, placeHolder);

    // If not using iFrame mode, embed as normal object
    } else {
      _V_.flash.embed(options.swf, placeHolder, flashVars, params, attributes);
    }
  },

  destroy: function(){
    this.el.parentNode.removeChild(this.el);
  },

  // setupTriggers: function(){}, // Using global onEvent func to distribute events

  play: function(){ this.el.vjs_play(); },
  pause: function(){ this.el.vjs_pause(); },
  src: function(src){
    // Make sure source URL is abosolute.
    src = _V_.getAbsoluteURL(src);

    this.el.vjs_src(src);

    // Currently the SWF doesn't autoplay if you load a source later.
    // e.g. Load player w/ no source, wait 2s, set src.
    if (this.player.autoplay()) {
      var tech = this;
      setTimeout(function(){ tech.play(); }, 0);
    }
  },
  load: function(){ this.el.vjs_load(); },
  poster: function(){ this.el.vjs_getProperty("poster"); },

  buffered: function(){
    return _V_.createTimeRange(0, this.el.vjs_getProperty("buffered"));
  },

  supportsFullScreen: function(){
    return false; // Flash does not allow fullscreen through javascript
  },
  enterFullScreen: function(){
    return false;
  }
});

// Create setters and getters for attributes
(function(){

  var api = _V_.flash.prototype,
      readWrite = "preload,currentTime,defaultPlaybackRate,playbackRate,autoplay,loop,mediaGroup,controller,controls,volume,muted,defaultMuted".split(","),
      readOnly = "error,currentSrc,networkState,readyState,seeking,initialTime,duration,startOffsetTime,paused,played,seekable,ended,videoTracks,audioTracks,videoWidth,videoHeight,textTracks".split(","),
      callOnly = "load,play,pause".split(",");
      // Overridden: buffered

      createSetter = function(attr){
        var attrUpper = attr.charAt(0).toUpperCase() + attr.slice(1);
        api["set"+attrUpper] = function(val){ return this.el.vjs_setProperty(attr, val); };
      },

      createGetter = function(attr){
        api[attr] = function(){ return this.el.vjs_getProperty(attr); };
      }
  ;

  // Create getter and setters for all read/write attributes
  _V_.each(readWrite, function(attr){
    createGetter(attr);
    createSetter(attr);
  });

  // Create getters for read-only attributes
  _V_.each(readOnly, function(attr){
    createGetter(attr);
  });

})();

/* Flash Support Testing -------------------------------------------------------- */

_V_.flash.isSupported = function(){
  return _V_.flash.version()[0] >= 10;
  // return swfobject.hasFlashPlayerVersion("10");
};

_V_.flash.canPlaySource = function(srcObj){
  if (srcObj.type in _V_.flash.prototype.support.formats) { return "maybe"; }
};

_V_.flash.prototype.support = {
  formats: {
    "video/flv": "FLV",
    "video/x-flv": "FLV",
    "video/mp4": "MP4",
    "video/m4v": "MP4"
  },

  // Optional events that we can manually mimic with timers
  progressEvent: false,
  timeupdateEvent: false,

  // Resizing plugins using request fullscreen reloads the plugin
  fullscreenResize: false,

  // Resizing plugins in Firefox always reloads the plugin (e.g. full window mode)
  parentResize: !(_V_.ua.match("Firefox"))
};

_V_.flash.onReady = function(currSwf){

  var el = _V_.el(currSwf);

  // Get player from box
  // On firefox reloads, el might already have a player
  var player = el.player || el.parentNode.player,
      tech = player.tech;

  // Reference player on tech element
  el.player = player;

  // Update reference to playback technology element
  tech.el = el;

  // Now that the element is ready, make a click on the swf play the video
  tech.addEvent("click", tech.onClick);

  _V_.flash.checkReady(tech);
};

// The SWF isn't alwasy ready when it says it is. Sometimes the API functions still need to be added to the object.
// If it's not ready, we set a timeout to check again shortly.
_V_.flash.checkReady = function(tech){

  // Check if API property exists
  if (tech.el.vjs_getProperty) {

    // If so, tell tech it's ready
    tech.triggerReady();

  // Otherwise wait longer.
  } else {

    setTimeout(function(){
      _V_.flash.checkReady(tech);
    }, 50);

  }
};

// Trigger events from the swf on the player
_V_.flash.onEvent = function(swfID, eventName){
  var player = _V_.el(swfID).player;
  player.triggerEvent(eventName);
};

// Log errors from the swf
_V_.flash.onError = function(swfID, err){
  var player = _V_.el(swfID).player;
  player.triggerEvent("error");
  _V_.log("Flash Error", err, swfID);
};

// Flash Version Check
_V_.flash.version = function(){
  var version = '0,0,0'

  // IE
  try {
    version = new ActiveXObject('ShockwaveFlash.ShockwaveFlash').GetVariable('$version').replace(/\D+/g, ',').match(/^,?(.+),?$/)[1];

  // other browsers
  } catch(e) {
    try {
      if (navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin){
        version = (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g, ",").match(/^,?(.+),?$/)[1];
      }
    } catch(e) {}
  }
  return version.split(",");
}

// Flash embedding method. Only used in non-iframe mode
_V_.flash.embed = function(swf, placeHolder, flashVars, params, attributes){
  var code = _V_.flash.getEmbedCode(swf, flashVars, params, attributes),

      // Get element by embedding code and retrieving created element
      obj = _V_.createElement("div", { innerHTML: code }).childNodes[0],

      par = placeHolder.parentNode
  ;

  placeHolder.parentNode.replaceChild(obj, placeHolder);

  // IE6 seems to have an issue where it won't initialize the swf object after injecting it.
  // This is a dumb temporary fix
  if (_V_.isIE()) {
    var newObj = par.childNodes[0];
    setTimeout(function(){
      newObj.style.display = "block";
    }, 1000);
  }

  return obj;

};

_V_.flash.getEmbedCode = function(swf, flashVars, params, attributes){

  var objTag = '<object type="application/x-shockwave-flash"',
      flashVarsString = '',
      paramsString = ''
      attrsString = '';

  // Convert flash vars to string
  if (flashVars) {
    _V_.eachProp(flashVars, function(key, val){
      flashVarsString += (key + "=" + val + "&amp;");
    });
  }

  // Add swf, flashVars, and other default params
  params = _V_.merge({
    movie: swf,
    flashvars: flashVarsString,
    allowScriptAccess: "always", // Required to talk to swf
    allowNetworking: "all" // All should be default, but having security issues.
  }, params);

  // Create param tags string
  _V_.eachProp(params, function(key, val){
    paramsString += '<param name="'+key+'" value="'+val+'" />';
  });

  attributes = _V_.merge({
    // Add swf to attributes (need both for IE and Others to work)
    data: swf,

    // Default to 100% width/height
    width: "100%",
    height: "100%"

  }, attributes);

  // Create Attributes string
  _V_.eachProp(attributes, function(key, val){
    attrsString += (key + '="' + val + '" ');
  });

  return objTag + attrsString + '>' + paramsString + '</object>';
}
/* Control - Base class for all control elements
================================================================================ */
_V_.Control = _V_.Component.extend({

  buildCSSClass: function(){
    return "vjs-control " + this._super();
  }

});

/* Control Bar
================================================================================ */
_V_.ControlBar = _V_.Component.extend({

  options: {
    loadEvent: "play",
    components: {
      "playToggle": {},
      "fullscreenToggle": {},
      "currentTimeDisplay": {},
      "timeDivider": {},
      "durationDisplay": {},
      "remainingTimeDisplay": {},
      "progressControl": {},
      "volumeControl": {},
      "muteToggle": {}
    }
  },

  init: function(player, options){
    this._super(player, options);

    player.addEvent("play", this.proxy(function(){
      this.fadeIn();
      this.player.addEvent("mouseover", this.proxy(this.fadeIn));
      this.player.addEvent("mouseout", this.proxy(this.fadeOut));
    }));

  },

  createElement: function(){
    return _V_.createElement("div", {
      className: "vjs-controls"
    });
  },

  fadeIn: function(){
    this._super();
    this.player.triggerEvent("controlsvisible");
  },

  fadeOut: function(){
    this._super();
    this.player.triggerEvent("controlshidden");
  },

  lockShowing: function(){
    this.el.style.opacity = "1";
  }

});

/* Button - Base class for all buttons
================================================================================ */
_V_.Button = _V_.Control.extend({

  init: function(player, options){
    this._super(player, options);

    this.addEvent("click", this.onClick);
    this.addEvent("focus", this.onFocus);
    this.addEvent("blur", this.onBlur);
  },

  createElement: function(type, attrs){
    // Add standard Aria and Tabindex info
    attrs = _V_.merge({
      className: this.buildCSSClass(),
      innerHTML: '<div><span class="vjs-control-text">' + (this.buttonText || "Need Text") + '</span></div>',
      role: "button",
      tabIndex: 0
    }, attrs);

    return this._super(type, attrs);
  },

  // Click - Override with specific functionality for button
  onClick: function(){},

  // Focus - Add keyboard functionality to element
  onFocus: function(){
    _V_.addEvent(document, "keyup", _V_.proxy(this, this.onKeyPress));
  },

  // KeyPress (document level) - Trigger click when keys are pressed
  onKeyPress: function(event){
    // Check for space bar (32) or enter (13) keys
    if (event.which == 32 || event.which == 13) {
      event.preventDefault();
      this.onClick();
    }
  },

  // Blur - Remove keyboard triggers
  onBlur: function(){
    _V_.removeEvent(document, "keyup", _V_.proxy(this, this.onKeyPress));
  }

});

/* Play Button
================================================================================ */
_V_.PlayButton = _V_.Button.extend({

  buttonText: "Play",

  buildCSSClass: function(){
    return "vjs-play-button " + this._super();
  },

  onClick: function(){
    this.player.play();
  }

});

/* Pause Button
================================================================================ */
_V_.PauseButton = _V_.Button.extend({

  buttonText: "Pause",

  buildCSSClass: function(){
    return "vjs-pause-button " + this._super();
  },

  onClick: function(){
    this.player.pause();
  }

});

/* Play Toggle - Play or Pause Media
================================================================================ */
_V_.PlayToggle = _V_.Button.extend({

  buttonText: "Play",

  init: function(player, options){
    this._super(player, options);

    player.addEvent("play", _V_.proxy(this, this.onPlay));
    player.addEvent("pause", _V_.proxy(this, this.onPause));
  },

  buildCSSClass: function(){
    return "vjs-play-control " + this._super();
  },

  // OnClick - Toggle between play and pause
  onClick: function(){
    if (this.player.paused()) {
      this.player.play();
    } else {
      this.player.pause();
    }
  },

  // OnPlay - Add the vjs-playing class to the element so it can change appearance
  onPlay: function(){
    _V_.removeClass(this.el, "vjs-paused");
    _V_.addClass(this.el, "vjs-playing");
  },

  // OnPause - Add the vjs-paused class to the element so it can change appearance
  onPause: function(){
    _V_.removeClass(this.el, "vjs-playing");
    _V_.addClass(this.el, "vjs-paused");
  }

});


/* Fullscreen Toggle Behaviors
================================================================================ */
_V_.FullscreenToggle = _V_.Button.extend({

  buttonText: "Fullscreen",

  buildCSSClass: function(){
    return "vjs-fullscreen-control " + this._super();
  },

  onClick: function(){
    if (!this.player.isFullScreen) {
      this.player.requestFullScreen();
    } else {
      this.player.cancelFullScreen();
    }
  }

});

/* Big Play Button
================================================================================ */
_V_.BigPlayButton = _V_.Button.extend({
  init: function(player, options){
    this._super(player, options);

    player.addEvent("play", _V_.proxy(this, this.hide));
    player.addEvent("ended", _V_.proxy(this, this.show));
  },

  createElement: function(){
    return this._super("div", {
      className: "vjs-big-play-button",
      innerHTML: "<span></span>"
    });
  },

  onClick: function(){
    // Go back to the beginning if big play button is showing at the end.
    // Have to check for current time otherwise it might throw a 'not ready' error.
    if(this.player.currentTime()) {
      this.player.currentTime(0);
    }
    this.player.play();
  }
});

/* Loading Spinner
================================================================================ */
_V_.LoadingSpinner = _V_.Component.extend({
  init: function(player, options){
    this._super(player, options);

    player.addEvent("canplay", _V_.proxy(this, this.hide));
    player.addEvent("canplaythrough", _V_.proxy(this, this.hide));
    player.addEvent("playing", _V_.proxy(this, this.hide));

    player.addEvent("seeking", _V_.proxy(this, this.show));
    player.addEvent("error", _V_.proxy(this, this.show));

    // Not showing spinner on stalled any more. Browsers may stall and then not trigger any events that would remove the spinner.
    // Checked in Chrome 16 and Safari 5.1.2. http://help.videojs.com/discussions/problems/883-why-is-the-download-progress-showing
    // player.addEvent("stalled", _V_.proxy(this, this.show));

    player.addEvent("waiting", _V_.proxy(this, this.show));
  },

  createElement: function(){

    var classNameSpinner, innerHtmlSpinner;

    if ( typeof this.player.el.style.WebkitBorderRadius == "string"
         || typeof this.player.el.style.MozBorderRadius == "string"
         || typeof this.player.el.style.KhtmlBorderRadius == "string"
         || typeof this.player.el.style.borderRadius == "string")
      {
        classNameSpinner = "vjs-loading-spinner";
        innerHtmlSpinner = "<div class='ball1'></div><div class='ball2'></div><div class='ball3'></div><div class='ball4'></div><div class='ball5'></div><div class='ball6'></div><div class='ball7'></div><div class='ball8'></div>";
      } else {
        classNameSpinner = "vjs-loading-spinner-fallback";
        innerHtmlSpinner = "";
      }

    return this._super("div", {
      className: classNameSpinner,
      innerHTML: innerHtmlSpinner
    });
  }
});

/* Time
================================================================================ */
_V_.CurrentTimeDisplay = _V_.Component.extend({

  init: function(player, options){
    this._super(player, options);

    player.addEvent("timeupdate", _V_.proxy(this, this.updateContent));
  },

  createElement: function(){
    var el = this._super("div", {
      className: "vjs-current-time vjs-time-controls vjs-control"
    });

    this.content = _V_.createElement("div", {
      className: "vjs-current-time-display",
      innerHTML: '0:00'
    });

    el.appendChild(_V_.createElement("div").appendChild(this.content));
    return el;
  },

  updateContent: function(){
    // Allows for smooth scrubbing, when player can't keep up.
    var time = (this.player.scrubbing) ? this.player.values.currentTime : this.player.currentTime();
    this.content.innerHTML = _V_.formatTime(time, this.player.duration());
  }

});

_V_.DurationDisplay = _V_.Component.extend({

  init: function(player, options){
    this._super(player, options);

    player.addEvent("timeupdate", _V_.proxy(this, this.updateContent));
  },

  createElement: function(){
    var el = this._super("div", {
      className: "vjs-duration vjs-time-controls vjs-control"
    });

    this.content = _V_.createElement("div", {
      className: "vjs-duration-display",
      innerHTML: '0:00'
    });

    el.appendChild(_V_.createElement("div").appendChild(this.content));
    return el;
  },

  updateContent: function(){
    if (this.player.duration()) { this.content.innerHTML = _V_.formatTime(this.player.duration()); }
  }

});

// Time Separator (Not used in main skin, but still available, and could be used as a 'spare element')
_V_.TimeDivider = _V_.Component.extend({

  createElement: function(){
    return this._super("div", {
      className: "vjs-time-divider",
      innerHTML: '<div><span>/</span></div>'
    });
  }

});

_V_.RemainingTimeDisplay = _V_.Component.extend({

  init: function(player, options){
    this._super(player, options);

    player.addEvent("timeupdate", _V_.proxy(this, this.updateContent));
  },

  createElement: function(){
    var el = this._super("div", {
      className: "vjs-remaining-time vjs-time-controls vjs-control"
    });

    this.content = _V_.createElement("div", {
      className: "vjs-remaining-time-display",
      innerHTML: '-0:00'
    });

    el.appendChild(_V_.createElement("div").appendChild(this.content));
    return el;
  },

  updateContent: function(){
    if (this.player.duration()) { this.content.innerHTML = "-"+_V_.formatTime(this.player.remainingTime()); }

    // Allows for smooth scrubbing, when player can't keep up.
    // var time = (this.player.scrubbing) ? this.player.values.currentTime : this.player.currentTime();
    // this.content.innerHTML = _V_.formatTime(time, this.player.duration());
  }

});

/* Slider - Parent for seek bar and volume slider
================================================================================ */
_V_.Slider = _V_.Component.extend({

  init: function(player, options){
    this._super(player, options);

    player.addEvent(this.playerEvent, _V_.proxy(this, this.update));

    this.addEvent("mousedown", this.onMouseDown);
    this.addEvent("focus", this.onFocus);
    this.addEvent("blur", this.onBlur);

    this.player.addEvent("controlsvisible", this.proxy(this.update));

    // This is actually to fix the volume handle position. http://twitter.com/#!/gerritvanaaken/status/159046254519787520
    // this.player.one("timeupdate", this.proxy(this.update));

    this.update();
  },

  createElement: function(type, attrs) {
    attrs = _V_.merge({
      role: "slider",
      "aria-valuenow": 0,
      "aria-valuemin": 0,
      "aria-valuemax": 100,
      tabIndex: 0
    }, attrs);

    return this._super(type, attrs);
  },

  onMouseDown: function(event){
    event.preventDefault();
    _V_.blockTextSelection();

    _V_.addEvent(document, "mousemove", _V_.proxy(this, this.onMouseMove));
    _V_.addEvent(document, "mouseup", _V_.proxy(this, this.onMouseUp));

    this.onMouseMove(event);
  },

  onMouseUp: function(event) {
    _V_.unblockTextSelection();
    _V_.removeEvent(document, "mousemove", this.onMouseMove, false);
    _V_.removeEvent(document, "mouseup", this.onMouseUp, false);

    this.update();
  },

  update: function(){
    // If scrubbing, we could use a cached value to make the handle keep up with the user's mouse.
    // On HTML5 browsers scrubbing is really smooth, but some flash players are slow, so we might want to utilize this later.
    // var progress =  (this.player.scrubbing) ? this.player.values.currentTime / this.player.duration() : this.player.currentTime() / this.player.duration();

    var barProgress,
        progress = this.getPercent();
        handle = this.handle,
        bar = this.bar;

    // Protect against no duration and other division issues
    if (isNaN(progress)) { progress = 0; }

    barProgress = progress;

    // If there is a handle, we need to account for the handle in our calculation for progress bar
    // so that it doesn't fall short of or extend past the handle.
    if (handle) {

      var box = this.el,
          boxWidth = box.offsetWidth,

          handleWidth = handle.el.offsetWidth,

          // The width of the handle in percent of the containing box
          // In IE, widths may not be ready yet causing NaN
          handlePercent = (handleWidth) ? handleWidth / boxWidth : 0,

          // Get the adjusted size of the box, considering that the handle's center never touches the left or right side.
          // There is a margin of half the handle's width on both sides.
          boxAdjustedPercent = 1 - handlePercent;

          // Adjust the progress that we'll use to set widths to the new adjusted box width
          adjustedProgress = progress * boxAdjustedPercent,

          // The bar does reach the left side, so we need to account for this in the bar's width
          barProgress = adjustedProgress + (handlePercent / 2);

      // Move the handle from the left based on the adjected progress
      handle.el.style.left = _V_.round(adjustedProgress * 100, 2) + "%";
    }

    // Set the new bar width
    bar.el.style.width = _V_.round(barProgress * 100, 2) + "%";
  },

  calculateDistance: function(event){
    var box = this.el,
        boxX = _V_.findPosX(box),
        boxW = box.offsetWidth,
        handle = this.handle;

    if (handle) {
      var handleW = handle.el.offsetWidth;

      // Adjusted X and Width, so handle doesn't go outside the bar
      boxX = boxX + (handleW / 2);
      boxW = boxW - handleW;
    }

    // Percent that the click is through the adjusted area
    return Math.max(0, Math.min(1, (event.pageX - boxX) / boxW));
  },

  onFocus: function(event){
    _V_.addEvent(document, "keyup", _V_.proxy(this, this.onKeyPress));
  },

  onKeyPress: function(event){
    if (event.which == 37) { // Left Arrow
      event.preventDefault();
      this.stepBack();
    } else if (event.which == 39) { // Right Arrow
      event.preventDefault();
      this.stepForward();
    }
  },

  onBlur: function(event){
    _V_.removeEvent(document, "keyup", _V_.proxy(this, this.onKeyPress));
  }
});


/* Progress
================================================================================ */

// Progress Control: Seek, Load Progress, and Play Progress
_V_.ProgressControl = _V_.Component.extend({

  options: {
    components: {
      "seekBar": {}
    }
  },

  createElement: function(){
    return this._super("div", {
      className: "vjs-progress-control vjs-control"
    });
  }

});

// Seek Bar and holder for the progress bars
_V_.SeekBar = _V_.Slider.extend({

  options: {
    components: {
      "loadProgressBar": {},

      // Set property names to bar and handle to match with the parent Slider class is looking for
      "bar": { componentClass: "PlayProgressBar" },
      "handle": { componentClass: "SeekHandle" }
    }
  },

  playerEvent: "timeupdate",

  init: function(player, options){
    this._super(player, options);
  },

  createElement: function(){
    return this._super("div", {
      className: "vjs-progress-holder"
    });
  },

  getPercent: function(){
    return this.player.currentTime() / this.player.duration();
  },

  onMouseDown: function(event){
    this._super(event);

    this.player.scrubbing = true;

    this.videoWasPlaying = !this.player.paused();
    this.player.pause();
  },

  onMouseMove: function(event){
    var newTime = this.calculateDistance(event) * this.player.duration();

    // Don't let video end while scrubbing.
    if (newTime == this.player.duration()) { newTime = newTime - 0.1; }

    // Set new time (tell player to seek to new time)
    this.player.currentTime(newTime);
  },

  onMouseUp: function(event){
    this._super(event);

    this.player.scrubbing = false;
    if (this.videoWasPlaying) {
      this.player.play();
    }
  },

  stepForward: function(){
    this.player.currentTime(this.player.currentTime() + 1);
  },

  stepBack: function(){
    this.player.currentTime(this.player.currentTime() - 1);
  }

});

// Load Progress Bar
_V_.LoadProgressBar = _V_.Component.extend({

  init: function(player, options){
    this._super(player, options);
    player.addEvent("progress", _V_.proxy(this, this.update));
  },

  createElement: function(){
    return this._super("div", {
      className: "vjs-load-progress",
      innerHTML: '<span class="vjs-control-text">Loaded: 0%</span>'
    });
  },

  update: function(){
    if (this.el.style) { this.el.style.width = _V_.round(this.player.bufferedPercent() * 100, 2) + "%"; }
  }

});

// Play Progress Bar
_V_.PlayProgressBar = _V_.Component.extend({

  createElement: function(){
    return this._super("div", {
      className: "vjs-play-progress",
      innerHTML: '<span class="vjs-control-text">Progress: 0%</span>'
    });
  }

});

// Seek Handle
// SeekBar Behavior includes play progress bar, and seek handle
// Needed so it can determine seek position based on handle position/size
_V_.SeekHandle = _V_.Component.extend({

  createElement: function(){
    return this._super("div", {
      className: "vjs-seek-handle",
      innerHTML: '<span class="vjs-control-text">00:00</span>'
    });
  }

});

/* Volume Scrubber
================================================================================ */
// Progress Control: Seek, Load Progress, and Play Progress
_V_.VolumeControl = _V_.Component.extend({

  options: {
    components: {
      "volumeBar": {}
    }
  },

  createElement: function(){
    return this._super("div", {
      className: "vjs-volume-control vjs-control"
    });
  }

});

_V_.VolumeBar = _V_.Slider.extend({

  options: {
    components: {
      "bar": { componentClass: "VolumeLevel" },
      "handle": { componentClass: "VolumeHandle" }
    }
  },

  playerEvent: "volumechange",

  createElement: function(){
    return this._super("div", {
      className: "vjs-volume-bar"
    });
  },

  onMouseMove: function(event) {
    this.player.volume(this.calculateDistance(event));
  },

  getPercent: function(){
   return this.player.volume();
  },

  stepForward: function(){
    this.player.volume(this.player.volume() + 0.1);
  },

  stepBack: function(){
    this.player.volume(this.player.volume() - 0.1);
  }
});

_V_.VolumeLevel = _V_.Component.extend({

  createElement: function(){
    return this._super("div", {
      className: "vjs-volume-level",
      innerHTML: '<span class="vjs-control-text"></span>'
    });
  }

});

_V_.VolumeHandle = _V_.Component.extend({

  createElement: function(){
    return this._super("div", {
      className: "vjs-volume-handle",
      innerHTML: '<span class="vjs-control-text"></span>'
      // tabindex: 0,
      // role: "slider", "aria-valuenow": 0, "aria-valuemin": 0, "aria-valuemax": 100
    });
  }

});

_V_.MuteToggle = _V_.Button.extend({

  init: function(player, options){
    this._super(player, options);

    player.addEvent("volumechange", _V_.proxy(this, this.update));
  },

  createElement: function(){
    return this._super("div", {
      className: "vjs-mute-control vjs-control",
      innerHTML: '<div><span class="vjs-control-text">Mute</span></div>'
    });
  },

  onClick: function(event){
    this.player.muted( this.player.muted() ? false : true );
  },

  update: function(event){
    var vol = this.player.volume(),
        level = 3;

    if (vol == 0 || this.player.muted()) {
      level = 0;
    } else if (vol < 0.33) {
      level = 1;
    } else if (vol < 0.67) {
      level = 2;
    }

    /* TODO improve muted icon classes */
    _V_.each.call(this, [0,1,2,3], function(i){
      _V_.removeClass(this.el, "vjs-vol-"+i);
    });
    _V_.addClass(this.el, "vjs-vol-"+level);
  }

});


/* Poster Image
================================================================================ */
_V_.PosterImage = _V_.Button.extend({
  init: function(player, options){
    this._super(player, options);

    if (!this.player.options.poster) {
      this.hide();
    }

    player.addEvent("play", _V_.proxy(this, this.hide));
  },

  createElement: function(){
    return _V_.createElement("img", {
      className: "vjs-poster",
      src: this.player.options.poster,

      // Don't want poster to be tabbable.
      tabIndex: -1
    });
  },

  onClick: function(){
    this.player.play();
  }
});

/* Menu
================================================================================ */
// The base for text track and settings menu buttons.
_V_.Menu = _V_.Component.extend({

  init: function(player, options){
    this._super(player, options);
  },

  addItem: function(component){
    this.addComponent(component);
    component.addEvent("click", this.proxy(function(){
      this.unlockShowing();
    }));
  },

  createElement: function(){
    return this._super("ul", {
      className: "vjs-menu"
    });
  }

});

_V_.MenuItem = _V_.Button.extend({

  init: function(player, options){
    this._super(player, options);

    if (options.selected) {
      this.addClass("vjs-selected");
    }
  },

  createElement: function(type, attrs){
    return this._super("li", _V_.merge({
      className: "vjs-menu-item",
      innerHTML: this.options.label
    }, attrs));
  },

  onClick: function(){
    this.selected(true);
  },

  selected: function(selected){
    if (selected) {
      this.addClass("vjs-selected");
    } else {
      this.removeClass("vjs-selected")
    }
  }

});// TEXT TRACKS
// Text tracks are tracks of timed text events.
//    Captions - text displayed over the video for the hearing impared
//    Subtitles - text displayed over the video for those who don't understand langauge in the video
//    Chapters - text displayed in a menu allowing the user to jump to particular points (chapters) in the video
//    Descriptions (not supported yet) - audio descriptions that are read back to the user by a screen reading device

// Player Track Functions - Functions add to the player object for easier access to tracks
_V_.merge(_V_.Player.prototype, {

  // Add an array of text tracks. captions, subtitles, chapters, descriptions
  // Track objects will be stored in the player.textTracks array
  addTextTracks: function(trackObjects){
    var tracks = this.textTracks = (this.textTracks) ? this.textTracks : [],
        i = 0, j = trackObjects.length, track, Kind;

    for (;i<j;i++) {
      // HTML5 Spec says default to subtitles.
      // Uppercase (uc) first letter to match class names
      Kind = _V_.uc(trackObjects[i].kind || "subtitles");

      // Create correct texttrack class. CaptionsTrack, etc.
      track = new _V_[Kind + "Track"](this, trackObjects[i]);

      tracks.push(track);

      // If track.default is set, start showing immediately
      // TODO: Add a process to deterime the best track to show for the specific kind
      // Incase there are mulitple defaulted tracks of the same kind
      // Or the user has a set preference of a specific language that should override the default
      if (track['default']) {
        this.ready(_V_.proxy(track, track.show));
      }
    }

    // Return the track so it can be appended to the display component
    return this;
  },

  // Show a text track
  // disableSameKind: disable all other tracks of the same kind. Value should be a track kind (captions, etc.)
  showTextTrack: function(id, disableSameKind){
    var tracks = this.textTracks,
        i = 0,
        j = tracks.length,
        track, showTrack, kind;

    // Find Track with same ID
    for (;i<j;i++) {
      track = tracks[i];
      if (track.id === id) {
        track.show();
        showTrack = track;

      // Disable tracks of the same kind
      } else if (disableSameKind && track.kind == disableSameKind && track.mode > 0) {
        track.disable();
      }
    }

    // Get track kind from shown track or disableSameKind
    kind = (showTrack) ? showTrack.kind : ((disableSameKind) ? disableSameKind : false);

    // Trigger trackchange event, captionstrackchange, subtitlestrackchange, etc.
    if (kind) {
      this.triggerEvent(kind+"trackchange");
    }

    return this;
  }

});

// Track Class
// Contains track methods for loading, showing, parsing cues of tracks
_V_.Track = _V_.Component.extend({

  init: function(player, options){
    this._super(player, options);

    // Apply track info to track object
    // Options will often be a track element
    _V_.merge(this, {
      // Build ID if one doesn't exist
      id: options.id || ("vjs_" + options.kind + "_" + options.language + "_" + _V_.guid++),

      src: options.src,

      // If default is used, subtitles/captions to start showing
      "default": options["default"], // 'default' is reserved-ish
      title: options.title,

      // Language - two letter string to represent track language, e.g. "en" for English
      // readonly attribute DOMString language;
      language: options.srclang,

      // Track label e.g. "English"
      // readonly attribute DOMString label;
      label: options.label,

      // All cues of the track. Cues have a startTime, endTime, text, and other properties.
      // readonly attribute TextTrackCueList cues;
      cues: [],

      // ActiveCues is all cues that are currently showing
      // readonly attribute TextTrackCueList activeCues;
      activeCues: [],

      // ReadyState describes if the text file has been loaded
      // const unsigned short NONE = 0;
      // const unsigned short LOADING = 1;
      // const unsigned short LOADED = 2;
      // const unsigned short ERROR = 3;
      // readonly attribute unsigned short readyState;
      readyState: 0,

      // Mode describes if the track is showing, hidden, or disabled
      // const unsigned short OFF = 0;
      // const unsigned short HIDDEN = 1; (still triggering cuechange events, but not visible)
      // const unsigned short SHOWING = 2;
      // attribute unsigned short mode;
      mode: 0
    });
  },

  // Create basic div to hold cue text
  createElement: function(){
    return this._super("div", {
      className: "vjs-" + this.kind + " vjs-text-track"
    });
  },

  // Show: Mode Showing (2)
  // Indicates that the text track is active. If no attempt has yet been made to obtain the track's cues, the user agent will perform such an attempt momentarily.
  // The user agent is maintaining a list of which cues are active, and events are being fired accordingly.
  // In addition, for text tracks whose kind is subtitles or captions, the cues are being displayed over the video as appropriate;
  // for text tracks whose kind is descriptions, the user agent is making the cues available to the user in a non-visual fashion;
  // and for text tracks whose kind is chapters, the user agent is making available to the user a mechanism by which the user can navigate to any point in the media resource by selecting a cue.
  // The showing by default state is used in conjunction with the default attribute on track elements to indicate that the text track was enabled due to that attribute.
  // This allows the user agent to override the state if a later track is discovered that is more appropriate per the user's preferences.
  show: function(){
    this.activate();

    this.mode = 2;

    // Show element.
    this._super();
  },

  // Hide: Mode Hidden (1)
  // Indicates that the text track is active, but that the user agent is not actively displaying the cues.
  // If no attempt has yet been made to obtain the track's cues, the user agent will perform such an attempt momentarily.
  // The user agent is maintaining a list of which cues are active, and events are being fired accordingly.
  hide: function(){
    // When hidden, cues are still triggered. Disable to stop triggering.
    this.activate();

    this.mode = 1;

    // Hide element.
    this._super();
  },

  // Disable: Mode Off/Disable (0)
  // Indicates that the text track is not active. Other than for the purposes of exposing the track in the DOM, the user agent is ignoring the text track.
  // No cues are active, no events are fired, and the user agent will not attempt to obtain the track's cues.
  disable: function(){
    // If showing, hide.
    if (this.mode == 2) { this.hide(); }

    // Stop triggering cues
    this.deactivate();

    // Switch Mode to Off
    this.mode = 0;
  },

  // Turn on cue tracking. Tracks that are showing OR hidden are active.
  activate: function(){
    // Load text file if it hasn't been yet.
    if (this.readyState == 0) { this.load(); }

    // Only activate if not already active.
    if (this.mode == 0) {
      // Update current cue on timeupdate
      // Using unique ID for proxy function so other tracks don't remove listener
      this.player.addEvent("timeupdate", this.proxy(this.update, this.id));

      // Reset cue time on media end
      this.player.addEvent("ended", this.proxy(this.reset, this.id));

      // Add to display
      if (this.kind == "captions" || this.kind == "subtitles") {
        this.player.textTrackDisplay.addComponent(this);
      }
    }
  },

  // Turn off cue tracking.
  deactivate: function(){
    // Using unique ID for proxy function so other tracks don't remove listener
    this.player.removeEvent("timeupdate", this.proxy(this.update, this.id));
    this.player.removeEvent("ended", this.proxy(this.reset, this.id));
    this.reset(); // Reset

    // Remove from display
    this.player.textTrackDisplay.removeComponent(this);
  },

  // A readiness state
  // One of the following:
  //
  // Not loaded
  // Indicates that the text track is known to exist (e.g. it has been declared with a track element), but its cues have not been obtained.
  //
  // Loading
  // Indicates that the text track is loading and there have been no fatal errors encountered so far. Further cues might still be added to the track.
  //
  // Loaded
  // Indicates that the text track has been loaded with no fatal errors. No new cues will be added to the track except if the text track corresponds to a MutableTextTrack object.
  //
  // Failed to load
  // Indicates that the text track was enabled, but when the user agent attempted to obtain it, this failed in some way (e.g. URL could not be resolved, network error, unknown text track format). Some or all of the cues are likely missing and will not be obtained.
  load: function(){

    // Only load if not loaded yet.
    if (this.readyState == 0) {
      this.readyState = 1;
      _V_.get(this.src, this.proxy(this.parseCues), this.proxy(this.onError));
    }

  },

  onError: function(err){
    this.error = err;
    this.readyState = 3;
    this.triggerEvent("error");
  },

  // Parse the WebVTT text format for cue times.
  // TODO: Separate parser into own class so alternative timed text formats can be used. (TTML, DFXP)
  parseCues: function(srcContent) {
    var cue, time, text,
        lines = srcContent.split("\n"),
        line = "", id;

    for (var i=1, j=lines.length; i<j; i++) {
      // Line 0 should be 'WEBVTT', so skipping i=0

      line = _V_.trim(lines[i]); // Trim whitespace and linebreaks

      if (line) { // Loop until a line with content

        // First line could be an optional cue ID
        // Check if line has the time separator
        if (line.indexOf("-->") == -1) {
          id = line;
          // Advance to next line for timing.
          line = _V_.trim(lines[++i]);
        } else {
          id = this.cues.length;
        }

        // First line - Number
        cue = {
          id: id, // Cue Number
          index: this.cues.length // Position in Array
        };

        // Timing line
        time = line.split(" --> ");
        cue.startTime = this.parseCueTime(time[0]);
        cue.endTime = this.parseCueTime(time[1]);

        // Additional lines - Cue Text
        text = [];

        // Loop until a blank line or end of lines
        // Assumeing trim("") returns false for blank lines
        while (lines[++i] && (line = _V_.trim(lines[i]))) {
          text.push(line);
        }

        cue.text = text.join('<br/>');

        // Add this cue
        this.cues.push(cue);
      }
    }

    this.readyState = 2;
    this.triggerEvent("loaded");
  },

  parseCueTime: function(timeText) {
    var parts = timeText.split(':'),
        time = 0,
        hours, minutes, other, seconds, ms, flags;

    // Check if optional hours place is included
    // 00:00:00.000 vs. 00:00.000
    if (parts.length == 3) {
      hours = parts[0];
      minutes = parts[1];
      other = parts[2];
    } else {
      hours = 0;
      minutes = parts[0];
      other = parts[1];
    }

    // Break other (seconds, milliseconds, and flags) by spaces
    // TODO: Make additional cue layout settings work with flags
    other = other.split(/\s+/)
    // Remove seconds. Seconds is the first part before any spaces.
    seconds = other.splice(0,1)[0];
    // Could use either . or , for decimal
    seconds = seconds.split(/\.|,/);
    // Get milliseconds
    ms = parseFloat(seconds[1]);
    seconds = seconds[0];

    // hours => seconds
    time += parseFloat(hours) * 3600;
    // minutes => seconds
    time += parseFloat(minutes) * 60;
    // Add seconds
    time += parseFloat(seconds);
    // Add milliseconds
    if (ms) { time += ms/1000; }

    return time;
  },

  // Update active cues whenever timeupdate events are triggered on the player.
  update: function(){
    if (this.cues.length > 0) {

      // Get curent player time
      var time = this.player.currentTime();

      // Check if the new time is outside the time box created by the the last update.
      if (this.prevChange === undefined || time < this.prevChange || this.nextChange <= time) {
        var cues = this.cues,

            // Create a new time box for this state.
            newNextChange = this.player.duration(), // Start at beginning of the timeline
            newPrevChange = 0, // Start at end

            reverse = false, // Set the direction of the loop through the cues. Optimized the cue check.
            newCues = [], // Store new active cues.

            // Store where in the loop the current active cues are, to provide a smart starting point for the next loop.
            firstActiveIndex, lastActiveIndex,

            html = "", // Create cue text HTML to add to the display
            cue, i, j; // Loop vars

        // Check if time is going forwards or backwards (scrubbing/rewinding)
        // If we know the direction we can optimize the starting position and direction of the loop through the cues array.
        if (time >= this.nextChange || this.nextChange === undefined) { // NextChange should happen
          // Forwards, so start at the index of the first active cue and loop forward
          i = (this.firstActiveIndex !== undefined) ? this.firstActiveIndex : 0;
        } else {
          // Backwards, so start at the index of the last active cue and loop backward
          reverse = true;
          i = (this.lastActiveIndex !== undefined) ? this.lastActiveIndex : cues.length - 1;
        }

        while (true) { // Loop until broken
          cue = cues[i];

          // Cue ended at this point
          if (cue.endTime <= time) {
            newPrevChange = Math.max(newPrevChange, cue.endTime);

            if (cue.active) {
              cue.active = false;
            }

            // No earlier cues should have an active start time.
            // Nevermind. Assume first cue could have a duration the same as the video.
            // In that case we need to loop all the way back to the beginning.
            // if (reverse && cue.startTime) { break; }

          // Cue hasn't started
          } else if (time < cue.startTime) {
            newNextChange = Math.min(newNextChange, cue.startTime);

            if (cue.active) {
              cue.active = false;
            }

            // No later cues should have an active start time.
            if (!reverse) { break; }

          // Cue is current
          } else {

            if (reverse) {
              // Add cue to front of array to keep in time order
              newCues.splice(0,0,cue);

              // If in reverse, the first current cue is our lastActiveCue
              if (lastActiveIndex === undefined) { lastActiveIndex = i; }
              firstActiveIndex = i;
            } else {
              // Add cue to end of array
              newCues.push(cue);

              // If forward, the first current cue is our firstActiveIndex
              if (firstActiveIndex === undefined) { firstActiveIndex = i; }
              lastActiveIndex = i;
            }

            newNextChange = Math.min(newNextChange, cue.endTime);
            newPrevChange = Math.max(newPrevChange, cue.startTime);

            cue.active = true;
          }

          if (reverse) {
            // Reverse down the array of cues, break if at first
            if (i === 0) { break; } else { i--; }
          } else {
            // Walk up the array fo cues, break if at last
            if (i === cues.length - 1) { break; } else { i++; }
          }

        }

        this.activeCues = newCues;
        this.nextChange = newNextChange;
        this.prevChange = newPrevChange;
        this.firstActiveIndex = firstActiveIndex;
        this.lastActiveIndex = lastActiveIndex;

        this.updateDisplay();

        this.triggerEvent("cuechange");
      }
    }
  },

  // Add cue HTML to display
  updateDisplay: function(){
    var cues = this.activeCues,
        html = "",
        i=0,j=cues.length;

    for (;i<j;i++) {
      html += "<span class='vjs-tt-cue'>"+cues[i].text+"</span>";
    }

    this.el.innerHTML = html;
  },

  // Set all loop helper values back
  reset: function(){
    this.nextChange = 0;
    this.prevChange = this.player.duration();
    this.firstActiveIndex = 0;
    this.lastActiveIndex = 0;
  }

});

// Create specific track types
_V_.CaptionsTrack = _V_.Track.extend({
  kind: "captions"
});

_V_.SubtitlesTrack = _V_.Track.extend({
  kind: "subtitles"
});

_V_.ChaptersTrack = _V_.Track.extend({
  kind: "chapters"
});


/* Text Track Display
================================================================================ */
// Global container for both subtitle and captions text. Simple div container.
_V_.TextTrackDisplay = _V_.Component.extend({

  createElement: function(){
    return this._super("div", {
      className: "vjs-text-track-display"
    });
  }

});

/* Text Track Menu Items
================================================================================ */
_V_.TextTrackMenuItem = _V_.MenuItem.extend({

  init: function(player, options){
    var track = this.track = options.track;

    // Modify options for parent MenuItem class's init.
    options.label = track.label;
    options.selected = track["default"];
    this._super(player, options);

    this.player.addEvent(track.kind + "trackchange", _V_.proxy(this, this.update));
  },

  onClick: function(){
    this._super();
    this.player.showTextTrack(this.track.id, this.track.kind);
  },

  update: function(){
    if (this.track.mode == 2) {
      this.selected(true);
    } else {
      this.selected(false);
    }
  }

});

_V_.OffTextTrackMenuItem = _V_.TextTrackMenuItem.extend({

  init: function(player, options){
    // Create pseudo track info
    // Requires options.kind
    options.track = { kind: options.kind, player: player, label: "Off" }
    this._super(player, options);
  },

  onClick: function(){
    this._super();
    this.player.showTextTrack(this.track.id, this.track.kind);
  },

  update: function(){
    var tracks = this.player.textTracks,
        i=0, j=tracks.length, track,
        off = true;

    for (;i<j;i++) {
      track = tracks[i];
      if (track.kind == this.track.kind && track.mode == 2) {
        off = false;
      }
    }

    if (off) {
      this.selected(true);
    } else {
      this.selected(false);
    }
  }

});

/* Captions Button
================================================================================ */
_V_.TextTrackButton = _V_.Button.extend({

  init: function(player, options){
    this._super(player, options);

    this.menu = this.createMenu();

    if (this.items.length === 0) {
      this.hide();
    }
  },

  createMenu: function(){
    var menu = new _V_.Menu(this.player);

    // Add a title list item to the top
    menu.el.appendChild(_V_.createElement("li", {
      className: "vjs-menu-title",
      innerHTML: _V_.uc(this.kind)
    }));

    // Add an OFF menu item to turn all tracks off
    menu.addItem(new _V_.OffTextTrackMenuItem(this.player, { kind: this.kind }))

    this.items = this.createItems();

    // Add menu items to the menu
    this.each(this.items, function(item){
      menu.addItem(item);
    });

    // Add list to element
    this.addComponent(menu);

    return menu;
  },

  // Create a menu item for each text track
  createItems: function(){
    var items = [];
    this.each(this.player.textTracks, function(track){
      if (track.kind === this.kind) {
        items.push(new _V_.TextTrackMenuItem(this.player, {
          track: track
        }));
      }
    });
    return items;
  },

  buildCSSClass: function(){
    return this.className + " vjs-menu-button " + this._super();
  },

  // Focus - Add keyboard functionality to element
  onFocus: function(){
    // Show the menu, and keep showing when the menu items are in focus
    this.menu.lockShowing();
    // this.menu.el.style.display = "block";

    // When tabbing through, the menu should hide when focus goes from the last menu item to the next tabbed element.
    _V_.one(this.menu.el.childNodes[this.menu.el.childNodes.length - 1], "blur", this.proxy(function(){
      this.menu.unlockShowing();
    }));
  },
  // Can't turn off list display that we turned on with focus, because list would go away.
  onBlur: function(){},

  onClick: function(){
    // When you click the button it adds focus, which will show the menu indefinitely.
    // So we'll remove focus when the mouse leaves the button.
    // Focus is needed for tab navigation.
    this.one("mouseout", this.proxy(function(){
      this.menu.unlockShowing();
      this.el.blur();
    }));
  }

});

_V_.CaptionsButton = _V_.TextTrackButton.extend({
  kind: "captions",
  buttonText: "Captions",
  className: "vjs-captions-button"
});

_V_.SubtitlesButton = _V_.TextTrackButton.extend({
  kind: "subtitles",
  buttonText: "Subtitles",
  className: "vjs-subtitles-button"
});

// Chapters act much differently than other text tracks
// Cues are navigation vs. other tracks of alternative languages
_V_.ChaptersButton = _V_.TextTrackButton.extend({
  kind: "chapters",
  buttonText: "Chapters",
  className: "vjs-chapters-button",

  // Create a menu item for each text track
  createItems: function(chaptersTrack){
    var items = [];

    this.each(this.player.textTracks, function(track){
      if (track.kind === this.kind) {
        items.push(new _V_.TextTrackMenuItem(this.player, {
          track: track
        }));
      }
    });

    return items;
  },

  createMenu: function(){
    var tracks = this.player.textTracks,
        i = 0,
        j = tracks.length,
        track, chaptersTrack,
        items = this.items = [];

    for (;i<j;i++) {
      track = tracks[i];
      if (track.kind == this.kind && track["default"]) {
        if (track.readyState < 2) {
          this.chaptersTrack = track;
          track.addEvent("loaded", this.proxy(this.createMenu));
          return;
        } else {
          chaptersTrack = track;
          break;
        }
      }
    }

    var menu = this.menu = new _V_.Menu(this.player);

    menu.el.appendChild(_V_.createElement("li", {
      className: "vjs-menu-title",
      innerHTML: _V_.uc(this.kind)
    }));

    if (chaptersTrack) {
      var cues = chaptersTrack.cues,
          i = 0, j = cues.length, cue, mi;

      for (;i<j;i++) {
        cue = cues[i];

        mi = new _V_.ChaptersTrackMenuItem(this.player, {
          track: chaptersTrack,
          cue: cue
        });

        items.push(mi);

        menu.addComponent(mi);
      }
    }

    // Add list to element
    this.addComponent(menu);

    if (this.items.length > 0) {
      this.show();
    }

    return menu;
  }

});

_V_.ChaptersTrackMenuItem = _V_.MenuItem.extend({

  init: function(player, options){
    var track = this.track = options.track,
        cue = this.cue = options.cue,
        currentTime = player.currentTime();

    // Modify options for parent MenuItem class's init.
    options.label = cue.text;
    options.selected = (cue.startTime <= currentTime && currentTime < cue.endTime);
    this._super(player, options);

    track.addEvent("cuechange", _V_.proxy(this, this.update));
  },

  onClick: function(){
    this._super();
    this.player.currentTime(this.cue.startTime);
    this.update(this.cue.startTime);
  },

  update: function(time){
    var cue = this.cue,
        currentTime = this.player.currentTime();

    // _V_.log(currentTime, cue.startTime);
    if (cue.startTime <= currentTime && currentTime < cue.endTime) {
      this.selected(true);
    } else {
      this.selected(false);
    }
  }

});

// Add Buttons to controlBar
_V_.merge(_V_.ControlBar.prototype.options.components, {
  "subtitlesButton": {},
  "captionsButton": {},
  "chaptersButton": {}
});

// _V_.Cue = _V_.Component.extend({
//   init: function(player, options){
//     this._super(player, options);
//   }
// });// Automatically set up any tags that have a data-setup attribute
_V_.autoSetup = function(){
  var options, vid, player,
      vids = document.getElementsByTagName("video");

  // Check if any media elements exist
  if (vids && vids.length > 0) {

    for (var i=0,j=vids.length; i<j; i++) {
      vid = vids[i];

      // Check if element exists, has getAttribute func.
      // IE seems to consider typeof el.getAttribute == "object" instead of "function" like expected, at least when loading the player immediately.
      if (vid && vid.getAttribute) {

        // Make sure this player hasn't already been set up.
        if (vid.player === undefined) {
          options = vid.getAttribute("data-setup");

          // Check if data-setup attr exists. 
          // We only auto-setup if they've added the data-setup attr.
          if (options !== null) {

            // Parse options JSON
            // If empty string, make it a parsable json object.
            options = JSON.parse(options || "{}");

            // Create new video.js instance.
            player = _V_(vid, options);
          }
        }

      // If getAttribute isn't defined, we need to wait for the DOM.
      } else {
        _V_.autoSetupTimeout(1);
        break;
      }
    }

  // No videos were found, so keep looping unless page is finisehd loading.
  } else if (!_V_.windowLoaded) {
    _V_.autoSetupTimeout(1);
  }
};

// Pause to let the DOM keep processing
_V_.autoSetupTimeout = function(wait){
  setTimeout(_V_.autoSetup, wait);
};

_V_.addEvent(window, "load", function(){
  _V_.windowLoaded = true;
});

// Run Auto-load players
_V_.autoSetup();
// Expose to global
window.VideoJS = window._V_ = VideoJS;

// End self-executing function
})(window);


(function($) {

  $.fn.responsiveModal = function(options) {
    var modal = this;
    var body = $('body');
    var opts = $.extend({}, $.fn.responsiveModal.defaults, options);
    var imgTags;

    // Store modals into a table
    if (opts.hash) {
      $.fn.responsiveModal.hashes[opts.hash] = this;
    }

    modal.createOverlay = function() {
      if (!modal.overlay_bg) {
        modal.overlay_bg = $('<div class="responsive-modal-background" />');
        modal.overlay_bg.appendTo(body);
      }
      return modal.overlay_bg;
    };

    modal.createContainer = function() {
      if (!modal.container) {
        modal.container = $('<div class="responsive-modal-container" />');
        modal.content = $('<div id="' + opts.id + '" class="responsive-modal-content loading" />');
        modal.closeButton = $('<div id="widget-close-button" />');
        modal.closeButton.bind('click', modal.close);
        modal.closeButton.appendTo(modal.content);
        modal.content.appendTo(modal.container);
        modal.container.appendTo(body);
      }
      return modal.container;
    };

    modal.createSocial = function() {
      var shareButtonsPanel = $('<div class="share_buttons" />');
      shareButtonsPanel.prependTo(modal.content);

      // Append Facebook
      shareButtonsPanel.append('<div class="fb-like" data-href="' + opts.social + '" data-width="450" data-layout="button_count" data-show-faces="false" data-send="false"></div>');
      if ( $('#fb-root').length === 0 ) {
        body.prepend('<div id="fb-root" />');
      }

      if(window.FB) {
        window.FB.XFBML.parse();
      } else {
        (function(d, s, id) { var js, fjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) {return;} js = d.createElement(s); js.id = id; js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";fjs.parentNode.insertBefore(js, fjs);}(document, 'script', 'facebook-jssdk'));
      }

      // Append Twitter
      shareButtonsPanel.append('<a href="https://twitter.com/share" class="twitter-share-button" data-url="' + opts.social + '" data-related="nest" data=text="' + opts.socialDescription + '">Tweet</a>');
      (function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);} else { $.ajax({ url: 'http://platform.twitter.com/widgets.js', dataType: 'script', cache:true}); }})(document, 'script', 'twitter-wjs');
      // Append Pinterest
      if(opts.pinterest) {
        shareButtonsPanel.append('<a href="//www.pinterest.com/pin/create/button/?url=' + encodeURIComponent(opts.social) + '&media=' + encodeURIComponent(opts.pinterest) + '&description=' + opts.socialDescription + '" data-pin-do="buttonPin" data-pin-config="beside"><img src="//assets.pinterest.com/images/pidgets/pin_it_button.png" /></a>');
        (function(d){ var f = d.getElementsByTagName('SCRIPT')[0], p = d.createElement('SCRIPT'); p.type = 'text/javascript'; p.async = true; p.src = '//assets.pinterest.com/js/pinit.js'; f.parentNode.insertBefore(p, f); }(document));
      }
    };

    modal.open = function() {


      if(opts.mobileNewWindow && opts.type === "iframe" && window.navigator.userAgent.match(/iPhone|iPod|iPad|Android/i)) {
        window.open(opts.src);
      }
      modal.createOverlay();
      modal.createContainer();
      var content = '';

      if (opts.type === "youtube") {
        content = modal.youtube.createEmbed(opts.src);
      } else if(opts.type === "iframe") {
        content = modal.iframe.createIframe(opts.src);
      } else if(opts.src instanceof jQuery) {
        content = opts.src;
      } else {
        content = $(opts.src);
      }

      modal.fillContent(content);
      content.show();
      imgTags = modal.content.find('img');

      if (opts.social) {
        modal.createSocial();
      }

      if (opts.hash && document.location.hash !== '#' + opts.hash) {
        document.location.hash = '#' + opts.hash;
      }

      modal.setMaxHeight(opts.maxHeight);
      modal.setMaxWidth(opts.maxWidth);

      $(window).bind('resize.responsive_modal', function() {
        if (opts.type === 'youtube') {
          var vidHeight = modal.content.width()*(9/16);
          modal.content.find('embed').css({
            'height': vidHeight + 'px',
            'width': modal.content.width() + 'px'
          });
        } else if (opts.type === "iframe") {
          modal.content.find('iframe').attr({
            width: modal.content.width(),
            height: modal.content.height()
          });
        }
        modal.content.css({
          'margin-top': ((modal.content.outerHeight()/2)*-1) + $(window).scrollTop() + 'px',
          'margin-left': (modal.content.outerWidth()/2)*-1 + 'px'
        });
      });

      if(imgTags.length > 0) {
        imgTags.each(function(i) {
          $(window).trigger('resize.responsive_modal');
          if (i === (imgTags.length-1)) {
            modal.content.removeClass('loading');
          }
        });
      } else {
        $(window).trigger('resize.responsive_modal');
        modal.content.removeClass('loading');
      }

      $(document).bind('keyup.responsive_modal', function(e) {
        if (e.keyCode === 27) {
          modal.close();
        }
      });

      // CUSTOM FOR DISTRIBUTOR FINDER
      $('#widget-close-button').text('X');
      loadDistributorFinder();
      _gaq.push(['_trackPageview', '/distributor_finder']);
    };

    modal.fillContent = function(content) {
      modal.content.append(content);
    };

    modal.setMaxHeight = function(height) {
      height = (height) ? height : modal.content.css('max-height', height + 'px');
      if (opts.social) {
        height = height + $('.responsive-modal-content .share_buttons');
      }
      modal.content.css('max-height', height + 'px');
    };

    modal.setMaxWidth = function(width) {
      width = (width) ? width : modal.content.css('max-width', width + 'px');
      modal.content.css('max-width', width + 'px');
    };

    modal.close = function() {
      modal.overlay_bg.remove();
      modal.container.remove();

      modal.overlay_bg = null;
      modal.container = null;
      modal.content = null;
      $(window).unbind('resize.responsive_modal');
      $(document).unbind('keyup.responsive_modal');

      if (opts.hash) {
        if (window.history.pushState) {
          window.history.pushState("", document.title, window.location.pathname + window.location.search);
        } else {
          document.location.hash = '';
        }
      }
    };

    modal.youtube = {
      embedHTML: ['<object>',
                    '<param name="movie" value="https://www.youtube.com/v/{id}?version=3&autohide=1&autoplay=1&fs=1&modestbranding=1&theme=light&showinfo=0&rel=0"></param>',
                    '<param name="allowFullScreen" value="true"></param>',
                    '<param name="allowScriptAccess" value="always"></param>',
                    '<embed src="https://www.youtube.com/v/{id}?version=3&autohide=1&autoplay=1&fs=1&modestbranding=1&theme=light&showinfo=0&rel=0" type="application/x-shockwave-flash" allowscriptaccess="always"></embed>',
                  '</object>'].join(""),
      createEmbed: function(src) {
        var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        var match = src.match(regExp);

        if (match && match[2].length === 11) {
          return $(modal.youtube.embedHTML.replace(/\{id\}/g, match[2]));
        } else {
          window.console.error("There's a problem parsing your YouTube URL: " + src);
        }
      }
    };

    modal.iframe = {
      createIframe: function(src) {
        return $('<iframe scrolling="no" height="' + opts.maxHeight + '" width="' + opts.maxWidth + '" src="' + src + '" frameborder="0"></iframe>');
      }
    };

    this.each(function() {
      var elem = $(this);
      elem.bind('click', function() {
        modal.open();
      });
    });

    // Check URL for hash to trigger a modal
    var checkIfCurrentHash = $.fn.responsiveModal.hashes[document.location.hash.replace('#', '')];
    if (checkIfCurrentHash) {

      $(window).load(function(){
        // in the case that there is more than one of the same href
        // on the page, we iterate over the hash object and
        // when we find a match we launch the widget and bail.
        checkIfCurrentHash.each(function(){
          if (this.hash === window.location.hash) {
            this.click();
            return false;
          }
        });
      });
    }

    return this;
  };

  $.fn.responsiveModal.hashes = {};

  $.fn.responsiveModal.defaults = {
    type: 'content',
    src: '',
    mobileNewWindow: true
  };

}(jQuery));

$(function() {
/*

 Copyright 2012 Google Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
'use strict';var e=Math,f="getLocation",h="trigger",k="bindTo",l="removeListener",n="geometry",p="attr",q="getBounds",r="find",s="addListener",t="maps",u="getMap",v="contains",w="push",x="addClass",y="getCenter",A="click",B="distanceTo",C="highlight",E="length",F="prototype",G="getId",H="getMarker",I="setMap",J="append",K="join",L="event";function M(a){return function(){return this[a]}}var N;function O(){}window.storeLocator=O;function P(a){return a*e.PI/180};function Q(a,b){this.b=a;this.a=b}O.Feature=Q;Q[F].getId=M("b");Q[F].getDisplayName=M("a");Q[F].toString=function(){return this.getDisplayName()};function R(a){this.a=[];this.b={};for(var b=0,c;c=arguments[b];b++)this.add(c)}O.FeatureSet=R;N=R[F];N.toggle=function(a){this[v](a)?this.remove(a):this.add(a)};N.contains=function(a){return a[G]()in this.b};N.getById=function(a){return a in this.b?this.a[this.b[a]]:null};N.add=function(a){a&&(this.a[w](a),this.b[a[G]()]=this.a[E]-1)};N.remove=function(a){this[v](a)&&(this.a[this.b[a[G]()]]=null,delete this.b[a[G]()])};
N.asList=function(){for(var a=[],b=0,c=this.a[E];b<c;b++){var d=this.a[b];null!==d&&a[w](d)}return a};var aa=new R;function S(a){this.c=a.tableId;this.b=a.apiKey;a.propertiesModifier&&(this.a=a.propertiesModifier)}O.GMEDataFeed=S;
S[F].getStores=function(a,b,c){var d=this,g=a[y]();a="(ST_INTERSECTS(geometry, "+ca(a)+") OR ST_DISTANCE(geometry, "+da(g)+") < 20000)";$.getJSON("https://www.googleapis.com/mapsengine/v1/tables/"+this.c+"/features?callback=?",{key:this.b,where:a,version:"published",maxResults:300},function(a){if(a.error)window.alert(a.error.message),a=[];else if(a=a.features){for(var b=[],ba=0,D;D=a[ba];ba++){var T=D[n].coordinates,T=new google[t].LatLng(T[1],T[0]);D=d.a(D.properties);b[w](new U(D.id,T,null,D))}a=
b}else a=[];ea(g,a);c(a)})};function da(a){return"ST_POINT("+a.lng()+", "+a.lat()+")"}function ca(a){var b=a.getNorthEast();a=a.getSouthWest();return["ST_GEOMFROMTEXT('POLYGON ((",a.lng()," ",a.lat(),", ",b.lng()," ",a.lat(),", ",b.lng()," ",b.lat(),", ",a.lng()," ",b.lat(),", ",a.lng()," ",a.lat(),"))')"][K]("")}S[F].a=function(a){return a};function ea(a,b){b.sort(function(b,d){return b[B](a)-d[B](a)})};function V(a,b){this.g=$(a);this.g[x]("storelocator-panel");this.c=$.extend({locationSearch:!0,locationSearchLabel:"Where are you?",featureFilter:!0,directions:!0,view:null},b);this.l=new google[t].DirectionsRenderer({draggable:!0});this.s=new google[t].DirectionsService;fa(this)}O.Panel=V;V.prototype=new google[t].MVCObject;
function fa(a){a.c.view&&a.set("view",a.c.view);a.e=$('<form class="storelocator-filter"/>');a.g[J](a.e);a.c.locationSearch&&(a.i=$('<div class="location-search"><h4>'+a.c.locationSearchLabel+"</h4><input></div>"),a.e[J](a.i),"undefined"!=typeof google[t].places?ga(a):a.e.submit(function(){var b=$("input",a.i).val();a.searchPosition(b)}),a.e.submit(function(){return!1}),google[t][L][s](a,"geocode",function(b){if(b[n]){this.k=b[n].location;a.h&&W(a);var c=a.get("view");c[C](null);var d=c[u]();b[n].viewport?
d.fitBounds(b[n].viewport):(d.setCenter(b[n].location),d.setZoom(13));c.refreshView();X(a)}else a.searchPosition(b.name)}));if(a.c.featureFilter){a.d=$('<div class="feature-filter"/>');for(var b=a.get("view").getFeatures().asList(),c=0,d=b[E];c<d;c++){var g=b[c],m=$('<input type="checkbox"/>');m.data("feature",g);$("<label/>")[J](m)[J](g.getDisplayName()).appendTo(a.d)}a.e[J](a.d);a.d[r]("input").change(function(){var b=$(this).data("feature"),c=a.get("featureFilter");c.toggle(b);a.set("featureFilter",
c);a.get("view").refreshView()})}a.b=$('<ul class="store-list"/>');a.g[J](a.b);a.c.directions&&(a.a=$('<div class="directions-panel"><form><input class="directions-to"/><input type="submit" value="Find directions"/><a href="#" class="close-directions">Close</a></form><div class="rendered-directions"></div></div>'),a.a[r](".directions-to")[p]("readonly","readonly"),a.a.hide(),a.h=!1,a.a[r]("form").submit(function(){W(a);return!1}),a.a[r](".close-directions")[A](function(){a.hideDirections()}),a.g[J](a.a))}
var ha=new google[t].Geocoder;function X(a){var b=a.get("view");a.r&&google[t][L][l](a.r);a.r=google[t][L].addListenerOnce(b,"stores_changed",function(){a.set("stores",b.get("stores"))})}N=V[F];N.searchPosition=function(a){var b=this;a={address:a,bounds:this.get("view")[u]()[q]()};ha.geocode(a,function(a,d){d==google[t].GeocoderStatus.OK&&google[t][L][h](b,"geocode",a[0])})};N.setView=function(a){this.set("view",a)};
N.view_changed=function(){function a(){b.clearMarkers();X(c)}var b=this.get("view");this[k]("selectedStore",b);var c=this;this.o&&google[t][L][l](this.o);this.q&&google[t][L][l](this.q);this.p&&google[t][L][l](this.p);b[u]();this.o=google[t][L][s](b,"load",a);this.q=google[t][L][s](b[u](),"zoom_changed",a);this.p=google[t][L][s](b[u](),"idle",function(){var a=b[u]();c.j?a[q]()[v](c.j)||(c.j=a[y](),X(c)):c.j=a[y]()});a();this[k]("featureFilter",b);this.f&&this.f[k]("bounds",b[u]())};
function ga(a){var b=$("input",a.i)[0];a.f=new google[t].places.Autocomplete(b);a.get("view")&&a.f[k]("bounds",a.get("view")[u]());google[t][L][s](a.f,"place_changed",function(){google[t][L][h](a,"geocode",this.getPlace())})}
N.stores_changed=function(){if(this.get("stores")){var a=this.get("view"),b=a&&a[u]()[q](),c=this.get("stores"),d=this.get("selectedStore");this.b.empty();c[E]?b&&!b[v](c[0][f]())&&this.b[J]('<li class="no-stores">There are no stores in this area. However, stores closest to you are listed below.</li>'):this.b[J]('<li class="no-stores">There are no stores in this area.</li>');for(var b=function(){a[C](this.store,!0)},g=0,m=e.min(10,c[E]);g<m;g++){var z=c[g].getInfoPanelItem();z.store=c[g];d&&c[g][G]()==
d[G]()&&$(z)[x]("highlighted");z.t||(z.t=google[t][L].addDomListener(z,"click",b));this.b[J](z)}}};
N.selectedStore_changed=function(){$(".highlighted",this.b).removeClass("highlighted");var a=this,b=this.get("selectedStore");if(b){this.m=b;this.b[r]("#store-"+b[G]())[x]("highlighted");this.c.directions&&this.a[r](".directions-to").val(b.getDetails().title);var c=a.get("view").getInfoWindow().getContent(),d=$("<a/>").text("Directions")[p]("href","#")[x]("action")[x]("directions"),g=$("<a/>").text("Zoom here")[p]("href","#")[x]("action")[x]("zoomhere"),m=$("<a/>").text("Street view")[p]("href","#")[x]("action")[x]("streetview");
d[A](function(){a.showDirections();return!1});g[A](function(){a.get("view")[u]().setOptions({center:b[f](),zoom:16})});m[A](function(){var c=a.get("view")[u]().getStreetView();c.setPosition(b[f]());c.setVisible(!0)});$(c)[J](d)[J](g)[J](m)}};N.hideDirections=function(){this.h=!1;this.a.fadeOut();this.d.fadeIn();this.b.fadeIn();this.l[I](null)};
N.showDirections=function(){var a=this.get("selectedStore");this.d.fadeOut();this.b.fadeOut();this.a[r](".directions-to").val(a.getDetails().title);this.a.fadeIn();W(this);this.h=!0};function W(a){if(a.k&&a.m){var b=a.a[r](".rendered-directions").empty();a.s.route({origin:a.k,destination:a.m[f](),travelMode:google[t].DirectionsTravelMode.DRIVING},function(c,d){if(d==google[t].DirectionsStatus.OK){var g=a.l;g.setPanel(b[0]);g[I](a.get("view")[u]());g.setDirections(c)}})}}N.featureFilter_changed=function(){X(this)};function Y(){this.b=[]}O.StaticDataFeed=Y;Y[F].setStores=function(a){this.b=a;this.a?this.a():delete this.a};Y[F].getStores=function(a,b,c){if(this.b[E]){for(var d=[],g=0,m;m=this.b[g];g++)m.hasAllFeatures(b)&&d[w](m);ia(a[y](),d);c(d)}else{var z=this;this.a=function(){z.getStores(a,b,c)}}};function ia(a,b){b.sort(function(b,d){return b[B](a)-d[B](a)})};/*

  Latitude/longitude spherical geodesy formulae & scripts
  (c) Chris Veness 2002-2010
  www.movable-type.co.uk/scripts/latlong.html
*/
function U(a,b,c,d){this.f=a;this.d=b;this.a=c||aa;this.b=d||{}}O.Store=U;N=U[F];N.setMarker=function(a){this.e=a;google[t][L][h](this,"marker_changed",a)};N.getMarker=M("e");N.getId=M("f");N.getLocation=M("d");N.getFeatures=M("a");N.hasFeature=function(a){return this.a[v](a)};N.hasAllFeatures=function(a){if(!a)return!0;a=a.asList();for(var b=0,c=a[E];b<c;b++)if(!this.hasFeature(a[b]))return!1;return!0};N.getDetails=M("b");
function ja(a){for(var b=["title","address","phone","misc","web"],c=[],d=0,g=b[E];d<g;d++){var m=b[d];a.b[m]&&(c[w]('<div class="'),c[w](m),c[w]('">'),c[w](a.b[m]),c[w]("</div>"))}return c[K]("")}function ka(a){var b=[];b[w]('<ul class="features">');a=a.a.asList();for(var c=0,d;d=a[c];c++)b[w]("<li>"),b[w](d.getDisplayName()),b[w]("</li>");b[w]("</ul>");return b[K]("")}N.getInfoWindowContent=function(){if(!this.c){var a=['<div class="store">'];a[w](ja(this));a[w](ka(this));a[w]("</div>");this.c=a[K]("")}return this.c};
N.getInfoPanelContent=function(){return this.getInfoWindowContent()};var Z={};U[F].getInfoPanelItem=function(){var a=this[G]();if(!Z[a]){var b=this.getInfoPanelContent();Z[a]=$('<li class="store" id="store-'+this[G]()+'">'+b+"</li>")[0]}return Z[a]};U[F].distanceTo=function(a){var b=this[f](),c=P(b.lat()),d=P(b.lng()),b=P(a.lat()),g=P(a.lng());a=b-c;d=g-d;c=e.sin(a/2)*e.sin(a/2)+e.cos(c)*e.cos(b)*e.sin(d/2)*e.sin(d/2);return 12742*e.atan2(e.sqrt(c),e.sqrt(1-c))};function la(){}O.DataFeed=la;la[F].getStores=function(){};function ma(a,b,c){this.g=a;this.f=b;this.b=$.extend({updateOnPan:!0,geolocation:!0,features:new R},c);na(this);google[t][L][h](this,"load");this.set("featureFilter",new R)}O.View=ma;ma.prototype=new google[t].MVCObject;
function oa(a){window.navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition(function(b){b=new google[t].LatLng(b.coords.latitude,b.coords.longitude);a[u]().setCenter(b);a[u]().setZoom(11);google[t][L][h](a,"load")},void 0,{maximumAge:6E4,timeout:1E4})}
function na(a){a.b.geolocation&&oa(a);a.c={};a.a=new google[t].InfoWindow;var b=a[u]();a.set("updateOnPan",a.b.updateOnPan);google[t][L][s](a.a,"closeclick",function(){a[C](null)});google[t][L][s](b,"click",function(){a[C](null);a.a.close()})}N=ma[F];N.updateOnPan_changed=function(){this.e&&google[t][L][l](this.e);if(this.get("updateOnPan")&&this[u]()){var a=this,b=this[u]();this.e=google[t][L][s](b,"idle",function(){a.refreshView()})}};
N.addStoreToMap=function(a){var b=this[H](a);a.setMarker(b);var c=this;b.n=google[t][L][s](b,"click",function(){c[C](a,!1)});b[u]()!=this[u]()&&b[I](this[u]())};N.createMarker=function(a){a={position:a[f]()};var b=this.b.markerIcon;b&&(a.icon=b);return new google[t].Marker(a)};N.getMarker=function(a){var b=this.c,c=a[G]();b[c]||(b[c]=this.createMarker(a));return b[c]};N.getInfoWindow=function(a){if(!a)return this.a;a=$(a.getInfoWindowContent());this.a.setContent(a[0]);return this.a};
N.getFeatures=function(){return this.b.features};N.getFeatureById=function(a){if(!this.d){this.d={};for(var b=0,c;c=this.b.features[b];b++)this.d[c[G]()]=c}return this.d[a]};N.featureFilter_changed=function(){google[t][L][h](this,"featureFilter_changed",this.get("featureFilter"));this.get("stores")&&this.clearMarkers()};N.clearMarkers=function(){for(var a in this.c){this.c[a][I](null);var b=this.c[a].n;b&&google[t][L][l](b)}};
N.refreshView=function(){var a=this;this.f.getStores(this[u]()[q](),this.get("featureFilter"),function(b){var c=a.get("stores");if(c)for(var d=0,g=c[E];d<g;d++)google[t][L][l](c[d][H]().n);a.set("stores",b)})};N.stores_changed=function(){for(var a=this.get("stores"),b=0,c;c=a[b];b++)this.addStoreToMap(c)};N.getMap=M("g");
N.highlight=function(a,b){var c=this.getInfoWindow(a);a?(c=this.getInfoWindow(a),a[H]()?c.open(this[u](),a[H]()):(c.setPosition(a[f]()),c.open(this[u]())),b&&this[u]().panTo(a[f]()),this[u]().getStreetView().getVisible()&&this[u]().getStreetView().setPosition(a[f]())):c.close();this.set("selectedStore",a)};N.selectedStore_changed=function(){google[t][L][h](this,"selectedStore_changed",this.get("selectedStore"))};});



function DistributorDataSource() {
  $.extend(this, new storeLocator.StaticDataFeed);
  this.setStores(distributorStores);
}

DistributorDataSource.prototype.getFeatures = function() {
  return this.FEATURES_;
};

function loadDistributorFinder() {
  var distributorSpreadsheet = 'https://spreadsheets.google.com/feeds/list/0Al9jZpmaJK3FdEI5aTFRLXRPRFM4TVcyT3NhV0JRVXc/od6/public/values?alt=json-in-script&callback=distributorLookupCallback';
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = distributorSpreadsheet;
  document.body.appendChild(script);
}

var distributorStores = [];

function distributorLookupCallback(res) {
  $.each(res.feed.entry, function(i, distributor) {
    var features = new storeLocator.FeatureSet;
    var position = new google.maps.LatLng(distributor['gsx$lat']['$t'], distributor['gsx$lng']['$t']);
    var address = distributor['gsx$address']['$t'] + '<br />' + distributor['gsx$city']['$t'] + ', ' + distributor['gsx$state']['$t'] + ' ' + distributor['gsx$zip']['$t'] + '<br /><span class="phone">' + distributor['gsx$phone']['$t'] + '</span>';
    var title = distributor['gsx$name']['$t'];
    var store = new storeLocator.Store(i, position, features, {
      title: title,
      address: address
    })
    distributorStores.push(store);
  });
  loadDistributorMaps();
}

$(function() {
  $('a[href="#distributors"]').responsiveModal({
    type: 'content',
    hash: 'distributors',
    id: 'distributor_finder',
    src: '<h1 class="large-header">Distributor Finder</h1><div id="distributor_panel"></div><div id="distributor_map"></div><div style="clear: both;"></div>'
  });
});

function loadDistributorMaps() {
  var map = new google.maps.Map(document.getElementById('distributor_map'), {
    center: new google.maps.LatLng(41.850033, -87.6500523),
    zoom: 3,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  var panelDiv = document.getElementById('distributor_panel');

  var data = new DistributorDataSource;

  var view = new storeLocator.View(map, data, {
    geolocation: false,
    features: data.getFeatures()
  });

  new storeLocator.Panel(panelDiv, {
    view: view,
    locationSearchLabel: '',
    directions: false
  });

  $('.location-search input').attr('placeholder', 'Where are you?');
}


// Magnific Popup v0.9.9 by Dmitry Semenov
// http://bit.ly/magnific-popup#build=inline+image+ajax+iframe+gallery+retina+imagezoom+fastclick
(function(a){var b="Close",c="BeforeClose",d="AfterClose",e="BeforeAppend",f="MarkupParse",g="Open",h="Change",i="mfp",j="."+i,k="mfp-ready",l="mfp-removing",m="mfp-prevent-close",n,o=function(){},p=!!window.jQuery,q,r=a(window),s,t,u,v,w,x=function(a,b){n.ev.on(i+a+j,b)},y=function(b,c,d,e){var f=document.createElement("div");return f.className="mfp-"+b,d&&(f.innerHTML=d),e?c&&c.appendChild(f):(f=a(f),c&&f.appendTo(c)),f},z=function(b,c){n.ev.triggerHandler(i+b,c),n.st.callbacks&&(b=b.charAt(0).toLowerCase()+b.slice(1),n.st.callbacks[b]&&n.st.callbacks[b].apply(n,a.isArray(c)?c:[c]))},A=function(b){if(b!==w||!n.currTemplate.closeBtn)n.currTemplate.closeBtn=a(n.st.closeMarkup.replace("%title%",n.st.tClose)),w=b;return n.currTemplate.closeBtn},B=function(){a.magnificPopup.instance||(n=new o,n.init(),a.magnificPopup.instance=n)},C=function(){var a=document.createElement("p").style,b=["ms","O","Moz","Webkit"];if(a.transition!==undefined)return!0;while(b.length)if(b.pop()+"Transition"in a)return!0;return!1};o.prototype={constructor:o,init:function(){var b=navigator.appVersion;n.isIE7=b.indexOf("MSIE 7.")!==-1,n.isIE8=b.indexOf("MSIE 8.")!==-1,n.isLowIE=n.isIE7||n.isIE8,n.isAndroid=/android/gi.test(b),n.isIOS=/iphone|ipad|ipod/gi.test(b),n.supportsTransition=C(),n.probablyMobile=n.isAndroid||n.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),t=a(document),n.popupsCache={}},open:function(b){s||(s=a(document.body));var c;if(b.isObj===!1){n.items=b.items.toArray(),n.index=0;var d=b.items,e;for(c=0;c<d.length;c++){e=d[c],e.parsed&&(e=e.el[0]);if(e===b.el[0]){n.index=c;break}}}else n.items=a.isArray(b.items)?b.items:[b.items],n.index=b.index||0;if(n.isOpen){n.updateItemHTML();return}n.types=[],v="",b.mainEl&&b.mainEl.length?n.ev=b.mainEl.eq(0):n.ev=t,b.key?(n.popupsCache[b.key]||(n.popupsCache[b.key]={}),n.currTemplate=n.popupsCache[b.key]):n.currTemplate={},n.st=a.extend(!0,{},a.magnificPopup.defaults,b),n.fixedContentPos=n.st.fixedContentPos==="auto"?!n.probablyMobile:n.st.fixedContentPos,n.st.modal&&(n.st.closeOnContentClick=!1,n.st.closeOnBgClick=!1,n.st.showCloseBtn=!1,n.st.enableEscapeKey=!1),n.bgOverlay||(n.bgOverlay=y("bg").on("click"+j,function(){n.close()}),n.wrap=y("wrap").attr("tabindex",-1).on("click"+j,function(a){n._checkIfClose(a.target)&&n.close()}),n.container=y("container",n.wrap)),n.contentContainer=y("content"),n.st.preloader&&(n.preloader=y("preloader",n.container,n.st.tLoading));var h=a.magnificPopup.modules;for(c=0;c<h.length;c++){var i=h[c];i=i.charAt(0).toUpperCase()+i.slice(1),n["init"+i].call(n)}z("BeforeOpen"),n.st.showCloseBtn&&(n.st.closeBtnInside?(x(f,function(a,b,c,d){c.close_replaceWith=A(d.type)}),v+=" mfp-close-btn-in"):n.wrap.append(A())),n.st.alignTop&&(v+=" mfp-align-top"),n.fixedContentPos?n.wrap.css({overflow:n.st.overflowY,overflowX:"hidden",overflowY:n.st.overflowY}):n.wrap.css({top:r.scrollTop(),position:"absolute"}),(n.st.fixedBgPos===!1||n.st.fixedBgPos==="auto"&&!n.fixedContentPos)&&n.bgOverlay.css({height:t.height(),position:"absolute"}),n.st.enableEscapeKey&&t.on("keyup"+j,function(a){a.keyCode===27&&n.close()}),r.on("resize"+j,function(){n.updateSize()}),n.st.closeOnContentClick||(v+=" mfp-auto-cursor"),v&&n.wrap.addClass(v);var l=n.wH=r.height(),m={};if(n.fixedContentPos&&n._hasScrollBar(l)){var o=n._getScrollbarSize();o&&(m.marginRight=o)}n.fixedContentPos&&(n.isIE7?a("body, html").css("overflow","hidden"):m.overflow="hidden");var p=n.st.mainClass;return n.isIE7&&(p+=" mfp-ie7"),p&&n._addClassToMFP(p),n.updateItemHTML(),z("BuildControls"),a("html").css(m),n.bgOverlay.add(n.wrap).prependTo(n.st.prependTo||s),n._lastFocusedEl=document.activeElement,setTimeout(function(){n.content?(n._addClassToMFP(k),n._setFocus()):n.bgOverlay.addClass(k),t.on("focusin"+j,n._onFocusIn)},16),n.isOpen=!0,n.updateSize(l),z(g),b},close:function(){if(!n.isOpen)return;z(c),n.isOpen=!1,n.st.removalDelay&&!n.isLowIE&&n.supportsTransition?(n._addClassToMFP(l),setTimeout(function(){n._close()},n.st.removalDelay)):n._close()},_close:function(){z(b);var c=l+" "+k+" ";n.bgOverlay.detach(),n.wrap.detach(),n.container.empty(),n.st.mainClass&&(c+=n.st.mainClass+" "),n._removeClassFromMFP(c);if(n.fixedContentPos){var e={marginRight:""};n.isIE7?a("body, html").css("overflow",""):e.overflow="",a("html").css(e)}t.off("keyup"+j+" focusin"+j),n.ev.off(j),n.wrap.attr("class","mfp-wrap").removeAttr("style"),n.bgOverlay.attr("class","mfp-bg"),n.container.attr("class","mfp-container"),n.st.showCloseBtn&&(!n.st.closeBtnInside||n.currTemplate[n.currItem.type]===!0)&&n.currTemplate.closeBtn&&n.currTemplate.closeBtn.detach(),n._lastFocusedEl&&a(n._lastFocusedEl).focus(),n.currItem=null,n.content=null,n.currTemplate=null,n.prevHeight=0,z(d)},updateSize:function(a){if(n.isIOS){var b=document.documentElement.clientWidth/window.innerWidth,c=window.innerHeight*b;n.wrap.css("height",c),n.wH=c}else n.wH=a||r.height();n.fixedContentPos||n.wrap.css("height",n.wH),z("Resize")},updateItemHTML:function(){var b=n.items[n.index];n.contentContainer.detach(),n.content&&n.content.detach(),b.parsed||(b=n.parseEl(n.index));var c=b.type;z("BeforeChange",[n.currItem?n.currItem.type:"",c]),n.currItem=b;if(!n.currTemplate[c]){var d=n.st[c]?n.st[c].markup:!1;z("FirstMarkupParse",d),d?n.currTemplate[c]=a(d):n.currTemplate[c]=!0}u&&u!==b.type&&n.container.removeClass("mfp-"+u+"-holder");var e=n["get"+c.charAt(0).toUpperCase()+c.slice(1)](b,n.currTemplate[c]);n.appendContent(e,c),b.preloaded=!0,z(h,b),u=b.type,n.container.prepend(n.contentContainer),z("AfterChange")},appendContent:function(a,b){n.content=a,a?n.st.showCloseBtn&&n.st.closeBtnInside&&n.currTemplate[b]===!0?n.content.find(".mfp-close").length||n.content.append(A()):n.content=a:n.content="",z(e),n.container.addClass("mfp-"+b+"-holder"),n.contentContainer.append(n.content)},parseEl:function(b){var c=n.items[b],d;c.tagName?c={el:a(c)}:(d=c.type,c={data:c,src:c.src});if(c.el){var e=n.types;for(var f=0;f<e.length;f++)if(c.el.hasClass("mfp-"+e[f])){d=e[f];break}c.src=c.el.attr("data-mfp-src"),c.src||(c.src=c.el.attr("href"))}return c.type=d||n.st.type||"inline",c.index=b,c.parsed=!0,n.items[b]=c,z("ElementParse",c),n.items[b]},addGroup:function(a,b){var c=function(c){c.mfpEl=this,n._openClick(c,a,b)};b||(b={});var d="click.magnificPopup";b.mainEl=a,b.items?(b.isObj=!0,a.off(d).on(d,c)):(b.isObj=!1,b.delegate?a.off(d).on(d,b.delegate,c):(b.items=a,a.off(d).on(d,c)))},_openClick:function(b,c,d){var e=d.midClick!==undefined?d.midClick:a.magnificPopup.defaults.midClick;if(!e&&(b.which===2||b.ctrlKey||b.metaKey))return;var f=d.disableOn!==undefined?d.disableOn:a.magnificPopup.defaults.disableOn;if(f)if(a.isFunction(f)){if(!f.call(n))return!0}else if(r.width()<f)return!0;b.type&&(b.preventDefault(),n.isOpen&&b.stopPropagation()),d.el=a(b.mfpEl),d.delegate&&(d.items=c.find(d.delegate)),n.open(d)},updateStatus:function(a,b){if(n.preloader){q!==a&&n.container.removeClass("mfp-s-"+q),!b&&a==="loading"&&(b=n.st.tLoading);var c={status:a,text:b};z("UpdateStatus",c),a=c.status,b=c.text,n.preloader.html(b),n.preloader.find("a").on("click",function(a){a.stopImmediatePropagation()}),n.container.addClass("mfp-s-"+a),q=a}},_checkIfClose:function(b){if(a(b).hasClass(m))return;var c=n.st.closeOnContentClick,d=n.st.closeOnBgClick;if(c&&d)return!0;if(!n.content||a(b).hasClass("mfp-close")||n.preloader&&b===n.preloader[0])return!0;if(b!==n.content[0]&&!a.contains(n.content[0],b)){if(d&&a.contains(document,b))return!0}else if(c)return!0;return!1},_addClassToMFP:function(a){n.bgOverlay.addClass(a),n.wrap.addClass(a)},_removeClassFromMFP:function(a){this.bgOverlay.removeClass(a),n.wrap.removeClass(a)},_hasScrollBar:function(a){return(n.isIE7?t.height():document.body.scrollHeight)>(a||r.height())},_setFocus:function(){(n.st.focus?n.content.find(n.st.focus).eq(0):n.wrap).focus()},_onFocusIn:function(b){if(b.target!==n.wrap[0]&&!a.contains(n.wrap[0],b.target))return n._setFocus(),!1},_parseMarkup:function(b,c,d){var e;d.data&&(c=a.extend(d.data,c)),z(f,[b,c,d]),a.each(c,function(a,c){if(c===undefined||c===!1)return!0;e=a.split("_");if(e.length>1){var d=b.find(j+"-"+e[0]);if(d.length>0){var f=e[1];f==="replaceWith"?d[0]!==c[0]&&d.replaceWith(c):f==="img"?d.is("img")?d.attr("src",c):d.replaceWith('<img src="'+c+'" class="'+d.attr("class")+'" />'):d.attr(e[1],c)}}else b.find(j+"-"+a).html(c)})},_getScrollbarSize:function(){if(n.scrollbarSize===undefined){var a=document.createElement("div");a.id="mfp-sbm",a.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(a),n.scrollbarSize=a.offsetWidth-a.clientWidth,document.body.removeChild(a)}return n.scrollbarSize}},a.magnificPopup={instance:null,proto:o.prototype,modules:[],open:function(b,c){return B(),b?b=a.extend(!0,{},b):b={},b.isObj=!0,b.index=c||0,this.instance.open(b)},close:function(){return a.magnificPopup.instance&&a.magnificPopup.instance.close()},registerModule:function(b,c){c.options&&(a.magnificPopup.defaults[b]=c.options),a.extend(this.proto,c.proto),this.modules.push(b)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&times;</button>',tClose:"Close (Esc)",tLoading:"Loading..."}},a.fn.magnificPopup=function(b){B();var c=a(this);if(typeof b=="string")if(b==="open"){var d,e=p?c.data("magnificPopup"):c[0].magnificPopup,f=parseInt(arguments[1],10)||0;e.items?d=e.items[f]:(d=c,e.delegate&&(d=d.find(e.delegate)),d=d.eq(f)),n._openClick({mfpEl:d},c,e)}else n.isOpen&&n[b].apply(n,Array.prototype.slice.call(arguments,1));else b=a.extend(!0,{},b),p?c.data("magnificPopup",b):c[0].magnificPopup=b,n.addGroup(c,b);return c};var D="inline",E,F,G,H=function(){G&&(F.after(G.addClass(E)).detach(),G=null)};a.magnificPopup.registerModule(D,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){n.types.push(D),x(b+"."+D,function(){H()})},getInline:function(b,c){H();if(b.src){var d=n.st.inline,e=a(b.src);if(e.length){var f=e[0].parentNode;f&&f.tagName&&(F||(E=d.hiddenClass,F=y(E),E="mfp-"+E),G=e.after(F).detach().removeClass(E)),n.updateStatus("ready")}else n.updateStatus("error",d.tNotFound),e=a("<div>");return b.inlineElement=e,e}return n.updateStatus("ready"),n._parseMarkup(c,{},b),c}}});var I="ajax",J,K=function(){J&&s.removeClass(J)},L=function(){K(),n.req&&n.req.abort()};a.magnificPopup.registerModule(I,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){n.types.push(I),J=n.st.ajax.cursor,x(b+"."+I,L),x("BeforeChange."+I,L)},getAjax:function(b){J&&s.addClass(J),n.updateStatus("loading");var c=a.extend({url:b.src,success:function(c,d,e){var f={data:c,xhr:e};z("ParseAjax",f),n.appendContent(a(f.data),I),b.finished=!0,K(),n._setFocus(),setTimeout(function(){n.wrap.addClass(k)},16),n.updateStatus("ready"),z("AjaxContentAdded")},error:function(){K(),b.finished=b.loadError=!0,n.updateStatus("error",n.st.ajax.tError.replace("%url%",b.src))}},n.st.ajax.settings);return n.req=a.ajax(c),""}}});var M,N=function(b){if(b.data&&b.data.title!==undefined)return b.data.title;var c=n.st.image.titleSrc;if(c){if(a.isFunction(c))return c.call(n,b);if(b.el)return b.el.attr(c)||""}return""};a.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var a=n.st.image,c=".image";n.types.push("image"),x(g+c,function(){n.currItem.type==="image"&&a.cursor&&s.addClass(a.cursor)}),x(b+c,function(){a.cursor&&s.removeClass(a.cursor),r.off("resize"+j)}),x("Resize"+c,n.resizeImage),n.isLowIE&&x("AfterChange",n.resizeImage)},resizeImage:function(){var a=n.currItem;if(!a||!a.img)return;if(n.st.image.verticalFit){var b=0;n.isLowIE&&(b=parseInt(a.img.css("padding-top"),10)+parseInt(a.img.css("padding-bottom"),10)),a.img.css("max-height",n.wH-b)}},_onImageHasSize:function(a){a.img&&(a.hasSize=!0,M&&clearInterval(M),a.isCheckingImgSize=!1,z("ImageHasSize",a),a.imgHidden&&(n.content&&n.content.removeClass("mfp-loading"),a.imgHidden=!1))},findImageSize:function(a){var b=0,c=a.img[0],d=function(e){M&&clearInterval(M),M=setInterval(function(){if(c.naturalWidth>0){n._onImageHasSize(a);return}b>200&&clearInterval(M),b++,b===3?d(10):b===40?d(50):b===100&&d(500)},e)};d(1)},getImage:function(b,c){var d=0,e=function(){b&&(b.img[0].complete?(b.img.off(".mfploader"),b===n.currItem&&(n._onImageHasSize(b),n.updateStatus("ready")),b.hasSize=!0,b.loaded=!0,z("ImageLoadComplete")):(d++,d<200?setTimeout(e,100):f()))},f=function(){b&&(b.img.off(".mfploader"),b===n.currItem&&(n._onImageHasSize(b),n.updateStatus("error",g.tError.replace("%url%",b.src))),b.hasSize=!0,b.loaded=!0,b.loadError=!0)},g=n.st.image,h=c.find(".mfp-img");if(h.length){var i=document.createElement("img");i.className="mfp-img",b.img=a(i).on("load.mfploader",e).on("error.mfploader",f),i.src=b.src,h.is("img")&&(b.img=b.img.clone()),i=b.img[0],i.naturalWidth>0?b.hasSize=!0:i.width||(b.hasSize=!1)}return n._parseMarkup(c,{title:N(b),img_replaceWith:b.img},b),n.resizeImage(),b.hasSize?(M&&clearInterval(M),b.loadError?(c.addClass("mfp-loading"),n.updateStatus("error",g.tError.replace("%url%",b.src))):(c.removeClass("mfp-loading"),n.updateStatus("ready")),c):(n.updateStatus("loading"),b.loading=!0,b.hasSize||(b.imgHidden=!0,c.addClass("mfp-loading"),n.findImageSize(b)),c)}}});var O,P=function(){return O===undefined&&(O=document.createElement("p").style.MozTransform!==undefined),O};a.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(a){return a.is("img")?a:a.find("img")}},proto:{initZoom:function(){var a=n.st.zoom,d=".zoom",e;if(!a.enabled||!n.supportsTransition)return;var f=a.duration,g=function(b){var c=b.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),d="all "+a.duration/1e3+"s "+a.easing,e={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},f="transition";return e["-webkit-"+f]=e["-moz-"+f]=e["-o-"+f]=e[f]=d,c.css(e),c},h=function(){n.content.css("visibility","visible")},i,j;x("BuildControls"+d,function(){if(n._allowZoom()){clearTimeout(i),n.content.css("visibility","hidden"),e=n._getItemToZoom();if(!e){h();return}j=g(e),j.css(n._getOffset()),n.wrap.append(j),i=setTimeout(function(){j.css(n._getOffset(!0)),i=setTimeout(function(){h(),setTimeout(function(){j.remove(),e=j=null,z("ZoomAnimationEnded")},16)},f)},16)}}),x(c+d,function(){if(n._allowZoom()){clearTimeout(i),n.st.removalDelay=f;if(!e){e=n._getItemToZoom();if(!e)return;j=g(e)}j.css(n._getOffset(!0)),n.wrap.append(j),n.content.css("visibility","hidden"),setTimeout(function(){j.css(n._getOffset())},16)}}),x(b+d,function(){n._allowZoom()&&(h(),j&&j.remove(),e=null)})},_allowZoom:function(){return n.currItem.type==="image"},_getItemToZoom:function(){return n.currItem.hasSize?n.currItem.img:!1},_getOffset:function(b){var c;b?c=n.currItem.img:c=n.st.zoom.opener(n.currItem.el||n.currItem);var d=c.offset(),e=parseInt(c.css("padding-top"),10),f=parseInt(c.css("padding-bottom"),10);d.top-=a(window).scrollTop()-e;var g={width:c.width(),height:(p?c.innerHeight():c[0].offsetHeight)-f-e};return P()?g["-moz-transform"]=g.transform="translate("+d.left+"px,"+d.top+"px)":(g.left=d.left,g.top=d.top),g}}});var Q="iframe",R="//about:blank",S=function(a){if(n.currTemplate[Q]){var b=n.currTemplate[Q].find("iframe");b.length&&(a||(b[0].src=R),n.isIE8&&b.css("display",a?"block":"none"))}};a.magnificPopup.registerModule(Q,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){n.types.push(Q),x("BeforeChange",function(a,b,c){b!==c&&(b===Q?S():c===Q&&S(!0))}),x(b+"."+Q,function(){S()})},getIframe:function(b,c){var d=b.src,e=n.st.iframe;a.each(e.patterns,function(){if(d.indexOf(this.index)>-1)return this.id&&(typeof this.id=="string"?d=d.substr(d.lastIndexOf(this.id)+this.id.length,d.length):d=this.id.call(this,d)),d=this.src.replace("%id%",d),!1});var f={};return e.srcAction&&(f[e.srcAction]=d),n._parseMarkup(c,f,b),n.updateStatus("ready"),c}}});var T=function(a){var b=n.items.length;return a>b-1?a-b:a<0?b+a:a},U=function(a,b,c){return a.replace(/%curr%/gi,b+1).replace(/%total%/gi,c)};a.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var c=n.st.gallery,d=".mfp-gallery",e=Boolean(a.fn.mfpFastClick);n.direction=!0;if(!c||!c.enabled)return!1;v+=" mfp-gallery",x(g+d,function(){c.navigateByImgClick&&n.wrap.on("click"+d,".mfp-img",function(){if(n.items.length>1)return n.next(),!1}),t.on("keydown"+d,function(a){a.keyCode===37?n.prev():a.keyCode===39&&n.next()})}),x("UpdateStatus"+d,function(a,b){b.text&&(b.text=U(b.text,n.currItem.index,n.items.length))}),x(f+d,function(a,b,d,e){var f=n.items.length;d.counter=f>1?U(c.tCounter,e.index,f):""}),x("BuildControls"+d,function(){if(n.items.length>1&&c.arrows&&!n.arrowLeft){var b=c.arrowMarkup,d=n.arrowLeft=a(b.replace(/%title%/gi,c.tPrev).replace(/%dir%/gi,"left")).addClass(m),f=n.arrowRight=a(b.replace(/%title%/gi,c.tNext).replace(/%dir%/gi,"right")).addClass(m),g=e?"mfpFastClick":"click";d[g](function(){n.prev()}),f[g](function(){n.next()}),n.isIE7&&(y("b",d[0],!1,!0),y("a",d[0],!1,!0),y("b",f[0],!1,!0),y("a",f[0],!1,!0)),n.container.append(d.add(f))}}),x(h+d,function(){n._preloadTimeout&&clearTimeout(n._preloadTimeout),n._preloadTimeout=setTimeout(function(){n.preloadNearbyImages(),n._preloadTimeout=null},16)}),x(b+d,function(){t.off(d),n.wrap.off("click"+d),n.arrowLeft&&e&&n.arrowLeft.add(n.arrowRight).destroyMfpFastClick(),n.arrowRight=n.arrowLeft=null})},next:function(){n.direction=!0,n.index=T(n.index+1),n.updateItemHTML()},prev:function(){n.direction=!1,n.index=T(n.index-1),n.updateItemHTML()},goTo:function(a){n.direction=a>=n.index,n.index=a,n.updateItemHTML()},preloadNearbyImages:function(){var a=n.st.gallery.preload,b=Math.min(a[0],n.items.length),c=Math.min(a[1],n.items.length),d;for(d=1;d<=(n.direction?c:b);d++)n._preloadItem(n.index+d);for(d=1;d<=(n.direction?b:c);d++)n._preloadItem(n.index-d)},_preloadItem:function(b){b=T(b);if(n.items[b].preloaded)return;var c=n.items[b];c.parsed||(c=n.parseEl(b)),z("LazyLoad",c),c.type==="image"&&(c.img=a('<img class="mfp-img" />').on("load.mfploader",function(){c.hasSize=!0}).on("error.mfploader",function(){c.hasSize=!0,c.loadError=!0,z("LazyLoadError",c)}).attr("src",c.src)),c.preloaded=!0}}});var V="retina";a.magnificPopup.registerModule(V,{options:{replaceSrc:function(a){return a.src.replace(/\.\w+$/,function(a){return"@2x"+a})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var a=n.st.retina,b=a.ratio;b=isNaN(b)?b():b,b>1&&(x("ImageHasSize."+V,function(a,c){c.img.css({"max-width":c.img[0].naturalWidth/b,width:"100%"})}),x("ElementParse."+V,function(c,d){d.src=a.replaceSrc(d,b)}))}}}}),function(){var b=1e3,c="ontouchstart"in window,d=function(){r.off("touchmove"+f+" touchend"+f)},e="mfpFastClick",f="."+e;a.fn.mfpFastClick=function(e){return a(this).each(function(){var g=a(this),h;if(c){var i,j,k,l,m,n;g.on("touchstart"+f,function(a){l=!1,n=1,m=a.originalEvent?a.originalEvent.touches[0]:a.touches[0],j=m.clientX,k=m.clientY,r.on("touchmove"+f,function(a){m=a.originalEvent?a.originalEvent.touches:a.touches,n=m.length,m=m[0];if(Math.abs(m.clientX-j)>10||Math.abs(m.clientY-k)>10)l=!0,d()}).on("touchend"+f,function(a){d();if(l||n>1)return;h=!0,a.preventDefault(),clearTimeout(i),i=setTimeout(function(){h=!1},b),e()})})}g.on("click"+f,function(){h||e()})})},a.fn.destroyMfpFastClick=function(){a(this).off("touchstart"+f+" click"+f),c&&r.off("touchmove"+f+" touchend"+f)}}(),B()})(window.jQuery||window.Zepto)