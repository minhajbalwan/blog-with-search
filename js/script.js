// * Menu
document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.menu').classList.toggle('active');
});
document.querySelector('.close-btn').addEventListener('click', () => {
    document.querySelector('.menu').classList.remove('active');
});