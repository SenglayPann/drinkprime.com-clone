// This components loops through and generates product-cards from the product card component ---> component/productCard.js
class productCardList extends HTMLElement {
    constructor() {
        super();
    }           
    connectedCallback() {
        const productTitle = this.getAttribute('product-title')
        const jsonFilePath = this.getAttribute('data-json')

        // Fetch data from json file 
        fetch(jsonFilePath) 
            .then(response => response.json())
            .then(data => {
                const products = data.products;
                const collection = data.productCollection;
                const productCardArr = products.map(product => `
                <div class="mx-3 mb-6 w-[calc(50%_-_24px)] tab2:w-[calc(33.33%_-_24px)]">
                    <product-card
                        product-img-url="${product.productImgUrl}"
                        product-title="${product.productTitle}"
                        product-size="${product.productSize}"
                        product-price="${product.productPrice}"
                        button-bg-color="${product.buttonBgColor}"
                        button-title="${product.buttonTitle}">
                    </product-card>
                </div>
                `).join('');
                this.innerHTML = `
                <div class="mx-7 mt-[35px] des:mt-[45px] mb-5 tracking-[.12em]">
                    <div>
                        <h2 class="text-heading font-normalidadExteded tracking-[0.2em] text-stroke-4 tab:text-stroke-6 text-center">
                            ${productTitle}
                        </h2>
                    </div>
                    <div class="flex flex-wrap mx-auto tab3:mt-[-65px] des:mt-[-85px] tab3:max-w-[1320px] tab3:flex-nowrap justify-center">
                        ${productCardArr}
                    </div>
                </div>
    
                <div class="flex pt-[45px] pb-5 max-w-[1125px] mx-auto flex-col tab:flex-row">
                    <div class="px-6 mb-6">
                        <img src="${collection.productCollectionImg}" alt="">
                    </div>
                    <div class="flex flex-col px-6 mb-6">
                        <img src="${collection.PRLogoImg}" alt="">
                        <div class="mx-auto my-6">
                            <button class="font-normalidadExteded text-[14px] text-stroke-1 px-6 border-solid border-black border-[1px] text-white bg-black hover:text-black hover:bg-transparent min-w-[180px] max-w-[199px] h-[52px] text-center tracking-[0.2em]">
                                SHOP ${productTitle}
                            </button>
                        </div>
                    </div>
                </div>
                `;
            })
            .catch(error => console.error('Error fetching JSON:', error));
    }
}
        
customElements.define('product-card-generator', productCardList);
