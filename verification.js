let x = 1;
let y = 100;
z = document.getElementById('main');
random = x + (y-x) * Math.random();
roundrandom = Math.round(random);

alert("Remember the number shown as you'll be asked to enter it next for verification: " + roundrandom);
answer = prompt("Enter the number shown previously");
if (roundrandom === parseInt(answer)) {
    z.style.display="block";
    alert("Access gained.");
}
else {
    z.style.display="none";
    alert("Access denied. Wrong number input.")
}