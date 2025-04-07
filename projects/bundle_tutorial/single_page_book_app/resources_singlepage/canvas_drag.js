const canvasWindow = document.getElementById("canvas-window");
const titleBar = document.getElementById("canvas-title-bar");
const minimizeBtn = document.getElementById("minimize-btn");
const expandBtn = document.getElementById("expand-btn");
const maximizeBtn = document.getElementById("maximize-btn");

let isDragging = false;
let startX, startY, initialX, initialY;

// Window state management
let isVisible = false;
let windowState = "collapsed"; // "collapsed", "expanded", "maximized"

// Function to show the canvas window
export function showCanvasWindow() {
    canvasWindow.style.display = "block";
    isVisible = true;
    
    // If it's in collapsed state, expand it
    if (windowState === "collapsed") {
        expandWindow();
    }
}

// Function to hide the canvas window
export function hideCanvasWindow() {
    canvasWindow.style.display = "none";
    isVisible = false;
}

// Function to collapse the window
function collapseWindow() {
    canvasWindow.classList.add("collapsed");
    canvasWindow.classList.remove("expanded", "maximized");
    windowState = "collapsed";
}

// Function to expand the window
function expandWindow() {
    canvasWindow.classList.add("expanded");
    canvasWindow.classList.remove("collapsed", "maximized");
    windowState = "expanded";
}

// Function to maximize the window
function maximizeWindow() {
    canvasWindow.classList.add("maximized");
    canvasWindow.classList.remove("collapsed", "expanded");
    windowState = "maximized";
}

// Function to toggle the window visibility
export function toggleCanvasWindow() {
    if (!isVisible) {
        showCanvasWindow();
    } else {
        if (windowState === "collapsed") {
            expandWindow();
        } else {
            collapseWindow();
        }
    }
}

export function registerCanvasDragEvents() {
    // Dragging functionality
    titleBar.addEventListener("mousedown", (e) => {
        // Don't start dragging if clicked on buttons
        if (e.target.tagName === "BUTTON") return;
        
        isDragging = true;
        startX = e.clientX;
        startY = e.clientY;
        const rect = canvasWindow.getBoundingClientRect();
        initialX = rect.left;
        initialY = rect.top;
        document.body.style.userSelect = "none"; // Prevent text selection
    });

    document.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        
        // Don't allow dragging in maximized state
        if (windowState === "maximized") return;
        
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        canvasWindow.style.left = `${initialX + dx}px`;
        canvasWindow.style.top = `${initialY + dy}px`;
    });

    document.addEventListener("mouseup", () => {
        isDragging = false;
        document.body.style.userSelect = ""; // Restore text selection
    });

    // Window control buttons
    minimizeBtn.addEventListener("click", () => {
        collapseWindow();
    });

    expandBtn.addEventListener("click", () => {
        expandWindow();
    });

    maximizeBtn.addEventListener("click", () => {
        maximizeWindow();
    });
}