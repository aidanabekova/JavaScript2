const som = document.querySelector('#som');
const usd = document.querySelector('#usd');


//функция которая работает только в одну сторону(преобразовывает доллары в сомы, наоборот нет)
// som.addEventListener('input', () => {
//      const request = new XMLHttpRequest();
//      request.open('GET', 'data.json');
//      request.setRequestHeader('Content-type', 'application/json');
//      request.send();
//      request.addEventListener('load', () => {
//          const response = JSON.parse(request.response);
//          usd.value = (som.value / response.usd).toFixed(2);
//      })
// });


//универсальная функция
const convert = (elem, target, isTrue) => {
    elem.addEventListener('input', () => {
        const request = new XMLHttpRequest();
        request.open('GET', 'data.json');
        request.setRequestHeader('Content-type', 'application/json');
        request.send();
        request.addEventListener('load', () => {
            const response = JSON.parse(request.response);
            // if(isTrue) {
            //     target.value = (elem.value / response.usd).toFixed(2);
            // }else {
            //     target.value = (elem.value * response.usd).toFixed(2);
            // }
            isTrue
                ? (target.value = (elem.value / response.usd).toFixed(2))
                : (target.value = (elem.value * response.usd).toFixed(2));
            elem.value === "" ? (target.value = '') : null;
        });
    });
};
convert(som, usd, 12);
convert(usd, som);
//isTrue все, кроме пустой строки, nan, null, undef, False




















