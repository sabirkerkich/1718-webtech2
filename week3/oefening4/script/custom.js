let boardSize = 30;
let board= " ";


/**  loop  **/
//y-as
for(let y = 0; y< boardSize; y++){
//x-as 
for(let x = 0; x<boardSize; x++){
    let rest =( (x + y)%2)
  
    if (rest == 0){board+= '#' } else { board+=" "}

}
board +="\n";
}


console.log(board);


