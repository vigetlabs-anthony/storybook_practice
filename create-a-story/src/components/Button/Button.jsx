import React from "react";
import PropTypes from "prop-types";
import "./button.css";

/**
 * Primary UI component for user interaction
 */

export const Button = (props) => {
  const { primary, isLoading } = props;
  let content = isLoading ? "Loading" : "Button";
  let styles = {
    backgroundColor: primary ? "blue" : "red",
  };

  return (
    <button type="button" style={styles}>
      {content}
    </button>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

// Button.defaultProps = {
//   backgroundColor: null,
//   primary: false,
//   size: "medium",
//   onClick: undefined,
// };
