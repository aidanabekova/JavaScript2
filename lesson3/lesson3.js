// function varTest() {
//     var x = 1;  //создаем переменную
//     console.log(x, '1');
//     if(true){
//         var x = 2; //та же самая переменная
//         console.log(x, '2');
//     }
//     console.log(x, '3');
// }
// varTest();

// function letTest() {
//     let x = 1;
//     console.log(x);
//     if(true){
//         let x = 2;
//         console.log(x);
//     }
//     console.log(x);
// }
// letTest();
//
// const doHomework = (subject, callback) => {
//     alert(`Starting me ${subject} homework`);
//     callback();
// };
// const alertFinished = () => {
//     alert('done');
// };
// doHomework ('math', alertFinished);

const btn = document.querySelectorAll('button');
// console.log(btn);
// btn.forEach((item) => {
//     item.addEventListener('click', (event) => {
//         console.log(event.target);
//         if(event.target.classList.contains('red')) {
//             event.target.classList.remove('red');
//         }else{
//             event.target.classList.add('red');
//         }
//     });
// });

const newBtn = document.createElement('button');
const wrapper = document.querySelector('.btns');
wrapper.append(newBtn);

wrapper.addEventListener("click", (event) => {
    // console.log(event.target);
    // console.dir(event.target);
    if (event.target.tagName === "BUTTON") {
        if (event.target.classList.contains("red")) {
            event.target.classList.remove("red");
        } else if (event.target.classList.contains('blue')) {
            event.target.classList.add('black');
        }else {
            event.target.classList.add('red');
        }
    }
});