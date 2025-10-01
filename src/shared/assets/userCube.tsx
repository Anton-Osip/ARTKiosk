import { forwardRef, type Ref, type SVGProps } from 'react';

const UserCube = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"   ref={ref}
         {...props}>
      <path d="M9 1H6C3.23858 1 1 3.23858 1 6V9" stroke="white" strokeLinecap="round"/>
      <path d="M9 39H6C3.23858 39 1 36.7614 1 34V31" stroke="white" strokeLinecap="round"/>
      <path d="M31 1H34C36.7614 1 39 3.23858 39 6V9" stroke="white" strokeLinecap="round"/>
      <path d="M31 39H34C36.7614 39 39 36.7614 39 34V31" stroke="white" strokeLinecap="round"/>
      <g clipPath="url(#clip0_3000_9917)">
        <mask id="mask0_3000_9917" maskUnits="userSpaceOnUse" x="8" y="7" width="24" height="24">
          <path d="M32 7H8V31H32V7Z" fill="white"/>
        </mask>
        <g mask="url(#mask0_3000_9917)">
          <path d="M19.98 19C22.74 19 24.98 16.76 24.98 14C24.98 11.24 22.75 9 19.98 9C17.21 9 14.98 11.24 14.98 14C14.98 16.76 17.22 19 19.98 19Z" fill="white"/>
          <path d="M27.34 26.49C27.18 27.08 26.68 27.46 26.07 27.46C25.46 27.46 24.96 27.08 24.8 26.48L24.54 25.51C24.4 25.01 24.02 24.63 23.52 24.49L22.54 24.22C21.97 24.06 21.58 23.56 21.58 22.95C21.58 22.65 21.67 22.38 21.83 22.17C21.23 22.06 20.62 22 19.98 22C15.71 22 12.17 24.54 11.5 27.86C11.38 28.45 11.86 29 12.47 29H27.49C28.09 29 28.57 28.45 28.46 27.86C28.31 27.09 27.99 26.36 27.55 25.69L27.34 26.499V26.49Z" fill="white"/>
          <path d="M29.58 22.9695C29.58 23.0395 29.54 23.1995 29.35 23.2595L28.37 23.5295C27.52 23.7595 26.88 24.3995 26.65 25.2495L26.39 26.2095C26.33 26.4295 26.16 26.4495 26.08 26.4495C26 26.4495 25.83 26.4295 25.77 26.2095L25.51 25.2395C25.28 24.3995 24.63 23.7595 23.79 23.5295L22.82 23.2695C22.61 23.2095 22.59 23.0295 22.59 22.9595C22.59 22.8795 22.61 22.6995 22.82 22.6395L23.8 22.3795C24.64 22.1395 25.28 21.4995 25.51 20.6595L25.79 19.6395C25.86 19.4695 26.02 19.4395 26.08 19.4395C26.14 19.4395 26.31 19.4595 26.37 19.6195L26.65 20.6495C26.88 21.4895 27.53 22.1295 28.37 22.3695L29.37 22.6495C29.57 22.7295 29.58 22.9095 29.58 22.9695Z" fill="white"/>
        </g>
      </g>
      <defs>
        <clipPath id="clip0_3000_9917">
          <rect width="24" height="24" fill="white" transform="translate(8 8)"/>
        </clipPath>
      </defs>
    </svg>

    );

const ForwardRef = forwardRef(UserCube);

export default ForwardRef;
