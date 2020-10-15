export function setButtonStyle(style) {
  switch (style) {
    case "primary":
      return {
        background: `#618572`,
        color: `#ffffff`,
        border: `none`,
        display: `none`
      };

    case "secondary":
      return {
        background: `#ffffff`,
        color: `#618572`,
        border: `2px solid #618572`,
        display: `none`
      };
    case "google-button":
      return {
          background: `#ffffff`,
          color: `#4285f4`,
          border: `2px solid #4285f4`,
          display: `flex`,

      };
    default:
      return "Default case";
  }
}
