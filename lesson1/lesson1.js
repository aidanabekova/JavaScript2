//Тема1: Регулярные выражения

// let string = prompt('tell me your name: ');
// let regExp = /y/i;
// console.log(string.match(regExp));

// const letter = 'AbdvDjnvkDjrd';
// const regExp = new RegExp('d');
// const regExp = /d/ig;
// console.log(letter)

// const letter = '1av1122grhb3456fd66447894gd5678gh90';
// const regExp = /\w/g;
// console.log(letter);
// console.log(letter.replace(regExp, '#'));


// const phoneInput = document.querySelector('.phoneInput');
// const phoneCheck = document.getElementsByClassName('phoneCheck');
// const phoneResult = document.querySelector('.phoneResult');
// // console.log(phoneCheck[0], 'phoneCheck');
// // console.log(phoneInput, 'phoneInput');
// const phoneRegExp = /^\+996 \d{3} \d{2}-\d{2}-\d{2}$/;
// phoneCheck[0].addEventListener('click', () => {
//     if(phoneRegExp.test(phoneInput.value)){
//         phoneResult.innerText = 'ok';
//         phoneResult.style.color = 'green';
//     }else {
//         phoneResult.innerText = 'NOT OK';
//         phoneResult.style.color = 'red';
//     }
// });


//Тема2: Рекурсия

// let num = 0;
// const count = () => {
//     num++;
//     console.log(num);
//     if (num <= 350){
//         count();
//     }
// }
// count();

const people = {
    John: {
        age: 25,
        parents: {
            Kelly: {
                age: 45
            },
            Tony: {
                age: 55,
                parents: {
                    Margaret: {
                        age: 75,
                        parents: {
                            Jin: {
                                age: 95
                            },
                        },
                    },
                },
            },
        },
    },
    Sam: {
        age: 15,
        parents: {
            Jean: {
                age: 35
            },
            Stive: {
                age: 40
            },
        },
    },
};

const parentList = (obj) => {
    if (obj.parents) {
        for (let key in obj.parents) {
            console.log(key);
            parentList(obj.parents[key]);
        }
    }

};
for (let key in people) {
    parentList(people[key]);
}





