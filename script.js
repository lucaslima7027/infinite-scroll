// Checks if user is on the bottom of the page
window.onscroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        load()
    }
}


let counter = 0;

function load() {
    let html = ""
    for (let index = 0; index < 10; index++) {
        counter ++
        html += `<p>Post #${counter}</p>`
    }
    document.querySelector('body').innerHTML += html
}

load()