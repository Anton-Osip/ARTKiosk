import { forwardRef, type Ref, type SVGProps } from 'react';

const Apply = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    width="35"
    height="34"
    viewBox="0 0 35 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <g clipPath="url(#clip0_692_2770)">
      <path
        d="M13.2501 22.9501L8.29175 17.9918C7.73925 17.4393 6.86092 17.4393 6.30842 17.9918C5.75592 18.5443 5.75592 19.4226 6.30842 19.9751L12.2443 25.911C12.7968 26.4635 13.6893 26.4635 14.2418 25.911L29.2584 10.9085C29.8109 10.356 29.8109 9.47762 29.2584 8.92512C28.7059 8.37262 27.8276 8.37262 27.2751 8.92512L13.2501 22.9501Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_692_2770">
        <rect width="34" height="34" fill="white" transform="translate(0.5)" />
      </clipPath>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Apply);

export default ForwardRef;
