/* ===== CONFIGURATION (edit here) ===== */
window.SITE_CONFIG = {
  businessName: "Vantorax Studio Roofing",   // working name
  siteUrl: "https://aliawan353575-cpu.github.io/HelloH/",
  email: "",            // real email, or leave blank (hidden if blank)
  phone: "",            // real phone, or leave blank
  formEndpoint: "",     // e.g. a Formspree/Basin URL. Empty = form says "not connected"
  currency: "$",
  prices: { foundation: "799", growth: "1,499", authority: "2,499" }  // also edit default text in index.html
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
/* ===== View router: each page is a <section class="view"> in index.html ===== */
(function(){var views=[].slice.call(document.querySelectorAll(".view")),first=true;
function show(){var id=decodeURIComponent(location.hash.replace("#","")||"home"),v=document.getElementById(id);
if(!v||!v.classList.contains("view"))v=document.getElementById("404");
views.forEach(function(x){x.hidden=x!==v});document.title=v.dataset.title;
document.querySelectorAll(".nav a").forEach(function(a){if(a.getAttribute("href")==="#"+v.id)a.setAttribute("aria-current","page");else a.removeAttribute("aria-current")});
var nv=document.getElementById("nav"),bt=document.querySelector(".burger");if(nv){nv.classList.remove("open");if(bt)bt.setAttribute("aria-expanded","false")}
window.scrollTo(0,0);if(!first){v.focus({preventScroll:true})}first=false}
window.addEventListener("hashchange",show);show()})();
