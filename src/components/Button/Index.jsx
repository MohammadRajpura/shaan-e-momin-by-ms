import { CircleQuestionMark } from "lucide-react";
import "./Button.css";

const Button = ({
  type = "button",
  color = "primary",
  children,
  fill = "fill",
  rounded = false,
  icon = "",
}) => {
  return (
    <button
      type={type}
      className={`btn ${
        color == "primary"
          ? "btn-site-primary"
          : color == "secondary"
          ? "btn-site-secondary"
          : color == "gradient"
          ? "btn-site-gradient"
          : "btn-site-primary"
      } ${fill == "outline" ? "outline" : ""}  ${rounded ? "rounded" : ""}`}
    >
      {children}
    </button>
  );
};

export default Button;
