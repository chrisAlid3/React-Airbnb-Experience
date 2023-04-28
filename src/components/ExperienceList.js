import experiences from "../allExperiences";
import ExperienceCard from "./ExperienceCard";

function ExperienceList() {
  const experienceList = experiences.map((experience, i) => {
    console.log(experience.rating);
    return (
      <ExperienceCard
        firstname={experience.firstname}
        lastname={experience.lastname}
        rating={experience.rating}
        id={i}
      />
    );
  });
  return experienceList;
}

export default ExperienceList;
