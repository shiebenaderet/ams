var SEMESTER_1 = [
  { number: "", title: "Who Are We?", slug: "introduction" },
  { number: "1", title: "The 13 Colonies", slug: "13-colonies" },
  { number: "2", title: "Road to Revolution", slug: "road-to-revolution" },
  { number: "3", title: "Voices of the Revolution", slug: "voices-of-revolution" },
  { number: "4", title: "The Constitution", slug: "constitution" },
  { number: "5", title: "Checks & Balances", slug: "checks-and-balances" },
  { number: "", title: "Semester 1 Capstone", slug: "capstone-1" }
];

var SEMESTER_2 = [
  { number: "6", title: "SCOTUS", slug: "scotus" },
  { number: "7", title: "The Early Republic", slug: "early-republic" },
  { number: "8", title: "Westward Expansion", slug: "westward-expansion" },
  { number: "9", title: "The Civil War", slug: "civil-war" },
  { number: "", title: "Semester 2 Capstone", slug: "capstone-2" }
];

document.addEventListener("DOMContentLoaded", function () {
  var nav = document.getElementById("main-nav");
  if (!nav) return;

  var path = window.location.pathname;
  var isUnitPage = path.indexOf("/units/") !== -1;
  var homeHref = isUnitPage ? "../index.html" : "index.html";
  var unitBase = isUnitPage ? "" : "units/";
  var familiesHref = isUnitPage ? "../families.html" : "families.html";

  var currentSlug = "";
  if (isUnitPage) {
    currentSlug = path.split("/").pop().replace(".html", "");
  }
  var currentPage = path.split("/").pop();

  var inSem1 = SEMESTER_1.some(function (u) { return u.slug === currentSlug; });
  var inSem2 = SEMESTER_2.some(function (u) { return u.slug === currentSlug; });

  var inner = document.createElement("div");
  inner.className = "nav-inner";

  var titleLink = document.createElement("a");
  titleLink.className = "nav-site-title";
  titleLink.href = homeHref;
  titleLink.textContent = "Mr. B\u2019s Social Studies";
  inner.appendChild(titleLink);

  var linksContainer = document.createElement("div");
  linksContainer.className = "nav-links";

  var homeLink = document.createElement("a");
  homeLink.className = "nav-link";
  homeLink.href = homeHref;
  homeLink.textContent = "Home";
  if (!isUnitPage && currentPage !== "families.html") {
    homeLink.classList.add("active");
  }
  linksContainer.appendChild(homeLink);

  function buildDropdown(label, units, isActiveSemester) {
    var dropdown = document.createElement("div");
    dropdown.className = "nav-dropdown";

    var trigger = document.createElement("button");
    trigger.className = "nav-dropdown-trigger";
    if (isActiveSemester) trigger.classList.add("active");

    var triggerText = document.createTextNode(label + " ");
    trigger.appendChild(triggerText);
    var arrow = document.createElement("span");
    arrow.className = "nav-arrow";
    arrow.textContent = "\u25BE";
    trigger.appendChild(arrow);
    dropdown.appendChild(trigger);

    var menu = document.createElement("div");
    menu.className = "nav-dropdown-menu";

    for (var i = 0; i < units.length; i++) {
      var unit = units[i];
      var link = document.createElement("a");
      link.className = "nav-dropdown-link";
      link.href = unitBase + unit.slug + ".html";

      if (unit.number) {
        link.textContent = "Unit " + unit.number + ": " + unit.title;
      } else {
        link.textContent = unit.title;
      }

      if (currentSlug === unit.slug) {
        link.classList.add("active");
      }

      menu.appendChild(link);
    }

    dropdown.appendChild(menu);

    dropdown.addEventListener("mouseenter", function () {
      menu.classList.add("open");
      trigger.classList.add("open");
    });
    dropdown.addEventListener("mouseleave", function () {
      menu.classList.remove("open");
      trigger.classList.remove("open");
    });

    trigger.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      var wasOpen = menu.classList.contains("open");

      var allMenus = linksContainer.querySelectorAll(".nav-dropdown-menu");
      var allTriggers = linksContainer.querySelectorAll(".nav-dropdown-trigger");
      for (var j = 0; j < allMenus.length; j++) {
        allMenus[j].classList.remove("open");
        allTriggers[j].classList.remove("open");
      }

      if (!wasOpen) {
        menu.classList.add("open");
        trigger.classList.add("open");
      }
    });

    return dropdown;
  }

  linksContainer.appendChild(buildDropdown("Semester 1", SEMESTER_1, inSem1));
  linksContainer.appendChild(buildDropdown("Semester 2", SEMESTER_2, inSem2));

  var familiesLink = document.createElement("a");
  familiesLink.className = "nav-link";
  familiesLink.href = familiesHref;
  familiesLink.textContent = "For Families";
  if (currentPage === "families.html") {
    familiesLink.classList.add("active");
  }
  linksContainer.appendChild(familiesLink);

  var canvasLink = document.createElement("a");
  canvasLink.className = "nav-link";
  canvasLink.href = "https://edmonds15.instructure.com/login/saml";
  canvasLink.target = "_blank";
  canvasLink.rel = "noopener";
  canvasLink.textContent = "Canvas";
  linksContainer.appendChild(canvasLink);

  inner.appendChild(linksContainer);

  var toggle = document.createElement("button");
  toggle.className = "nav-toggle";
  toggle.setAttribute("aria-label", "Toggle navigation menu");
  toggle.setAttribute("aria-expanded", "false");
  for (var j = 0; j < 3; j++) {
    toggle.appendChild(document.createElement("span"));
  }
  inner.appendChild(toggle);

  nav.appendChild(inner);

  toggle.addEventListener("click", function () {
    var isOpen = linksContainer.classList.toggle("open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  var allNavLinks = linksContainer.querySelectorAll(".nav-link, .nav-dropdown-link");
  for (var k = 0; k < allNavLinks.length; k++) {
    allNavLinks[k].addEventListener("click", function () {
      linksContainer.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  }

  document.addEventListener("click", function (e) {
    if (!nav.contains(e.target)) {
      var allMenus = linksContainer.querySelectorAll(".nav-dropdown-menu");
      var allTriggers = linksContainer.querySelectorAll(".nav-dropdown-trigger");
      for (var m = 0; m < allMenus.length; m++) {
        allMenus[m].classList.remove("open");
        allTriggers[m].classList.remove("open");
      }
    }
  });
});
