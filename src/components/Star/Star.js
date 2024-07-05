const Star = ({
  colorClass,
  onClick,
  onMouseEnter,
  onMouseLeave,
  index,
  isEditable,
  size = 18,
}) => {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
      width={`${size}px`}
      height={`${size}px`}
      onClick={isEditable ? () => onClick(index) : undefined}
      onMouseEnter={isEditable ? () => onMouseEnter(index) : undefined}
      onMouseLeave={isEditable ? onMouseLeave : undefined}
      style={{ cursor: isEditable ? "pointer" : "default" }}
    >
      <style>
        {`
          .initial { fill: #9b9b9b; }
          .white { fill: #ffffff; }
          .red { fill: #ff0000; }
          .yellow { fill: #f9931f; }
          .green { fill: #00a53b; }
          .blue { fill: #0090ff; }
        `}
      </style>
      <g>
        <path
          className={colorClass}
          d="M507.35,256.12c0,69.44-28.13,132.17-73.46,177.5c-45.32,45.55-108.28,73.68-177.5,73.68
		c-57.16,0-110.29-19.2-152.49-51.8c-0.22-0.22-0.45-0.22-0.67-0.45c-0.22,0-0.22-0.22-0.45-0.45c-0.22,0-0.45-0.22-0.67-0.45
		c-4.69-3.57-9.15-7.59-13.62-11.61c-4.24-3.8-8.26-7.81-12.28-11.83v-0.22c-0.22-0.22-0.22-0.22-0.45-0.22v-0.22
		c-2.46-2.23-4.47-4.46-6.48-6.7c-0.22-0.22-0.45-0.45-0.67-0.67C29.33,378.47,5.44,320.2,5.44,256.12
		c0-69.21,28.13-131.95,73.46-177.5C124.22,33.3,187.19,5.17,256.4,5.17c69.21,0,132.18,28.13,177.5,73.45
		C479.22,124.17,507.35,186.91,507.35,256.12z"
        />
        <g>
          <g>
            <path
              className="white"
              d="M336.92,284.1l47.76,151.87l-110.19-78.71l0.32-0.39l31.8-54.22L128.96,435.07l11.83-41.43
				C192.03,321,310.49,230.46,310.49,230.46c-100.24,2.26-164.99,32.96-164.99,32.96l-96.62-72.19H205.6l50.73-151.48l49.12,151.48
				l158.46,0.39L336.92,284.1z"
            />
          </g>
          <path
            className="white"
            d="M473,186.4l-165.8-0.4L255.9,27.6l-53,158.4H39l132.2,98.7c0,0,67.8-43.5,141.4-57.7
		c0,0-123.9,94.6-177.5,170.6l-12.6,44.4l134-95.5l133.6,95.5l-49.9-158.9L473,186.4z"
          />
        </g>
      </g>
    </svg>
  );
};

export default Star;
