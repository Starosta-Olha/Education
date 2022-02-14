function filledSquare(element) {
    let  result = '';

    for (let i = 1; i <= 7; i++) {

        for (let j = 1; j <= 7; j++) {
            result = result + `${element}  `;
        }
        result = result + '\n';
        //result = result;
    }

    return result;
}

//console.log(filledSquare('*'));


function hollowSquare(element, n) {
    let  result = '';

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (i === 1 || i === n) {
                result = result + `${element}  `;
            } else {
                if (j === 1 || j === n) {
                    result = result + `${element}  `;
                } else {
                    result = result + `   `;
                }
            }
        }
        result = result + '\n';
    }

    return result;
}

//console.log(hollowSquare('*', 7));


function rightTriangleTopLeft(element, n) {
    let result = '';
    for (let i = 0; i < 7; i++) {

        for (let j = 0; j < 7; j++) {

            if ((j + i) === (n - 1) || j === 0) {
                result = result + `${element}  `;
            } else {
                if (i === 0) {
                result = result + `${element}  `
                } else {
                    result = result + '   ';
                }
            }
        }
        result = result + "\n";
    }
    return result;
}

//console.log(rightTriangleTopLeft('*', 7));


function rightTriangleBottomLeft(element, n) {
    let result = '';

    for (let i = 1; i <= n; i++) {

        for (let j = 0; j < i; j++) {
            if(i === n) {
                result = result + `${element}  `;
            }
            else {
                if (j === 0 || j === i - 1) {
                    result = result + `${element}  `;
                }
                else {
                    result = result + '   ';
                }
            }
        }
        result = result + "\n";
    }

    return result;
}

console.log(rightTriangleBottomLeft('*', 7));


function rightTriangleBottomRight(element, n) {
    let result = '';

    for (let i = 1; i <= n; i++) {

        for (let j = 0; j < n; j++) {
            if(i === n) {
                result = result + `${element}  `;
            }
            else {
                if (j === n - 1 || j === n - i) {
                    result = result + `${element}  `;
                }
                else {
                    result = result + '   ';
                }
            }
        }
        result = result + "\n";
    }

    return result;
}

console.log(rightTriangleBottomRight('*', 7));


function rightTriangleTopRight(element, n) {
    let result = '';

    for (let i = 1; i <= n; i++) {

        for (let j = 0; j < n; j++) {
            if(i === 1) {
                result = result + `${element}  `;
            }
            else {
                if (j === n - 1 || j === i - 1) {
                    result = result + `${element}  `;
                }
                else {
                    result = result + '   ';
                }
            }
        }
        result = result + "\n";
    }

    return result;
}

console.log(rightTriangleTopRight('*', 7));


function iks(element, n) {
    let result = '';
    for(let i = 1; i <= n; i++) {
        for(let j = 1; j <= n; j++) {
            if((i===j && i <= n)){
                result = result + `${element}  `;
            } else if( i <= n && (j + i) === 8 ) {
                result = result + `${element}  `;
            } else {
                result = result + '   ';
            }
        }
        result = result + '\n';
    }
    return result;
}

console.log(iks('*', 7));


function triangleTop(element, n) {
    let result = '';

    for(let i = 1; i <= n; i++) {

        for(let j = 1; j <= n; j++) {

            if(i === 1 || (i===j && i < 5)){
                result = result + `${element}  `;
            } else if( i < 5 && (j + i) === n + 1) {
                result = result + `${element}  `;
            } else {
                result = result + '   ';
            }
        }
        result = result + '\n';
    }
    return result;
}

console.log(triangleTop('*', 7));


function triangleBottom(element, n) {
    let result = '';

    for (let i = 1; i <= n; i++) {

        for (let j = 1; j <= n; j++) {

            if(i === n || (i === j && i > 3)) {
                result = result + `${element}  `;
            }
            else {
                if(i > 3 && ( (j + i) === (n+1))) {
                    result = result + `${element}  `;
                }
                else {
                    result = result + '   ';
                }
            }
        }
        result = result + '\n';
    }
    return result;
}

console.log(triangleBottom('*', 7));

module.exports = { filledSquare, hollowSquare, rightTriangleTopLeft, rightTriangleBottomRight,   iks, rightTriangleTopRight, triangleBottom, triangleTop, rightTriangleBottomLeft}