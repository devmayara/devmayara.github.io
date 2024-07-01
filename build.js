const fs = require('fs');
const path = require('path');

const header = fs.readFileSync(path.join(__dirname, 'src', 'header.html'), 'utf8');
const main = fs.readFileSync(path.join(__dirname, 'src', 'main.html'), 'utf8');
const footer = fs.readFileSync(path.join(__dirname, 'src', 'footer.html'), 'utf8');

const fullHtml = `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" type="image/x-icon" href="assets/img/favicon-16x16.png">
    <link rel="stylesheet" href="https://unicons.iconscout.com/release/v3.0.6/css/line.css">
    <link rel="stylesheet" href="assets/css/swiper-bundle.min.css">
    <link rel="stylesheet" href="assets/css/styles.css">

    <title>Portfólio | Mayara Silva</title>
<body>
    ${header}
    ${main}
    ${footer}
  
    <!--==================== SCROLL TOP ====================-->
    <a href="#" class="scrollup" id="scroll-up">
        <i class="uil uil-arrow-up scrollup__icon"></i>
    </a>

    <!--==================== SWIPER JS ====================-->
    <script src="assets/js/swiper-bundle.min.js"></script>

    <!--==================== INDEX JS ====================-->
    <script src="assets/js/index.js"></script>
</body>
</html>
`;

fs.writeFileSync(path.join(__dirname, 'index.html'), fullHtml, 'utf8');
console.log('index.html foi gerado com sucesso!');
