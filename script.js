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