import { initTOC, tocRoot } from "./toc_loader.js";
import { loadPage } from "./page_loader.js";
import { registerCanvasDragEvents, hideCanvasWindow } from "./canvas_drag";
import { initializePyodideHelper } from "./pyodide_helper.js";
import { registerPageSectionEvents} from "./page_sections";

async function initializeAll() {
    await initTOC();

    registerPageSectionEvents();

    // Initialize canvas window but keep it hidden
    registerCanvasDragEvents();
    hideCanvasWindow();
    
    // Load the root page
    const rootPage = tocRoot();
    loadPage(rootPage.file + ".md");

    // Initialize Pyodide environment
    await initializePyodideHelper();
}

document.addEventListener("DOMContentLoaded", initializeAll);
