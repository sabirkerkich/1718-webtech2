const password = 'kellypfaff';

let guess = prompt('wat is het wachtwoord');
console.log(guess);
/*if(password== guess){
    document.write('goed zo');
}*/


while(password != guess){
    amountTries++;
    guess = prompt('wat is het wachtwoord');
}
document.write('je hebt het wachtwoord geraden ');
document.write('Na');
