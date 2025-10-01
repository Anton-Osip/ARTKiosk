import { forwardRef, type Ref, type SVGProps } from 'react';

const RuIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    width="44"
    height="32"
    viewBox="0 0 44 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <g clipPath="url(#clip0_3354_10150)">
      <mask
        id="mask0_3354_10150"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="44"
        height="32"
      >
        <path
          d="M39.4048 0.643066H4.59524C2.3335 0.643066 0.5 2.47657 0.5 4.7383V27.2621C0.5 29.5238 2.3335 31.3573 4.59524 31.3573H39.4048C41.6665 31.3573 43.5 29.5238 43.5 27.2621V4.7383C43.5 2.47657 41.6665 0.643066 39.4048 0.643066Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_3354_10150)">
        <path
          d="M39.4048 0.643066H4.59524C2.3335 0.643066 0.5 2.47657 0.5 4.7383V27.2621C0.5 29.5238 2.3335 31.3573 4.59524 31.3573H39.4048C41.6665 31.3573 43.5 29.5238 43.5 27.2621V4.7383C43.5 2.47657 41.6665 0.643066 39.4048 0.643066Z"
          fill="#0034A9"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.5 21.1191H43.5V31.3572H0.5V21.1191Z"
          fill="#D7280F"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.5 0.643066H43.5V10.8812H0.5V0.643066Z"
          fill="white"
        />
        <path
          d="M39.4048 1.66699H4.59524C2.89894 1.66699 1.52381 3.04212 1.52381 4.73842V27.2622C1.52381 28.9585 2.89894 30.3336 4.59524 30.3336H39.4048C41.1011 30.3336 42.4762 28.9585 42.4762 27.2622V4.73842C42.4762 3.04212 41.1011 1.66699 39.4048 1.66699Z"
          stroke="black"
          strokeOpacity="0.1"
          strokeWidth="0.858586"
        />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_3354_10150">
        <rect
          width="43"
          height="30.7143"
          fill="white"
          transform="translate(0.5 0.643066)"
        />
      </clipPath>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(RuIcon);

export default ForwardRef;
