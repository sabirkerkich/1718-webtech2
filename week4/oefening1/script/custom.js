
anchorTags = document.getElementsByTagName('a');
strongTags = document.getElementsByTagName('strong');
spanTags = document.getElementsByTagName('span');



let linkElement = anchorTags[0];


linkElement.addEventListener('mouseover', function(){
    let firstStrongTag = strongTags[0];
    firstStrongTag.Style.color = 'orange';

    strongTags[1].style.color = 'orange';


//alle spantags doorlopen
    for(let i = 0;i<spanTags.length;i++){
        spanTags[i].style.color = 'purple';
    }
});

// element ophalen
let spinachElement = document.getElementById("spinach");
console.log(spinachElement);




//kleur veranderen


spinachElement.style.color = "#FFFF00";



// let elementen selecteren in variabele stoppen








