# About AdventureJS 2

### Client side

* HTML5, CSS3, <a href="http://getbootstrap.com/" target="_blank">Twitter bootstrap</a> and <a href="http://fortawesome.github.io/Font-Awesome/" target="_blank">Font awesome</a> to make a nice looking UI
* <a href="http://jquery.com/" target="_blank">JQuery</a> combined with the inevitable Javascript utilities (<a href="https://lodash.com/" target="_blank">Lodash</a>, <a href="http://momentjs.com/" target="_blank">Moment.js</a>, <a href="http://github.hubspot.com/messenger/" target="_blank">Messenger.js</a> and <a href="http://www.highcharts.com/" target="_blank">Highcharts</a>) for client side logic
* <a href="http://socket.io/" target="_blank">Socket.io</a> client to make real time gaming possible

### Server side

* <a href="http://nodejs.org/" target="_blank">Node JS</a> as web server
* <a href="http://expressjs.com/" target="_blank">Express JS</a> as web framework
* <a href="http://passportjs.org/" target="_blank">Passport JS</a> as authentication middleware
* <a href="http://socket.io/" target="_blank">Socket.io</a> server to make real time gaming possible
* <a href="http://handlebarsjs.com/" target="_blank">Handlebars.js</a> to easily render HTML templates
* <a href="http://www.mongodb.org/" target="_blank">Mongo DB</a> along with <a href="http://mongoosejs.com/" target="_blank">Mongoose</a>
* <a href="http://www.elasticsearch.org/" target="_blank">ElasticSearch</a> server for (near) real time game indexing and lookup</a>

#### Prerequisites

* Node JS
* Mongo DB up and running on the default port (27017) and using the default database (test)
* ElasticSearch server up and running on the default port (9200)

#### Run the application

```
$> npm install
$> bower install
$> node initData.js
$> node .
```

Browse the following address: `http://localhost:3000`

You can register a new account or sign in with the following credentials: foo@bar.org / foobar

Note: `The initData.js` script will populate Mongo DB and ElasticSearch with some data so you can use the application.

#### RESTful API

##### User details: GET /api/user/:name

Example: /api/user/Foo

```json
{
    "id": "54564692985517c304587d01",
    "name": "Foo",
    "email": "foo@bar.org",
    "lastConnection": "2014-12-02T23:50:59.218Z"
}
```

##### Game details: GET /api/game/:id

Example: /api/game/5456476066be11c704942161

```json
{
    "id":"5456476066be11c704942161",
    "user":"54564692985517c304587d01",
    "white":"Foo",
    "black":"Anonymous",
    "pgn":"1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. O-O Bc5 5. c3 O-O 6. d4 exd4 7. cxd4 Bb4",
    "result":"1-0"
}
```

# License

GameHub.io is released under the [MIT license](http://opensource.org/licenses/MIT):

```
The MIT License (MIT)

Copyright (c) 2014 Mahmoud Ben Hassine

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```
