let number1 = Number(prompt("1-sonni kiriting : "));
let action = (prompt("+, -, *, /, amallaridan birini kiriting : "));
let number2 = Number(prompt("1-sonni kiriting : "));


switch (action) {
    case "+":
        alert(`${number1} + ${number2} = ` + (number1 + number2));
        break;
    case "-":
        alert(`${number1} - ${number2} = ` + (number1 - number2));
        break;
    case "*":
        alert(`${number1} * ${number2} = ` + (number1 * number2));
        break;
    case "/":
        alert(`${number1} / ${number2} = ` + (number1 / number2));
        break;
    default:
        alert("Qaytadan urinib ko'ring");
}