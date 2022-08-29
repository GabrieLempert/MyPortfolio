async function getProject() {
    let response = await fetch("https://api.github.com/users/GabrieLempert/repos",{
        auth: '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'
        });
    let projects = await response.json();
    return projects;

}


function changeString(str){
    let arr=str.split("-");
    let newStr=arr[0];
    for (let index = 1; index < arr.length; index++) {
       newStr=newStr+" "+arr[index];
    }
    return newStr;
    
}

async function createNewElement() {
    let projectList = document.getElementById("project-list");
    let projects = await getProject();
    for (let index = 0; index < projects.length; index++) {
        let entry = document.createElement('li');
        entry.className ="project-item";
        entry.appendChild(document.createTextNode(`${changeString(projects[index].name)}`))
        projectList.appendChild(entry);
    }
}

async function showProjectInfo(){
    await createNewElement()
    let projectInList = document.getElementById("project-list").getElementsByClassName("project-item");
    let header=document.getElementsByClassName("project-info")[0].getElementsByTagName("h4")[0];
    let descp=document.getElementsByClassName("project-info")[0].getElementsByTagName("p")[0];
    let projectLink=document.getElementById("project-link");
    console.log(header);
    let project = await getProject();  
    for (let index = 0; index < projectInList.length; index++) {
        projectInList[index].addEventListener("click",function(){
            header.innerHTML=`${changeString(project[index].name)}`
            if(project[index].description!==null)
            descp.innerHTML =`${changeString(project[index].description)}`
            else
            descp.innerHTML="Add description";
            projectLink.href=project[index].html_url;

        });    
    }
}
function showJobInfo(){
    let jobsObj ={
        "QA and NOC":"","Security":"","Commander":""};
    const arrowToJob=document.getElementById("jobs").getElementsByTagName("i");
    const jobs= document.getElementsByClassName("work-info");
    for(let i=0;i<arrowToJob.length-1;i++){
        arrowToJob[i].addEventListener("click",function(){
            jobs[0].getElementsByTagName("h5")[0].innerHTML=Object.keys(jobsObj)[i];
            jobs[0].getElementsByTagName("p")[0].innerHTML=jobsObj[i];
            jobs[0].style.visibility = 'visible'; 
        });
    }
}
showJobInfo();
showProjectInfo();
