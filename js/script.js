


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
const examCenterBtns = document.querySelectorAll(".examCenterBtn");
const approveItemBtns = document.querySelectorAll(".approveItemBtn");
const eligibleCnt = document.querySelector(".eligibleCnt");
const approveCnt = document.querySelector(".approveCnt");
let buttonsModal = document.querySelectorAll("#popupButton");
let Modal = document.querySelector(".main-share-cnt");
let closePopup = document.querySelector(".closePopup");
let backButton = document.getElementById("backButton");
let backButtonApprove = document.getElementById("backButtonApprove");





// Tab switching logic for table calendar
tablecalenderTabs.forEach((element, index) => {
    element.addEventListener("click", () => {
        tablecalenderTabs.forEach(tab => tab.classList.remove("active"));
        tablecalenderContents.forEach(content => content.classList.remove("show"));
        approveCnt.classList.remove("show")
        eligibleCnt.classList.remove("show")
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
        approveCnt.classList.remove("show")
        eligibleCnt.classList.remove("show")
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


examCenterBtns.forEach((element) => {
    element.addEventListener("click", () => {
        tablecalenderContents.forEach(content => content.classList.remove("show"));
        approveCnt.classList.remove("show")
        eligibleCnt.classList.add("show")
    })
})

approveItemBtns.forEach((element) => {
    element.addEventListener("click", () => {
        tablecalenderContents.forEach(content => content.classList.remove("show"));
        eligibleCnt.classList.remove("show")
        approveCnt.classList.add("show")
    })
})

// Modal
buttonsModal.forEach(function (button, index) {
    button.addEventListener("click", function () {
        Modal.classList.add("show")
        document.getElementsByTagName("body")[0].classList.add("modal-open")
    });
});

closePopup.addEventListener("click", () => {
    Modal.classList.remove("show")
})

backButton.addEventListener("click", function () {
    console.log("hi")
    tablecalenderContents.forEach(content => content.classList.remove("show"));
    approveCnt.classList.remove("show")
    eligibleCnt.classList.remove("show")
    tablecalenderTabs[0].classList.add("active");
    tablecalenderContents[0].classList.add("show");
});
backButtonApprove.addEventListener("click", function () {
    tablecalenderContents.forEach(content => content.classList.remove("show"));
    approveCnt.classList.remove("show")
    eligibleCnt.classList.add("show")
});




//////////////////////  pagination project table /////////

document.addEventListener("DOMContentLoaded", function () {
    function initializePagination(tableContainerSelector) {
        const container = document.querySelector(tableContainerSelector);
        if (!container) return; // Exit if the container doesn't exist

        const table = container.querySelector("table");
        if (!table) return; // Exit if no table found in the container

        const rows = table.querySelectorAll("tbody tr");
        const totalRows = rows.length;
        const rowsPerPage = Math.min(5, totalRows); // Dynamically decide rows per page (max 5)
        let currentPage = 1;
        const totalPages = Math.ceil(totalRows / rowsPerPage);

        const prevButton = container.querySelector(".pre-arrow-btn-cnt button");
        const nextButton = container.querySelector(".next-arrow-btn-cnt button");
        const pageButton = container.querySelector(".no-of-page-btn button");

        function displayTableRows() {
            rows.forEach((row, index) => {
                row.style.display = "none"; // Hide all rows initially
                if (index >= (currentPage - 1) * rowsPerPage && index < currentPage * rowsPerPage) {
                    row.style.display = ""; // Show only rows for the current page
                }
            });

            pageButton.innerText = `Page ${currentPage} of ${totalPages}`;
        }

        function updatePaginationButtons() {
            prevButton.disabled = currentPage === 1; // Disable "Previous" button if on the first page
            nextButton.disabled = currentPage === totalPages; // Disable "Next" button if on the last page
        }

        prevButton.addEventListener("click", function () {
            if (currentPage > 1) {
                currentPage--;
                displayTableRows();
                updatePaginationButtons();
            }
        });

        nextButton.addEventListener("click", function () {
            if (currentPage < totalPages) {
                currentPage++;
                displayTableRows();
                updatePaginationButtons();
            }
        });

        // Initialize table rows display and buttons
        displayTableRows();
        updatePaginationButtons();
    }

    // Initialize pagination for all table containers with the class "table-cnt"
    document.querySelectorAll(".table-cnt").forEach((container) => {
        initializePagination(`#${container.id}`);
    });
});



///////////////////// Pagination second table.

const settingTabBtn = document.querySelectorAll(".setting-tab");
const settingProfile = document.querySelectorAll(".setting-my-profile-wrapper");
// Tab switching logic for project table tabs
settingTabBtn.forEach((element, index) => {
    element.addEventListener("click", () => {
        settingTabBtn.forEach(tab => tab.classList.remove("my-profile-btn"));
        settingProfile.forEach(content => content.classList.remove("show"));

        settingTabBtn[index].classList.add("my-profile-btn");
        settingProfile[index].classList.add("show");
    });
});



// Edit script for setting page

document.addEventListener('DOMContentLoaded', function () {
    const profileEditBtn = document.querySelector('.company-logo-setting-page button');
    const profileImage = document.querySelector('.company-logo-setting-page img');

    profileEditBtn.addEventListener('click', function () {
        const isEditing = profileEditBtn.textContent === 'Edit';

        if (isEditing) {
            // Change button text to Save
            profileEditBtn.textContent = 'Save';

            // Make text editable
            const textElements = document.querySelectorAll('.company-logo-setting-page h2, .company-logo-setting-page p');
            textElements.forEach(el => {
                el.setAttribute('contenteditable', 'true');
                el.style.backgroundColor = '#fff9c4'; // light yellow
                el.style.border = '1px dashed #fbc02d';
            });

            // Create hidden file input if not exists
            let fileInput = document.getElementById('profile-image-input');
            if (!fileInput) {
                fileInput = document.createElement('input');
                fileInput.type = 'file';
                fileInput.accept = 'image/*';
                fileInput.id = 'profile-image-input';
                fileInput.style.display = 'none';
                document.body.appendChild(fileInput);

                fileInput.addEventListener('change', function (event) {
                    const file = event.target.files[0];
                    if (file) {
                        const reader = new FileReader();
                        reader.onload = function (e) {
                            profileImage.src = e.target.result;
                            profileImage.style.border = '2px dashed #4caf50'; // green highlight
                        };
                        reader.readAsDataURL(file);
                    }
                });
            }

            fileInput.click(); // trigger file picker
        } else {
            // Change button text back to Edit
            profileEditBtn.textContent = 'Edit';

            // Turn off editable mode
            const textElements = document.querySelectorAll('.company-logo-setting-page h2, .company-logo-setting-page p');
            textElements.forEach(el => {
                el.removeAttribute('contenteditable');
                el.style.backgroundColor = '';
                el.style.border = '';
            });

            // Optionally, you can save the updated text here (e.g., send to backend)
            alert('Changes saved successfully!');
        }
    });

    document.querySelector('.company-information-setting-page button').addEventListener('click', function (e) {
        toggleEditButton(e.target, '.company-information-setting-page h3');
    });

    document.querySelector('.Personal-Information-setting-page button').addEventListener('click', function (e) {
        toggleEditButton(e.target, '.Personal-Information-setting-page h3');
    });

    function toggleEditButton(button, selector) {
        const isEditing = button.textContent === 'Edit';
        if (isEditing) {
            button.textContent = 'Save';
            makeEditable(selector);
        } else {
            button.textContent = 'Edit';
            removeEditable(selector);
            alert('Changes saved successfully!');
        }
    }

    function makeEditable(selector) {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
            el.setAttribute('contenteditable', 'true');
            el.style.backgroundColor = '#fff9c4';
            el.style.border = '1px dashed #fbc02d';
        });
    }

    function removeEditable(selector) {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
            el.removeAttribute('contenteditable');
            el.style.backgroundColor = '';
            el.style.border = '';
        });
    }
});















