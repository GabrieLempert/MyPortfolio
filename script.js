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
let project_card = `<div class="carousel-item container">
<div class="row justify-content-center ">
    <img class="col-lg-8 " src="StyleSheet/Working.jpg " />
    <div class="col-xl-3 col-md-4 card ">
        <div class="card-header text-center ">
            Featured
        </div>
        <img src="StyleSheet/Working.jpg " class="card-img " />
        <div class="card-body ">
            <h5 class="card-title ">Special title treatment

            </h5>
            <p class="card-text ">With supporting text below as a natural lead-in to additional content.</p>
            <center>
                <a class="github-ref ">
                    <i class="fa-brands fa-github fa-2x "></i>
                </a>
            </center>
        </div>
        <div class="card-footer text-muted text-center ">
            2 days ago
        </div>
    </div>
</div>

</div>`




/*let length = document.getElementsByClassName("carousel-inner")[1].getElementsByClassName('carousel-item').length
    let carousel_item = document.getElementsByClassName("carousel-inner")[1].childNodes
    for (let index = 0; index < carousel_item.length; index++) {
        console.log(carousel_item[index])

    }*/