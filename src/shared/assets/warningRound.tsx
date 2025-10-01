import { forwardRef, type Ref, type SVGProps } from 'react';

const WarningRound = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <g clipPath="url(#clip0_692_3221)">
      <path
        d="M16 2.66699C8.63996 2.66699 2.66663 8.64033 2.66663 16.0003C2.66663 23.3603 8.63996 29.3337 16 29.3337C23.36 29.3337 29.3333 23.3603 29.3333 16.0003C29.3333 8.64033 23.36 2.66699 16 2.66699ZM17.3333 22.667H14.6666V20.0003H17.3333V22.667ZM17.3333 17.3337H14.6666V9.33366H17.3333V17.3337Z"
        fill="#C3FF00"
      />
    </g>
    <defs>
      <clipPath id="clip0_692_3221">
        <rect width="32" height="32" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(WarningRound);

export default ForwardRef;
