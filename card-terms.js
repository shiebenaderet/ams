document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".card-term").forEach(function (chip) {
    chip.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      var card = chip.closest(".card");
      if (!card) return;
      var def = card.querySelector(".card-term-def[data-for='" + chip.dataset.term + "']");
      if (!def) return;
      def.classList.toggle("open");
    });
  });
});
