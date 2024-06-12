class EnergySubpageHero extends HTMLElement {
    constructor() {
        super()
    };

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
        this.setAttribute('class', 'w-full flex justify-center')

        this.innerHTML = ` 
            <div class="container flex flex-col items-center justify-center w-[1200px] tab:flex-row tab:items-start overflow-hidden tab:overflow-visible">
                <div class="relative flex w-full  tab:w-[50%] h-full">
                    <div id="slide-left" class="absolute z-10 left-[15px] flex justify-center items-center rotate-180 top-[calc(50%_-_25px)]  w-[50px] h-[50px] tab:hidden rounded-full">
                        <svg class="w-[75%]" viewBox="0 0 100 100"><path d="M95,48H9.83L41,16.86A2,2,0,0,0,38.14,14L3.59,48.58a1.79,1.79,0,0,0-.25.31,1.19,1.19,0,0,0-.09.15l-.1.2-.06.2a.84.84,0,0,0,0,.17,2,2,0,0,0,0,.78.84.84,0,0,0,0,.17l.06.2.1.2a1.19,1.19,0,0,0,.09.15,1.79,1.79,0,0,0,.25.31L38.14,86A2,2,0,0,0,41,86a2,2,0,0,0,0-2.83L9.83,52H95a2,2,0,0,0,0-4Z" class="arrow" transform="translate(100, 100) rotate(180) "></path></svg>
                    </div>

                    <div id="carousel" class="  transition-all ease-in-out duration-[500ms] flex  tab:flex-col ">
                        <img class="w-full h-full" src="${image1}" alt="front">
                        <img class="w-full h-full" src="${image2}" alt="side">
                        <img class="w-full h-full" src="${image3}" alt="back">
                    </div>

                    <div id="slide-right" class="absolute z-10 right-[15px] flex justify-center items-center top-[calc(50%_-_25px)]  w-[50px] h-[50px] tab:hidden rounded-full">
                            <svg class="w-[75%]" viewBox="0 0 100 100"><path d="M95,48H9.83L41,16.86A2,2,0,0,0,38.14,14L3.59,48.58a1.79,1.79,0,0,0-.25.31,1.19,1.19,0,0,0-.09.15l-.1.2-.06.2a.84.84,0,0,0,0,.17,2,2,0,0,0,0,.78.84.84,0,0,0,0,.17l.06.2.1.2a1.19,1.19,0,0,0,.09.15,1.79,1.79,0,0,0,.25.31L38.14,86A2,2,0,0,0,41,86a2,2,0,0,0,0-2.83L9.83,52H95a2,2,0,0,0,0-4Z" class="arrow" transform="translate(100, 100) rotate(180) "></path></svg>
                    </div>
                </div>
                

                
                    <div class="flex flex-col items-center gap-5 pt-5 sticky tab:items-start tab:top-[119px] des:top-[72px]">
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

        `;


        let sliderIndex = 0;
        const leftHandle = document.getElementById('slide-left');
        const rightHandle = document.getElementById('slide-right');
        const carousel = document.getElementById('carousel');
        const totalItems = document.querySelectorAll('#carousel img').length;


        rightHandle.addEventListener('click', () => {
            if (sliderIndex < totalItems - 1) {
                sliderIndex += 1;
                carousel.style.setProperty('transform', `translateX(calc(-100% * ${sliderIndex}))`);
            }else if (sliderIndex === totalItems - 1) {
                sliderIndex = 0;
                carousel.style.setProperty('transform', `translateX(calc(-100% * ${sliderIndex}))`);
            }
        });

        leftHandle.addEventListener('click', () => {
            if (sliderIndex > 0) {
                sliderIndex -= 1;
                carousel.style.setProperty('transform', `translateX(calc(-100% * ${sliderIndex}))`);
            }else if (sliderIndex === 0) {
                sliderIndex = totalItems - 1;
                carousel.style.setProperty('transform', `translateX(calc(-100% * ${sliderIndex}))`);
            }

        });

        window.addEventListener('resize', () => {
            if (window.innerWidth >= 798) {
                carousel.style.transform = "translateX(0)";
            };
        });

    };
};

customElements.define('energy-subpage-hero', EnergySubpageHero)