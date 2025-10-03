export function RetakeIcon({
  width = 34,
  height = 34,
}: {
  width?: number;
  height?: number;
}) {
  return (
    <svg width={width} height={height} viewBox="0 0 34 34" fill="none">
      <path
        d="M5.69 5.66L28.33 28.33M28.33 5.66L5.69 28.33"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function DoneIcon({
  width = 34,
  height = 34,
}: {
  width?: number;
  height?: number;
}) {
  return (
    <svg width={width} height={height} viewBox="0 0 34 34" fill="none">
      <path
        d="M5.39 8.51L29.17 26.32M29.17 8.51L5.39 26.32"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ErrorIcon({
  width = 32,
  height = 32,
}: {
  width?: number;
  height?: number;
}) {
  return (
    <svg width={width} height={height} viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2" />
      <path d="M2.67 2.67L29.33 29.33" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function DissatisfiedIcon({
  width = 40,
  height = 40,
}: {
  width?: number;
  height?: number;
}) {
  return (
    <svg width={width} height={height} viewBox="0 0 40 40" fill="none">
      {/* Face outline */}
      <circle cx="20" cy="20" r="16.67" stroke="#C3FF00" strokeWidth="2" />
      {/* Left eye */}
      <circle cx="14.67" cy="16.67" r="2.5" fill="#C3FF00" />
      {/* Right eye */}
      <circle cx="25.33" cy="16.67" r="2.5" fill="#C3FF00" />
      {/* Sad mouth */}
      <path
        d="M12 24C12 24 16 28 20 28C24 28 28 24 28 24"
        stroke="#C3FF00"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export function DeleteIcon({
  width = 24,
  height = 24,
}: {
  width?: number;
  height?: number;
}) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <path
        d="M5 3L19 3M8 3V1C8 0.447715 8.44772 0 9 0H15C15.5523 0 16 0.447715 16 1V3M19 3V21C19 21.5523 18.5523 22 18 22H6C5.44772 22 5 21.5523 5 21V3M10 9V17M14 9V17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
