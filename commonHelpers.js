import{a as h,S as m}from"./assets/vendor-84b78643.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const g="36656035-48a6982af67e259d89e542d44";async function u(o,r=1,a=40){const i=`https://pixabay.com/api/?key=${g}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true&page=${r}&per_page=${a}`,{data:e}=await h.get(i);return e}const s={searchForm:document.getElementById("search-form"),searchQueryInput:document.getElementsByName("searchQuery")[0],gallery:document.querySelector(".gallery"),loadMoreBtn:document.querySelector(".load-more")};let f=new m(".gallery-link",{captions:!0}),l="",c=1;s.searchForm.addEventListener("submit",async o=>{if(o.preventDefault(),c=1,l=s.searchQueryInput.value.trim(),!l){Notiflix.Report.failure("Please enter a request","OK"),s.searchQueryInput.value="";return}try{const{hits:r,totalHits:a}=await u(l,c);if(a===0){v();return}a<=40?Notiflix.Report.info("Search Results",`Hooray! We found ${a} images. Sorry, but that's all I could find. You have reached the end of your search.`,"OK"):Notiflix.Report.success("Search Results",`Hooray! We found ${a} images.`,"OK"),b(r,a),d(r)}catch(r){console.error("Search error:",r),Notiflix.Report.failure("Search Error","Sorry, there was an error retrieving the images. Please try again later.","OK")}});s.loadMoreBtn.addEventListener("click",async o=>{c+=1;try{const{hits:r}=await u(l,c);d(r),s.gallery.insertAdjacentHTML("beforeend",p(r))}catch(r){console.error("Load more error:",r)}f.refresh()});function b(o){s.gallery.innerHTML=p(o),f.refresh()}function d(o){o.length>=40?s.loadMoreBtn.style.display="block":(s.loadMoreBtn.style.display="none",Notiflix.Report.info("End of Results","We're sorry, but you've reached the end of search results.","OK"))}function v(){s.searchQueryInput.value="",s.gallery.innerHTML="",s.loadMoreBtn.style.display="none",Notiflix.Report.failure("No results found","Please try another search","OK")}function p(o){return o.map(({webformatURL:r,largeImageURL:a,tags:i,likes:e,views:t,comments:n,downloads:y})=>`
        <div class="photo-card">
          <a class="gallery-link" href="${a}" title="${i}" >
            <img src="${r}" alt="${i}" width="300" loading="lazy">
          </a>
          <div class="info">
            <p class="info-item">
            <b>Likes</b> ${e}</p>
            <p class="info-item">
            <b>Views</b> ${t}</p>
            <p class="info-item">
            <b>Comments</b> ${n}</p>
            <p class="info-item">
            <b>Downloads</b> ${y}</p>
          </div>
        </div>
      `).join("")}
//# sourceMappingURL=commonHelpers.js.map
