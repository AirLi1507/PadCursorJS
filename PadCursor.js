// PadCursorJS
//
// iPad Like Cursor for HTML using JavaScript and CSS :D
//
// Credit: Air Li (https://github.com/goodair220917/ or https://github.com/AirLi1507)
//
// Github Repo: (https://github.com/AirLi1507/PadCursorJS)
//
// Last updated: 29/04/2024


//Inserting CSS
var stylesheet = document.createElement("link");

stylesheet.rel = "stylesheet";
stylesheet.href - "https://raw.githubusercontent.com/AirLi1507/PadCursorJS/main/cursorCSS.css";

document.head.appendChild(styleSheet);

//Inserting Cursor Div Element
var cursorDiv = document.createElement("div");
cursorDiv.id = "Cursor";
var padCursorDiv = document.createElement("div");
padCursorDiv.id = "padCursor";
cursorDiv.appendChild(padCursorDiv);
document.body.appendChild(cursorDiv);

//The part that magic code happens :)

function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    const CursorDiv = document.getElementById('Cursor');
    const customCursor = document.getElementById('padCursor');
  
    if (!isMobileDevice()) {
      document.addEventListener("mousemove", function(e) {
        const isHoveringOverText = e.target.nodeName.toLowerCase() === "p" || e.target.nodeName.toLowerCase() === "span" || e.target.nodeName.toLowerCase() === "a" || e.target.nodeName.toLowerCase() === "h1" || e.target.nodeName.toLowerCase() === "h2" || e.target.nodeName.toLowerCase() === "h3" || e.target.nodeName.toLowerCase() === "h4" || e.target.nodeName.toLowerCase() === "h5" || e.target.nodeName.toLowerCase() === "h6"
        CursorDiv.style.top = e.clientY - CursorDiv.offsetHeight / 2 + "px";

        if (!isHoveringOverText) {
            CursorDiv.style.left = e.clientX - CursorDiv.offsetWidth / 2 + "px"; // Adjust the position based on the center of the custom cursor
            const unhover = document.getElementsByClassName('unhovered');
            if (unhover) {
                customCursor.style.animation = "unhover-text 0.2s ease forwards";
                customCursor.classList.remove('unhovered');
            } else {
                customCursor.style.animation = "cursor-load 0.5s forwards";

            }
        } else {
            CursorDiv.style.left = e.clientX - CursorDiv.offsetWidth / 2  + "px"; // Adjust the position based on the center of the custom cursor
            customCursor.classList.add('unhovered');
            customCursor.style.animation = "hovering-text 0.2s forwards";
        }
      });
  
      // Prevent the default cursor from showing up on certain elements
      const interactiveElements = document.querySelectorAll('a, button, input, select, textarea');
      interactiveElements.forEach(function(element) {
        element.style.cursor = 'none';
      });
    } else {
      // Do not display the custom cursor for mobile devices
      customCursor.style.display = 'none';
    }
  });
