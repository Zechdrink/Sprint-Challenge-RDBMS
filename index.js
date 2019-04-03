const server = require('./server');

server.listen(3300, ()=> {
    console.log(`\n=== I AM LISTENING on http://localhost:3300 ===\n`)
})