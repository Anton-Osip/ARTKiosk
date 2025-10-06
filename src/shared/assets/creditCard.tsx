import { forwardRef, type Ref, type SVGProps } from 'react';

const CreditCard = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22 5.5H0V4.46875C0 3.52 0.616 2.75 1.375 2.75H20.625C21.384 2.75 22 3.52 22 4.46875V5.5ZM22 8.9375V17.875C22 18.2397 21.8551 18.5894 21.5973 18.8473C21.3394 19.1051 20.9897 19.25 20.625 19.25H1.375C1.01033 19.25 0.660591 19.1051 0.402728 18.8473C0.144866 18.5894 0 18.2397 0 17.875V8.9375H22ZM5.5 13.75C5.13533 13.75 4.78559 13.8949 4.52773 14.1527C4.26987 14.4106 4.125 14.7603 4.125 15.125C4.125 15.4897 4.26987 15.8394 4.52773 16.0973C4.78559 16.3551 5.13533 16.5 5.5 16.5H6.875C7.23967 16.5 7.58941 16.3551 7.84727 16.0973C8.10513 15.8394 8.25 15.4897 8.25 15.125C8.25 14.7603 8.10513 14.4106 7.84727 14.1527C7.58941 13.8949 7.23967 13.75 6.875 13.75H5.5Z"
      fill="white"
    />
  </svg>
);

const ForwardRef = forwardRef(CreditCard);

export default ForwardRef;
