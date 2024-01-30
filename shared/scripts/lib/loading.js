export default class Loading {

    static show() {
        document.querySelector('.loading').style.display = 'block'
    }

    static hide() {
        document.querySelector('.loading').style.display = 'none'
    }
}