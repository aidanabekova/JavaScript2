
// const obj = {
//     name: 'John',
//     age: '20'
// };
//
// const data = JSON.stringify(obj);
//
// console.log(obj);
// console.log(JSON.parse(data));


const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
    const request = new XMLHttpRequest(); //создание запроса
    request.open("GET", "data.json"); //объявление метода запроса
    request.setRequestHeader("Content-type", "application/json"); //задали тип данных
    request.send(); //отправка запроса
    request.addEventListener("load", () => {
        const data = JSON.parse(request.response);
        console.log(data);
        document.querySelector(".name").innerHTML = data.name;
        document.querySelector(".age").innerHTML = data.age;
    });
});


// const num = 5;
// let num2 = num + 10;
// console.log(num);       //пример с примитивными типами данных
// console.log(num2);
//
//
// const obj = {
//     name: "Alex",
//     num: "123"
// };
//
// const obj2 = { ...obj };
// obj2.name = 'Alex';    //пример с объектами
//
// console.log(obj);
// console.log(obj2);

//код на nodejs
// let http = require("http");
//
// http
//     .createServer((request, response) => {
//     response.writeHead(200, {"Content-Type": "text/plain"});
//     response.end("Hello World");
//     })
//     .listen(8081);
// console.log("server running");

