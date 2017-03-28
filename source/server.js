import http from 'http';
import react from 'react';
import {renderToString} from 'react-dom/server';

function requestHandler(request, response) {
    const html = renderToString(
        React.DOM.h1(null, 'hello')
    );

    response.write(html);
    response.end();
}

const server = http.createServer(requestHandler);

server.listen(3000);
