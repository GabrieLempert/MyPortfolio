async function getProject() {
    const response = await fetch("https://api.github.com/users/GabrieLempert/repos")
    const projects = await response.json()

    let card_number = document.getElementsByClassName("project-name").length;
    for (var i = 0; i < card_number; i++) {
        document.getElementsByClassName("project-name")[i].innerHTML = projects[i].name;
    }
    return projects;
}

project = getProject()
let project_card = `<div class="card col-4" style="width: 18rem;box-shadow:none;">
<img src="StyleSheet/Working.jpg " class="card-img-top img-fluid mx-auto ">
<div class="card-body ">
    <h5 class="card-title project-name"></h5>
    <p class="card-text ">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <center>
        <a class="github-ref">
            <i class="fa-brands fa-github fa-2x "></i>
        </a>
    </center>
</div>`
let length = document.getElementsByClassName("carousel-inner")[1].getElementsByClassName('carousel-item').length
let carousel_item = document.getElementsByClassName("carousel-inner")[1].childNodes
for (let index = 0; index < carousel_item.length; index++) {
    console.log(carousel_item[index])

}