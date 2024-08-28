import { IconProps } from "./shared";

export const ArrowRight = ({ color }: IconProps) => {
  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_1917_285"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="16"
        height="17"
      >
        <rect y="0.614746" width="16" height="16" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_1917_285)">
        <path
          d="M7.53332 13.4814C7.4111 13.3591 7.34721 13.2036 7.34166 13.0147C7.3361 12.8258 7.39443 12.6703 7.51666 12.548L10.7833 9.28136H3.33332C3.14443 9.28136 2.9861 9.21748 2.85832 9.0897C2.73055 8.96192 2.66666 8.80359 2.66666 8.6147C2.66666 8.42581 2.73055 8.26748 2.85832 8.1397C2.9861 8.01192 3.14443 7.94803 3.33332 7.94803H10.7833L7.51666 4.68136C7.39443 4.55914 7.3361 4.40359 7.34166 4.2147C7.34721 4.02581 7.4111 3.87025 7.53332 3.74803C7.65555 3.62581 7.8111 3.5647 7.99999 3.5647C8.18888 3.5647 8.34443 3.62581 8.46666 3.74803L12.8667 8.14803C12.9333 8.20359 12.9805 8.27303 13.0083 8.35636C13.0361 8.4397 13.05 8.52581 13.05 8.6147C13.05 8.70359 13.0361 8.78692 13.0083 8.8647C12.9805 8.94248 12.9333 9.0147 12.8667 9.08136L8.46666 13.4814C8.34443 13.6036 8.18888 13.6647 7.99999 13.6647C7.8111 13.6647 7.65555 13.6036 7.53332 13.4814Z"
          fill={`var(${color})`}
        />
      </g>
    </svg>
  );
};
