// Get form and display elements
var resumeForm = document.getElementById("resume-form");
var resumeDisplay = document.getElementById("resume-display");
// Check if elements are found
console.log("resumeForm:", resumeForm); // Should log the form element
console.log("resumeDisplay:", resumeDisplay); // Should log the display element
// Add submit event listener to form
resumeForm.addEventListener("submit", function (event) {
    event.preventDefault();
    // Collect input values
    var name = document.getElementById("name").value;
    var email = document.getElementById("Email").value;
    var phone = document.getElementById("tel").value;
    var education = document.getElementById("Education").value;
    var experience = document.getElementById("exprience").value;
    var skills = document.getElementById("Skills").value;
    // Generate HTML for resume
    var resumeHtml = "\n        <h2><b>Editable RESUME</b></h2>\n        <h3>Personal Information</h3>\n        <p><b>Name:</b><span contenteditable=\"true\"> ".concat(name, "</span></p>\n        <p><b>Email:</b><span contenteditable=\"true\"> ").concat(email, "</span></p>\n        <p><b>Phone:</b><span contenteditable=\"true\"> ").concat(phone, "</span></p>\n        <h3>Education</h3>\n        <p contenteditable=\"true\">").concat(education, "</p>\n        <h3>Experience</h3>\n        <p contenteditable=\"true\">").concat(experience, "</p>\n        <h3>Skills</h3>\n        <p contenteditable=\"true\">").concat(skills, "</p>");
    // Display resume or log error
    if (resumeDisplay) {
        console.log("Displaying resume...");
        resumeDisplay.innerHTML = resumeHtml;
    }
    else {
        console.error("The resume display element is missing.");
    }
});
