const mockGlobalProps = {
    color: {
        background: '#fff',
        primary: '#333',
        link: '#777',
        text: '#333'
    },
    globalComponents: {
        volComponentButton: {
            buttonStyles: {
                textColor: '#fff',
                textTransform: 'uppercase',
                backgroundColor: '#343538',
                borderColor: '#343538',
                hoverTextColor: '#fff',
                hoverBackgroundColor: '#555',
                hoverBorderColor: '#555',
                borderThickness: 'none', // basic, thin, thick, none
                size: 'large', // small, medium, large, 'block'
                rounded: 'none', // none, small, medium, large, pill
                growOnHover: false
            }
        }
    },
    typography: {
        baseFontSize: '16px',
        fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
        headingFontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
        headingWeight: 700
    }
};
export { mockGlobalProps };
