class ProductCard extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const productName = this.getAttribute('productName');
        const imgSrc = this.getAttribute('imgSrc');

        this.innerHTML = `
            <div class="text-center p-8 box-border">
                <img src="${imgSrc}" alt="${productName}" class="w-full h-auto">
                <p class="text-center mt-[8px] mb-[48px] mx-[46px]">${productName}</p>
            </div>
        `;
    }
}

customElements.define('product-card', ProductCard);