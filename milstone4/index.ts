// index.ts

// Interface defining the structure of the resume
interface Resume {
  name: string;
  email: string;
  phoneNumber: string;
  address: string;
  house: string;
  houseNumber: string;
  scale: string;
  fathersName: string;
  hobby: string;
  skills: string[];
  workExperience: string[];
  education: string[];
}

// Initial resume object
const resume: Resume = {
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
  const nameInput = (document.getElementById("name") as HTMLInputElement).value;
  const emailInput = (document.getElementById("email") as HTMLInputElement).value;
  const phoneInput = (document.getElementById("phoneNumber") as HTMLInputElement).value;
  const addressInput = (document.getElementById("address") as HTMLInputElement).value;
  const houseInput = (document.getElementById("house") as HTMLInputElement).value;
  const houseNumberInput = (document.getElementById("houseNumber") as HTMLInputElement).value;
  const scaleInput = (document.getElementById("scale") as HTMLInputElement).value;
  const fathersNameInput = (document.getElementById("fathersName") as HTMLInputElement).value;
  const hobbyInput = (document.getElementById("hobby") as HTMLInputElement).value;
  const skillsInput = (document.getElementById("skills") as HTMLInputElement).value;
  const workExperienceInput = (document.getElementById("workExperience") as HTMLTextAreaElement).value;
  const educationInput = (document.getElementById("education") as HTMLTextAreaElement).value;

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
  resume.skills = skillsInput.split(",").map(skill => skill.trim());
  resume.workExperience = workExperienceInput.split(",").map(exp => exp.trim());
  resume.education = educationInput.split(",").map(edu => edu.trim());

  displayResume();
}

// Function to display the updated resume in HTML
function displayResume() {
  const resumeOutput = document.getElementById("resumeOutput") as HTMLDivElement;

  resumeOutput.innerHTML = `
    <h2>Resume</h2>
    <p><strong>Name:</strong> ${resume.name}</p>
    <p><strong>Email:</strong> ${resume.email}</p>
    <p><strong>Phone Number:</strong> ${resume.phoneNumber}</p>
    <p><strong>Address:</strong> ${resume.address}</p>
    <p><strong>House:</strong> ${resume.house}</p>
    <p><strong>House Number:</strong> ${resume.houseNumber}</p>
    <p><strong>Scale:</strong> ${resume.scale}</p>
    <p><strong>Father's Name:</strong> ${resume.fathersName}</p>
    <p><strong>Hobby:</strong> ${resume.hobby}</p>
    <p><strong>Skills:</strong> ${resume.skills.join(", ")}</p>
    <p><strong>Work Experience:</strong> ${resume.workExperience.join(", ")}</p>
    <p><strong>Education:</strong> ${resume.education.join(", ")}</p>
  `;
}

// Event listener to ensure the DOM is loaded before accessing elements
document.addEventListener("DOMContentLoaded", () => {
  const submitButton = document.getElementById("submit") as HTMLButtonElement;
  submitButton.addEventListener("click", updateResume);
});