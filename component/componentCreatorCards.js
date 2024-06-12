// Creator images
document.addEventListener("DOMContentLoaded", function() {

    const creatorGrid = document.getElementById("creatorGrid");
    const jsonFilePath = creatorGrid.getAttribute('json-data');
    fetch(jsonFilePath) 
    .then(response => response.json())
    .then(data => {
        const creators = data.creators;
        console.log(creators)
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
            
            creators.forEach(creator => {
                const creatorCard = document.createElement("div");
                creatorCard.classList.add("relative");
                creatorCard.innerHTML = `
                     <img src="${creator.imgSrc}" alt="creator image" class="object-cover w-full h-[450px]">
                     <div class="text-left tab1:text-black p-[15px] mb-[20px] tab1:absolute tab1:bottom-0 tab1:left-0 tab1:w-full text-stroke-1">
                        <h3 class="font-normalidadExteded tab1:text-white tab1:drop-shadow-[2px_2px_4px_black] font-extrabold text-lg mb-[5px] tracking-[0.2em]">${creator.name}</h3>
                        <h3 class="font-normalidadExteded tab1:text-white tab1:drop-shadow-[2px_2px_4px_black] text-base  tracking-[1.47px]">${creator.location}</h3>
                        <p class="font-normalidadExteded mt-[12px] mb-[10px] text-sm tab1:text-xs underline tab1:no-underline underline-offset-3 tab1:border-[1px] tab1:border-black tab1:bg-white tab1:mt-[16px] tab1:px-[12px] tab1:py-[10px] w-[140px] tracking-[1.5px]">LEARN MORE</p>
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
    })

    
});