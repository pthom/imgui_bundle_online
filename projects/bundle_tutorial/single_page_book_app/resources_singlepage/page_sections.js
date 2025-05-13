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
    const contentArea = document.getElementById("content-area");
    const h2Elements = contentArea.querySelectorAll("h2");
    const sectionsContainer = document.getElementById("page-sections-panel");

    // Clear previous breadcrumbs
    sectionsContainer.innerHTML = "";

    // Create a list of H2 headings as vertical links
    h2Elements.forEach((h2) => {
        if (!h2.id) {
            // Create a slug from the text if no ID exists
            const slug = h2.textContent.toLowerCase().replace(/\s+/g, '-');
            h2.id = slug;
        }

        const link = document.createElement("a");
        link.href = `#${h2.id}`;
        link.textContent = h2.textContent;
        sectionsContainer.appendChild(link);
    });
}
