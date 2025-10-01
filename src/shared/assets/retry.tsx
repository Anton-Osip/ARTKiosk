import { forwardRef, type Ref, type SVGProps } from 'react';

const Retry = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    width="35"
    height="34"
    viewBox="0 0 35 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <g clipPath="url(#clip0_692_2766)">
      <path
        d="M25.5038 8.99542C23.1946 6.68625 19.9221 5.35458 16.3238 5.72292C11.1246 6.24708 6.84631 10.4687 6.26548 15.6679C5.48631 22.5387 10.7988 28.3329 17.4996 28.3329C22.0188 28.3329 25.9005 25.6838 27.7138 21.8729C28.1671 20.9237 27.4871 19.8329 26.4388 19.8329C25.9146 19.8329 25.4188 20.1162 25.1921 20.5837C23.5913 24.0262 19.7521 26.2079 15.5588 25.2729C12.4138 24.5788 9.87798 22.0146 9.21214 18.8696C8.02214 13.3729 12.2013 8.49958 17.4996 8.49958C19.8513 8.49958 21.948 9.47708 23.478 11.0212L21.3388 13.1604C20.4463 14.0529 21.0696 15.5829 22.3305 15.5829H27.4163C28.1955 15.5829 28.833 14.9454 28.833 14.1662V9.08042C28.833 7.81958 27.303 7.18208 26.4105 8.07458L25.5038 8.99542Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_692_2766">
        <rect width="34" height="34" fill="white" transform="translate(0.5)" />
      </clipPath>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Retry);

export default ForwardRef;
