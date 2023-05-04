const Age = prompt("Write your year of birth");
const City = prompt("Write your city");
const Sport = prompt("Write your favorite team");

if (Age == false) {
    alert("You dodn't write your age.");
} else {
    alert(`You will be ${2023 - Age} years old in 2023.`);
}

switch (City) {
    case "Kyiv":
        alert("You live in Ukraine");
        break;
    case "London":
        alert("You live in Great Britain");
        break;
    case "Washington":
        alert("You live in USA");
        break;
    case false:
        alert("You don`t write your city")
      break;
    default:
        alert(`You live in ${City}`);
        break;
}

switch (Sport) {
  case "Football":
    alert("Liverpool")
    break;
  case "Cybersport":
    alert("Navi")
    break;
  case "Basketball":
    alert("Boston Celtics")
    break;
  case false :
    alert("You don't write your team")
    break;
    default: 
    alert(`Your sport ${Sport}`)
}
