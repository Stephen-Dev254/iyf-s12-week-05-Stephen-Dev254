# Week 5: DOM Manipulation — Interactive To-Do List

## Author
- **Name:**  Stephen Muriu 
- **GitHub:** @Stephen-Dev254
- **Date:** November 10, 2026

## Project Description
An interactive web application ecosystem that combines a fully functional, array-state driven To-Do List at the root directory alongside a robust DOM sandbox testing layer. The goal of this project is to implement performance-focused, secure event architectures that dynamically mutate HTML nodes based on real-time user inputs without degrading system performance.

## Technologies Used
- HTML5 (Semantic Structure)
- CSS3 (Aesthetics & Layouts)
- JavaScript (ES6+ Engine)

## Features
- **Array-State Synced To-Do List:** Maintains tasks inside a clean memory model list. It refuses empty or space-only input, automatically flushes input strings upon entry, and tracks uncompleted tasks live.
- **Unified Event Delegation:** Employs a single click tracker attached directly to parent containers to capture events on dynamically appended child list items automatically.
- **Cross-Site Scripting (XSS) Armor:** Forces text mutations exclusively via secure node parameters to ensure user inputs render explicitly as text strings instead of browser executable layout entities.
- **Bonus Inline Double-Click Editing:** Allows active tasks to be modified inline instantly. Users can hit Enter to submit text adjustments or Escape to completely abort changes and revert views cleanly.
- **Persisted Dark Mode Configuration:** Utilizes localized web cache settings to retain and sync theme preferences seamlessly across unexpected browser restarts.
- **Native Drag and Drop Integration:** Features a file content copier module driven by native drag-and-drop mechanics alongside traditional button triggers.

## How to Run
1. Clone this repository to your local directory:
   ```bash
   git clone https://github.com
   ```
2. Open the workspace root in VS Code.
3. Launch `index.html` (for the To-Do Application) or `dom-practice.html` (for the practice sandbox) utilizing the **Live Server** extension.
4. Press **F12** or right-click to choose **Inspect**, then head to the **Console** tab to review the clean output execution logs.

## Lessons Learned
- **Event Delegation Performance Gains:**
  Registering event handlers for individual items in massive lists causes extensive resource consumption. Binding a singular listener directly to the parent element wrapper container (`#todo-list`) allows developers to utilize `event.target.closest()` to identify rows contextually. New tasks appended later inherit listening pipelines smoothly without requiring separate binding configurations.
- **Defending the DOM Against Injection Attacks:**
  Using `innerHTML` to pipe raw, user-typed variables creates severe cross-site scripting vulnerabilities where hidden executable data strings can hijack browser memory contexts. Enforcing `.textContent` across all user entry points completely visualizes input text safely while rendering potential string injections totally inert.
- **Class-Driven Aesthetic Mutations:**
  Altering visual properties through immediate programmatic mutations like `element.style.color` breaks semantic style boundaries. Injecting or removing layout markers cleanly using the `.classList` API isolates functional logic from stylistic definitions.
- **Intercepting Form State Wipes:**
  Browser environments natively attempt to forward captured query attributes to server targets, causing an instant page reload that clears active variable storage spaces. Injecting `event.preventDefault()` straight inside structural form submissions neutralizes reload triggers and keeps the local state intact in memory.

## Challenges Faced
- **Scoping Variable Identifier Overlaps:**
  During form validation setups inside `dom.js`, creating variables via `const contactForm` and `const emailInputField` threw blocking syntax errors (`Uncaught SyntaxError: Identifier has already been declared`). By identifying these elements as previously established parameters from earlier lookup routines, removing the repetitive declaration markers resolved the namespace collision and restored clear runtime paths.
- **Resolving Folder Path 404 Resolution Breaks:**
  When separating daily micro-tasks, script resources initially generated broken `404 (Not Found)` browser console log exceptions. This pathing issue was diagnosed as an explicit directory casing mismatch. Resolving this required aligning the physical folder name exactly to the `daily-challenges/` lowercase hyphenated structure.
- **Controlling Multi-Layered Bubbling Triggers:**
  In row layouts containing multi-action vectors (like clicking a specific "Delete" button inside an active task list line), the click frequently bubbled upward, unintentionally triggering the row's state toggle event. Incorporating `event.stopPropagation()` directly inside child elements blocks context leakage up the DOM tree, locking actions down independently.

## Live Demo
[View Live Demo] https://stephen-dev254.github.io/iyf-s12-week-05-Stephen-Dev254/
