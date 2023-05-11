import imageCollection from "../images/airbnbImageCollection.png";
import Box from "@mui/material/Box";

function ImageCollection() {
  return (
    <Box sx={{ margin: "auto", textAlign: "center", padding: "10px" }}>
      <img src={imageCollection} alt="collection"></img>
    </Box>
  );
}

export default ImageCollection;
