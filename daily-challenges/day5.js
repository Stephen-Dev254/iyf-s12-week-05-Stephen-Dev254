// Day 5: Dark Mode Toggle with localStorage Persistence and CSS Transitions
const initializeDarkModeModule = () => {
    // 1. Inject smooth visual transition CSS directly into the document head
    const styleRuleNode = document.createElement("style");
    styleRuleNode.textContent = `
        body {
            transition: background-color 0.4s ease, color 0.4s ease !important;
        }
    `;
    document.head.appendChild(styleRuleNode);

    const activeBodyElement = document.body;
    
    // 2. Load cached user preferences on initialization entry loops
    const storedTheme = localStorage.getItem("user-dark-mode-preference");
    if (storedTheme === "enabled") {
        activeBodyElement.classList.add("dark-mode-active");
        activeBodyElement.style.backgroundColor = "#1a202c";
        activeBodyElement.style.color = "#f7fafc";
    }

    const toggleGlobalDarkModeStyles = () => {
        activeBodyElement.classList.toggle("dark-mode-active");
        const isNowDark = activeBodyElement.classList.contains("dark-mode-active");
        
        if (isNowDark) {
            activeBodyElement.style.backgroundColor = "#1a202c";
            activeBodyElement.style.color = "#f7fafc";
            localStorage.setItem("user-dark-mode-preference", "enabled");
        } else {
            activeBodyElement.style.backgroundColor = "";
            activeBodyElement.style.color = "";
            localStorage.setItem("user-dark-mode-preference", "disabled");
        }
        
        console.log(`Aesthetic dark theme profiling state toggled: ${isNowDark}`);
    };

    const themeToggleBtn = document.createElement("button");
    themeToggleBtn.textContent = "🌙 Toggle Dark Mode";
    themeToggleBtn.style.margin = "10px";
    themeToggleBtn.style.display = "block";
    themeToggleBtn.addEventListener("click", toggleGlobalDarkModeStyles);
    document.body.appendChild(themeToggleBtn);
};

initializeDarkModeModule();
