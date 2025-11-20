import { getOptionDetails } from '../helpers';

// eslint-disable-next-line no-unused-vars
function OptionDetailsFactory(React) {
    function OptionDetails(props) {
        return <div>{getOptionDetails(props.selection)}</div>;
    }
    return OptionDetails;
}

export { OptionDetailsFactory };
