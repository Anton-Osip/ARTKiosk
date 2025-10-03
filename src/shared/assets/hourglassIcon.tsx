import { forwardRef, type Ref, type SVGProps } from 'react';

const HourglassIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width="16"
    height="17"
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <g clipPath="url(#clip0_2701_18139)">
      <path
        d="M5.33333 1.83398C4.6 1.83398 4 2.43398 4 3.16732L4.00667 5.28732C4.00667 5.64065 4.14667 5.97398 4.39333 6.22732L6.66667 8.50065L4.39333 10.7873C4.14667 11.034 4.00667 11.374 4.00667 11.7273L4 13.834C4 14.5673 4.6 15.1673 5.33333 15.1673H10.6667C11.4 15.1673 12 14.5673 12 13.834V11.7273C12 11.374 11.86 11.034 11.6133 10.7873L9.33333 8.50065L11.6067 6.23398C11.86 5.98065 12 5.64065 12 5.28732V3.16732C12 2.43398 11.4 1.83398 10.6667 1.83398H5.33333ZM10.6667 11.774V13.1673C10.6667 13.534 10.3667 13.834 10 13.834H6C5.63333 13.834 5.33333 13.534 5.33333 13.1673V11.774C5.33333 11.594 5.40667 11.4273 5.52667 11.3007L8 8.83398L10.4733 11.3073C10.5933 11.4273 10.6667 11.6006 10.6667 11.774Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_2701_18139">
        <rect
          width="16"
          height="16"
          fill="white"
          transform="translate(0 0.5)"
        />
      </clipPath>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(HourglassIcon);

export default ForwardRef;
