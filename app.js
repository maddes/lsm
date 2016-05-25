// production.js
var deployd = require('deployd')
var env = require('./env.js')

var server = deployd(env)

server.listen()

server.on('listening', function() {
  console.log('Server is listening')
})

server.on('error', function(err) {
  console.error(err)
  process.nextTick(function() {
    // Give the server a chance to return an error
    process.exit()
  })
})
