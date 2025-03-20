import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";

const Post = () => {
  return (
    <Card className="m-5">
      <CardHeader
        avatar={
          <Avatar className="bg-red-500" aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Sam A"
        subheader="September 14, 2022"
      />
      <CardMedia
        component="img"
        className="h-1/5"
        image="https://decor2go.ca/cdn/shop/files/LostinSpaceWallpaperMural_99128546_Galaxy_Kids_Astral_Blue_pattern.jpg?v=1716754711&width=1445"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" className="text-gray-600">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite className="text-red-500" />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
