import { forwardRef, type Ref, type SVGProps } from 'react';

const Close = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    width="34"
    height="34"
    viewBox="0 0 34 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <g opacity="0.7" clipPath="url(#clip0_692_2756)">
      <path
        d="M25.9245 8.0887C25.372 7.5362 24.4795 7.5362 23.927 8.0887L16.9995 15.002L10.072 8.07453C9.51953 7.52203 8.62703 7.52203 8.07453 8.07453C7.52203 8.62703 7.52203 9.51953 8.07453 10.072L15.002 16.9995L8.07453 23.927C7.52203 24.4795 7.52203 25.372 8.07453 25.9245C8.62703 26.477 9.51953 26.477 10.072 25.9245L16.9995 18.997L23.927 25.9245C24.4795 26.477 25.372 26.477 25.9245 25.9245C26.477 25.372 26.477 24.4795 25.9245 23.927L18.997 16.9995L25.9245 10.072C26.4629 9.5337 26.4629 8.62703 25.9245 8.0887Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_692_2756">
        <rect width="34" height="34" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Close);

export default ForwardRef;
