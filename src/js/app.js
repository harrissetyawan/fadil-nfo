fetch('./output.json')
  .then(response => response.json())
  .then(data => {

    const container = document.getElementById('content-wrapper__latest');
    let productList = '';
    data.forEach((product) => {
      // Your code to populate the HTML with the product data
      productList +=
        `<div id="content" class="p-2 w-36 h-max md:w-52 drop-shadow-md bg-white rounded-lg md:shrink-0">
        <img src="${product.product_img}" alt="" class="rounded-lg brightness-75 w-full">
        <div id="content-info" class="rounded-sm py-2">
          <p class="tracking-wide w-full font-normal text-[0.90rem] line-clamp-2 text-slate-950">
            ${product.product_name}</p>
          <hr>
          <span id="price-content" class="font-medium text-[0.90rem] tracking-tight text-slate-950">${product.product_price}</span>
        </div>
        <div class="flex gap-2 items-center justify-center">
          <button
            class="w-full py-1 bg-blue-950 text-slate-100 text-[0.90rem] md:text-base rounded tracking-wide font-semibold transition-colors hover:bg-slate-700 hover:text-blue-50 flex flex-row justify-center">
            Beli
          </button>
          <button type="menu" class="text-[0.90rem] tracking-tight">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.6"
              stroke="currentColor" class="w-6 h-6 stroke-slate-500 transition-all hover:stroke-blue-800">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <!-- PRODUCT MENU  -->
            <ul id="product-menu"
              class="bg-zinc-100 w-24 p-2 absolute z-50 text-left font-semibold rounded-md drop-shadow-md tracking-wide text-[0.80rem] leading-3 invisible">
              <li class="">Share</li>
              <li class="">Copy Link</li>
            </ul>
          </button>
        </div>
      </div>`;
      container.innerHTML = productList;
    });
  })
  .catch(error => {
    console.log('Error fetching JSON:', error);
  });

