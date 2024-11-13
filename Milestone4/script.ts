// Get form and display elements

const resumeForm = document.getElementById("resume-form") as HTMLFormElement;
const resumeDisplay = document.getElementById("resume-display") as HTMLElement;

// Check if elements are found
console.log("resumeForm:", resumeForm); // Should log the form element
console.log("resumeDisplay:", resumeDisplay); // Should log the display element

// Add submit event listener to form
resumeForm.addEventListener("submit", (event: Event) => {
    event.preventDefault();

    // Collect input values
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("Email") as HTMLInputElement).value;
    const phone = (document.getElementById("tel") as HTMLInputElement).value;
    const education = (document.getElementById("Education") as HTMLInputElement).value;
    const experience = (document.getElementById("exprience") as HTMLInputElement).value;
    const skills = (document.getElementById("Skills") as HTMLInputElement).value;

    // Generate HTML for resume
    const resumeHtml = `
        <h2><b>Editable RESUME</b></h2>
        <h3>Personal Information</h3>
        <p><b>Name:</b><span contenteditable="true"> ${name}</span></p>
        <p><b>Email:</b><span contenteditable="true"> ${email}</span></p>
        <p><b>Phone:</b><span contenteditable="true"> ${phone}</span></p>
        <h3>Education</h3>
        <p contenteditable="true">${education}</p>
        <h3>Experience</h3>
        <p contenteditable="true">${experience}</p>
        <h3>Skills</h3>
        <p contenteditable="true">${skills}</p>`;

    // Display resume or log error
    if (resumeDisplay) {
        console.log("Displaying resume...");
        resumeDisplay.innerHTML = resumeHtml;
    } else {
        console.error("The resume display element is missing.");
    }
});
