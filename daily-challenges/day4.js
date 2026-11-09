// Day 4: Content Copier (Fulfilling the Drag & Drop Bonus)
const initializeContentCopierModule = () => {
    const sourceDiv = document.createElement("div");
    sourceDiv.id = "source-copier-container";
    sourceDiv.setAttribute("draggable", "true"); // Enable HTML5 native dragging
    sourceDiv.style.border = "2px dashed #3182ce";
    sourceDiv.style.padding = "15px";
    sourceDiv.style.margin = "10px 0";
    sourceDiv.style.cursor = "grab";
    sourceDiv.textContent = "Original Source Text (Drag me to copy text!)";
    
    const targetDiv = document.createElement("div");
    targetDiv.id = "target-copier-container";
    targetDiv.style.border = "2px solid #718096";
    targetDiv.style.padding = "15px";
    targetDiv.style.margin = "10px 0";
    targetDiv.style.minHeight = "40px";
    targetDiv.textContent = "[Drop Here or Click Button to Copy]";
    
    const copierActionBtn = document.createElement("button");
    copierActionBtn.textContent = "📋 Copy Div Content via Click";
    
    // 1. Button click fallback copy method
    copierActionBtn.addEventListener("click", () => {
        targetDiv.textContent = sourceDiv.textContent;
        console.log("Context layout replication loop executed cleanly via click.");
    });
    
    // 2. Drag & Drop Event Handler Bindings (Bonus Requirement)
    sourceDiv.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text/plain", sourceDiv.textContent);
    });
    
    targetDiv.addEventListener("dragover", (e) => {
        e.preventDefault(); // Required to allow dropping elements
        targetDiv.style.backgroundColor = "#ebf8ff";
    });
    
    targetDiv.addEventListener("dragleave", () => {
        targetDiv.style.backgroundColor = "";
    });
    
    targetDiv.addEventListener("drop", (e) => {
        e.preventDefault();
        const droppedText = e.dataTransfer.getData("text/plain");
        targetDiv.textContent = droppedText;
        targetDiv.style.backgroundColor = "";
        console.log("Context copied flawlessly via Drag and Drop interactions!");
    });
    
    document.body.append(sourceDiv, targetDiv, copierActionBtn);
};

initializeContentCopierModule();
