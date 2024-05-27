const cardContainer = document.getElementById('card-tab-container');
// const LastCastContainer = document.getElementById()
const lastCard = document.getElementById('last-card');


document.addEventListener('DOMContentLoaded', () => {
    const newContainerWidth = cardContainer.clientWidth;
    let lastCardWidth ;
    if ( window.innerWidth >= 798) {
        lastCardWidth = newContainerWidth / 3;
    } else {
        lastCardWidth = newContainerWidth / 4;
    }
    lastCard.style.marginLeft = lastCardWidth + 'px';
    lastCard.style.marginRight = lastCardWidth + 'px';
})

window.addEventListener('resize', ()=> {
    const newContainerWidth = cardContainer.clientWidth;
    let lastCardWidth ;
    if ( window.innerWidth >= 798) {
        lastCardWidth = newContainerWidth / 3;
    } else {
        lastCardWidth = newContainerWidth / 4;
    }
    lastCard.style.marginLeft = lastCardWidth + 'px';
    lastCard.style.marginRight = lastCardWidth + 'px';
})