import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import { CardHeader } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import DeleteIcon from "@material-ui/icons/Delete";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { blue, green, purple, red, yellow } from "@material-ui/core/colors";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
const useStyles = makeStyles({
  avtrback: {
    backgroundColor: (note) => {
      if (note.category === "Money") {
        return yellow[700];
      }
      if (note.category === "Other") {
        return green[700];
      }
      if (note.category === "Life & Rules") {
        return red[700];
      }
    },
  },
});
const Cards = ({ note, DeleteBlog }) => {
  const classes = useStyles(note);
  return (
    <Card elevation={5}>
      <CardHeader
        avatar={
          <Avatar className={classes.avtrback} aria-label="recipe">
            {note.category[0].toUpperCase()}
          </Avatar>
        }
        action={
          <IconButton onClick={() => DeleteBlog(note.id)}>
            <DeleteIcon />
          </IconButton>
        }
        title={note.title}
        subheader={note.category}
      />

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {note.details}
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Cards;

{
  /* <div>{note.title}</div> */
}
