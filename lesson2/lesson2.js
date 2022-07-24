// const hi = () => {
//     console.log('hi');
// };
//
// setTimeout(hi, 2000);
//
// setTimeout(() => {
//     console.log('bye');
// }, 0);
//
// setTimeout(() => {
//     console.log('11');
// }, 1000);
//
// setTimeout(() => {
//     console.log('12');
// }, 2000);
//
// setTimeout(() => {
//     console.log('13');
// }, 3000);
//
// console.log('1');
// console.log('2');
// console.log('3');

// const interval = setInterval(() => {
//     console.log('interval');
// }, 1200);
//
// setTimeout(() => {
//     clearInterval(interval);
// }, 3);

// const func = (n) => {
//     return function (num){
//         return n + num;
//     };
// };
// const addOne = func(2);
// console.log(addOne(10));
//
//
// const func2 = (num) => {     //создаем функцию
//     const culk = () => {     //создаем дочернюю функцию
//         console.log(1000 * num);  //производим операцию с аргументом
//     };
//     culk(); //вызываем дочерний класс
// };
// func2(24);


let positionX = 0;
let positionY = 0;
positionTop = 0;

const block = document.querySelector('.block');
const move = () => {
    if(positionX <= 460) {
        positionX += 16;
        block.style.left = `${positionX}px`;
        setTimeout(move, 200);
    }else if(positionX >= 460 && positionY <= 460){
        positionY += 16;
        block.style.top = `${positionY}px`;
        setTimeout(move, 200);
    }
};
move();





// let position = 0;
// let topPosition = 0;
//
// const move = () => {
//   if (position <= 360 && topPosition == 0) {
//     position += 16;
//     block.style.left = `${position}px`;
//     setTimeout(move, 200);
//   } else if (position >= 360 && topPosition <= 360) {
//     topPosition += 16;
//     block.style.top = `${topPosition}px`;
//     setTimeout(move, 200);
//   } else if (topPosition >= 360 && position != 0) {
//     position -= 16;
//     block.style.left = `${position}px`;
//     setTimeout(move, 200);
//   } else if (position == 0 && topPosition != 0) {
//     topPosition -= 16;
//     block.style.top = `${topPosition}px`;
//     setTimeout(move, 200);
//   }
// };
//
// move();