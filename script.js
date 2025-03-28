class Text {
    constructor(obj) {
        this.text = document.querySelector(obj.text)
        this.fullText = this.text.innerHTML
        this.text.innerHTML = ''
        this.str()
    }
    str(x = 0) {
        this.text.innerHTML += x === 15 ? '<br>' + this.fullText[x] : this.fullText[x]
        x++
        if (x < this.fullText.length) {
            setTimeout(() => {
                this.str(x)
            }, 100);
        }
    }
}

const text = new Text({
    text: '.banner__title'
})


class Scroll {
    constructor(obj) {
        this.section = document.querySelector(obj.section);
        this.typeFade = document.querySelectorAll(obj.typeFade);

        window.addEventListener('scroll', () => {
            this.fadeRightAnim(this.section, 2)
        })
    }
    fadeRightAnim(section,coordinate) {
        this.typeFade.forEach(box => {
            const speed = box.dataset.speed
            box.style.transition = speed + 'ms'
            if (window.scrollY >= (section.offsetTop - section.offsetHeight * coordinate) ) {
                box.classList.add('active')
            } else box.classList.remove('active')
        })
    }
}

const scroll = new Scroll({
    section: '.service__courses-block',
    typeFade: '.right'
})
const scroll2 = new Scroll({
    section: '.service__courses-block',
    typeFade: '.left'
})


const scroll3 = new Scroll({
    section: '.team__cards-user',
    typeFade: '.right-2'
})
const scroll4 = new Scroll({
    section: '.team__cards-user',
    typeFade: '.left-2'
})


const scroll5 = new Scroll({
    section: '.projects__block',
    typeFade: '.left-3'
})
const scroll6 = new Scroll({
    section: '.projects__block',
    typeFade: '.right-3'
})


