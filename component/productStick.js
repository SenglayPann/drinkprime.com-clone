class productCard extends HTMLElement {
    constructor() {
        super()
    }
    connectedCallback() {
        const title = this.getAttribute("cardTitle");
        const brand = this.getAttribute("cardBrand");
        const pack = this.getAttribute("cardPack");
        const prize = this.getAttribute("cardPrize");
        const li1 = this.getAttribute("list1");
        const li2 = this.getAttribute("list2");
        const li3 = this.getAttribute("list3");
        const li4 = this.getAttribute("list4");
        const li5 = this.getAttribute("list5");
        const image1 = this.getAttribute("imagefront");
        const image2 = this.getAttribute("imageside");
        const image3 = this.getAttribute("imageback");

        this.innerHTML = ` 
        <section class="w-full flex justify-center">
            <div class="container flex flex-col items-center w-[1200px] tab:flex-row tab:items-start">
                <div class="w-[354px] scroll-image flex overflow-x-scroll tab:flex tab:flex-col tab:w-[576px] tab:overflow-x-hidden">
                    <img class="w-[354px] h-[354px] tab:w-[576px] tab:h-[576px]" src="${image1}" alt="front">
                    <img class="w-[354px] h-[354px] tab:w-[576px] tab:h-[576px]" src="${image2}" alt="side">
                    <img class="w-[354px] h-[354px] tab:w-[576px] tab:h-[576px]" src="${image3}" alt="back">
                </div>

                <div class="w-[354px] h-1788 flex flex-col items-center gap-5 pt-5 tab:w-[400px] sticky top-0">
                    <div class="w-full flex flex-col gap-2 items-center tab:items-start">
                        <h3 class="text-lg font-normalidadExteded text-stroke-2">${title}</h3>
                        <h5 class=" text-xs font-normalidadExteded text-stroke-1">${brand}</h5>
                        <h5 class="text-sm font-normalidadExteded text-stroke-1">${pack}</h5>
                        <h5 class="text-base font-normalidadExteded text-stroke-1">${prize}</h5>
                    </div>

                    <div class="flex justify-center">
                        <button class="w-[354px] text-white bg-black h-12 text-xs font-normalidadExteded text-stroke-1 tab:w-[400px]">FIND IN STORE</button>
                    </div>
        
                    <div class="w-[354px] flex gap-[25px] justify-center">
                        <img class="w-12 h-12" src="../assets/index/PR-icon-1-Coconut_76.webp" alt="coconut water">
                        <img class="w-12 h-12" src="../assets/index/PR-icon-2-Caffeine_73.webp" alt="caffeine free">
                        <img class="w-12 h-12"  src="../assets/index/PR-icon-3-Electrolytes_61.webp" alt="834mg electorlytes">
                        <img class="w-12 h-12"  src="../assets/index/PR-icon-4-BVitamins_21.webp" alt="b vitamins">
                        <img class="w-12 h-12"  src="../assets/index/PR-icon-5-Antioxidants_6.webp" alt="antioxidants">
                    </div>
            
                    <hr class="w-[354px] tab:w-[400px]">
                    <div class="w-[400px]">
                        <ul class="w-full pl-7 list-disc flex flex-col gap-2 text-sm">
                            <li>${li1}</li>
                            <li>${li2}</li>
                            <li>${li3}</li>
                            <li>${li4}</li>
                            <li>${li5}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        `;
    }
}
customElements.define("porduct-card", productCard);
