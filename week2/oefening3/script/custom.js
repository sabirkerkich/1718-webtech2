let melk = "melk";
let vis = "vis";
let choco = "choco";

let lijst = [melk, vis, choco];

console.log(lijst[0]);
console.log(lijst[2]);

function repeat() {
    for (i = 0; i < lijst.length; i++) { document.write("<br>" + lijst[i]); 
    
    lijst.push(lijst[i]);
    
    if(i==100){ break;}
    }
}

repeat();