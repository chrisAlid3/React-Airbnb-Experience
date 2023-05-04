import experiences from "../allExperiences";
import ExperienceCard from "./ExperienceCard";

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
      />
    );
  });
  return experienceList;
}

export default ExperienceList;
