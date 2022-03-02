import "./Button.scss";
import {CSSProperties, useMemo} from "react";

export type ButtonType = "Primary" | "Secondary"| "SecondaryDark" | "LinkDark" | "Tertiary" | "TertiaryDark" | "Link" | "LinkPrimary";
export type ButtonSize = "Small" | "Large";

export interface ButtonProps {
  type?: ButtonType;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  inverted?: boolean;
  children: JSX.Element | string;
  onClick?: () => void;
  className?: string;
  backgroundColor?: string;
  textColor?: string;
}

export function Button({
  children,
  onClick,
  type,
  size,
  loading,
  disabled,
  className,
  inverted,
  backgroundColor,
  textColor
}: ButtonProps) {
  let _className = "btn";

  if (type === "Primary") _className += " primary";
  else if (type === "Secondary") _className += " secondary";
  else if (type === "SecondaryDark") _className += " secondary-dark";
  else if (type === "LinkDark") _className += " link-dark";
  else if (type === "Tertiary") _className += " tertiary";
  else if (type === "TertiaryDark") _className += " tertiary-dark";
  else if (type === "Link") _className += " link";
  else if (type === "LinkPrimary") _className += " link-primary";

  if (size === "Small") _className += " small";
  if (size === "Large") _className += " large";

  if (inverted) _className += " inverted";

  const customStyle = useMemo(() => {
    const style = {} as CSSProperties;

    if (backgroundColor) {
      style.backgroundColor = backgroundColor;
    }
    if (textColor) {
      style.color = textColor;
    }

    return style;
  }, [backgroundColor, textColor]);

  return (
    <button
      className={`${_className} ${className || ''}`}
      onClick={onClick}
      disabled={loading || disabled}
      style={customStyle}
    >
      {!loading ? children : ""}
      {loading ? "..." : ""}
    </button>
  );
}
