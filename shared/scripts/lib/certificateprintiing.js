import Loading from "./loading.js";
import Modal from "./modal.js";

const modal = new Modal()
export default class CertificatePrinting {
    static print(ids = [], side = null) {
        Loading.show()
        modal.show({
            title: "CERTIFICADO DE BATISMO",
            content: "certificate",
            callback: () => {
                /** Shifting aside */
                modal.content.find('#certificate').on("click", () => {
                    side = (side === null ? true : side)
                    modal.content.find("[data-id]").each((i, e) => {
                        ids.push(e.attributes['data-id'].value)
                    })
                    CertificatePrinting.print(ids, !side)
                    ids = []
                });
                Loading.hide()
            },
            params: { ids, side }
        })
        .styles({
            element: "#boxe_main #content",
                css: {
                    height: "450px"
                }
        })
        .complete({
            buttons: "<button class='button btn-secondary' value='close'>Fechar</button><button class='button btn-danger' value='print'>Imprimir</button>",
            callback: () => {
                modal.buttons[0].onclick = (e) => {
                    let btnName = e.target.value
                    if (btnName === 'close') {
                        document.querySelector('#boxe_main').style.display = 'none'
                        document.querySelector('#mask_main').style.display = 'none'
                    } else {
                        window.print()
                    }
                }
            }
        })
    }
}
