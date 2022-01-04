/*1. Новый фильм "Как натренировать своего дракона” только
выпустили! В кассах кинотеатра много людей, стоящих в
огромную очередь. У каждого из них есть банкнота в 100, 50 или
25 долларов. Билет на «Бэтмен против Супермена: На заре
справедливости» стоит 25 долларов. Вася в настоящее время
работает клерком. Он хочет продать билет каждому человеку в
этой очереди. Может ли Вася продать каждому билет и отдать
сдачу, если у него изначально нет денег и он продает билеты
строго в том порядке, в котором люди следуют в очереди?
    Верните YES, если Вася может продать каждому билет и отдать
сдачу. В противном случае верните NO. Может ли Вася продать
каждому билет и отдать сдачу?
    Условия:
* принимает массив из очереди людей
* возвращает строку*/

 function tickets(person) {

     if (person.length === 0 || typeof person === 'undefined') {

         return 'no people in line'
     }

    let change;
    let count = 0;

    for (let i = 0; i < person.length; i++) {

        if (typeof person[i] === 'string') {
            person[i] = +person[i];

            if (isNaN(person[i])) {

                return 'inputted incorrect data'
            }
        }

        if (person[0] > 25) {

            return `no, Vasya will not have enough money to give change to ${person[i]} dollars`
        }

        change = person[i] - 25;

        if (person[i] === 25) {
            count = count + person[i];

        } else if (person[i] > 25) {
            console.log(count, change)

            if (count < change) {

                return `no, Vasya will not have enough money to give change to ${person[i]} dollars`

            } else {
                count = count + person[i] - change;
            }
        }
        if (count === person.length * 25) {
            return 'yes'
        }
    }
}

console.log(tickets([25, 50, 25, 100])); // => YES
// console.log(tickets([25, 100])); // => NO. Vasya will not have enough money to give change to 100 dollars
// console.log(tickets([25, 25, 50, 100])); // Yes
// console.log(tickets([25, 50, 100])); // No
// console.log(tickets(['25', '25', '50', '100'])); // Yes
// console.log(tickets(['50', '50', '100'])); // No

