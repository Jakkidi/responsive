import React, { useState } from "react";
import {
  Avatar,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import {
  Add as AddIcon,
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";

const Add = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Delete"
        className="fixed bottom-5 left-1/2 md:left-8 transform -translate-x-1/2 md:translate-x-0"
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>

      <Modal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="flex items-center justify-center"
      >
        <div className="w-96 h-72 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-2xl">
          <Typography variant="h6" className="text-gray-500 text-center">
            Create post
          </Typography>

          <div className="flex items-center gap-3 mb-5">
            <Avatar
              src="https://images5.alphacoders.com/687/687579.jpg"
              className="w-8 h-8"
            />
            <Typography fontWeight={500} variant="span">
              John Doe
            </Typography>
          </div>

          <TextField
            className="w-full"
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="What are you thinking about?"
            variant="standard"
          />

          <div className="flex flex-row gap-1 mt-2 mb-3">
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </div>

          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Post</Button>
            <Button className="w-24">
              <DateRange />
            </Button>
          </ButtonGroup>
        </div>
      </Modal>
    </>
  );
};

export default Add;
