// import Loading from "./loading.js"
// import Modal from "./modal.js"
// import ReadFile from "./readFile.js"

// const modal = new Modal()
// const readFile = new ReadFile()
// export default class CertificatePrinting {

//     static print(ids = [], side = null) {
//         Loading.show()
//         const formData = new FormData()
//         formData.append('ids', ids)
//         formData.append('side', side)
//         const page = readFile.open({
//             method: 'POST',
//             url: "certificate",
//             async: true,
//             formData
//         })
//         modal.show({
//             title: "CERTIFICADO DE BATISMO",
//             content: page,
//             callback: () => {
//                 /** Shifting aside */
//                 // modal.content.find('#certificate').on("click", () => {
//                 //     side = (side === null ? true : side)
//                 //     // modal.content.find("[data-id]").each((i, e) => {
//                 //     //     ids.push(e.attributes['data-id'].value)
//                 //     // })
//                 //     // CertificatePrinting.print(ids, !side)
//                 //     ids = []
//                 // });
//                 // Loading.hide()
//             },
//             params: { ids, side }
//         })
//         .styles({
//             element: "#boxe_main #content",
//                 css: {
//                     height: "450px",
//                     display: 'block'
//                 }
//         })
//         // .complete({
//         //     buttons: "<button class='button btn-secondary' value='close'>Fechar</button><button class='button btn-danger' value='print'>Imprimir</button>",
//         //     callback: () => {
//         //         modal.buttons[0].onclick = (e) => {
//         //             let btnName = e.target.value
//         //             if (btnName === 'close') {
//         //                 document.querySelector('#boxe_main').style.display = 'none'
//         //                 document.querySelector('#mask_main').style.display = 'none'
//         //             } else {
//         //                 window.print()
//         //             }
//         //         }
//         //     }
//         // })
//     }
// }
