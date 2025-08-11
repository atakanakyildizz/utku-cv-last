import { FC, memo } from 'react';
import Icon, { IconProps } from './Icon';

const GoogleScholarIcon: FC<IconProps> = memo(props => (
  <Icon {...props} viewBox="0 0 48 48" width={48} height={48}>
    <path
      d="M24 4L4 18l20 14 20-14L24 4z" 
      fill="currentColor"
    />
    <path
      d="M14 28v8a10 10 0 0020 0v-8l-10 7-10-7z"
      fill="currentColor"
      opacity="0.6"
    />
  </Icon>
));

export default GoogleScholarIcon;
