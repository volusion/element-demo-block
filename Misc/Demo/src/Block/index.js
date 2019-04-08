import { defaultConfig } from './configs';
import { createMarkup } from '../../../../utils/createMarkup';
import { OptionDetailsFactory } from './components/OptionDetails';

function ElementDemoBlockFactory(React) {
    const OptionDetails = OptionDetailsFactory(React);
    ElementDemoBlock.defaultProps = defaultConfig;
    function ElementDemoBlock(props) {
        const {
            css, // passsed by createFactory fn
            classes, // passsed by createFactory fn
            header,
            listItems,
            option,
            imageUrl,
            htmlString
        } = props;
        return (
            <div className="pa3">
                {header.show && header.text ? <h1>{header.text}</h1> : null}
                <ul>
                    {listItems.map((item, index) => {
                        const content = item.content;
                        return <li key={index}>{content}</li>;
                    })}
                </ul>
                <OptionDetails selection={option} />
                <img src={imageUrl} alt="Demo picture element" />
                <div className={css(classes.propsColor)}>
                    I get my color from "props.textColor"
                </div>
                <div dangerouslySetInnerHTML={createMarkup(htmlString)} />
            </div>
        );
    }

    return ElementDemoBlock;
}

export { ElementDemoBlockFactory };
