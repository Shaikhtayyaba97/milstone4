// index.ts
// Initial resume object
var resume = {
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    house: "",
    houseNumber: "",
    scale: "",
    fathersName: "",
    hobby: "",
    skills: [],
    workExperience: [],
    education: []
};
// Function to update the resume from input values
function updateResume() {
    var nameInput = document.getElementById("name").value;
    var emailInput = document.getElementById("email").value;
    var phoneInput = document.getElementById("phoneNumber").value;
    var addressInput = document.getElementById("address").value;
    var houseInput = document.getElementById("house").value;
    var houseNumberInput = document.getElementById("houseNumber").value;
    var scaleInput = document.getElementById("scale").value;
    var fathersNameInput = document.getElementById("fathersName").value;
    var hobbyInput = document.getElementById("hobby").value;
    var skillsInput = document.getElementById("skills").value;
    var workExperienceInput = document.getElementById("workExperience").value;
    var educationInput = document.getElementById("education").value;
    // Update resume object with new values
    resume.name = nameInput;
    resume.email = emailInput;
    resume.phoneNumber = phoneInput;
    resume.address = addressInput;
    resume.house = houseInput;
    resume.houseNumber = houseNumberInput;
    resume.scale = scaleInput;
    resume.fathersName = fathersNameInput;
    resume.hobby = hobbyInput;
    resume.skills = skillsInput.split(",").map(function (skill) { return skill.trim(); });
    resume.workExperience = workExperienceInput.split(",").map(function (exp) { return exp.trim(); });
    resume.education = educationInput.split(",").map(function (edu) { return edu.trim(); });
    displayResume();
}
// Function to display the updated resume in HTML
function displayResume() {
    var resumeOutput = document.getElementById("resumeOutput");
    resumeOutput.innerHTML = "\n    <h2>Resume</h2>\n    <p><strong>Name:</strong> ".concat(resume.name, "</p>\n    <p><strong>Email:</strong> ").concat(resume.email, "</p>\n    <p><strong>Phone Number:</strong> ").concat(resume.phoneNumber, "</p>\n    <p><strong>Address:</strong> ").concat(resume.address, "</p>\n    <p><strong>House:</strong> ").concat(resume.house, "</p>\n    <p><strong>House Number:</strong> ").concat(resume.houseNumber, "</p>\n    <p><strong>Scale:</strong> ").concat(resume.scale, "</p>\n    <p><strong>Father's Name:</strong> ").concat(resume.fathersName, "</p>\n    <p><strong>Hobby:</strong> ").concat(resume.hobby, "</p>\n    <p><strong>Skills:</strong> ").concat(resume.skills.join(", "), "</p>\n    <p><strong>Work Experience:</strong> ").concat(resume.workExperience.join(", "), "</p>\n    <p><strong>Education:</strong> ").concat(resume.education.join(", "), "</p>\n  ");
}
// Event listener to ensure the DOM is loaded before accessing elements
document.addEventListener("DOMContentLoaded", function () {
    var submitButton = document.getElementById("submit");
    submitButton.addEventListener("click", updateResume);
});
