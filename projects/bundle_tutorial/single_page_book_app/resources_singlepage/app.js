import { initTOC, tocRoot } from "./toc_loader.js";
import { loadPage } from "./page_loader.js";
import { initializePyodideHelper } from "./pyodide_helper.js";
import { registerPageSectionEvents} from "./page_sections";
import Split from 'split.js';


function _triggerWindowResizeToForceImGuiSizeRefresh() {
    // Important:
    // When the canvas size is updated, we need to trigger a window resize event
    // to force ImGui to recompute its size
    if (typeof window.dispatchEvent === "function") {
        window.dispatchEvent(new Event("resize"));
    }
}

function _createSplitBetweenContentAndImGuiCanvas()
{
    Split(['#doc-layout-container', '#imgui-canvas-div'], {
        sizes: [60, 40],
        minSize: 0,
        gutterSize: 8,
        cursor: 'col-resize',
        onDrag: () => {
            _triggerWindowResizeToForceImGuiSizeRefresh();
        }
    });
}

async function initializeAll() {
    await initTOC();

    registerPageSectionEvents();

    _createSplitBetweenContentAndImGuiCanvas();

    // Load the root page
    const rootPage = tocRoot();
    loadPage(rootPage.file + ".md");

    // Initialize Pyodide environment
    await initializePyodideHelper();
}

document.addEventListener("DOMContentLoaded", initializeAll);
