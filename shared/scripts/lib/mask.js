export default class Mask {
    /**
     *
     * @param {array of class} inputMasks
     */
    static async createMask (inputMasks) {
        for (let inputMask of inputMasks) {
            document.querySelectorAll(`.${inputMask}`).forEach((el) => {
                el.onkeyup = (e) => {
                    const _inputMask = inputMask.toUpperCase()
                    const maxInput = e.target.maxLength
                    let valueInput = e.target.value
                    const _mask = {
                        CPF: valueInput.replace(/[^\d]/g, "").replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4"),
                        DAY: valueInput.replace(/[^0-3]*/, '').replace(/^3[2-9]$/, ''),
                        MONEY: Mask.money(valueInput)
                    }

                    if (valueInput.length === maxInput || maxInput === -1) {
                        e.target.value = _mask[_inputMask]
                    }
                }
            })
        }
    }

    static money (valueInput) {
        return valueInput.replace(/[^\d]/g, '')
            .toString().split('').reverse().join('')
            .replace(/(\d{2}(?!$))/, '$1,').replace(/(\d{3}(?!$))/g, '$1.')
            .split('').reverse().join('')
    }
}
