import { forwardRef, type Ref, type SVGProps } from 'react';

const SimpleArrow = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width="35"
    height="34"
    viewBox="0 0 35 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <g clipPath="url(#clip0_3346_9909)">
      <path
        d="M13.6608 11.506C13.1083 12.0585 13.1083 12.951 13.6608 13.5035L19.1575 19.0002L13.6608 24.4968C13.1083 25.0493 13.1083 25.9418 13.6608 26.4943C14.2133 27.0468 15.1058 27.0468 15.6583 26.4943L22.1608 19.9918C22.7133 19.4393 22.7133 18.5468 22.1608 17.9943L15.6583 11.4918C15.12 10.9535 14.2133 10.9535 13.6608 11.506Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_3346_9909">
        <rect width="34" height="34" fill="white" transform="translate(0.5)" />
      </clipPath>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(SimpleArrow);

export default ForwardRef;
