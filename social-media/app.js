const likeBtn = document.querySelector('.like-button');
const likeIcon = document.querySelector('#like-icon');


likeBtn.addEventListener( 'click', () => {
    likeIcon.classList.toggle("like-icon-active")
});
