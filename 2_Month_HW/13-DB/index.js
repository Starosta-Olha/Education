const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "peoplehome",
    password: "16051992Щдрф"
});


connection.connect((err) => {
    if (err) {
        return console.error("Error: " + err.message);
    }
    else{
        console.log("Connection established");
    }
});

// 1) Вывести общее число жителей

function getCount() {
    connection.query("SELECT COUNT(id_people) AS count FROM people",
        function (err, result) {
            if (err) {
                console.log(err);
            } else {
                console.log(result);
            }
        });
}

// 2) Вывести средний возраст жителей
function averageAge() {
    connection.query("SELECT AVG(age) as averageAge FROM people",
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log(result);
            }
        });
}

// 3) Вывести отсортированный по алфавиту список фамилий без повторений

function sortLastName() {
    connection.query("SELECT DISTINCT lastname FROM people ORDER BY lastname",
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log(result);
            }
        });
}

// 4) Вывести список фамилий, с указанием количества повторений этих фамилий в общем списке

function repeatLastName() {
    connection.query("SELECT lastname, COUNT(*) AS repeatLastName FROM people GROUP BY lastname",
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log(result);
            }
        });
}

// 5) Вывести фамилии, которые содержат в середине букву «б»

function middleLetter() {
    connection.query("SELECT lastname FROM people WHERE lastname LIKE '%б%'",
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log(result);
            }
        });
}

// 6) Вывести список "бомжей"

function listBums() {
    connection.query("SELECT * FROM people WHERE street_id is NULL",
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log(result);
            }
        });
}

// 7) Вывести список несовершеннолетних, проживающих на проспекте Правды

    function listMinors() {
    connection.query("SELECT * FROM people INNER JOIN streets ON people.street_id = streets.street_id WHERE Age < 18 AND street_name='проспект Победы'",
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log(result);
            }
        });
}
//
//  8) Вывести упорядоченный по алфавиту список всех улиц с указанием, сколько жильцов живёт на улице
//
function streetCounter() {
    connection.query("SELECT streets.street_name, (SELECT COUNT(*) FROM people WHERE people.street_id=streets.street_id) AS people FROM streets ORDER BY streets.street_name",
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log(result);
            }
        });
}

// 9) Вывести список улиц, название которых состоит из 6-ти букв

function listStreetSixLetter() {
    connection.query("SELECT * FROM streets WHERE CHAR_LENGTH(street_name) = 6",
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log(result);
            }
        });
}

// 10) Вывести список улиц с количеством жильцов на них меньше 3

function listStreetCountPeople() {
    connection.query("SELECT streets.street_name, (SELECT COUNT(*) FROM people WHERE people.street_id=streets.street_id) AS peoples FROM streets HAVING peoples < 3 ORDER BY streets.street_name ",
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log(result);
            }
        });
}


// getCount();
// averageAge();
// sortLastName();
// middleLetter();
// listBums()
// repeatLastName()
// listMinors()
// streetCounter()
// listStreetSixLetter()
// listStreetCountPeople()



connection.end((err) => {
    if (err) {
        return console.log('Error: '+ err.message);
    }
    console.log('Connection closed');
});

