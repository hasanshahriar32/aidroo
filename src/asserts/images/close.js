const CloseSVG = ({ fillColor = "#000000", className = "", ...props }) => {
  return (
    <svg
      fill={fillColor}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
      height={props.height || 20}
      width={props.width || 20}
      viewBox="0 0 24 24"
    >
      <path d="M12 10.5859L4.707 3.29297 3.293 4.70703 10.586 12 3.293 19.293 4.707 20.707 12 13.4141 19.293 20.707 20.707 19.293 13.414 12 20.707 4.70703 19.293 3.29297 12 10.5859Z" />
    </svg>
  );
};

export default CloseSVG;
