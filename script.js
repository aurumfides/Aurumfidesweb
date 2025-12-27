const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const burger = document.getElementById("burger");
const mobileMenu = document.getElementById("mobileMenu");

function setMenu(open) {
  if (!burger || !mobileMenu) return;
  burger.setAttribute("aria-expanded", String(open));
  mobileMenu.style.display = open ? "block" : "none";
  mobileMenu.setAttribute("aria-hidden", String(!open));
}

if (burger && mobileMenu) {
  setMenu(false);

  burger.addEventListener("click", () => {
    const isOpen = burger.getAttribute("aria-expanded") === "true";
    setMenu(!isOpen);
  });

  mobileMenu.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => setMenu(false));
  });
}

const notifyBtn = document.getElementById("notifyBtn");
if (notifyBtn) {
  notifyBtn.addEventListener("click", () => {
    const email = document.getElementById("email")?.value?.trim();
    if (!email) {
      alert("Add an email (placeholder). We can wire this to a real list later.");
      return;
    }
    alert("Noted (placeholder). Next step: connect to a real email list provider.");
  });
}
