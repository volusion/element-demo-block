import { getOptionDetails } from '../helpers';

function OptionDetailsFactory(React) {
    function OptionDetails(props) {
        return <div>{getOptionDetails(props.selection)}</div>;
    }
    return OptionDetails;
}

export { OptionDetailsFactory };
