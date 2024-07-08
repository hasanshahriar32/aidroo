"use client";

export default function LogOutSvg({
  isHovered,
  initialColor = "#00000",
  hoverColor = "white",
  size = 24,
}) {
  const styles = {
    svg: {
      fill: !isHovered ? "black" : hoverColor, // gray-700 color code
      transition: "fill 0.3s ease",
    },
  };

  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 512 512"
      style={styles.svg}
      xmlSpace="preserve"
      width={size}
    >
      <style type="text/css">{`.st0{fill:inherit;}`}</style>
      <g>
        <path
          className="st0"
          d="M107.5,57.9h296.4c16,0,29,13,29,29v48.3c0,4.8-3.9,8.7-8.7,8.7H414c-4.8,0-8.7-3.9-8.7-8.7V93.5
            c0-4.5-3.6-8.1-8.1-8.1H114.2c-4.5,0-8.1,3.6-8.1,8.1v324c0,4.5,3.6,8.1,8.1,8.1h283.1c4.5,0,8.1-3.6,8.1-8.1v-41.6
            c0-4.8,3.9-8.7,8.7-8.7h10.2c4.8,0,8.7,3.9,8.7,8.7v48.3c0,16-13,29-29,29H107.5c-16,0-29-13-29-29V86.9
            C78.5,70.9,91.5,57.9,107.5,57.9z"
        />
        <path
          className="st0"
          d="M432.9,265.5v-16c0-4.8-3.9-8.7-8.7-8.7H276.6v-77.6l-92.2,92.2l92.2,92.2v-73.5h147.6
            C429,274.2,432.9,270.3,432.9,265.5z"
        />
      </g>
    </svg>
  );
}
