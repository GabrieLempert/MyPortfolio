async function getProject() {
    let response = await fetch("https://api.github.com/users/GabrieLempert/repos")
    let projects = await response.json();

    return projects;

}
async function changeString(index) {
    let projects = await getProject();

    let project_card = `
    <div class="row justify-content-center">
        <img class="col-lg-8" src="StyleSheet/Working.jpg"/>
        <div class="col-xl-3 col-md-4 card ">
            <div class="card-header text-center ">
             ${projects[index].name}
            </div>
            <img src="StyleSheet/Working.jpg" class="card-img" />
            <div class="card-body ">
                <h5 class="card-title ">
    
                </h5>
                <p class="card-text">${projects[index].description}</p>
                <center>
                    <a class="github-ref" href=${projects[index].html_url}>
                        <i class="fa-brands fa-github fa-2x"></i>
                    </a>
                </center>
            </div>
            <div class="card-footer text-muted text-center ">
                Languges: ${projects[index].language}
            </div>
        </div>
    `;

    return project_card
}

function addFirstItem() {
    const check = document.createElement('div')
    check.classList.add('carousel-item')
    check.classList.add('container')
    check.classList.add('active')
    return check
}

function addCarouselItem() {
    const check = document.createElement('div')
    check.classList.add('carousel-item')
    check.classList.add('container')
    return check
}

async function createNewElement() {
    let project_carousel = document.getElementById("projects-carousel");
    let carousel_item = project_carousel.getElementsByClassName("carousel-inner");


    let projects = await getProject()
    for (let index = 0; index < projects.length; index++) {
        if (index == 0) {
            carousel_item[0].append(addFirstItem())
        } else {
            carousel_item[0].append(addCarouselItem())
        }
        let card = await changeString(index)

        carousel_item[0].getElementsByClassName("carousel-item")[index].innerHTML = card

    }
}

createNewElement()