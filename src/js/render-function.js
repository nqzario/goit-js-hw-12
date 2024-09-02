export const divEl = document.querySelector('.card-container');
export  function renderPhoto(arrayHits) {
    // divEl.innerHTML = '';
    const markup = arrayHits.hits.reduce((value, hit) => {
        const { webformatURL, largeImageURL, tags, likes, views, comments, downloads } = hit;
        return value += `<div class="container-img">
      <a href="${largeImageURL}"><img src="${webformatURL}" alt="${tags}"></a>
      <ul class="img_list">
        <li class="img_item">
          <h3 class="img_title">Likes</h3>
          <span class="img_text">${likes}</span>
        </li>
        <li class="img_item">
          <h3 class="img_title">Views</h3>
          <span class="img_text">${views}</span>
        </li>
        <li class="img_item">
          <h3 class="img_title">comments</h3>
          <span class="img_text">${comments}</span>
        </li>
        <li class="img_item">
          <h3 class="img_title">downloads</h3>
          <span class="img_text">${downloads}</span>
        </li>
      </ul>
        </div>`
    }, '');
    divEl.insertAdjacentHTML('beforeend', markup);
}
