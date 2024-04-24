document.addEventListener("DOMContentLoaded", function() {
    const languageSelect = document.getElementById("language-select");
    const domainSelect = document.getElementById("domain-select");
    const levelSelect = document.getElementById("level-select");
    const projectsContainer = document.getElementById("projects-container");
    const filterButton = document.getElementById("filter-button");

    // GitHub API endpoint for fetching repositories from well-known organizations
    const apiUrl = "https://api.github.com/orgs/github/repos?per_page=100"; // Fetch 100 repositories

    // Fetch GitHub repositories
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Store all projects in local storage
            localStorage.setItem("allProjects", JSON.stringify(data));
            // Get unique programming languages from repositories
            const languages = [...new Set(data.map(repo => repo.language))];
            // Add options for programming languages in the select element
            languages.forEach(language => {
                const option = document.createElement("option");
                option.textContent = language ? language : "Unknown"; // Use "Unknown" if language is null
                option.value = language ? language.toLowerCase() : "unknown";
                languageSelect.appendChild(option);
            });
            // Display all projects initially
            displayProjects(data);
        })
        .catch(error => {
            console.error("Error fetching GitHub data:", error);
        });

    // Function to display projects
    function displayProjects(projects) {
        projectsContainer.innerHTML = ""; // Clear previous projects
        projects.forEach(project => {
            const projectCard = document.createElement("div");
            projectCard.classList.add("project-card");

            const repoLink = document.createElement("a");
            repoLink.href = project.html_url;
            repoLink.target = "_blank";
            repoLink.textContent = project.name;
            projectCard.appendChild(repoLink);

            const description = document.createElement("p");
            description.textContent = project.description || "No description provided.";
            const language = document.createElement("span");
            language.textContent = project.language ? project.language.toLowerCase() : "Unknown";
            language.classList.add("language");
            projectCard.appendChild(description);
            projectCard.appendChild(language);
            projectsContainer.appendChild(projectCard);
        });
    }
    

    // Event listener for filter button click
    filterButton.addEventListener("click", function() {
        const selectedLanguage = languageSelect.value.toLowerCase();
        const selectedDomain = domainSelect.value.toLowerCase();
        const selectedLevel = levelSelect.value.toLowerCase();
        const allProjects = JSON.parse(localStorage.getItem("allProjects"));
        // Filter projects based on selected language, domain, and level
        const filteredProjects = allProjects.filter(project => {
            const languageMatch = selectedLanguage === "all" || (project.language && project.language.toLowerCase() === selectedLanguage);
            const domainMatch = selectedDomain === "all" || (project.description && project.description.toLowerCase().includes(selectedDomain));
            const levelMatch = selectedLevel === "all" || (project.description && project.description.toLowerCase().includes(selectedLevel));
            return languageMatch && domainMatch && levelMatch;
        });
        displayProjects(filteredProjects);
    });
});
