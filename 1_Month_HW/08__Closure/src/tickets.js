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

    if (!Array.isArray(person)) {

        return 'Invalid input data';
    }

    if (person.length === 0 || typeof person === 'undefined') {

        return 'no people in line'
    }

    let change25;
    let change50;
    let cashbox = [];

    for (let i = 0; i < person.length; i++) {

        if (typeof person[i] === 'string') {
            person[i] = +person[i];

            if (isNaN(person[i])) {

                return 'Invalid input data'
            }
        }
        if (person[i] !==25 && person[i] !==50 && person[i] !==100) {

            return 'Invalid input data'
        }

        change25 = cashbox.findIndex((ind) => ind === 25)
        change50 = cashbox.findIndex((ind) => ind === 50)

        if (person[0] > 25) {

            return `no, Vasya will not have enough money to give change to ${person[i]} dollars`
        }

        if (person[i] === 25) {
            cashbox.push(person[i]);

        } else if (person[i] === 50) {
            cashbox.push(person[i]);

            cashbox.splice(change25, 1);

            if (!(change25 >= 0)) {

                return `no, Vasya will not have enough money to give change to ${person[i]} dollars`

            }
        } else if (person[i] === 100) {
            cashbox.push(person[i])
            if (change25 >= 0) {
                cashbox.splice(change25, 1);
                cashbox.splice(change50, 1);

                if (change50 >= 0) {
                    return 'Yes'
                }
                return `no, Vasya will not have enough money to give change to ${person[i]} dollars`
            }

            return `no, Vasya will not have enough money to give change to ${person[i]} dollars`
        }
    }
}

module.exports = { tickets }

console.log(tickets([50, 50])); // => yes
//console.log(tickets([25, 50, 50, 100])); // no
//console.log(tickets([25, 100])); // => NO. Vasya will not have enough money to give change to 100 dollars
//console.log(tickets([25, 25, 50, 100])); // Yes
//console.log(tickets([25, 50, 100])); // No
//console.log(tickets(['25', '25', '50', '100'])); // Yes
//console.log(tickets(['50', '50', '100'])); // No

