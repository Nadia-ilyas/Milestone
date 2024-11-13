"use strict";
// Get references to HTML elements and type them
var formResume = document.getElementById('resume-form');
var resumeDisplay = document.getElementById('resume-display');
var shareLinkContainer = document.getElementById('shareable-link-container');
var shareLinkElement = document.getElementById('shareable-link');
var downloadPdfBton = document.getElementById('download-pdf');
// Function to render resume data
function renderResume(resumeData) {
    var resumeHTML = "\n        <h2>Editable Resume</h2>\n        <h3>Personal Information</h3>\n        <p><b>Name:</b> <span contenteditable=\"true\">".concat(resumeData.name, "</span></p>\n        <p><b>Email:</b> <span contenteditable=\"true\">").concat(resumeData.email, "</span></p>\n        <p><b>Phone:</b> <span contenteditable=\"true\">").concat(resumeData.phone, "</span></p>\n        <h3>Education</h3>\n        <p contenteditable=\"true\">").concat(resumeData.education, "</p>\n        <h3>Experience</h3>\n        <p contenteditable=\"true\">").concat(resumeData.experience, "</p>\n        <h3>Skills</h3>\n        <p contenteditable=\"true\">").concat(resumeData.skills, "</p>\n    ");
    resumeDisplay.innerHTML = resumeHTML;
}
// Handle form submission
formResume.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent page reload
    // Collect input values
    var username = document.getElementById('username').value;
    var resumeData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        education: document.getElementById('education').value,
        experience: document.getElementById('experience').value,
        skills: document.getElementById('skills').value,
    };
    // Save form data in localStorage with the username as the key
    localStorage.setItem(username, JSON.stringify(resumeData));
    // Display the generated resume
    renderResume(resumeData);
    // Generate a shareable URL with the username
    var shareableURL = "".concat(window.location.origin).concat(window.location.pathname, "?username=").concat(encodeURIComponent(username));
    shareLinkContainer.style.display = 'block';
    shareLinkElement.href = shareableURL;
    shareLinkElement.textContent = shareableURL;
});
// Handle PDF download
downloadPdfBton.addEventListener('click', function () {
    window.print(); // Opens the print dialog to save as PDF
});
// Prefill the form and display resume based on the username in the URL
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('username');
    if (username) {
        // Autofill form and display resume if data is found in localStorage
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            document.getElementById('username').value = username;
            document.getElementById('name').value = resumeData.name;
            document.getElementById('email').value = resumeData.email;
            document.getElementById('phone').value = resumeData.phone;
            document.getElementById('education').value = resumeData.education;
            document.getElementById('experience').value = resumeData.experience;
            document.getElementById('skills').value = resumeData.skills;
            // Display the resume on the page
            renderResume(resumeData);
        }
    }
});
