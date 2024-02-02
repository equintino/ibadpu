import AbstractService from "./abstractService.js";

export default class Membership extends AbstractService {
    save(formData) {
        return this.openFile({
            method: 'POST',
            url: 'membership/update',
            formData
        })
    }
}
