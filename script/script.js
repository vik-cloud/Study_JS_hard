'use strict';

let number = function(n) {
 return !isNaN(parseInt(n)) && isFinite(n);
};
  


let gameFunc = function() {
  let randomNum = Math.floor(Math.random() * 100 + 1); 
  console.log('Случайное значение', randomNum); // для проверки 
  let counter = 10;
  let gameSearch = function() {
    let num = prompt('Угадай число от 1 до 100');  
    console.log('Счетчик вначале круга', counter); // для проверки счетчика
    if(num === null) {
      alert('Игра окончена');

    } else if(!number(num)) {
      let unswer = confirm('Введи число!')
      if(unswer === true) {
        gameSearch();
      } else {
        alert('Игра окончена');      
      }

    } else if(+num === randomNum){
      let unswer = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');
      if(unswer === true) {
        gameFunc();
      } else {
        alert('Игра окончена');      
      }
    } else {
      counter -= 1;
      console.log('Счетчик после попытки', counter); // для проверки счетчика 

      if(counter === 0) {

        let unswer = confirm('Попытки закончились, хотите сыграть еще?')
        if(unswer === true) {
          gameFunc();
        } else {
          alert('Игра окончена');      
        }
      } else if(num < randomNum) {
        alert('Загаданное число больше, осталось попыток: ' + counter);      
        gameSearch();
      } else if (num > randomNum){
        alert('Загаданное число меньше, осталось попыток: ' + counter);
        gameSearch();
      }
      
    }
  }
  return gameSearch();
};

gameFunc();