class productCard extends HTMLElement {
    constructor() {
        super()
    }
    connectedCallback() {
        const title = this.getAttribute("cardTitle");
        const brand = this.getAttribute("cardBrand");
        const pack = this.getAttribute("cardPack");
        const prize = this.getAttribute("cardPrize");

        const list = ["Zero added sugar", "20 Calories","10% Coconut Water",  "BCAAs + B Vitamins", "Antioxidants + Electrolytes",  "Caffeine-Free"];
        let listArr = "";
        for (let i in list ) listArr += `<li>${list[i]}</li>`;

        const image1 = this.getAttribute("imagefront");
        const image2 = this.getAttribute("imageside");
        const image3 = this.getAttribute("imageback");
        const imageMobile1 = this.getAttribute("imageFrontMobile");
        const imageMobile2 = this.getAttribute("imageSideMobile");
        const imageMobile3 = this.getAttribute("imageBackMobile");

        this.innerHTML = ` 
        <section class="w-full flex justify-center">
            <div class="container flex flex-col items-center w-[1200px] tab:flex-row tab:items-start">
            <div class="w-[354px] scroll-image hidden tab:flex tab:flex-col tab:w-[576px]">
                <img class="w-[354px] h-[354px] tab:w-[576px] tab:h-[576px]" src="${image1}" alt="front">
                <img class="w-[354px] h-[354px] tab:w-[576px] tab:h-[576px]" src="${image2}" alt="side">
                <img class="w-[354px] h-[354px] tab:w-[576px] tab:h-[576px]" src="${image3}" alt="back">
            </div>

            <div class="flex items-center justify-center tab:hidden">
                <div class="relative w-full max-w-3xl overflow-hidden">
                    <div class="flex transition-transform duration-500 ease-in-out" id="carousel">
                        <div class="carousel-item flex-none w-full">
                            <img src="${imageMobile1}" alt="Image 1" class="w-full">
                        </div>
                        <div class="carousel-item flex-none w-full">
                            <img src="${imageMobile2}" alt="Image 2" class="w-full">
                        </div>
                        <div class="carousel-item flex-none w-full">
                            <img src="${imageMobile3}" alt="Image 3" class="w-full">
                        </div>
                    </div>
                    <button class="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2" onclick="prevSlide()">
                    &lt;
                    </button>
                    <button class="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2" onclick="nextSlide()">
                    &gt;
                    </button>
                </div>
            </div>

                <div class="w-[354px] h-1788 flex flex-col items-center gap-5 pt-5 tab:w-[400px] tab:sticky tab:top-0">
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
                        <img class="w-12 h-12" src="../assets/index/product-sticks/PR-icon-1-Coconut_76.webp" alt="coconut water">
                        <img class="w-12 h-12" src="../assets/index/product-sticks/PR-icon-2-Caffeine_73.webp" alt="caffeine free">
                        <img class="w-12 h-12"  src="../assets/index/product-sticks/PR-icon-3-Electrolytes_61.webp" alt="834mg electorlytes">
                        <img class="w-12 h-12"  src="../assets/index/product-sticks/PR-icon-4-BVitamins_21.webp" alt="b vitamins">
                        <img class="w-12 h-12"  src="../assets/index/product-sticks/PR-icon-5-Antioxidants_6.webp" alt="antioxidants">
                    </div>
            
                    <hr class="w-[354px] tab:w-[400px]">
                    <div class="w-[400px] flex justify-center tab:justify-start">
                        <ul class="w-[200px] pl-7 list-disc flex flex-col gap-2 text-sm font-normalidad text-stroke-1">
                            ${listArr}
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        `;
    }
}
customElements.define("porduct-card", productCard);
