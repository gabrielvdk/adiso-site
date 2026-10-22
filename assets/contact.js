// Spambescherming zonder server: het mailadres staat niet als geheel in de HTML,
// maar wordt pas in de browser samengesteld. Bots die alleen HTML lezen zien het niet.
document.querySelectorAll("a.mail[data-u][data-d]").forEach(function (a) {
  var address = a.dataset.u + "@" + a.dataset.d;
  var subject = a.dataset.s ? "?subject=" + encodeURIComponent(a.dataset.s) : "";
  a.href = "mailto:" + address + subject;
  a.textContent = address;
});
