import * as React from "react";
import {
  Modal,
  ImageList,
  ImageListItem,
  CircularProgress,
} from "@mui/material";
import { Box } from "@mui/system";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "75%",
  maxWidth: 620,
  height: 480,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  bgcolor: "#ffffff",
  boxShadow: 24,
  borderRadius: "2px",
  pt: 1,
  px: 3,
  pb: 1,
};

const BreedeGenerator = (props: any) => {
  return (
    <Modal onClose={props.onClose} open={props.open}>
      <Box sx={{ ...style }}>
        {!props.isLoading ? (
          <ImageList sx={{ width: 617, height: 450 }} cols={3} rowHeight={164}>
            {props.breedImages.map((item: any, i: any) => (
              <ImageListItem key={i}>
                <img src={item} srcSet={item} alt={item} loading="lazy" />
              </ImageListItem>
            ))}
          </ImageList>
        ) : (
          <CircularProgress />
        )}
      </Box>
    </Modal>
  );
};

export default BreedeGenerator;
