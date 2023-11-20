let counter = 0;

// Checks if user is on the bottom of the page
window.onscroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        load()
    }
}



document.addEventListener('click', event => {
    const element = event.target;
    if (element.className === 'hide') {
        element.parentElement.style.animationPlayState = "running";
        element.parentElement.addEventListener('animationend', () => {
            element.parentElement.remove();
            if (document.body.scrollHeight <= window.innerHeight) {
                console.log("hello")
                load()
            }
        })
    }
});

function load() {
    let html = ""
    for (let index = 0; index < 10; index++) {
        counter ++
        html += `<div><p class="post">Post #${counter}</p><button class="hide">Hide</button></div>`
    }
    document.querySelector('body').innerHTML += html
}

load()