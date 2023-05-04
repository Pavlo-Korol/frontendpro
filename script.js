const a = +prompt("Write First Number")
const b = +prompt("Write Second Number")
const action = prompt("Choose the action")

switch(action){
case "+": alert(a + b);
break;
case "-": alert(a - b);
break;
case "*": alert(a * b);
break;
case "/": alert(a / b);
break;
}

