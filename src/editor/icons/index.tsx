/**
 * @file 内置 svg 图标
 */

import {Icon, registerIcon} from 'amis-ui';

// @ts-ignore
import PCPreview from './pc-preview.svg';
// @ts-ignore
import H5Preview from './h5-preview.svg';
import { ElementType } from 'react';
registerIcon('pc-preview', PCPreview as ElementType<{}>);
registerIcon('h5-preview', H5Preview as ElementType<{}>);

export {Icon};
