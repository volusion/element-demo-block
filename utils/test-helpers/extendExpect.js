expect.extend({
    toHaveContainerClassses(received) {
        const containerClasses = ['w-100', 'mw9', 'center'];
        const allClassesPresent = containerClasses.every(className =>
            received.hasClass(className)
        );
        if (allClassesPresent) {
            return {
                message: () =>
                    `Expected the block not to use the container classes: "w-100", "mw9", and "center".`,
                pass: true
            };
        } else {
            return {
                message: () =>
                    `Expected the block to be using the the container classes: "w-100", "mw9", and "center".`,
                pass: false
            };
        }
    }
});
export { expect };
