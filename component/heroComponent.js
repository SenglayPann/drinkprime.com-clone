class heroBannerComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const smallerImg = this.getAttribute('smaller-img');
        const largerImg = this.getAttribute('larger-img');
        const headingTitle = this.getAttribute('heading-title');
        const subHeadingTitle = this.getAttribute('sub-heading-title');
        const buttonNotDisplay = this.getAttribute('button-not-display');
        const buttonTitle = this.getAttribute('button-title');
        const headingDisplay = this.getAttribute('heading-display')
        this.setAttribute('class', 'flex relative');

        
        this.innerHTML = `
        <div>
            <img src="${largerImg}" alt="hero-banner logan paul and KSI prime" class="object-cover hidden tab:flex">
            <img src="${smallerImg}" alt="hero-banner logan paul and KSI prime" class="object-cover flex tab:hidden">
        </div>
        <div class="absolute w-full py-9 px-14 m-3 bottom-[5%] text-center tab:text-start tab:top-auto tab:bottom-0">
            <div class="mt-3 pb-7">
                <p class="text-sm font-normalidadWide tracking-[4.33px] text-white ${headingDisplay}">${headingTitle}</p>
                <h3 class="font-roboto text-white text-[28px] tab:text-[35px] tracking-wider text-stroke-1 tab:text-stroke-2">
                    ${subHeadingTitle}  
                </h3>
            </div>
            <div id="btn-container" class="btn-container w-[150px] h-[52px] tab:w-[200px] tab:h-[52px] relative inline-block overflow-hidden ${buttonNotDisplay}">
                <div id="btn-bg" class="btn-bg absolute top-0 left-0 w-full h-full bg-white z-10 "></div>
                <button class="btn-content text-black z-20 text-sm tab:text-[14px] relative text-stroke-1 hover:text-white font-normalidadExteded max-h-[52px] h-full px-[19px] w-full border border-white transition duration-300 ease-in-out">
                    ${buttonTitle}
                </button>
            </div>
        </div>
        `;
    }
}

customElements.define('hero-banner', heroBannerComponent);

const slidingButton = document.getElementById('btn-bg');
const btnContainer = document.getElementById('btn-container')

btnContainer.addEventListener('mouseleave', () => {
    console.log(1);
    slidingButton.style.setProperty('transition', 'none');
    slidingButton.style.setProperty('transform', 'translateX(-100%)');
    // Force a reflow to ensure the previous transform is applied before transitioning
    slidingButton.getBoundingClientRect();
    slidingButton.style.setProperty('transition', 'transform 0.4s');
    slidingButton.style.setProperty('transform', 'translateX(0)');
});


btnContainer.addEventListener('mouseover', () => {
    console.log(1);
    slidingButton.style.setProperty('transform', 'translateX(100%)');
});