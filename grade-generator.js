const prompt = require("prompt-sync")();

function marks(){
    const input = prompt('enter student marks btn 0 and 100 ')
    if (input > 79){
        return 'A'
    }
    else if (input >= 60 && input <= 79  ){
        return 'B'
    }
    else if (input >=49 ){
        return 'C'
    }
    else if (input >= 40 ){
        return 'D'
    }
    else if (input <40 ){
        return 'E'
    }
}
console.log(marks())