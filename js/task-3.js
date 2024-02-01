function getElementWidth(content, padding, border) {
    let contentN = Number.parseFloat(content);
    let paddingN = Number.parseFloat(padding);
    let borderN = Number.parseFloat(border);
    return contentN + 2*paddingN + 2*borderN;
}

console.log(getElementWidth("50px", "8px", "4px")); 
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));



