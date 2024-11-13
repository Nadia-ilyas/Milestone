"use strict";

interface ResumeData {
    name: string;
    email: string;
    phone: string;
    education: string;
    experience: string;
    skills: string;
}
// Get references to HTML elements and type them
const formResume = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplay = document.getElementById('resume-display') as HTMLDivElement;
const shareLinkContainer = document.getElementById('shareable-link-container') as HTMLDivElement;
const shareLinkElement = document.getElementById('shareable-link') as HTMLAnchorElement;
const downloadPdfBton = document.getElementById('download-pdf') as HTMLButtonElement;

// Function to render resume data
function renderResume(resumeData: ResumeData): void {
    const resumeHTML = `
        <h2>Editable Resume</h2>
        <h3>Personal Information</h3>
        <p><b>Name:</b> <span contenteditable="true">${resumeData.name}</span></p>
        <p><b>Email:</b> <span contenteditable="true">${resumeData.email}</span></p>
        <p><b>Phone:</b> <span contenteditable="true">${resumeData.phone}</span></p>
        <h3>Education</h3>
        <p contenteditable="true">${resumeData.education}</p>
        <h3>Experience</h3>
        <p contenteditable="true">${resumeData.experience}</p>
        <h3>Skills</h3>
        <p contenteditable="true">${resumeData.skills}</p>
    `;
    resumeDisplay.innerHTML = resumeHTML;
}

// Handle form submission
formResume.addEventListener('submit', (event: Event) => {
    event.preventDefault(); // Prevent page reload

    // Collect input values
    const username = (document.getElementById('username') as HTMLInputElement).value;
    const resumeData: ResumeData = {
        name: (document.getElementById('name') as HTMLInputElement).value,
        email: (document.getElementById('email') as HTMLInputElement).value,
        phone: (document.getElementById('phone') as HTMLInputElement).value,
        education: (document.getElementById('education') as HTMLInputElement).value,
        experience: (document.getElementById('experience') as HTMLInputElement).value,
        skills: (document.getElementById('skills') as HTMLInputElement).value,
    };

    // Save form data in localStorage with the username as the key
    localStorage.setItem(username, JSON.stringify(resumeData));

    // Display the generated resume
    renderResume(resumeData);

    // Generate a shareable URL with the username
    const shareableURL = `${window.location.origin}${window.location.pathname}?username=${encodeURIComponent(username)}`;
    shareLinkContainer.style.display = 'block';
    shareLinkElement.href = shareableURL;
    shareLinkElement.textContent = shareableURL;
});

// Handle PDF download
downloadPdfBton.addEventListener('click', () => {
    window.print(); // Opens the print dialog to save as PDF
});

// Prefill the form and display resume based on the username in the URL
window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');

    if (username) {
        // Autofill form and display resume if data is found in localStorage
        const savedResumeData = localStorage.getItem(username);

        if (savedResumeData) {
            const resumeData: ResumeData = JSON.parse(savedResumeData);
            (document.getElementById('username') as HTMLInputElement).value = username;
            (document.getElementById('name') as HTMLInputElement).value = resumeData.name;
            (document.getElementById('email') as HTMLInputElement).value = resumeData.email;
            (document.getElementById('phone') as HTMLInputElement).value = resumeData.phone;
            (document.getElementById('education') as HTMLInputElement).value = resumeData.education;
            (document.getElementById('experience') as HTMLInputElement).value = resumeData.experience;
            (document.getElementById('skills') as HTMLInputElement).value = resumeData.skills;

            // Display the resume on the page
            renderResume(resumeData);
        }
    }
});
