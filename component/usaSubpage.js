class usaProduct extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const productName = this.getAttribute('product-name');
        const imgSrc = this.getAttribute('product-url');

        this.innerHTML = `
            <div class="text-center p-8 box-border ">
                <img src="${imgSrc}" alt="${productName}" class="w-full h-auto">
                <p class="text-center font-extrabold text-sm tracking-[1.87px] mt-[8px] mb-[48px] mx-[46px] text-stroke-1">${productName}</p>
            </div>
        `;
    }
}

customElements.define('usa-product', usaProduct);
