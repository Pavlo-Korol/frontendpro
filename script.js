const Age = prompt("Write your year of birth");
const City = prompt("Write your city");
const Sport = prompt("Write your favorite sport")

if (Age == false) {
    alert("You dodn't write your age.");
} else {
    alert(`You will be ${2023 - Age} years old in 2023.`);
}


if (!City) {
  alert("You dodn't write your city");
} 
else if (City === "Kyiv") {
  alert("You live in Ukraine");
}
else if (City === "London"){
  alert("You live in Great Britain");
} 
else if (City === "Washington"){
  alert("You live in USA")
}
else {
  alert('You live in ' + City);
}

if (!Sport) {
  alert("You don`t write a sport")
} 
else if(Sport === "Football"){
  alert("Your goal is become a C.Ronaldo?");
}
else if (Sport === "Cybersport"){
  alert("Your goal is become a S1mple?");
}
else if (Sport === "Basketball"){
  alert("Your goal is become a M.Jordan?")
}
else {
  alert("Your sport is " + Sport)  
}
