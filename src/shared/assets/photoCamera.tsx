import { forwardRef, type Ref, type SVGProps } from 'react';

const PhotoCamera = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width="43"
    height="42"
    viewBox="0 0 43 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <g clipPath="url(#clip0_1293_12952)">
      <path
        d="M21.5 26.25C24.3995 26.25 26.75 23.8995 26.75 21C26.75 18.1005 24.3995 15.75 21.5 15.75C18.6005 15.75 16.25 18.1005 16.25 21C16.25 23.8995 18.6005 26.25 21.5 26.25Z"
        fill="#C3FF00"
      />
      <path
        d="M35.5 7H29.9525L27.7825 4.6375C27.135 3.92 26.19 3.5 25.21 3.5H17.79C16.81 3.5 15.865 3.92 15.2 4.6375L13.0475 7H7.49998C5.57498 7 3.99998 8.575 3.99998 10.5V31.5C3.99998 33.425 5.57498 35 7.49998 35H35.5C37.425 35 39 33.425 39 31.5V10.5C39 8.575 37.425 7 35.5 7ZM21.5 29.75C16.67 29.75 12.75 25.83 12.75 21C12.75 16.17 16.67 12.25 21.5 12.25C26.33 12.25 30.25 16.17 30.25 21C30.25 25.83 26.33 29.75 21.5 29.75Z"
        fill="#C3FF00"
      />
    </g>
    <defs>
      <clipPath id="clip0_1293_12952">
        <rect width="42" height="42" fill="white" transform="translate(0.5)" />
      </clipPath>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(PhotoCamera);

export default ForwardRef;
