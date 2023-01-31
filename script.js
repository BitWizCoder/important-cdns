// Bootstrap
function bootstrap() {
  var copyText = document.getElementById("bootstrap");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);

  var tooltip = document.getElementById("bsToolti");
  tooltip.innerHTML = "BootStrap CDN Copied";
}

// Bootstrap JS
function bootstrapJs() {
  var copyText = document.getElementById("bootstrapjs");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);

  var tooltip = document.getElementById("bsjsToolti");
  tooltip.innerHTML = "Tailwindcss CDN Copied";
}

// Fontawesom
function fontawesome() {
  var copyText = document.getElementById("fontawesome");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);

  var tooltip = document.getElementById("faToolti");
  tooltip.innerHTML = "FontAwesome CDN Copied";
}

// Tailwindcss
function Tailwindcss() {
  var copyText = document.getElementById("tailwindcss");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);

  var tooltip = document.getElementById("twcToolti");
  tooltip.innerHTML = "Tailwindcss CDN Copied";
}

function outFunc() {
  var tooltip = document.querySelectorAll(".tooltitext");
  tooltip.forEach((item) => {
    item.innerHTML = "Copy to clipboard";
  });
}

// const names = ['bootstrap', 'fontawesome'];
// let i = 0
// while (i < names.length) {
//   console.log(names[i]);
//   i++;
// }
