import CssBaseline from "@mui/material/CssBaseline";
//import Container from "@mui/material/Container";
import Navbar from "./components/Navbar.tsx";
import ImageCollection from "./components/ImageCollection";
import Subheader from "./components/Subheader";
import ExperienceList from "./components/ExperienceList";

function App() {
  return (
    <CssBaseline>
      <Navbar />
      <ImageCollection />
      <Subheader />
      <ExperienceList />
    </CssBaseline>
  );
}

export default App;
