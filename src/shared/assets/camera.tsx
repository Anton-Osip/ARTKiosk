import { forwardRef, type Ref, type SVGProps } from 'react';

const Camera = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    width="37"
    height="36"
    viewBox="0 0 37 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <g clipPath="url(#clip0_2643_9621)">
      <path
        d="M18.5 22.5C20.9853 22.5 23 20.4853 23 18C23 15.5147 20.9853 13.5 18.5 13.5C16.0147 13.5 14 15.5147 14 18C14 20.4853 16.0147 22.5 18.5 22.5Z"
        fill="currentColor"
      />
      <path
        d="M30.5 6H25.745L23.885 3.975C23.33 3.36 22.52 3 21.68 3H15.32C14.48 3 13.67 3.36 13.1 3.975L11.255 6H6.5C4.85 6 3.5 7.35 3.5 9V27C3.5 28.65 4.85 30 6.5 30H30.5C32.15 30 33.5 28.65 33.5 27V9C33.5 7.35 32.15 6 30.5 6ZM18.5 25.5C14.36 25.5 11 22.14 11 18C11 13.86 14.36 10.5 18.5 10.5C22.64 10.5 26 13.86 26 18C26 22.14 22.64 25.5 18.5 25.5Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_2643_9621">
        <rect width="36" height="36" fill="white" transform="translate(0.5)" />
      </clipPath>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Camera);

export default ForwardRef;
