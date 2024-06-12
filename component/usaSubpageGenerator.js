class CountryProduct extends HTMLElement {
    constructor() {
        super();
    }           
    connectedCallback() {
        const jsonFilePath = this.getAttribute('data-json')
 
        // Fetch data from json file 
        fetch(jsonFilePath) 
            .then(response => response.json())
            .then(data => {
            const products = data.products;
            const countryProducts = products.map(product => `
                <usa-product
                    product-url="${product.imgSrc}"
                    product-name="${product.productName}"  
                ></usa-product>
            `
            ).join('');
            this.setAttribute("class", " h-full relative grid grid-cols-2 tab:grid-cols-4 bottom-[60px]")
            this.innerHTML= `${countryProducts}`;
            })
            .catch(error => console.error('Error fetching JSON:', error));
        }
    }
        
customElements.define('country-product', CountryProduct);
