async function getProject() {
  let clientID="Iv1.185967aa2464596a";
  let clientSecret="dc5f46776c23ecbb0b7c11c4c95a91cea55b6b52";
  const headers = {
    Authorization: `Basic ` + `${clientID}:${clientSecret}`,
  };
  try {
    let response = await fetch(
      "https://api.github.com/users/GabrieLempert/repos",
      {
        method: "GET",
        headers: headers,
      }
    );
    let projects = await response.json();
    console.log(projects);
    return projects;
  } catch (error) {
    alert("Sorry I reached GitHubAPI rate limit");
    let response = await fetch("projects.json");
    let projects = await response.json();
    return projects;
  }
}

function changeString(str) {
  let arr = str.split("-");
  console.log(str);
  if (arr.length > 0) {
    let newStr = arr[0];
    for (let index = 1; index < arr.length; index++) {
      newStr = newStr + " " + arr[index];
    }
    return newStr;
  }
  return str;
}

async function createNewElement() {
  let projectList = document.getElementById("project-list");
  let projects = await getProject();
  for (let index = 0; index < projects.length; index++) {
    let entry = document.createElement("li");
    entry.className = "project-item";
    entry.appendChild(
      document.createTextNode(`${changeString(projects[index].name)}`)
    );
    projectList.appendChild(entry);
  }
}

async function showProjectInfo() {
  await createNewElement();
  let projectInList = document
    .getElementById("project-list")
    .getElementsByClassName("project-item");
  let header = document
    .getElementsByClassName("project-info")[0]
    .getElementsByTagName("h4")[0];
  let descp = document
    .getElementsByClassName("project-info")[0]
    .getElementsByTagName("p")[0];
  let projectLink = document.getElementById("project-link");
  let project = await getProject();
  for (let index = 0; index < projectInList.length; index++) {
    projectInList[index].addEventListener("click", function () {
      header.innerHTML = `${changeString(project[index].name)}`;
      if (project[index].description !== null) {
        descp.innerHTML = `${changeString(project[index].description)}`;
        projectLink.href = project[index].html_url;
      } else {
        descp.innerHTML = "Add description";
      }
      projectLink.href = project[index].html_url;
    });
  }
}
function showJobInfo() {
  let jobsObj = [
    {
      name: "QA and NOC",
      descp:
        "Responsible for the servers continuous function, communication with programmers and clients, releasing products to clients using linux, checking products in production.",
    },
    {
      name: "Security",
      descp: "Responsible for the safety of workers and the facilities.",
    },
    {
      name: "Commander",
      descp:
        "Responsible for the safety, training, and general well-being of soldiers, as well as responsible for the maintenance of the tools.",
    },
  ];
  const arrowToJob = document.getElementById("jobs").getElementsByTagName("i");
  const jobs = document.getElementsByClassName("work-info");
  for (let i = 0; i < arrowToJob.length - 1; i++) {
    arrowToJob[i].addEventListener("click", function () {
      jobs[0].getElementsByTagName("h5")[0].innerHTML = jobsObj[i].name;
      jobs[0].getElementsByTagName("p")[0].innerHTML = jobsObj[i].descp;
      jobs[0].style.visibility = "visible";
    });
  }
}
showJobInfo();
showProjectInfo();
