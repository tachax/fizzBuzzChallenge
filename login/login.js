//verify if user exists or not
function verifyUser() {
    const name = document.getElementById("username").value;
    localStorage.setItem('username', name); //storing in local storage to get the right username to game page
    
    const url = "http://basic-web.dev.avc.web.usf.edu/" + name;

    get(url).then(function (response) {

        if (response.status != 200) {
            post(url, { score: 0 }); //create a new user.
        }
        
        location.href = '../game/game.html';
        localStorage.setItem('score', score);
    });
    
}