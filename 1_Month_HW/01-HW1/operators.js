//Условные операторы


//1.	Если а – четное посчитать а*б, иначе а+б

function getResult(a, b) {
    let result;
    if (a % 2 === 0) {
        result = a * b;
    } else {
        result = a + b;
    }

    return result;
}

console.log(getResult(72, 2));

//2.	Определить какой четверти принадлежит точка с координатами (х,у)

function coordinatePlane(x, y) {
    let result = '';

    if (x > 0 && y > 0) {
        result = 'I';
    }

    if (x < 0 && y > 0) {
        result = 'II';
    }

    if (x < 0 && y < 0) {
        result = 'III';
    }

    if (x > 0 && y < 0) {
        result = 'IV';
    }

    return result;
}

console.log(coordinatePlane(-5, -2));


//3.	Найти суммы только положительных из трех чисел

function sumPositiveNum(a, b, c) {
    let sum = 0;

    if (a > 0) {
        sum = sum + a;
    }

    if (b > 0) {
        sum = sum + b;
    }

    if (c > 0) {
        sum = sum + c;
    }

    if (a < 0 && b < 0 && c < 0) {
        return ('Все числа отрицательные');
    }
    return sum;
}

console.log(sumPositiveNum(4, -2, 10));


//4.	Посчитать выражение (макс(a*b*c, a+b+c))+3

function getResultExpression(a, b, c) {
    let x = Math.max(a * b * c, a + b + c);
    let result = x + 3;
    return result;
}

console.log(getResultExpression(3, 9, 15));


//5.	Написать программу определения оценки студента по его рейтингу, на основе следующих правил

/*Рейтинг 	Оценка
0-19	    F
20-39	    E
40-59	    D
60-74	    C
75-89	    B
90-100	    A*/

function getGradeStudent(rating) {
    let studentGrade = '';

    if (rating <= 19) {
        studentGrade = 'F';
    }

    if (rating >= 20 && rating <= 39) {
        studentGrade = 'E';
    }

    if (rating >= 40 && rating <= 59) {
        studentGrade = 'D';
    }

    if (rating >= 60 && rating <= 74) {
        studentGrade = 'C';
    }

    if (rating >= 75 && rating <= 89) {
        studentGrade = 'B';
    }

    if (rating >= 90 && rating <= 100) {
        studentGrade = 'A';
    }

    return studentGrade;
}

console.log(getGradeStudent(56));


exports.getResult = getResult;
exports.coordinatePlane = coordinatePlane;
exports.sumPositiveNum = sumPositiveNum;
exports.getResultExpression = getResultExpression;
exports.getGradeStudent = getGradeStudent;