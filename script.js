async function getProject() {
    //https://api.github.com/users/GabrieLempert/repos
    let response = await fetch("projects.json")
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

function showJobInfo(){
    let jobsObj ={
        "QA and NOC":"","Security":"","Commander":""};
    const arrowToJob=document.getElementById("jobs").getElementsByTagName("i");
    console.log(arrowToJob);
    const jobs= document.getElementsByClassName("work-info");
    console.log(jobs);
    for(let i=0;i<arrowToJob.length-1;i++){
        arrowToJob[i].addEventListener("click",function(){
            jobs[0].getElementsByTagName("h5")[0].innerHTML=Object.keys(jobsObj)[i];
            jobs[0].getElementsByTagName("p")[0].innerHTML=jobsObj[i];
            jobs[0].style.visibility = 'visible'; 
        });
    }

  

}
showJobInfo();
//createNewElement()