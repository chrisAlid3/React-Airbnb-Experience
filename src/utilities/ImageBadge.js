import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

/* Props: position, textColor, bgcolor, text */
function ImageBadge(props) {
  let position = "";

  if (props.position === "") {
    position = "left";
  } else {
    position = props.position;
  }

  return (
    <Box>
      {position === "left" && (
        <Box
          sx={{
            backgroundColor: props.bgcolor,
            paddingLeft: "8px",
            paddingRight: "8px",
            position: "absolute",
            top: "8px",
            left: "16px",
          }}
        >
          <Typography variant="subtitle2" color={props.textColor}>
            {props.text}
          </Typography>
        </Box>
      )}
      {position === "right" && (
        <Box
          sx={{
            backgroundColor: props.bgcolor,
            paddingLeft: "8px",
            paddingRight: "8px",
            position: "absolute",
            top: "8px",
            right: "16px",
          }}
        >
          <Typography variant="subtitle2" color={props.textColor}>
            {props.text}
          </Typography>
        </Box>
      )}
    </Box>
  );
}

export default ImageBadge;
