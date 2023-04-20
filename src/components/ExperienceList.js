import experiences from "../allExperiences";
import ExperienceCard from "./ExperienceCard";

function ExperienceList() {
  experiences.map((experience) => {
    return <ExperienceCard name={experience.name} rating={experience.rating} />;
  });
}

export default ExperienceList;
