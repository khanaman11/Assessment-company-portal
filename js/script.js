


// Get DOM elements
const tabs = document.querySelectorAll(".aside-tag-cnt");
const tabContents = document.querySelectorAll(".tab-content");
const formNextBtns = document.querySelectorAll(".nextFormBtn");
const indicatorItems = document.querySelectorAll(".indicatorItem");
const companyNextBtns = document.querySelectorAll(".comapnyNextBtn");
const companyBackBtns = document.querySelectorAll(".comapnyBackBtn");
const companyContetnts = document.querySelectorAll(".company-contetnt");
const mainGoBackBtn = document.getElementById("mainGoBackBtn");
const indicatorCnt = document.getElementById("indicatorCnt");

// Check if elements exist before proceeding
if (mainGoBackBtn) {
    formNextBtns.forEach((element, index) => {
        if (index === 0) {
            mainGoBackBtn.style.display = "none";
        }
        element.addEventListener("click", () => {
            // Ensure the tab and content arrays have valid elements before modifying them
            if (tabs[index]) tabs[index].classList.remove("active");
            if (tabContents[index]) tabContents[index].classList.remove("show");
            if (indicatorItems[index]) indicatorItems[index].classList.remove("active");

            // Activate the next tab and content
            if (tabs[index + 1]) tabs[index + 1].classList.add("active");
            if (tabContents[index + 1]) tabContents[index + 1].classList.add("show");
            if (indicatorItems[index + 1]) indicatorItems[index + 1].classList.add("active");

            if (index >= 0) mainGoBackBtn.style.display = "block";

            if (index >= 2 && indicatorCnt) {
                indicatorCnt.style.display = "none";
            }
        });
    });

    let companyIndex = 0;

    // Next button for company contents
    companyNextBtns.forEach((element) => {
        element.addEventListener("click", () => {
            if (companyContetnts[companyIndex]) {
                companyContetnts[companyIndex].classList.remove("show");
            }
            if (companyContetnts[companyIndex + 1]) {
                companyContetnts[companyIndex + 1].classList.add("show");
                companyIndex++;
            }
        });
    });

    // Back button for company contents
    companyBackBtns.forEach((element) => {
        element.addEventListener("click", () => {
            if (companyContetnts[companyIndex]) {
                companyContetnts[companyIndex].classList.remove("show");
            }
            if (companyContetnts[companyIndex - 1]) {
                companyContetnts[companyIndex - 1].classList.add("show");
                companyIndex--;
            }
        });
    });

    // Main Go Back Button: Reload the page
    mainGoBackBtn.addEventListener("click", () => {
        location.reload(); // Reload the page
    });
}



const tablecalenderTabs = document.querySelectorAll(".tablecalenderTab");
const tablecalenderContents = document.querySelectorAll(".tablecalenderContent");
const createProjectBtns = document.querySelectorAll(".createProjectBtn");
const createProject = document.getElementById("createProject");
const createProjectSection = document.getElementById("createProjectSection");
const allProjectTabBtns = document.querySelectorAll(".allProjectTabBtn");
const projectTableContents = document.querySelectorAll(".projectTableContent");
const createProjectForms = document.querySelectorAll(".createProjectForm");
const createProjectNextBtns = document.querySelectorAll(".createProjectNextBtn");
const createProjectPrevBtns = document.querySelectorAll(".createProjectPrevBtn");

// Tab switching logic for table calendar
tablecalenderTabs.forEach((element, index) => {
    element.addEventListener("click", () => {
        tablecalenderTabs.forEach(tab => tab.classList.remove("active"));
        tablecalenderContents.forEach(content => content.classList.remove("show"));
        if (createProject) createProject.classList.remove("active");
        if (createProjectSection) createProjectSection.classList.remove("show");

        tablecalenderTabs[index].classList.add("active");
        tablecalenderContents[index].classList.add("show");
    });
});

// Create Project button logic
createProjectBtns.forEach((element) => {
    element.addEventListener("click", () => {
        tablecalenderTabs.forEach(tab => tab.classList.remove("active"));
        tablecalenderContents.forEach(content => content.classList.remove("show"));

        if (createProject) createProject.classList.add("active");
        if (createProjectSection) createProjectSection.classList.add("show");
    });
});

// Tab switching logic for project table tabs
allProjectTabBtns.forEach((element, index) => {
    element.addEventListener("click", () => {
        allProjectTabBtns.forEach(tab => tab.classList.remove("all-project-tab"));
        projectTableContents.forEach(content => content.classList.remove("show"));

        allProjectTabBtns[index].classList.add("all-project-tab");
        projectTableContents[index].classList.add("show");
    });
});
let projectIndex = 0;
// Logic for next buttons in Create Project forms
createProjectNextBtns.forEach((element, index) => {
    element.addEventListener("click", () => {
        // Ensure the form exists before modifying
        if (index < createProjectForms.length - 1) {
            createProjectForms[index].classList.remove("show");
            createProjectForms[index + 1].classList.add("show");
            projectIndex++;
        }
    });
});

// Logic for next buttons in Create Project forms
createProjectPrevBtns.forEach((element, index) => {
    element.addEventListener("click", () => {
        // Ensure the form exists before modifying
        if (projectIndex < createProjectForms.length + 1) {
            createProjectForms[projectIndex].classList.remove("show");
            createProjectForms[projectIndex - 1].classList.add("show");
            projectIndex--;
        }
    });
});


// modal script 


const examCenterBtns = document.querySelectorAll(".examCenterBtn");
const eligibleCnt = document.querySelector(".eligibleCnt");
const approveCnt = document.querySelector(".approveCnt");
examCenterBtns.forEach((element)=>{
    element.addEventListener("click",()=>{
        tablecalenderContents.forEach(content => content.classList.remove("show"));
        eligibleCnt.classList.add("show")
    })
})