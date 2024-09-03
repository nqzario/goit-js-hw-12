import{a as g,S as f,i as d}from"./assets/vendor-09d7c26e.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();const p=document.querySelector(".card-container");function y(o){const e=o.hits.reduce((r,i)=>{const{webformatURL:t,largeImageURL:s,tags:a,likes:v,views:w,comments:_,downloads:E}=i;return r+=`<div class="container-img">
      <a href="${s}"><img src="${t}" alt="${a}"></a>
      <ul class="img_list">
        <li class="img_item">
          <h3 class="img_title">Likes</h3>
          <span class="img_text">${v}</span>
        </li>
        <li class="img_item">
          <h3 class="img_title">Views</h3>
          <span class="img_text">${w}</span>
        </li>
        <li class="img_item">
          <h3 class="img_title">comments</h3>
          <span class="img_text">${_}</span>
        </li>
        <li class="img_item">
          <h3 class="img_title">downloads</h3>
          <span class="img_text">${E}</span>
        </li>
      </ul>
        </div>`},"");p.insertAdjacentHTML("beforeend",e)}const P="43780591-6ab37bb22e1af39025cb54e89";g.defaults.baseURL="https://pixabay.com/api/";const b=15;function L(o,e){const r={per_page:b,page:e,key:P,q:o,safesearch:!0,image_type:"photo",orientation:"horizontal"};return g.get("",{params:r}).then(i=>i.data)}const u=document.querySelector(".search-form"),x=u.querySelector("input"),h=document.querySelector(".loader"),n=document.querySelector(".button-loader");let l="",c=0,m=0;u.addEventListener("submit",async o=>{o.preventDefault(),p.innerHTML="",h.classList.remove("is-hidden"),n.classList.add("is-hidden"),l=x.value.trim(),c=1;try{const e=await L(l,c);if(e.total===0||l==="")throw new Error("Sorry, there are no images matching your search query. Please try again!");y(e),new f(".container-img a").refresh(),m=Math.ceil(e.total/b),m>1?n.classList.remove("is-hidden"):d.show({title:"We're sorry, but you've reached the end of search results.",position:"topRight"})}catch(e){d.show({title:e.message,position:"topRight",backgroundColor:"red"})}u.reset(),h.classList.add("is-hidden")});const S=()=>{const r=document.querySelector(".container-img:last-child").getBoundingClientRect().height*2;window.scrollBy({top:r,left:100,behavior:"smooth"})};n.addEventListener("click",async function o(){try{c+=1;const e=await L(l,c);y(e),new f(".container-img a").refresh(),S(),c>=m&&(n.classList.add("is-hidden"),n.removeEventListener("click",o),d.show({title:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch{}});
//# sourceMappingURL=commonHelpers.js.map
