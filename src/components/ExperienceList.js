import experiences from "../allExperiences";
import ExperienceCard from "./ExperienceCard";
import Box from "@mui/material/Box";

function ExperienceList() {
  const experienceList = experiences.map((experience, i) => {
    return (
      <ExperienceCard
        key={i}
        image={experience.image}
        firstname={experience.firstname}
        lastname={experience.lastname}
        experienceType={experience.experienceType}
        price={experience.price}
        currency={experience.currency}
        rating={experience.rating}
        country={experience.country}
        soldout={experience.soldout}
        online={experience.online}
      />
    );
  });
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        marginTop: "50px",
        alignItems: "center",
        justifyContent: "center",
        alignContent: "spaceAround",
      }}
    >
      {experienceList}
    </Box>
  );
}

export default ExperienceList;
