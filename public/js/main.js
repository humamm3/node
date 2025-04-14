if (localStorage.getItem("isSmall") === "yas") {
    sidebarId.classList.add("small-sidebar");
} else {
    sidebarId.classList.remove("small-sidebar");
}
const toggleSidebar = () => {
    if (localStorage.getItem("isSmall") === "yas") {
        localStorage.setItem("isSmall", "no");
        sidebarId.classList.remove("small-sidebar");
    } else {
    localStorage.setItem("isSmall", "yes");
    sidebarId.classList.toggle("small-sidebar");
    }
   };
