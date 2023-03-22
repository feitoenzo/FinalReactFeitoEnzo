import { useState } from "react";
import styles from "./ItemCount.module.css";

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [contador, setContador] = useState(initial);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  return (
    <div>
      <h2 className={styles.stockT}>{stock + " Unidad/es en stock"}</h2>
      <h2 className={styles.contadorT}>
        {"Sumaste " + contador + " unidad/es"}
      </h2>

      <button onClick={sumar}>+</button>

      <button onClick={restar}>-</button>

      <button onClick={() => onAdd(contador)}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
