
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
