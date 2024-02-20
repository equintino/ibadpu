export default class CreateElement {
    parent
    childs

    static initializer ({ parent, childs }) {
        this.parent = this.newElement(parent)
        this.childs = this.bilding(childs)
        return this
    }

    static bilding (childs) {
        const node = []
        for (let i in childs) {
            if (i.match(/.*s$/)) {
                for (let attr of childs[i]) {
                    node.push(
                        this.newElement({
                            element: i.slice(0, -1),
                            attr: attr
                        })
                    )
                }
            } else {
                node.push(
                    this.newElement({
                        element: i,
                        attr: childs[i]
                    })
                )
            }
        }
        return node
    }

    static newElement ({ element, attr }) {
        const node = document.createElement(element)
        if (attr) {
            for (let i in attr) {
                node.setAttribute(i, attr[i])
            }
        }
        return node
    }

    static render () {
        let body = document.body.appendChild(this.parent)
        if (this.childs) {
            for (let i of this.childs) {
                body.appendChild(i)
            }
        }
        return {
            papper: body
        }
    }
}
