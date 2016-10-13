export function header(wrapper, index) {
    return wrapper.find(`thead > tr > th`).at(index);
}

export function columnList(wrapper, index) {
    let col = wrapper.find('tbody > tr').map((n) => n.find('td').at(index));
    return col.map((node) => node.text());
}
