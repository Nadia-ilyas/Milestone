window.addEventListener("DOMContentLoaded", () => {
    const skills = document.querySelectorAll("#skills ul li");

    skills.forEach(skill => {
        const skillElement = skill as HTMLElement; // Casting skill to HTMLElement

        skillElement.addEventListener("mouseover", () => {
            skillElement.style.color = "#0073e6";
        });

        skillElement.addEventListener("mouseleave", () => {
            skillElement.style.color = "#333";
        });
    });
});
