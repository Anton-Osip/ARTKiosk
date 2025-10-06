import { forwardRef, type Ref, type SVGProps } from 'react';

const Cash = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    width="20"
    height="24"
    viewBox="0 0 20 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <g clipPath="url(#clip0_416_4860)">
      <path
        d="M8 16V8C8 6.9 8.89 6 10 6H19V5C19 3.9 18.1 3 17 3H3C1.89 3 1 3.9 1 5V19C1 20.1 1.89 21 3 21H17C18.1 21 19 20.1 19 19V18H10C8.89 18 8 17.1 8 16ZM11 8C10.45 8 10 8.45 10 9V15C10 15.55 10.45 16 11 16H20V8H11ZM14 13.5C13.17 13.5 12.5 12.83 12.5 12C12.5 11.17 13.17 10.5 14 10.5C14.83 10.5 15.5 11.17 15.5 12C15.5 12.83 14.83 13.5 14 13.5Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_416_4860">
        <rect width="20" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Cash);

export default ForwardRef;
