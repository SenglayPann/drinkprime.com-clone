const slidingButton = document.getElementById('btn-bg');
const btnContainer = document.getElementById('btn-container');
console.log(btnContainer);

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
