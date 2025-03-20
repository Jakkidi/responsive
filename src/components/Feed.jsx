import { Box, Stack, Skeleton } from "@mui/material";
import React, { useState } from "react";
import Post from "./Post";

const Feed = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, [3000]);

  return (
    <Box className="flex-4 p-0 md:p-2">
      {loading ? (
        <Stack spacing={1}>
          <Skeleton variant="text" className="h-24" />
          <Skeleton variant="text" className="h-5" />
          <Skeleton variant="text" className="h-5" />
          <Skeleton variant="rectangular" className="h-72" />
        </Stack>
      ) : (
        <>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </>
      )}
    </Box>
  );
};

export default Feed;
