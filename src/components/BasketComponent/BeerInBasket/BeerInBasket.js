import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listMyBasket, deleteFromBasket } from "../../../actions/basketActions";

import styles from "./BeerInBasket.module.css";

export default function BeerInBasket() {
  const dispatch = useDispatch();
  const { basketState } = useSelector((state) => state);
  const productList = useSelector((state) => state.itemState);
  const { products, loading } = productList;

  useEffect(() => {
    dispatch(listMyBasket());
  }, []);
  const removeItem = (id) => {
    // console.log(id);
    dispatch(deleteFromBasket(id));
  };

  if (!basketState.loading && basketState.itemInBasket) {
    const items = basketState.itemInBasket[0];
    return (
      <div className={styles.grid}>
        {items &&
          items.map(({ product, dataValues }) => {
            const { id, img, name, price } = product;
            const { quantity } = dataValues;

            return (
              <div key={id} className={styles.item}>
                <img
                  src={
                    img
                      ? require(`../../../../../back_pyvnagavan/static/${img}`)
                      : "https://img.freepik.com/free-vector/glitch-error-404-page_23-2148105404.jpg"
                  }
                  className={styles.img}
                />
                <h2 className={styles.header}>{name}</h2>

                <p className={styles.text}>
                  <b>Ціна за 1 літр:</b> {price} грн,
                </p>
                <p>
                  <b>Кількість:</b> {quantity} літрів
                </p>
                <p className={styles.text}> </p>
                <button
                  onClick={() => {
                    removeItem(dataValues.id);
                  }}
                  className={styles.button}
                >
                  Видалити
                </button>
              </div>
            );
          })}
        {loading && <h1> Завантажується пивко ... </h1>}
      </div>
    );
  }
  if (basketState.loading || !basketState.itemInBasket) {
    return <div> Завантажується корзина</div>;
  }
}
