import { forwardRef, type Ref, type SVGProps } from 'react';

const EnIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    width="44"
    height="32"
    viewBox="0 0 44 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <g clipPath="url(#clip0_3354_10022)">
      <mask
        id="mask0_3354_10022"
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
      <g mask="url(#mask0_3354_10022)">
        <path
          d="M39.4048 0.642578H4.59524C2.3335 0.642578 0.5 2.47608 0.5 4.73781V27.2616C0.5 29.5233 2.3335 31.3568 4.59524 31.3568H39.4048C41.6665 31.3568 43.5 29.5233 43.5 27.2616V4.73781C43.5 2.47608 41.6665 0.642578 39.4048 0.642578Z"
          fill="#22438B"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.64286 2.69043L2.49438 2.74367L2.54762 6.78567L37.3203 29.3668L41.4913 29.291L41.4135 25.2736L6.64286 2.69043Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.59523 2.69043L2.54762 4.73805L39.4048 29.3095L41.4524 27.2618L4.59523 2.69043Z"
          fill="#C7152A"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M37.3571 2.69043H41.4524V6.78567C41.4524 6.78567 17.3929 21.9298 6.67972 29.3668C6.55072 29.4569 2.58858 29.3729 2.58858 29.3729L2.27119 25.4804L37.3571 2.69043Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M39.4928 2.63281L41.4524 4.73776L4.59523 29.3092L2.54762 27.2616L39.4928 2.63281Z"
          fill="#C7152A"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.881 2.69043H27.119V10.8809H41.4524V21.119H27.119V29.3095H16.881V21.119H2.54762V10.8809H16.881V2.69043Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.9286 2.69043H25.0714V12.9285H41.4524V19.0714H25.0714V29.3095H18.9286V19.0714H2.54762V12.9285H18.9286V2.69043Z"
          fill="#C7152A"
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
      <clipPath id="clip0_3354_10022">
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

const ForwardRef = forwardRef(EnIcon);

export default ForwardRef;
