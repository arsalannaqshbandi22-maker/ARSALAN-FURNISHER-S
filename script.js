const WHATSAPP_NUMBER = "917006310207";
const menuButton = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");
if (menuButton && nav) menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});
document.querySelectorAll("#year").forEach((node) => node.textContent = new Date().getFullYear());
const form = document.querySelector("#order-form");
if (form) {
  const params = new URLSearchParams(window.location.search);
  const itemField = form.elements.namedItem("item");
  const itemQuery = params.get("item");
  if (itemQuery && itemField) {
    const option = Array.from(itemField.options).find((entry) => entry.value.toLowerCase() === itemQuery.toLowerCase());
    if (option) itemField.value = option.value;
  }
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const lines = [
      "Hello Arsalan Furnisher’s, I’d like to ask about a custom order.", "",
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone") || "Not provided"}`,
      `Looking for: ${data.get("item")}`,
      `Approximate width: ${data.get("width") ? `${data.get("width")} inches` : "Not sure yet"}`,
      `Approximate length: ${data.get("length") ? `${data.get("length")} inches` : "Not sure yet"}`,
      `Quantity: ${data.get("quantity")}`,
      `Colour/material/style: ${data.get("style") || "Open to suggestions"}`,
      `More details: ${data.get("notes") || "None"}`,
    ];
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener,noreferrer");
  });
}
