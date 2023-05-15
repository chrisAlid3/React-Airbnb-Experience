import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

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
          bgcolor={props.backgroundColor}
          sx={{ position: "absolute", top: "8px", left: "16px" }}
        >
          <Typography variant="subtitle2" color={props.textColor}>
            {props.text}
          </Typography>
        </Box>
      )}
      {position === "right" && (
        <Box
          bgcolor={props.backgroundColor}
          sx={{ position: "absolute", top: "8px", right: "16px" }}
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
