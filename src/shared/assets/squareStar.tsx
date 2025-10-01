import { forwardRef, type Ref, type SVGProps } from 'react';

const SquareStar = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width="38"
    height="38"
    viewBox="0 0 38 38"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <g clipPath="url(#clip0_1278_10213)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30.0833 3.16797H7.91667C6.175 3.16797 4.75 4.59297 4.75 6.33464V28.5013C4.75 30.243 6.175 31.668 7.91667 31.668H14.25H23.75H30.0833C31.825 31.668 33.25 30.243 33.25 28.5013V6.33464C33.25 4.59297 31.825 3.16797 30.0833 3.16797ZM19 26.918L21.9767 20.3946L28.5 17.418L21.9767 14.4413L19 7.91797L16.0233 14.4413L9.5 17.418L16.0233 20.3946L19 26.918Z"
        fill="#C3FF00"
      />
    </g>
    <defs>
      <clipPath id="clip0_1278_10213">
        <rect width="38" height="38" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(SquareStar);

export default ForwardRef;
