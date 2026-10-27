
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    try {
        
        throw new Error('Тестовая ошибка сервера');
    } catch (err) {
        
        fs.appendFile('errors.log', `${new Date().toISOString()} - ${err.message}\n`, (fileErr) => {
            if (fileErr) {
                console.error('Ошибка записи лога:', fileErr.message);
            }
        });

        
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.end('Internal Server Error');

        console.error('Ошибка сервера:', err.message);
    }
});

server.listen(3000, () => {
    console.log('Сервер запущен на порту 3000');
});
