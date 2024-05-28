
const logosData = [
    { name: "ARSENAL", imageSrc: "../assets/index/component-athletes-logo/Arsenal.png" },
    { name: "BAYERN MUNICH", imageSrc: "../assets/index/component-athletes-logo/Bayern.png" },
    { name: "BORUSSIA DORTMUND", imageSrc: "../assets/index/component-athletes-logo/Borussia_Dortmund.png" },
    { name: "KINGS LEAGUE", imageSrc: "../assets/index/component-athletes-logo/Kings_league.png" },
    { name: "LA DODGERS", imageSrc: "../assets/index/component-athletes-logo/Dodger.png" },
    { name: "LA LAKERS", imageSrc: "../assets/index/component-athletes-logo/lakers.png" },
    { name: "FC BARCELONA", imageSrc: "../assets/index/component-athletes-logo/Barcelona.png" },
    { name: "TORONTO RAPTORS", imageSrc: "../assets/index/component-athletes-logo/Raptors.png" },
    { name: "UFC", imageSrc: "../assets/index/component-athletes-logo/UFC.png" },
    { name: "WWE", imageSrc: "../assets/index/component-athletes-logo/WWE.png" }
];

const container = document.getElementById("logoGridContainer");

logosData.forEach(logo => {

    // Class: Control to all the class
    const logoDiv = document.createElement("div");
    logoDiv.classList.add("logo", "w-full", "text-center", "cursor-pointer", "p-6");

    // Image: Control to all the image
    const logoImg = document.createElement("img");
    logoImg.src = logo.imageSrc;
    logoImg.alt = logo.name;
    logoImg.classList.add("mb-3", "max-w-full");

    // Paragraph: Control to all the paragraph or text
    const logoName = document.createElement("p");
    logoName.textContent = logo.name;
    logoName.classList.add("text-sm", "font-normalidadExteded");
    logoName.style.marginTop = "8px";
    logoName.style.webkitTextStroke = "1px black";
    logoName.style.letterSpacing = "1.87px";
    logoName.style.fontWeight = "500";

    logoDiv.appendChild(logoImg);
    logoDiv.appendChild(logoName);

    container.appendChild(logoDiv);
});
