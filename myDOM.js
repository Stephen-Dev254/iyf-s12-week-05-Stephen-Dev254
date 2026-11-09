const check = (label, ok) => console.log(`${ok ? "✓" : "✗"} ${label}`);

//STEP 1 - Task 9.1: select TEN ways
const h1 = document.querySelector("h1");
const contents = document.querySelectorAll(".content");
const form = document.getElementById("contact-form");
const emailInput = document.querySelector("#contact-form input[type='email']");
const navItems = document.querySelectorAll("nav li");
const firstNavLink = document.querySelector(".nav-link");
const lastPara = document.querySelector("article p:last-of-type");
const submitBtn = document.querySelector("#contact-form button");
const allH2 = document.querySelectorAll("main h2");
const footer = document.querySelector("footer");

console.log(h1, contents, form, emailInput, navItems);
check("9.1 h1 found", !!h1);
check("9.1 .content found", contents.length === 2);
check("9.1 form found", !!form);

// What does querySelector for missing element return?
console.log(document.querySelector(".does-not-exist")); // null

// NodeList -> Array of text
const navTexts = [...navItems].map(li => li.textContent.trim());
console.log(navTexts);

// STEP 2 - Task 9.2: traverse 
// Say route out loud: header -> nav -> ul
const header = document.querySelector("header");
const navInsideHeader = header.querySelector("nav");
const parentLi = firstNavLink.parentElement; // li
const article = document.querySelector("article");
const nextAfterArticle = article.nextElementSibling; // section
const ul = document.querySelector(".nav-list");
const allLiChildren = ul.children;
const footerToBody = footer.parentElement; // body
const headerFromLink = firstNavLink.closest("header");

console.log(navInsideHeader, parentLi, nextAfterArticle, allLiChildren, headerFromLink);

// STEP 3 - Task 9.3: change things
// change h1
h1.textContent = "My DOM Journey (stephenmuriu.com)";

//first nav-link to MDN
firstNavLink.href = "https://developer.mozilla.org";
firstNavLink.target = "_blank";
firstNavLink.rel = "noopener";

//dataset
console.log(article.dataset.id, article.dataset.category); // art-1 news
article.dataset.status = "reviewed";

// classList - NO element.style allowed
const firstContent = document.querySelector(".content");
const secondContent = document.querySelectorAll(".content")[1];
firstContent.classList.add("highlight");
secondContent.classList.toggle("accent");

// THE INJECTION DEMO
const userInput = '<img src="x" onerror="alert(\'hacked!\')">';
document.getElementById("unsafe").innerHTML = userInput; // will run - DANGEROUS
document.getElementById("safe").textContent = userInput; // will show as text - SAFE
// Which to use for user comment? textContent, because it does NOT parse HTML so script cannot run.

//STEP 4 - Task 9.4: create, remove, clone
// TODO 1
function addNavItem(text, href) {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.className = "nav-link";
  a.href = href;
  a.textContent = text; // must use textContent
  li.append(a);
  document.querySelector(".nav-list").append(li);
}
addNavItem("Blog", "#blog");
addNavItem("Portfolio", "#portfolio");

//: paragraph BEFORE first paragraph
const newPara = document.createElement("p");
newPara.textContent = "This is an inserted intro paragraph.";
article.prepend(newPara); // or article.insertBefore(newPara, firstContent)

//clone first nav li
const firstLi = document.querySelector(".nav-list li");
const clonedLi = firstLi.cloneNode(true); // deep clone
clonedLi.textContent = "Cloned";
document.querySelector(".nav-list").prepend(clonedLi);

// TODO 4: remove footer
// footer.remove();

// ================= STEP 5 - COMMIT =================
// git add dom-practice.html dom.js
// git commit -m "Add: element selection and traversal"
// git commit -m "Add: content, attribute and class changes"
// git commit -m "Add: create and remove elements"
// git push