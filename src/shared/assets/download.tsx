import { forwardRef, type Ref, type SVGProps } from 'react';

const Download = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <g clipPath="url(#clip0_1258_9692)">
      <path
        d="M15.2075 8.25H13.75V3.66667C13.75 3.1625 13.3375 2.75 12.8333 2.75H9.16666C8.66249 2.75 8.24999 3.1625 8.24999 3.66667V8.25H6.79249C5.97666 8.25 5.56416 9.24 6.14166 9.8175L10.3492 14.025C10.7067 14.3825 11.2842 14.3825 11.6417 14.025L15.8492 9.8175C16.4267 9.24 16.0233 8.25 15.2075 8.25ZM4.58333 17.4167C4.58333 17.9208 4.99583 18.3333 5.49999 18.3333H16.5C17.0042 18.3333 17.4167 17.9208 17.4167 17.4167C17.4167 16.9125 17.0042 16.5 16.5 16.5H5.49999C4.99583 16.5 4.58333 16.9125 4.58333 17.4167Z"
        fill="black"
      />
    </g>
    <defs>
      <clipPath id="clip0_1258_9692">
        <rect width="22" height="22" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Download);

export default ForwardRef;
