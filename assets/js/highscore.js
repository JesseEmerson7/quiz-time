const highScoreTitle = document.getElementById('high-score-title');

const highScoreDiv = document.getElementById('high-score-div');

let listArray = JSON.parse(localStorage.getItem("highscores"));



let listItem = document.createElement('p');
console.log(listItem);

// for loop to list all of the high scores from the array saved in local storage on the page.
for (i= 0; i<listArray.length; i++){
    let listItem = document.createElement('p');
    initialList = listArray[i].initial 
    scoreList = listArray[i].score
    listItem.innerText =initialList + " : " + scoreList;
    console.log(listItem);

    highScoreDiv.appendChild(listItem)
    
    
}

