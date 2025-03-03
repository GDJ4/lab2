const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Раздача статических файлов (CSS, JS, изображения)
app.use(express.static(path.join(__dirname, 'public')));

// Основной маршрут для отображения index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Обработка ошибки 404
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});
