import { forwardRef, type Ref, type SVGProps } from 'react';

const ReloadArrow = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <g clipPath="url(#clip0_3226_9373)">
      <path
        d="M22.0622 7.93725C20.0247 5.89975 17.1372 4.72475 13.9622 5.04975C9.37469 5.51225 5.59969 9.23725 5.08719 13.8247C4.39969 19.8872 9.08719 24.9997 14.9997 24.9997C18.9872 24.9997 22.4122 22.6622 24.0122 19.2997C24.4122 18.4622 23.8122 17.4997 22.8872 17.4997C22.4247 17.4997 21.9872 17.7497 21.7872 18.1622C20.3747 21.1997 16.9872 23.1247 13.2872 22.2997C10.5122 21.6872 8.27469 19.4247 7.68719 16.6497C6.63719 11.7997 10.3247 7.49975 14.9997 7.49975C17.0747 7.49975 18.9247 8.36225 20.2747 9.72475L18.3872 11.6122C17.5997 12.3997 18.1497 13.7497 19.2622 13.7497H23.7497C24.4372 13.7497 24.9997 13.1872 24.9997 12.4997V8.01225C24.9997 6.89975 23.6497 6.33725 22.8622 7.12475L22.0622 7.93725Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_3226_9373">
        <rect width="30" height="30" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(ReloadArrow);

export default ForwardRef;
