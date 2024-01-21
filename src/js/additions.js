// define constants here
const PAGE_TITLE = "Welcome to my website."
const PAGE_DESCRIPTION = "Here you can get an overview of my academic and professional life."
const EMAIL = "mailto:ericsiqueira99@gmail.com"
const GITHUB = "https://github.com/ericsiqueira99"
const LINKEDIN = "https://www.linkedin.com/in/eric-carvalho-499418198/"
const ACADEMIC_INFO = ["Academic Experience", "In this section you can see a summary of my academic life.", "#sectionAcademic"]
const PROFESSIONAL_INFO = ["Professional Experience", "In this section you can see a summary of my professional life.", "#sectionProfessional"]
const PROJECT_INFO = ["Projects", "In this section there is a summary of my projects.", "#sectionProject"]

// define functions here
document.getElementById("pageTitle").innerHTML = PAGE_TITLE;
document.getElementById("pageDescription").innerHTML = PAGE_DESCRIPTION;
document.getElementById("contactLink").href = EMAIL;
document.getElementById("githubLink").href = GITHUB;
document.getElementById("linkedinLink").href = LINKEDIN;
fillSection(["academicSectionTitle", "academicSectionText", "academicSectionLink"], ACADEMIC_INFO);
fillSection(["professionalSectionTitle", "professionalSectionText", "professionalSectionLink"], PROFESSIONAL_INFO);
fillSection(["projectSectionTitle", "projectSectionText", "projectSectionLink"], PROJECT_INFO);

// to put all information from section here
function fillSection(divId, data) {
    document.getElementById(divId[0]).innerHTML = data[0];
    document.getElementById(divId[1]).innerHTML = data[1];
    document.getElementById(divId[2]).href = data[2]
}


// icons -> https://icons.getbootstrap.com/?q=brief

/*
TODO
- FIX CSS on result page

HEADER:
- add link to download cv [DONE]

SECTIONS:
- write base for sections [DONE]
- finish section for academic projects  
- adjust link for section details
- make them dynamic [DONE]

SECTION DETAILS:
- search for expanding div for each thing, like this: [------- v] [DONE]

PROFESSIONAL SECTION:
- add information about professional experience (job title, what i did, time i was there)
- add links to company linkedin?

ACADEMIC SECTION:
- add info about academic (Information about subjects)

PROJECTS SECTION:
- add info (summary about project, link to paper)

FOOTER:
- change all links to my accounts [DONE]
- add message [DONE]
*/