function toggleMenu(){document.getElementById("navLinks")?.classList.toggle("show")}
function closeMenu(){document.getElementById("navLinks")?.classList.remove("show")}
document.querySelectorAll(".reveal").forEach(el=>new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12}).observe(el));
const year=document.getElementById("year");if(year)year.textContent=new Date().getFullYear();
function sendEnquiry(event){
  event.preventDefault();
  const recipient="YOUR-COMPANY-EMAIL@example.com";
  const name=document.getElementById("name").value;
  const email=document.getElementById("email").value;
  const subject=document.getElementById("subject").value;
  const message=document.getElementById("message").value;
  const body=`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
  window.location.href=`mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
