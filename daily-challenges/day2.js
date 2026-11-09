// Day 2: Dynamic Paragraph Generator with Numbering and Deletion
let paragraphIncrementalCount = 0;

const appendParagraphElement = () => {
    paragraphIncrementalCount++;
    
    const wrapperDiv = document.createElement("div");
    wrapperDiv.className = "dynamic-p-row";
    wrapperDiv.style.margin = "5px 0";
    
    const pNode = document.createElement("p");
    pNode.textContent = `Paragraph #${paragraphIncrementalCount}: This is dynamically generated row tracking text.`;
    pNode.style.display = "inline";
    pNode.style.marginRight = "10px";
    
    const deleteRowBtn = document.createElement("button");
    deleteRowBtn.textContent = "Delete";
    deleteRowBtn.className = "delete-btn";
    
    // Hook a closure reference directly onto the targeted deletion element
    deleteRowBtn.addEventListener("click", () => {
        wrapperDiv.remove();
        console.log("Dynamic paragraph row purged successfully from the view container.");
    });
    
    wrapperDiv.append(pNode, deleteRowBtn);
    document.body.appendChild(wrapperDiv);
};

const creatorBtn = document.createElement("button");
creatorBtn.textContent = "➕ Add Dynamic Paragraph";
creatorBtn.style.margin = "10px";
creatorBtn.addEventListener("click", appendParagraphElement);
document.body.appendChild(creatorBtn);
