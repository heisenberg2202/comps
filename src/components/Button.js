import React from "react";
import className from "classnames";

export default function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest //collect all remaing props and assign them to the variable rest
}) {
  const classes = className(
    rest.className,
    "flex items-center px-3 px-1.5 border",
    {
      "border-blue-600 bg-blue-500 ": primary,
      "border-gray-900 bg-gray-900 ": secondary,
      "border-green-600 bg-green-500 ": success,
      "border-yellow-400 bg-yellow-500": warning,
      "border-red-500 bg-red-500": danger,
      "rounded-full": rounded,
      "bg-white": outline,
      "text-white":
        !outline && (primary || secondary || success || warning || danger),
      "text-blue-400": outline && primary,
      "text-gray-500": outline && secondary,
      "text-green-600": outline && success,
      "text-yellow-500": outline && warning,
      "text-red-600": outline && danger,
    }
  );

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);
    if (count > 1) {
      return new Error(
        "Only one of primary, secondary, success, warning, danger can be true"
      );
    }
  },
};
