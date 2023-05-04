//import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Header from "./components/Navbar";
import ImageCollection from "./components/ImageCollection";
import Subheader from "./components/Subheader";
import ExperienceList from "./components/ExperienceList";

function App() {
  return (
    //  <CssBaseline>
    <Container maxWidth="fixed">
      <Header />
      <ImageCollection />
      <Subheader />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignContent: "space-around",
          color: "error",
        }}
      >
        <ExperienceList />
      </Box>
    </Container>
    //  </CssBaseline>
  );
}

export default App;
