// Creator images
document.addEventListener("DOMContentLoaded", function() {
    const creators = [
        { 
            imgSrc: "../assets/index/component-creator-cards/Speed.webp",
            name: "SPEED",
            location: "U.S."
        },
        { 
            imgSrc: "../assets/index/component-creator-cards/samy-rivera.webp",
            name: "SAMY RIVERA",
            location: "MEXICO"
        },
        { 
            imgSrc: "../assets/index/component-creator-cards/mercedes.webp",
            name: "MERCEDES ROA",
            location: "MEXICO"
        },
        { 
            imgSrc: "../assets/index/component-creator-cards/amine.webp",
            name: "AMINE",
            location: "FRANCE"
        },
        { 
            imgSrc: "../assets/index/component-creator-cards/fede.webp",
            name: "FEDE",
            location: "MEXICO"
        },
        { 
            imgSrc: "../assets/index/component-creator-cards/ibai.webp",
            name: "IBAI",
            location: "SPAIN"
        }
    ];

    // Update image and text overlays based on breakpoints
    function updateComponents() {
        const firstImage = document.getElementById("firstImage");
        const secondImage = document.getElementById("secondImage");
        const firstTextOverlay = document.getElementById("firstTextOverlay");
        const secondTextOverlay = document.getElementById("secondTextOverlay");

        if (window.innerWidth >= 768) {

            // Hide first image and text overlay
            firstImage.classList.add("hidden");
            firstTextOverlay.classList.add("hidden");

            // Show second image and text overlay
            secondImage.classList.remove("hidden");
            secondTextOverlay.classList.remove("hidden");

        } else {
            
            // Show first image and text overlay
            firstImage.classList.remove("hidden");
            firstTextOverlay.classList.remove("hidden");

            // Hide second image and text overlay
            secondImage.classList.add("hidden");
            secondTextOverlay.classList.add("hidden");
        }
    }

    // Render creator cards
    function renderCreators() {
        const creatorGrid = document.getElementById("creatorGrid");
        creators.forEach(creator => {
            const creatorCard = document.createElement("div");
            creatorCard.classList.add("relative");
            creatorCard.innerHTML = `
                 <img src="${creator.imgSrc}" alt="creator image" class="object-contain w-full h-auto">
                 <div class="text-left p-[15px] mb-[20px] des:absolute des:bottom-0 des:left-0 des:w-full text-stroke-1">
                     <h3 class="font-normalidadExteded font-extrabold text-lg mb-[5px] tracking-[0.2em]">${creator.name}</h3>
                    <h3 class="font-normalidadExteded text-base  tracking-[1.47px]">${creator.location}</h3>
                    <p class="font-normalidadExteded mt-[12px] mb-[10px] text-sm des:text-xs underline des:no-underline underline-offset-3 des:border-[2px] des:bg-black des:mt-[16px] des:px-[12px] des:py-[10px] w-[140px] tracking-[1.5px]">LEARN MORE</p>
                 </div>`;

            creatorGrid.appendChild(creatorCard);
        });
    }

    // Initialize component
    function initComponent() {
        updateComponents();
        renderCreators();
        window.addEventListener("resize", updateComponents);
    }

    // Call initComponent on DOMContentLoaded
    initComponent();
});