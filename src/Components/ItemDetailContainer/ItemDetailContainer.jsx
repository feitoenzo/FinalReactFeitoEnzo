import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../../productsMock";
import ItemCount from "../ItemCount/ItemCount";
import MediaCard from "../MediaCard/MediaCard";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const productSelected = products.find((element) => element.id === Number(id));

  const onAdd = (cantidad) => {
    console.log(`se agrego al carrito ${cantidad} productos `);
  };

  return (
    <div>
      <div>
        <img src={productSelected.image} alt="" />
      </div>
      <MediaCard />
      <ItemCount stock={productSelected.stock} onAdd={onAdd} />
    </div>
  );
};

export default ItemDetailContainer;
