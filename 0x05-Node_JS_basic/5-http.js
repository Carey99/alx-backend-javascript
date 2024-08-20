const http = require('http');
const fs = require('fs');
const { countStudents } = require('./3-read_file_async');

const app = http.createServer((req, res) => {
    const { method, url } = req;

    if (url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello Holberton School!\n');
    } else if (url === '/students') {
        const databasePath = process.argv[2];
        fs.readFile(databasePath, 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error\n');
            } else {
                const students = countStudents(data);
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end(students);
            }
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found\n');
    }
});

app.listen(1245, () => {
    console.log('Server running on http://localhost:1245');
});

module.exports = app;
