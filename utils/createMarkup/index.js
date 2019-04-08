function createMarkup(htmlContentString = '') {
    const errorMessage =
        'Argument passed to "createMarkup()" function must be a string.';

    if (typeof htmlContentString !== 'string') throw new Error(errorMessage);
    return { __html: htmlContentString };
}

export { createMarkup };
