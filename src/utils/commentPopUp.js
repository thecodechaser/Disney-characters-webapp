import render from './homePage.js';

const closePopup = () => {
    const container = document.querySelector('.comment-popup');
    container.style.display= 'none';
}

const eventListners = async () => {
    const commentButton = await render();
    const container = document.querySelector('.comment-popup')
    commentButton.forEach((element) =>{
        const dataID = element.getAttribute('data-id');
        element.addEventListener('click', ()=> {
            container.innerHTML = `<i class="fas fa-times"></i>`;
            container.style.display= 'block';

            const closeButton = document.querySelector('.fa-times');
    closeButton.addEventListener('click', closePopup);
        })
    });

    
}

export { eventListners }