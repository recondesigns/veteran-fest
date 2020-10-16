export function setButtonStyle(style) {
  switch (style) {
    case "primary":
      return {
        background: `#618572`,
        color: `#ffffff`,
        border: `none`,
        display: `none`,
        boxShadow: `0px 2px 4px rgba(97, 133, 114, 0.14),
        0px 3px 4px rgba(97, 133, 114, 0.12), 0px 1px 5px rgba(97, 133, 114, 0.2)`
      };

    case "secondary":
      return {
        background: `#ffffff`,
        color: `#618572`,
        border: `2px solid #618572`,
        display: `none`,
        boxShadow: `0px 2px 4px rgba(97, 133, 114, 0.14),
        0px 3px 4px rgba(97, 133, 114, 0.12), 0px 1px 5px rgba(97, 133, 114, 0.2)`
      };
    case "google-button":
      return {
        background: `#ffffff`,
        color: `#4285f4`,
        border: `2px solid #4285f4`,
        display: `flex`,
        boxShadow: `0px 2px 4px rgba(97, 133, 114, 0.14),
        0px 3px 4px rgba(97, 133, 114, 0.12), 0px 1px 5px rgba(97, 133, 114, 0.2)`
      };
    case "text-button":
      return {
        background: `none`,
        color: `#799C8A`,
        border: `none`,
        display: "none",
        boxShadow: `none`
      };
    default:
      return "Default case";
  }
}
