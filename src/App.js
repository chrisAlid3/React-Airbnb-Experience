//import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Header from "./components/Header";
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
      <ExperienceList />
    </Container>
    //  </CssBaseline>
  );
}

export default App;
