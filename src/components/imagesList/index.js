import React from "react";
import { Container, Stack } from "react-bootstrap";

import ImgCard from "../imgCard";

const ImagesList = ({ images }) => {
  return (
    <Container className="my-5" fluid>
      <Stack
        className="flex-wrap justify-content-center"
        direction="horizontal"
        gap={3}
      >
        {images.map((img) => (
          <ImgCard key={img.date} {...img} />
        ))}
      </Stack>
    </Container>
  );
};

export default ImagesList;
