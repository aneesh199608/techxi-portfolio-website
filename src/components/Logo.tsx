export default function Logo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
    >
      <g>
        <polyline className="logo-stroke" points="363.62 52.15 363.62 94.51 228.93 229.19 311.02 311.27"/>
        <circle className="logo-fill" cx="363.62" cy="52.94" r="15.79"/>
        <circle className="logo-fill" cx="311.02" cy="311.27" r="15.79"/>
      </g>
      <g>
        <polyline className="logo-stroke" points="300.48 242.36 364.13 306.01 364.13 362.85 274.51 362.85 274.51 338.27 170.55 234.31"/>
        <circle className="logo-fill" cx="300.48" cy="242.36" r="15.79"/>
      </g>
      <g>
        <polyline className="logo-stroke" points="232.88 89.02 280.14 41.76 317.53 41.76 317.53 80.17 83.5 314.2 83.5 362.85 35.87 362.85 35.87 302.42 169.53 168.76 95.13 94.36"/>
        <circle className="logo-fill" cx="233.44" cy="88.06" r="15.79"/>
        <circle className="logo-fill" cx="95.13" cy="94.36" r="15.79"/>
      </g>
      <g>
        <polyline className="logo-stroke" points="97.98 155.59 42.53 100.14 42.53 41.76 129.07 41.76 129.07 68.9 228.93 168.76"/>
        <circle className="logo-fill" cx="97.98" cy="155.59" r="15.79"/>
      </g>
      <g>
        <polyline className="logo-stroke" points="203.84 267.6 146.48 324.95 146.48 347.85"/>
        <circle className="logo-fill" cx="146.48" cy="347.85" r="15.79"/>
      </g>
      <style>{`
        .logo-stroke { stroke: currentColor; stroke-width: 7; stroke-linecap: round; fill: none; }
        .logo-fill { fill: currentColor; }
      `}</style>
    </svg>
  );
}
