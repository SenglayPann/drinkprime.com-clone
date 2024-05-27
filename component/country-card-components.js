class CountryCard extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const name = this.getAttribute('countryName');
        const abbreviation = this.getAttribute('countryAbbreviation');
        const flagSrc = this.getAttribute('countryFlag');
        
        this.innerHTML = `
            <div class="px-[30px] pb-[30px] ttab:px-[40px] ttab:pb-[40px] flex ">
                <div class="w-[25px] h-[25px] mr-[10px] ">
                    <img src="${flagSrc}" alt="${name} flag" class="w-full flex">
                </div>
                <div>
                    <p class="font-nunito text-sm hidden mmb:flex">${name}</p>
                    <p class="font-nunito text-xs flex mmb:hidden text-black">${abbreviation}</p>
                </div>
            </div>
        `;
    }
}

customElements.define('country-card', CountryCard);

