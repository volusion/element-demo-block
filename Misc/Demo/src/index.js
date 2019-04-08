import createFactory from '../../../utils/createFactory';
import { styles } from './Block/styles';
import { getDataProps } from './Block/data';
import { ElementDemoBlockFactory as Block } from './Block';
import { defaultConfig, getConfigSchema } from './Block/configs';

const factory = createFactory(Block, styles, getConfigSchema);

export { factory, defaultConfig, getDataProps };
