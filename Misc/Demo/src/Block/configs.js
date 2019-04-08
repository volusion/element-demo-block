const defaultConfig = {
    header: {
        show: true,
        text: 'I am heading text'
    },
    listItems: [
        {
            content: 'I am the first item in the list.'
        },
        {
            content: 'I am the second item in the list.'
        }
    ],
    option: 'Option 1',
    imageUrl:
        'https://res.cloudinary.com/dyx4yhvoq/image/upload/h_350,w_350,c_pad/v1461691251/571a44b587179d0930f2c7d8/r1qpfyry8fz35evain24.jpg',
    textColor: '#FF0000',
    htmlString: `<p>I am a paragraph in an HTML string.</p>`
};

function getConfigSchema(ElementPropTypes) {
    return {
        header: ElementPropTypes.shape({
            show: ElementPropTypes.bool,
            text: ElementPropTypes.string
        }),
        listItems: ElementPropTypes.arrayOf(
            ElementPropTypes.shape({
                content: ElementPropTypes.string
            })
        ),
        option: ElementPropTypes.oneOf(['Option 1', 'Option 2', 'Option 3']),
        imageUrl: ElementPropTypes.media,
        textColor: ElementPropTypes.color,
        htmlString: ElementPropTypes.editorFull
    };
}

export { defaultConfig, getConfigSchema };
