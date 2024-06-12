class energyDrink extends HTMLElement {
    constructor() {
        super();
    }           
        connectedCallback() {
            const jsonFilePath = this.getAttribute('data-json')

            // Fetch data from json file 
            fetch(jsonFilePath) 
                .then(response => response.json())
                .then(data => {
                    const drinkCard = data.energyDrink;
            this.setAttribute("class", "flex justify-center w-full mt-[50px]")
            const productCardArr = drinkCard.map(product => `
                <subpage-card 
                    product-img-url="${product.productImgUrl}" 
                    product-title="${product.productTitle}" 
                    product-size="${product.productSize}" 
                    product-price="${product.productPrice}" 
                    button-bg-color="${product.buttonBgColor}" 
                    button-title="${product.buttonTitle}" 
                ></subpage-card>
                `).join('');
            this.innerHTML = `
                <div id="card-tab-container" class="flex justify-center w-[960px] flex-wrap">
                    ${productCardArr}
                </div>
            `;
        })
        .catch(error => console.error('Error fetching JSON:', error));
    }
}

customElements.define("drink-product-generator", energyDrink);