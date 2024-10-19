import style from './index.module.scss';
import './index.scss';
import './assets/images/dog.jpg';

console.log(style); 



const numbers:number[] = [2, 3, 5];

// Стрелочная функция. Не запнётся ли на ней Internet Explorer?
const doubledNumbers = numbers.map(number => number * 2);

console.log(doubledNumbers); // 4, 6, 10