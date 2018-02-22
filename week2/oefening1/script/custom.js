//prompt.onload;
//let number = prompt("vul een getal in");
/*
let oddOrEven = evenNumber(number);
document.write(oddOrEven);





*/
/*
function evenNumber(number) {
    if ( number % 2 == 0) { 
        return 'even';
    }
    else {
        return 'odd';
    }

}
*/


///verbetering van fredje 

let button = document.getElementById('evenOrOdd');

button.addEventListener('click',function(){ 
    let  getalIn = document.getElementById('getal').value;


   if(getalIn % 2 == 0) { 
    document.write('even');
} else {
    document.write('oneven');
}
})