function getOptionDetails(string = '') {
    switch (string) {
        case 'Option 1':
            return `### I only appear when "props.option" === "Option 1" ###`;
        case 'Option 2':
            return `@@@ I only appear when "props.option" === "Option 2" @@@`;
        case 'Option 3':
            return `*** I only appear when "props.option" === "Option 3" ***`;
        default:
            throw new Error(`"${string}" is not a valid Selection.`);
    }
}

export { getOptionDetails };
