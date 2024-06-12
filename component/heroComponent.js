class heroBannerComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const smallerImg = this.getAttribute('smaller-img')
        const largerImg = this.getAttribute('larger-img')
        const headingTitle = this.getAttribute('heading-title')
        const subHeadingTitle = this.getAttribute('sub-heading-title')

        
        this.innerHTML = `
        <div class="image-container relative mx-auto w-full">
            <div class="relative">
                <img src="${smallerImg}" alt="" class="w-full h-auto hidden" id="firstImage">
                <img src="${largerImg}" alt="" class="hidden tab:w-full tab:h-auto" id="secondImage">
                
                <!-- Text Overlay for First Image -->
                <div class="text-overlay absolute inset-10 flex-col items-center justify-center text-center text-white max-w-[calc(100%-20px)] top-[80%] hidden " id="firstTextOverlay">
                    <p class="text-sm font-normalidadWide tracking-[4.33px]">${headingTitle}</p>
                    <p class="text-2xl font-black font-normalidad pt-[10px] mb-[27px] tracking-[2.33px] text-stroke-1">${subHeadingTitle}</p>
                </div>

                <!-- Text Overlay for Second Image -->
                <div class="text-overlay hidden tab:flex absolute inset-10 p-[30px] flex-col items-start justify-start text-left text-white md:top-[60%] tab:top-[70%] des:top-[80%]" id="secondTextOverlay">
                    <p class="text-sm font-normalidadWide tracking-[4.33px]">${headingTitle}</p>
                    <p class="text-2xl font-black font-normalidad pt-[10px] mb-[27px] tracking-[2.33px] text-stroke-1">${subHeadingTitle}</p>
                </div>
            </div>
        </div>
        `;
    }
}

customElements.define('hero-banner', heroBannerComponent);