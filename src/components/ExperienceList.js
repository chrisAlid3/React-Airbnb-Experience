import Container from "@mui/material/Container";
import experiences from "../allExperiences";
import ExperienceCard from "./ExperienceCard";

function ExperienceList() {
  const experienceList = experiences.map((experience, i) => {
    return (
      <Container maxWidth="lg">
        <ExperienceCard
          image={experience.image}
          firstname={experience.firstname}
          lastname={experience.lastname}
          experienceType={experience.experienceType}
          price={experience.price}
          currency={experience.currency}
          rating={experience.rating}
          country={experience.country}
          id={i}
        />
      </Container>
    );
  });
  return experienceList;
}

export default ExperienceList;
