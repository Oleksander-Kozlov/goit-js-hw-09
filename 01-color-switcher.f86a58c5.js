const t=document.querySelector("body"),e=document.querySelector("body button[data-start]"),r=document.querySelector("body button[data-stop]");e.addEventListener("click",(function(){e.setAttribute("disabled","true"),o=setInterval((()=>{const e=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`;t.style.backgroundColor=e}),1e3)}));let o=null;r.addEventListener("click",(function(){clearInterval(o),e.removeAttribute("disabled","true"),e.setAttribute("active","true")}));
//# sourceMappingURL=01-color-switcher.f86a58c5.js.map