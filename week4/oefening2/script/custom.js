//div elment aanmaken

/*let brick = document.createElement('div');
brick.className = 'brick brick-yellow';

// klasse toeveogen
let wall = document.getElementById('wall-1');
// de muur delareeren
wall.appendChild(brick);

wall/ appendChild(brick);*/

console.log('rtest');
function createBrick(color){
    let brick = document.createElement('div');
    brick.className = 'brick brick-' + color;

    return brick;

}
console.log('test2');
function addBrickToWall(color,wallNumber){
let wallId = 'wall-' + wallNumber;

let wall = document.getElementById(wallId);

let newBrick = createBrick(color);
// steentje toevoegen aan de muur
wall.appendChild(newBrick);

}


funciton reomveBrickFromWall(color,wallNumber){
    let wallId = 'wall-'+wallNumber;

    let wall = document.getElementById(wallId);
    let bricks = document.getElementsByClassName('brick-'+color);
    if(brick.length>0){
        wall.removeChild(brick[0]);
    }
}