'use strict';

let lang = 'en';
let date = new Date();
let dayNum = date.getDay() - 1;
let dayRu = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let dayEn = ['Monday', 'Wednesday', 'Thursday', 'Wednesday', 'Friday', 'Saturday', ' Sunday'];

//  if

if (lang == 'ru'){
 console.log(dayRu[dayNum]);
} 

if (lang == 'en'){
  console.log(dayEn[dayNum]);
}

//  switch

switch (lang) {
  case 'ru':
    console.log(dayRu[dayNum]);
    break;
  case 'en':
    console.log(dayEn[dayNum]);
    break;
}





