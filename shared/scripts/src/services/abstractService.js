import ReadFile from './../../lib/readFile.js'

export default class AbstractService {
    #readFile

    constructor() {
        this.#readFile = new ReadFile()
    }

    openFile({ method, url, formData}) {
        this.#readFile.open({
            method, url, formData
        })
        return this.#readFile.content
    }
}