// Add bootstrap classes to elements that cannot (always) be controlled in template
$(document).ready(function() {
    $("#theme-sidebar-nav ul").addClass("nav flex-column");
    $("#theme-sidebar-nav li").addClass("nav-item");
    $("#theme-sidebar-nav a").addClass("nav-link");

    $("main.container table").addClass("table table-striped");
    $("main.container-fluid table").addClass("table table-striped");

    $("main.container img").addClass("img-fluid");
    $("main.container-fluid img").addClass("img-fluid");
});
