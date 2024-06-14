

class subpageDrinkProductGenerator extends HTMLElement {
    constructor() {
        super();
    };

    connectedCallback() {
        this.innerHTML = `
            <div id="card-tab-container" class="flex justify-center w-full max-w-[1320px] flex-wrap">
            </div>
        `;
        this.setAttribute("class", "flex justify-center w-full mt-[50px]");
        const jsonFilePath = this.getAttribute('data-json');
        fetch(jsonFilePath) 
        .then(response => response.json())
        .then(data => {
            const drinkSubPage = data.energyDrink;

            drinkSubPage.forEach(product => {
                const card = `
                <subpage-card
                    product-img-url="${product.productImgUrl}"
                    product-title="${product.productTitle}"
                    product-size="${product.productSize}"
                    product-price="${product.productPrice}"
                </subpage-card>
                `;
                const container = this.querySelector('#card-tab-container');
                container.innerHTML += card;
            });
        });
    };
};

customElements.define('subpage-drink-product-generator', subpageDrinkProductGenerator)