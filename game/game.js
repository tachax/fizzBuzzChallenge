//update score and username variables on the screen when is first loaded.
document.addEventListener('DOMContentLoaded', function () {
    let name = localStorage.getItem('username'); //get username from local storage
    const url = "http://basic-web.dev.avc.web.usf.edu/" + name;

    get(url).then(function (response) {
        if (response.status == 200) {
            const username = response.data.id;
            const score = response.data.score; //get the user's current score.
 
            document.getElementById("welcome").innerText += ` ${username}`; //update username in welcome phrase
            fizzBuzzNumber(score);
        }

    });
});

function game() {
    let name = localStorage.getItem('username'); //get username from local storage
    const url = "http://basic-web.dev.avc.web.usf.edu/" + name;

    get(url).then(function (response) {

        if (response.status == 200) {
            const score = response.data.score; // get the user's current score.

            let newScore = increment(score);
            fizzBuzzNumber(newScore);

            const dataToSend = { score: newScore };

            //update score in api
            post(url, dataToSend).then(function(response){
                console.log("Successfull:", response);
            }).catch(error => {
                console.error("Failed:", error);
            });    

        }

    });
}

function increment(number) {
    return ++number;
}

//transform score to fizz buzz number
function fizzBuzzNumber(number) {
    let gameNumber = number;

    //makes sure to not modify a score of 0
    if (number != 0) {   
        if (number % 3 == 0 && number % 5 == 0) {
            gameNumber = "fizz buzz";
        } else if (number % 3 == 0) {
            gameNumber = "fizz";
        } else if (number % 5 == 0) {
            gameNumber = "buzz";
        }
    }

    document.getElementById("fizzBuzzValue").innerText = gameNumber;
}

function backPage() {
    location.href = '../login/login.html';
}