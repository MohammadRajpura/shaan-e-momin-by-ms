import "./Button.css";

const Button = ({
  type = "button",
  color = "primary",
  children,
  fill = "fill",
  rounded = false,
  icon = "",
  w = "auto",
  className,
}) => {
  return (
    <button
      type={type}
      style={{ width: w, justifyContent: "center" }}
      className={`btn ${
        color == "primary"
          ? "btn-site-primary"
          : color == "secondary"
          ? "btn-site-secondary"
          : color == "gradient"
          ? "btn-site-gradient"
          : "btn-site-primary"
      } ${fill == "outline" ? "outline" : ""}  ${
        rounded ? "rounded" : ""
      } ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
