import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import ImageBadge from "../utilities/ImageBadge";

function ExperienceCard(props) {
  return (
    <Card variant="outlined" sx={{ maxWidth: 230, mr: "50px", mb: "50px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={props.image}
          alt={props.experience}
        />
        {props.soldout && (
          <ImageBadge
            position="left"
            textColor="red"
            bgcolor="yellow"
            text="Sold out"
          />
        )}
        {props.online && (
          <ImageBadge
            position="right"
            textColor="green"
            bgcolor="orange"
            text="Online"
          ></ImageBadge>
        )}
        <CardContent>
          <Typography variant="body" color="text.secondary">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <StarIcon color="error" fontSize="small" />
              {props.rating} {props.country}
            </div>
          </Typography>
          <Typography variant="body2" color="text.secondary" mt={2}>
            {props.experienceType} with {props.firstname} {props.lastname}
          </Typography>
          <Typography variant="subtitle2" color="text.primary" mt={2}>
            From {props.currency}
            {props.price} / person
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ExperienceCard;
