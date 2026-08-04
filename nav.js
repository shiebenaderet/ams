var SEMESTER_1 = [
  { number: "1", title: "Foundations & Identity", slug: "foundations-identity" },
  { number: "2", title: "Revolution: Ideas & Voices", slug: "revolution" },
  { number: "3", title: "Building a Government", slug: "building-a-government" }
];

var SEMESTER_2 = [
  { number: "4", title: "A New Nation & Its Economy", slug: "new-nation-economy" },
  { number: "5", title: "Expansion & Its Costs", slug: "expansion-costs" },
  { number: "6", title: "A Nation Divided", slug: "nation-divided" },
  { number: "7", title: "A Changing Nation", slug: "changing-nation" },
  { number: "8", title: "Reform & Civic Action", slug: "reform-civic-action" },
  { number: "", title: "End-of-Year Reflection", slug: "endofyear", root: true }
];

document.addEventListener("DOMContentLoaded", function () {
  var nav = document.getElementById("main-nav");
  if (!nav) return;

  var path = window.location.pathname;
  var isUnitPage = path.indexOf("/units/") !== -1;
  var homeHref = isUnitPage ? "../index.html" : "index.html";
  var unitBase = isUnitPage ? "" : "units/";
  var rootBase = isUnitPage ? "../" : "";
  var familiesHref = isUnitPage ? "../families.html" : "families.html";
  var reflectionHref = rootBase + "endofyear.html";
  var standardsHref = rootBase + "standards.html";

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
      link.href = unit.root ? (rootBase + unit.slug + ".html") : (unitBase + unit.slug + ".html");

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

  var reflectionLink = document.createElement("a");
  reflectionLink.className = "nav-link";
  reflectionLink.href = reflectionHref;
  reflectionLink.textContent = "Reflection";
  if (currentPage === "endofyear.html") {
    reflectionLink.classList.add("active");
  }
  linksContainer.appendChild(reflectionLink);

  var standardsLink = document.createElement("a");
  standardsLink.className = "nav-link";
  standardsLink.href = standardsHref;
  standardsLink.textContent = "Standards";
  if (currentPage === "standards.html") {
    standardsLink.classList.add("active");
  }
  linksContainer.appendChild(standardsLink);

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
