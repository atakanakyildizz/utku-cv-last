import {FC, memo} from 'react';

import Icon, {IconProps} from './Icon';

const XIcon: FC<IconProps> = memo(props => (
  <Icon {...props} height={48} viewBox="0 0 48 48" width={48}>
    <path d="M4 4L44 44M44 4L4 44" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
  </Icon>
));

export default XIcon;
