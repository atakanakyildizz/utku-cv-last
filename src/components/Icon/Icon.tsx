// src/components/Icon/Icon.tsx
import { FC, memo } from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  svgRef?: React.Ref<SVGSVGElement>;
}

const Icon: FC<IconProps> = memo(
  ({ children, className, svgRef, viewBox = '0 0 128 128', width = 128, fill = 'currentColor', ...props }) => (
    <svg
      ref={svgRef}
      className={className}
      viewBox={viewBox}
      width={width}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      {...props} // height, transform, stroke, vb. buradan gelebilir
    >
      {children}
    </svg>
  )
);

export default Icon;

