import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Subheader() {
  return (
    <Box
      sx={{
        paddingTop: "20px",
        paddingBottom: "20px",
        textAlign: "center",
        width: "100%",
      }}
    >
      <Typography variant="h4">Online Experiences</Typography>
      <Typography variant="body1" sx={{ color: "grey" }}>
        Join unique interactive activities led by one-of-a-kind hosts all
        without leaving home
      </Typography>
    </Box>
  );
}

export default Subheader;
