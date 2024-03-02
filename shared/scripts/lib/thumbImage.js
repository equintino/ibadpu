export default class ThumbImage {

    /**
     *
     * @param {origin: Element, destination: local to show} param0
     * @returns this class
     */
    static #set ({ origin, destination }) {
        origin.oninput = event => {
            const [file] = origin.files
            ThumbImage.#show({ file, destination })
        }
    }

    static #show ({ file, destination }) {
        if (file) {
            destination.src = URL.createObjectURL(file)
        }
    }

    /**
     *
     * @param {array of oject{ origin, destination }} param0 id or class
     */
    static run ({ thumbs }) {
        thumbs.forEach(({ origin, destination }) => {
            let _origin = (
                document.querySelector(origin) ?
                    document.querySelector(origin)
                    : null
            )
            if (_origin) {
                ThumbImage.#set({
                    origin: _origin,
                    destination: document.querySelector(destination)
                })
            }
        })
    }
}
