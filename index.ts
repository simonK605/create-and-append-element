interface IAttributes {
    ['key']: string
}

const createAndAppendElement = (
    what: string = 'div',
    where: HTMLElement  = document.body,
    className: string | string[] = '',
    attributes: IAttributes,
): HTMLElement => {
    const elem = document.createElement(what);

    if (Array.isArray(className)) {
        className.forEach((name) => {
            elem.classList.add(name);
        })
    } else {
        elem.classList.add(className);
    }

    if (Object.keys(attributes).length) {
        for (let attribute in attributes) {
            elem.setAttribute(attribute, attributes[attribute]);
        }
    }

    where.appendChild(elem);

    return elem;
};

export default createAndAppendElement;


