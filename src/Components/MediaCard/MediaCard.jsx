import * as React from "react";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
import { products } from "../../productsMock";
import { useParams } from "react-router-dom";

export default function MediaCard() {
  const { id } = useParams();
  const productSelected = products.find((element) => element.id === Number(id));

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={<img src={productSelected.image} alt="" />}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <h1>{productSelected.title}</h1>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <h4>{productSelected.description}</h4>
        </Typography>
      </CardContent>
    </Card>
  );
}
