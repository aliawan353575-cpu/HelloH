/* =====================================================================
   CONFIGURATION: edit here
   CONTACT FORM: not connected. To enable it, sign up with a form service
   (e.g. Formspree, Basin, Getform) that accepts JSON POSTs, then paste its
   endpoint URL into formEndpoint below. Never put secret keys here: this
   file is public. Until formEndpoint is set the form says nothing was sent.
   ===================================================================== */
window.SITE_CONFIG = {
  businessName: "Vantorax Studio Roofing",   // working name
  siteUrl: "https://aliawan353575-cpu.github.io/HelloH/",
  email: "",            // real email, or leave blank (hidden if blank)
  phone: "",            // real phone, or leave blank
  formEndpoint: "",     // e.g. "https://formspree.io/f/xxxx" (not set)
  currency: "$",
  prices: { foundation: "799", growth: "1,499", authority: "2,499" }  // also edit the default text in index.html
};
/* ===== END CONFIGURATION ===== */
(function(){var c=window.SITE_CONFIG||{};
document.querySelectorAll("[data-brand]").forEach(function(e){if(c.businessName)e.textContent=c.businessName});
document.querySelectorAll("[data-price]").forEach(function(e){var p=c.prices&&c.prices[e.dataset.price];if(p)e.textContent=(e.textContent.charAt(0)==="$"?c.currency:"")+p});
var y=document.getElementById("yr");if(y)y.textContent=new Date().getFullYear();
var b=document.querySelector(".burger"),n=document.getElementById("nav");
if(b)b.addEventListener("click",function(){var o=n.classList.toggle("open");b.setAttribute("aria-expanded",o)});
document.addEventListener("keydown",function(e){if(e.key==="Escape"&&n&&n.classList.contains("open")){n.classList.remove("open");b.setAttribute("aria-expanded","false");b.focus()}});
var a=document.getElementById("alt-contact");
if(a&&(c.email||c.phone)){var t="<p>Prefer direct contact? ";if(c.email)t+='<a href="mailto:'+encodeURI(c.email)+'">'+c.email.replace(/[<>&"]/g,"")+"</a> ";if(c.phone)t+=c.phone.replace(/[<>&"]/g,"");a.innerHTML=t+"</p>"}
})();
(function(){var f=document.getElementById("inq"),st=document.getElementById("st"),c=window.SITE_CONFIG||{};if(!f)return;
function setErr(el,m){var p=el.closest(".fld"),e=p.querySelector(".err");if(m){if(!e){e=document.createElement("p");e.className="err";e.id=el.id+"-e";p.appendChild(e)}e.textContent=m;el.setAttribute("aria-invalid","true");el.setAttribute("aria-describedby",e.id)}else{if(e)e.remove();el.removeAttribute("aria-invalid")}}
function ok(){var bad=null;f.querySelectorAll("[required]").forEach(function(el){var m="";if(el.type==="checkbox"?!el.checked:!el.value.trim())m="This field is required.";else if(el.type==="email"&&!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(el.value))m="Enter a valid email address.";setErr(el,m);if(m&&!bad)bad=el});
var u=document.getElementById("url");if(u.value&&!/^https?:\/\/.+\..+/.test(u.value)){setErr(u,"Enter a full URL starting with https://");bad=bad||u}else setErr(u,"");if(bad){bad.focus();return false}return true}
f.addEventListener("submit",function(e){e.preventDefault();st.className="";if(!ok()){st.className="bad";st.textContent="Please fix the highlighted fields.";return}
if(!c.formEndpoint){st.className="bad";st.textContent="This form is not connected yet, so nothing was sent. Set formEndpoint at the top of script.js.";return}
var d={};new FormData(f).forEach(function(v,k){d[k]=v});st.textContent="Sending…";
fetch(c.formEndpoint,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(d)}).then(function(r){if(!r.ok)throw 0;st.className="ok";st.textContent="Thanks. Your inquiry was sent.";f.reset()}).catch(function(){st.className="bad";st.textContent="Sorry, sending failed. Please try again later."})})})();
/* ===== Anchor navigation: focus management, scrollspy, unknown-hash notice ===== */
(function(){var nf=document.getElementById("notfound"),links=[].slice.call(document.querySelectorAll(".nav a:not(.btn)"));
function go(){var id=decodeURIComponent(location.hash.slice(1)),t=id&&document.getElementById(id);if(nf)nf.hidden=!(id&&!t&&id!=="main");
if(t){var h=t.querySelector("h1,h2");if(h){h.setAttribute("tabindex","-1");h.focus({preventScroll:true})}}}
window.addEventListener("hashchange",function(){go();var nv=document.getElementById("nav"),b=document.querySelector(".burger");if(nv){nv.classList.remove("open");if(b)b.setAttribute("aria-expanded","false")}});
if(location.hash)go();
if("IntersectionObserver"in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)links.forEach(function(a){if(a.getAttribute("href")==="#"+e.target.id)a.setAttribute("aria-current","true");else a.removeAttribute("aria-current")})})},{rootMargin:"-40% 0px -55% 0px"});document.querySelectorAll(".page").forEach(function(s){io.observe(s)})}})();
