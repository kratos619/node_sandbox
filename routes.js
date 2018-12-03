const fs = require('fs');

const reqestandler = (req, res) => {

    const url = req.url;
    const method = req.method;

    if (url == '/') {
        res.write(`
        <html>
        <head>
            <title>Enter Msg Page</title>
                <body>
                    <form action="/message" method="POST">
                        <input type="text" name="message" />
                        <button type="submit">Send</button>
                    </form>    
                </body>
        </head>
        </html>
        `);
        return res.end();
    }

    if (url == '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end', () => {
            const parseBody = Buffer.concat(body).toString();
            console.log(parseBody);
            const message = parseBody.split('=')[1];
            fs.writeFileSync('message.txt', message);
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write(`
            <html>
            <head>
                <title>First Page</title>
                    <body>
                        <h1>Follo Nodejs server</h1>    
                    </body>
            </head>
            </html>`);
    res.end();
}

module.exports = reqestandler;