let git_h = document.getElementsByClassName('fa-brands');
fetch("https://api.github.com/users/GabrieLempert/repos")
    .then(function(resp) {
        return resp.json();
    }).then(function(data) {
        let card_number = document.getElementsByClassName("project-name").length;
        for (var i = 0; i < card_number; i++) {
            document.getElementsByClassName("project-name")[i].innerHTML = data[i].name;
        }

    })