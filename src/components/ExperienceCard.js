function ExperienceCard(props) {
  console.log(props.id);
  return (
    <div key={props.id}>
      <h1>
        I am {props.firstname} {props.lastname} with a rating of {props.rating}
      </h1>
    </div>
  );
}

export default ExperienceCard;
