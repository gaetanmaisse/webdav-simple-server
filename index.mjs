import { v2 as webdav } from 'webdav-server'

const port = process.env.PORT ?? 1900;
const server = new webdav.WebDAVServer({
    port
});

server.afterRequest((arg, next) => {
    console.log('>>', arg.request.method, arg.fullUri(), '>', arg.response.statusCode, arg.response.statusMessage);
    next();
})

server.start(httpServer => {
    console.log('Server started with success on the port : ' + httpServer.address().port);
});

