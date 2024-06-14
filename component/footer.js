const fetchFooterData = async () => {
    const response = await fetch('../data/footer.json');
    const data = await response.json();
    return data;
};

const createFooterComponent = (customPath, data) => { 
    return `
    <footer class="font-normalidadWide bg-black text-white">
        <div class="pt-[70px] pb-[85px] px-5 des:px-[118px]">
            <div class="font-nunito flex justify-between flex-wrap px-3 pb-7">
                <div class="flex-grow flex-shrink mx-3 px-[13px] pb-9 w-[45%] des:w-[calc(20%_-_24px)] text-sm">
                    <h3 class="font-normalidadExteded text-lg text-stroke-2 tracking-[2px] mb-[21px]">${data.aboutPrime.title}</h3>
                    <span class="font-normalidad text-wrap w-full leading-5 text-gray-200">
                        ${data.aboutPrime.description}
                    </span>
                    <div class="flex pt-[45px] pb-3 mb-6">
                        ${data.aboutPrime.socialLinks.map(link => `
                            <a href="${link.url}" class="w-10">
                                ${link.icon}
                            </a>
                        `).join('')}
                    </div>
                </div>
                ${data.links.map(category => `
                    <div class="font-nunito flex-grow flex-shrink mx-3 px-[13px] pb-9 w-[45%] des:w-[calc(20%_-_24px)] text-sm">
                        <div class="mb-3">${category.items.map(item => `
                            <a href="${item.url === '#' ? '' : customPath}${item.url}" class="leading-7">${item.text}</a>
                        `).join('</div><div class="mb-3">')}</div>
                    </div>
                `).join('')}
                <div class="flex-grow flex-shrink mx-3 px-[13px] pb-9 w-[45%] des:w-[calc(20%_-_24px)] text-sm">
                    <h3 class="text-lg font-normalidadExteded text-stroke-2 tracking-[2px] mb-[21px]">${data.newsletter.title}</h3>
                    <span class="font-normalidad">${data.newsletter.description}</span>
                    <div>
                        <div class="h-[45px] bg-white mb-3 rounded-sm border-[2px] pl-8 mt-5">
                            <input type="text" placeholder="Enter your email" class="h-full w-full text-black outline-none border-none overflow-hidden">
                        </div>
                        <div class="h-[45px] bg-white rounded-sm border-[2px] flex items-center justify-between">
                            <div class="h-4 w-4 mx-2">
                                <img src="/assets/index/footer/usa-flag.svg" alt="">
                            </div>
                            <input type="text" placeholder="Phone Number" class="h-full w-full text-black outline-none border-none overflow-hidden ml-2">
                        </div>
                    </div>
                    <div class="py-3">
                        <span class="text-wrap w-full font-arial text-[11px] text-gray-200 leading-5">
                            ${data.newsletter.disclaimer}
                        </span>
                    </div>
                    <div class="pt-5">
                        <button class="font-normalidadExteded text-stroke-1 tracking-wides text-[14px] p-3 border-white border-[1px] w-[167px] h-[52px]">
                            SUBSCRIBE
                        </button>
                    </div>
                </div>
            </div>
            <div class="pt-6 pb-3 text-center tab:text-left px-9">
                <p class="text-[14px]">
                    ${data.copyright}
                </p>
            </div>
        </div>
    </footer>
    `;
};

class FooterComponent extends HTMLElement { 
    async connectedCallback() { 
        const customPath = this.getAttribute('customPath') || '.';
        const data = await fetchFooterData();
        this.innerHTML = createFooterComponent(customPath, data);
    }
};

customElements.define('prime-footer', FooterComponent);
