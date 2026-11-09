// ==========================================
// TASK 9.1: SELECTING ELEMENTS PRACTICE
// ==========================================
console.log("--- Task 9.1: Selection Demos ---");

// Core Selection Demos from Snippet
const baseHeader = document.getElementById("main-header");
console.log("getElementById:", baseHeader);

const baseContents = document.getElementsByClassName("content");
console.log("getElementsByClassName:", baseContents);

const baseParagraphs = document.getElementsByTagName("p");
console.log("getElementsByTagName:", baseParagraphs);

const baseFirstLink = document.querySelector(".nav-link");
console.log("querySelector:", baseFirstLink);

const baseAllLinks = document.querySelectorAll(".nav-link");
console.log("querySelectorAll:", baseAllLinks);


console.log("--- Task 9.1: Practice Solutions ---");

// 1. The h1 element
const mainHeading = document.querySelector("h1");
console.log("1. h1 element:", mainHeading);

// 2. All elements with class "content"
const allContentElements = document.querySelectorAll(".content");
console.log("2. All .content elements:", allContentElements);

// 3. The form with id "contact-form"
const contactForm = document.getElementById("contact-form");
console.log("3. Form element:", contactForm);

// 4. The email input
const emailInputField = document.getElementById("email");
console.log("4. Email input field:", emailInputField);

// 5. All list items in the nav
const navListItems = document.querySelectorAll("nav ul li");
console.log("5. Nav list items:", navListItems);

// 6. The first .nav-link
const firstNavLinkElement = document.querySelector(".nav-link");
console.log("6. First nav link:", firstNavLinkElement);

// 7. The last paragraph
const allParagraphsList = document.querySelectorAll("p");
const lastParagraphElement = allParagraphsList[allParagraphsList.length - 1];
console.log("7. Last paragraph:", lastParagraphElement);


// ==========================================
// TASK 9.2: TRAVERSING THE DOM PRACTICE
// ==========================================
console.log("--- Task 9.2: DOM Traversal Demos ---");

const nav = document.querySelector("nav");

// Baseline Traversal Exercises from Snippet
console.log("Parent Element:", nav.parentElement);          
console.log("Children Collection:", nav.children);               
console.log("First Child Element:", nav.firstElementChild);      
console.log("Last Child Element:", nav.lastElementChild);       

const article = document.querySelector("article");
console.log("Next Sibling:", article.nextElementSibling);     
console.log("Previous Sibling:", article.previousElementSibling); 


console.log("--- Task 9.2: Practice Tasks Solutions ---");

// 1. Select the header, then navigate to the nav inside it
const targetHeader = document.getElementById("main-header");
const headerNav = targetHeader.querySelector("nav"); // descending lookup
console.log("1. Nav inside header:", headerNav);

// 2. Select the first nav-link, then get its parent li
const firstNavLink = document.querySelector(".nav-link");
const parentLi = firstNavLink.parentElement; // a -> li
console.log("2. Parent li of first nav-link:", parentLi);

// 3. Select the article, then get its next sibling (section)
const targetArticle = document.querySelector("article");
const nextSection = targetArticle.nextElementSibling;
console.log("3. Next sibling section of article:", nextSection);

// 4. Select the ul, then get all its child li elements
const targetUl = document.querySelector(".nav-list");
const childLis = targetUl.children;
console.log("4. Child li elements under ul:", childLis);

// 5. Start from the footer and navigate up to the body
const targetFooter = document.querySelector("footer");
const parentBody = targetFooter.parentElement; // footer -> body
console.log("5. Parent body of footer:", parentBody);


// ==========================================
// TASK 9.3: MODIFYING CONTENT PRACTICE
// ==========================================
console.log("--- Task 9.3: Modifying Content ---");

// --- Exercise 1: Text Content ---
const practiceH1 = document.querySelector("h1");
console.log("Reading textContent:", practiceH1.textContent);
console.log("Reading innerText:", practiceH1.innerText);
// Modify the title safely
practiceH1.textContent = "New Title"; 

// --- Exercise 2: HTML Content ---
const practiceArticle = document.querySelector("article");
console.log("Reading initial innerHTML:", practiceArticle.innerHTML);

// Modify HTML (Use safely for code we write ourselves)
practiceArticle.innerHTML = `
    <h2>Updated Article</h2>
    <p>This is new content.</p>
`;

// Testing the security demonstration rule mentioned in prompt rules
const unsafeUserInput = `<img src="x" onerror="console.log('XSS Danger Flag!')">`;
// Rule: Use textContent for any untrusted content
practiceArticle.textContent = unsafeUserInput; 
// Restoring text layout so subsequent steps don't break
practiceArticle.innerHTML = `
    <h2 class="title">Article Title</h2>
    <p class="content">This is the first paragraph.</p>
    <p class="content">This is the second paragraph.</p>
`;


// --- Exercise 3: Attributes ---
const practiceLink = document.querySelector(".nav-link");
console.log("Get href attribute:", practiceLink.getAttribute("href"));

// Set attributes safely using standard properties
practiceLink.setAttribute("href", "https://mozilla.org");
console.log("Has target attribute?", practiceLink.hasAttribute("target"));

// Custom data attributes practice setup using the pre-declared contactForm variable
if (contactForm) {
    contactForm.setAttribute("data-id", "123");
    contactForm.setAttribute("data-category", "tech");

    console.log("Data ID:", contactForm.dataset.id);
    console.log("Data Category:", contactForm.dataset.category);
    contactForm.dataset.newAttr = "value"; // Dynamically creates data-new-attr
}


// --- Exercise 4: Styles ---
const practiceContainer = document.querySelector(".container");

// Direct inline modifications
practiceContainer.style.backgroundColor = "#f0f0f0";
practiceContainer.style.padding = "30px";
practiceContainer.style.borderRadius = "8px";

// Applying clean structural multiple updates using Object.assign
Object.assign(practiceContainer.style, {
    backgroundColor: "#333",
    color: "white",
    padding: "20px"
});


// ==========================================
// TASK 9.4: ADDING & REMOVING ELEMENTS
// ==========================================
console.log("--- Task 9.4: Elements Lifecycle ---");

// --- Exercise 1: Creating Elements ---
const activeArticle = document.querySelector("article");

const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new paragraph!";
newParagraph.className = "content highlight";

// Append dynamically at the end
activeArticle.appendChild(newParagraph);

// --- Exercise 2: Removing Elements ---
// We will target a sample paragraph to demonstrate safe removal
const lifecycleParagraphs = activeArticle.querySelectorAll("p");
if (lifecycleParagraphs.length > 2) {
    // Remove the extra testing element safely
    lifecycleParagraphs[lifecycleParagraphs.length - 1].remove();
}

// --- Exercise 3: Cloning Elements ---
const navItemToClone = document.querySelector(".nav-link").parentElement;
const nodeClone = navItemToClone.cloneNode(true);
nodeClone.querySelector("a").textContent = "Services";
document.querySelector(".nav-list").appendChild(nodeClone);


// --- Build Challenge: Dynamic Nav Custom Function ---
function addNavItem(text, href) {
    const liWrapper = document.createElement("li");
    const anchorNode = document.createElement("a");
    anchorNode.textContent = text;
    anchorNode.setAttribute("href", href);
    anchorNode.className = "nav-link";
    
    liWrapper.appendChild(anchorNode);
    const navigationContainer = document.querySelector(".nav-list");
    if (navigationContainer) {
        navigationContainer.appendChild(liWrapper);
    }
}

// Executing the mandatory task builds
addNavItem("Blog", "/blog");
addNavItem("Portfolio", "/portfolio");


// ==========================================
// LESSON 10: EVENTS & USER INTERACTION
// ==========================================
console.log("--- Lesson 10: Events & Interaction ---");

// --- Task 10.1: Event Listeners & Click Counter ---
const counterDisplay = document.createElement("h2");
counterDisplay.textContent = "Click Counter: 0";
practiceContainer.appendChild(counterDisplay);

const incrementBtn = document.createElement("button");
incrementBtn.textContent = "+ Increase";
incrementBtn.style.marginRight = "10px";

const decrementBtn = document.createElement("button");
decrementBtn.textContent = "- Decrease";
decrementBtn.style.marginRight = "10px";

const resetBtn = document.createElement("button");
resetBtn.textContent = "Reset";

practiceContainer.append(incrementBtn, decrementBtn, resetBtn);

let counterState = 0;
const updateCounterView = () => {
    counterDisplay.textContent = `Click Counter: ${counterState}`;
};

incrementBtn.addEventListener("click", () => {
    counterState++;
    updateCounterView();
});

decrementBtn.addEventListener("click", () => {
    if (counterState > 0) {
        counterState--;
        updateCounterView();
    }
});

resetBtn.addEventListener("click", () => {
    counterState = 0;
    updateCounterView();
});


// --- Task 10.2: Keyboard Shortcuts ---
document.addEventListener("keydown", function(event) {
    // Ctrl+S validation loop
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 's') {
        event.preventDefault();
        console.log("Keyboard Shortcut: Saved!");
        alert("Saved!");
    }
    
    // Escape validation loop
    if (event.key === "Escape") {
        if (nameInputField) nameInputField.value = "";
        if (emailInputField) emailInputField.value = "";
        console.log("Keyboard Shortcut: Inputs cleared via Escape");
    }
});

// --- Task 10.3: Event Delegation ---
const globalNavList = document.querySelector(".nav-list");

// Unified single listener placed on the parent wrapper element
globalNavList.addEventListener("click", function(event) {
    // Traverse upwards to catch the closest nav-link node anchor cleanly
    const clickedLink = event.target.closest(".nav-link");
    
    if (clickedLink) {
        event.preventDefault(); // Stop structural page jumps
        console.log(`Delegated element click captured for: ${clickedLink.textContent}`);
        
        // Dynamically toggle the yellow background visibility rule via classList
        clickedLink.classList.toggle("highlight");
    }
});


// --- Task 10.4: Form Handling & Real-Time Validation ---
const nameInputField = document.getElementById("name");


// Real-time Name length constraint monitoring
nameInputField.addEventListener("input", function(event) {
    if (event.target.value.trim().length < 2) {
        nameInputField.style.borderColor = "red";
    } else {
        nameInputField.style.borderColor = "green";
    }
});

// Real-time Email format pattern monitoring
emailInputField.addEventListener("input", function(event) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(event.target.value.trim())) {
        emailInputField.style.borderColor = "red";
    } else {
        emailInputField.style.borderColor = "green";
    }
});

// Structural submission capture (Reusing the variable without re-declaring it)
contactForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Stop disruptive reloads costing marks
    
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    console.log("Form data processed successfully:", data);
    alert("Form submitted successfully!");
    
    // Clear styles and fields cleanly
    contactForm.reset();
    nameInputField.style.borderColor = "";
    emailInputField.style.borderColor = "";
});


