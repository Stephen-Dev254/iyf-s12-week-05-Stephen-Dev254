// Day 3: Image Visibility Manager (Fulfilling the Hide/Show Toggle Bonus)
const toggleImageVisibilityStates = () => {
    const images = document.querySelectorAll("img");
    
    images.forEach(img => {
        // Toggle opacity or display states rather than permanently destroying the node element
        if (img.style.display === "none") {
            img.style.display = "block";
            console.log("Images toggled to visible layer.");
        } else {
            img.style.display = "none";
            console.log("Images toggled to hidden state layer securely.");
        }
    });
};

const imgToggleBtn = document.createElement("button");
imgToggleBtn.textContent = "🖼️ Toggle Image Visibility";
imgToggleBtn.style.margin = "10px";
imgToggleBtn.addEventListener("click", toggleImageVisibilityStates);
document.body.appendChild(imgToggleBtn);
