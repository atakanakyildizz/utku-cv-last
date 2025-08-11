import { FC, memo } from 'react';
import Icon, { IconProps } from './Icon';

const XIcon: FC<IconProps> = memo(props => (
  <Icon {...props} viewBox="0 0 48 48" width={48} height={48}>
    <path
      d="M4 4L44 44M44 4L4 44"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
));

export default XIcon;
