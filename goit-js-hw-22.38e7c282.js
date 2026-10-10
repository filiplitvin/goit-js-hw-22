let e=document.querySelector(".gallery"),t=document.querySelector(".load-more"),o=1,a=o=>{fetch(`https://pixabay.com/api/?key=57977098-9d10a909c0d22216c0d89a98b&${o}`).then(e=>{if(!e.ok)throw Error(`Помилка: ${e.statusText}`);return e.json()}).then(o=>{let a=o.hits.map(e=>`
          <li class="gallery-item">
            <img> src="${e.webformatURL}" alt="${e.views}"
            
            <p>Likes: ${e.likes}</p>
            <p>Views: ${e.views}</p>
            <p>Comments: ${e.comments}</p>
            <p>Downloads: ${e.downloads}</p>
          </li>
        `).join("");e.insertAdjacentHTML("beforeend",a),o.hits.length<12&&(t.disabled=!0,t.textContent="Зображень більше нема")}).catch(e=>{console.log(e)})},r=new URLSearchParams({editors_choice:!0,image_type:"photo",page:1,per_page:12});a(r),t.addEventListener("click",()=>{o+=1,a(r=new URLSearchParams({editors_choice:!0,image_type:"photo",page:o,per_page:12}))});
//# sourceMappingURL=goit-js-hw-22.38e7c282.js.map
