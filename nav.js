const UNITS = [
  { number: "", title: "Start of Year", slug: "start-of-year" },
  { number: "1", title: "13 Colonies", slug: "13-colonies" },
  { number: "2", title: "The Triangle Trade", slug: "triangle-trade" },
  { number: "3", title: "Revolutionary Voices", slug: "revolutionary-voices" },
  { number: "4", title: "The Constitution", slug: "constitution" },
  { number: "5", title: "Semester Capstone", slug: "capstone-1" },
  { number: "6", title: "SCOTUS", slug: "scotus" },
  { number: "7", title: "The Early Republic", slug: "early-republic" },
  { number: "8", title: "Westward Expansion", slug: "westward-expansion" },
  { number: "9", title: "The Civil War", slug: "civil-war" },
  { number: "10", title: "Semester 2 Capstone", slug: "capstone-2" }
];

document.addEventListener("DOMContentLoaded", function () {
  var nav = document.getElementById("main-nav");
  if (!nav) return;

  // Determine if we are on the homepage or a unit page
  var path = window.location.pathname;
  var isUnitPage = path.indexOf("/units/") !== -1;

  // Build correct relative paths
  var homeHref = isUnitPage ? "../index.html" : "index.html";
  var unitBase = isUnitPage ? "" : "units/";

  // Create inner wrapper
  var inner = document.createElement("div");
  inner.className = "nav-inner";

  // Site title link
  var titleLink = document.createElement("a");
  titleLink.className = "nav-site-title";
  titleLink.href = homeHref;
  titleLink.textContent = "Mr. B\u2019s Social Studies";
  inner.appendChild(titleLink);

  // Nav links container
  var linksContainer = document.createElement("div");
  linksContainer.className = "nav-links";

  // Determine the current page slug
  var currentSlug = "";
  if (isUnitPage) {
    var filename = path.split("/").pop();
    currentSlug = filename.replace(".html", "");
  }

  // Build unit links
  for (var i = 0; i < UNITS.length; i++) {
    var unit = UNITS[i];
    var link = document.createElement("a");
    link.className = "nav-link";
    link.href = unitBase + unit.slug + ".html";

    // Display label
    if (unit.number) {
      link.textContent = "Unit " + unit.number;
    } else {
      link.textContent = unit.title;
    }

    // Active state
    if (isUnitPage && currentSlug === unit.slug) {
      link.classList.add("active");
    }

    linksContainer.appendChild(link);
  }

  inner.appendChild(linksContainer);

  // Hamburger toggle button
  var toggle = document.createElement("button");
  toggle.className = "nav-toggle";
  toggle.setAttribute("aria-label", "Toggle navigation menu");
  toggle.setAttribute("aria-expanded", "false");
  for (var j = 0; j < 3; j++) {
    var span = document.createElement("span");
    toggle.appendChild(span);
  }
  inner.appendChild(toggle);

  nav.appendChild(inner);

  // Toggle click handler
  toggle.addEventListener("click", function () {
    var isOpen = linksContainer.classList.toggle("open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // Close menu when a link is clicked (mobile)
  var allLinks = linksContainer.querySelectorAll(".nav-link");
  for (var k = 0; k < allLinks.length; k++) {
    allLinks[k].addEventListener("click", function () {
      linksContainer.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  }
});
