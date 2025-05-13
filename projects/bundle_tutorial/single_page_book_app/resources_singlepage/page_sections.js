// Toggle contents panel logic
const pageSectionsBtn = document.getElementById("page-sections-btn");
const pageSectionsPanel = document.getElementById("page-sections-panel");
let pageSectionsPanelVisible = false;

export function registerPageSectionEvents() {
    pageSectionsBtn.addEventListener("click", (e) => {
        pageSectionsPanelVisible = !pageSectionsPanelVisible;
        pageSectionsPanel.classList.toggle("active", pageSectionsPanelVisible);
        e.stopPropagation();
    });

    // Close panel when clicking outside
    document.addEventListener("click", (e) => {
        if (pageSectionsPanelVisible && !pageSectionsPanel.contains(e.target) && e.target !== pageSectionsBtn) {
            pageSectionsPanelVisible = false;
            pageSectionsPanel.classList.remove("active");
        }
    });
}


export function updatePageSections() {
    const contentArea       = document.getElementById("content-area");
    const h2Elements        = contentArea.querySelectorAll("h2");
    const sectionsContainer = document.getElementById("page-sections-panel");

    /* 1 – remember where the user was */
    const prevScrollTop = sectionsContainer.scrollTop;

    /* 2 – rebuild the list */
    sectionsContainer.innerHTML = "";
    const frag = document.createDocumentFragment();

    h2Elements.forEach((h2) => {
        if (!h2.id) {
            h2.id = h2.textContent
                .toLowerCase()
                .replace(/\s+/g, "-");
        }
        const link   = document.createElement("a");
        link.href    = `#${h2.id}`;
        link.textContent = h2.textContent;
        frag.appendChild(link);
    });

    sectionsContainer.appendChild(frag);

    /* 3 – restore scroll position so the list doesn’t jump */
    sectionsContainer.scrollTop = prevScrollTop;
}
