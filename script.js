const age = prompt("Write your year of birth");
const city = prompt("Write your city");
const sport = prompt("Write your favorite sport")

if (!age) {
    alert("You dodn't write your age.");
} else {
    alert(`You will be ${2023 - age} years old in 2023.`);
}


if (!city) {
  alert("You dodn't write your city");
} 
else if (city === "Kyiv") {
  alert("You live in Ukraine");
}
else if (city === "London"){
  alert("You live in Great Britain");
} 
else if (city === "Washington"){
  alert("You live in USA")
}
else {
  alert('You live in ' + city);
}

if (!sport) {
  alert("You don`t write a sport")
} 
else if(sport === "Football"){
  alert("Your goal is become a C.Ronaldo?");
}
else if (sport === "Cybersport"){
  alert("Your goal is become a S1mple?");
}
else if (sport === "Basketball"){
  alert("Your goal is become a M.Jordan?")
}
else {
  alert("Your sport is " + sport) 
}
