// Day 1: Headings Random Color Changer
const changeHeadingColors = () => {
    // Generate a random hex color value cleanly
    const randomHexColor = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
    
    // Select all heading scopes across the active document space
    const headings = document.querySelectorAll("h1, h2, h3");
    
    headings.forEach(heading => {
        heading.style.color = randomHexColor;
    });
    
    console.log(`Headings shifted dynamically to color: ${randomHexColor}`);
};

// Create control trigger button dynamically
const colorBtn = document.createElement("button");
colorBtn.textContent = "🌈 Change Headings Color";
colorBtn.style.margin = "10px";
colorBtn.addEventListener("click", changeHeadingColors);
document.body.appendChild(colorBtn);
