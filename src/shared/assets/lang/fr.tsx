import { forwardRef, type Ref, type SVGProps } from 'react';

const FrIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    width="44"
    height="32"
    viewBox="0 0 44 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <g clipPath="url(#clip0_3354_10025)">
      <mask
        id="mask0_3354_10025"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="44"
        height="32"
      >
        <path
          d="M39.4048 0.642578H4.59524C2.3335 0.642578 0.5 2.47608 0.5 4.73781V27.2616C0.5 29.5233 2.3335 31.3568 4.59524 31.3568H39.4048C41.6665 31.3568 43.5 29.5233 43.5 27.2616V4.73781C43.5 2.47608 41.6665 0.642578 39.4048 0.642578Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_3354_10025)">
        <path
          d="M39.4048 0.642578H4.59524C2.3335 0.642578 0.5 2.47608 0.5 4.73781V27.2616C0.5 29.5233 2.3335 31.3568 4.59524 31.3568H39.4048C41.6665 31.3568 43.5 29.5233 43.5 27.2616V4.73781C43.5 2.47608 41.6665 0.642578 39.4048 0.642578Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.5 0.642578H14.8333V31.3568H0.5V0.642578Z"
          fill="#001C98"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M29.1667 0.642578H43.5V31.3568H29.1667V0.642578Z"
          fill="#F02532"
        />
        <path
          d="M39.4048 1.66602H4.59524C2.89894 1.66602 1.52381 3.04114 1.52381 4.73744V27.2612C1.52381 28.9575 2.89894 30.3327 4.59524 30.3327H39.4048C41.1011 30.3327 42.4762 28.9575 42.4762 27.2612V4.73744C42.4762 3.04114 41.1011 1.66602 39.4048 1.66602Z"
          stroke="black"
          strokeOpacity="0.1"
          strokeWidth="0.858586"
        />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_3354_10025">
        <rect
          width="43"
          height="30.7143"
          fill="white"
          transform="translate(0.5 0.642578)"
        />
      </clipPath>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(FrIcon);

export default ForwardRef;
