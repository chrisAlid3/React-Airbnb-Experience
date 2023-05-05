//import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Navbar from "./components/Navbar";
import ImageCollection from "./components/ImageCollection";
import Subheader from "./components/Subheader";
import ExperienceList from "./components/ExperienceList";

function App() {
  return (
    //  <CssBaseline>
    <Container maxWidth="fixed">
      <Navbar />
      <ImageCollection />
      <Subheader />
      <ExperienceList />
    </Container>
    //  </CssBaseline>
  );
}

export default App;
