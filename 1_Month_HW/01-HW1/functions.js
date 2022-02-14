//Функции

//1.	Получить строковое название дня недели по номеру дня.

function getWeekDay(numberDay) {
    let result = '';
    const weekDayName = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    result = weekDayName[numberDay - 1];

    return (result);
}

console.log(getWeekDay(1));

//2.	Найти расстояние между двумя точками в двухмерном декартовом пространстве.

function calcDistanceCoord(x1, y1, x2, y2) {
    const d = ((x2 - x1) ** 2 + (y2 - y1) ** 2) ** 0.5;
    return (d.toFixed(2));
}

console.log(calcDistanceCoord(6, 8, 2, -1));

//3.	Вводим число(0-999), получаем строку с прописью числа.
function numberToWords(num) {
    const ones = [' ноль', ' один', ' два', ' три', ' четыре', ' пять', ' шесть', ' семь', ' восемь', ' девять'];
    const teens = [' десять', ' одиннадцать', ' двенадцать', ' тринадцать', ' четырнадцать', ' пятнадцать', ' шестнадцать',
        ' семнадцать', ' восемнадцать', ' девятнадцать'];
    const tens = ['', '', ' двадцать', ' тридцать', ' сорок', ' пятьдесят', ' шестьдесят', ' семьдесят', ' восемьдесят', ' девяносто'];
    const hundreds = ['', ' сто', ' двести', ' триста', ' четыреста', ' пятьсот', ' шестьсот', ' семьсот', ' восемьсот', ' девятьсот'];
    const thousents = ['тысяча', 'тысячи', 'тысяч'];
    const millions = ['миллион', 'миллиона', 'миллионов'];
    const billions = ['миллиард', 'миллиарда', 'миллиардов'];
    const decletion = ['одна', 'две'];

    if (!num) {
        return 'Введите число!'
    }

    let nw = num.toString().split('');
    let l = nw.length;
    let current;
    let result = '';

    if (l === 1) {
        current = num;
        result = ones[current];
        return result;
    }

    if (num < 20) {
        current = num - 10;
        result = teens[current];
    }

    if (num % 10 === 0 && num < 100 && num != 10) {
        current = num / 10;
        result = tens[current];
    }

    if (num >= 100 && num % 100 === 0) {
        current = num / 100;
        result = hundreds[current];
    }

    if (num > 20 && num < 100 && num % 10 !== 0) {
        result += tens[nw[0]] + ones[nw[1]];
    }

    if (num > 100 && num < 1000 && num % 10 !== 0) {
        result += hundreds[nw[0]] + tens[nw[1]] + ones[nw[2]];
    }

    if (num > 100 && num % 10 === 0) {
        result += hundreds[nw[0]] + tens[nw[1]];

    }
    /*if (num >= 1000 && num % 100 === 0 && num < 2000) {
        current = Math.floor(num / 1000);
        current1 = (num - (Math.floor(num / 1000) * 1000)) / 100;
        result = decletion[0] + thousents[0] + teens[1] + b[0] + hundreds[nw[current1]];
    }*/

  return result;
}

console.log(numberToWords(60));

// 4.	Вводим строку, которая содержит число, написанное прописью (0-999). Получить само число

function getNumberString(numWords) {
  const ones = ['ноль', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять',
      'десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать',
      'семнадцать', 'восемнадцать', 'девятнадцать'];
  const tens = ['', '', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'];
  const hn = ['', 'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'];

  let newArr = numWords.split(' ');
  let num1;
  let num2;
  let num3;
  let result = '';

  if (newArr.length === 1) {
      num1 = ones.indexOf(newArr[0]);
      result = num1;

      if (num1 === -1) {
          num1 = tens.indexOf((newArr[0]));
          result = num1 * 10;
          console.log(num1)

          if (num1 === -1) {
              num1 = hn.indexOf(newArr[0]);
              result = num1 * 100;
          }
      }
      return result;
  }

  if (newArr.length === 2) {
      num2 = hn.indexOf((newArr[0]));
      num1 = tens.indexOf(newArr[1]);
      result = num2 * 100 + num1 * 10;

      if (num1 === -1) {
          num2 = hn.indexOf((newArr[0]));
          num1 = ones.indexOf(newArr[1]);
          result = num2 * 100 + num1;
      }

      if (num2 === -1) {
          num2 = tens.indexOf((newArr[0]));
          result = num2 * 10 + num1;
      }

      return result;
  }

  if (newArr.length === 3) {
      num3 = hn.indexOf((newArr[0]));
      num2 = tens.indexOf((newArr[1]));
      num1 = ones.indexOf((newArr[2]));
      result = num3 * 100 + num2 * 10 + num1;
      return result;
  }
}

console.log(getNumberString('пятьдесят'));

// function stringToNumber(strNum) {
//
//     let num1_900 = {
//         'ноль': 0,
//         'один': 1,
//         'одна': 1,
//         'два': 2,
//         'два': 2,
//         'три': 3,
//         'четыре': 4,
//         'пять': 5,
//         'шесть': 6,
//         'семь': 7,
//         'восемь': 8,
//         'девять': 9,
//         'десять': 10,
//         'одиннадцать': 11,
//         'двенадцать': 12,
//         'тринадцать': 13,
//         'четырнадцать': 14,
//         'пятнадцать': 15,
//         'шестнадцать': 16,
//         'семнадцать': 17,
//         'восемнадцать': 18,
//         'девятнадцать': 19,
//         'двадцать': 20,
//         'тридцать': 30,
//         'сорок': 40,
//         'пятьдесят': 50,
//         'шестьдесят': 60,
//         'семьдесят': 70,
//         'восемьдесят': 80,
//         'девяносто': 90,
//         'сто': 100,
//         'двести': 200,
//         'триста': 300,
//         'четыреста': 400,
//         'пятьсот': 500,
//         'шестьсот': 600,
//         'семьсот': 700,
//         'восемьсот': 800,
//         'девятьсот': 900
//     }
//
//     let thmb = {
//         'тысяча': 1000,
//         'тысячи': 1000,
//         'тысяч': 1000,
//         'миллион': 1000000,
//         'миллиона': 1000000,
//         'миллионов': 1000000,
//         'миллиард': 1000000000,
//         'миллиарда': 1000000000,
//         'миллиардов': 1000000000,
//     }
//
//     if (!strNum) {
//         return 'Введите строку, которая содержит число, написанное прописью'
//     }
//
//     if (typeof strNum !== 'string') {
//         return 'Введена не строка!'
//     }
//
//     let newStrNum = strNum.toString().split(' ');
//     let arr1 = [];
//     let arr2 = [];
//     let arr3 = [];
//     let a;
//     let b;
//
//     // for (let j = 0; j < newStrNum.length; j++) {
//     //
//     //     if (newStrNum[j].includes('миллиард')) {
//     //         a = j;
//     //     }
//     //     if (newStrNum[j].includes('миллион')) {
//     //         b = j;
//     //     }
//     // }
//     // arr1 = newStrNum.splice(0, a + 1);
//     // arr2 = newStrNum.splice(0, b - a);
//     let result = 0;
//     let result1 = 0;
//     let result2 = 0;
//     let result3 = 0;
//     let keysThmb = Object.keys(thmb);
//
//
//     for (let i = 0; i < newStrNum.length; i++) {
//
//             let event = keysThmb.indexOf(newStrNum[i]);
//             if (event === -1) {
//                 result = result + num1_900[newStrNum[i]];
//             } else if (event > 0) {
//                 let current = Object.keys(thmb)[event];
//                 result = result * thmb[current];
//             }
//             result = result;
//     }
//
//     return result;
//
// }
//
// //console.log(stringToNumber('сто пятьдесят пять'));
// console.log(stringToNumber('девятьсот девяносто девять миллиардов девятьсот девяносто девять тысяч'));
//

// for (let i = 0; i < newStrNum.length; i++) {
//     let event = keysThmb.indexOf(newStrNum[i]);
//
//     if (event === -1) {
//
//         if (newStrNum.length === 1) {
//             result = num1_900[newStrNum[i]];
//         }
//
//         if (newStrNum.length === 2) {
//             result = num1_900[newStrNum[0]] + num1_900[newStrNum[1]];
//         }
//
//         if (newStrNum.length === 3) {
//             result = num1_900[newStrNum[0]] + num1_900[newStrNum[1]] + num1_900[newStrNum[2]];
//         }
//     }
//
//     if (event > 0) {
//
//         let current = Object.keys(thmb)[event];
//         console.log(current);
//
//         if (newStrNum.length === 2) {
//             result = num1_900[newStrNum[0]] * thmb[current];
//         }
//
//         if (newStrNum.length === 2) {
//             result = num1_900[newStrNum[0]] * thmb[current];
//         }
//
//     }
//
//
//
// }
// return result;
//
// }



exports.getWeekDay = getWeekDay;
exports.calcDistanceCoord = calcDistanceCoord;
exports.numberToWords = numberToWords;
exports.getNumberString = getNumberString;
