import React from "react";
import styles from "./items.module.css";

export default function Items({ items }) {

  return (
    // <div className={styles.products}>
    //   <div className={styles.items}>
    //     {items.map(({ name, id, price , oldPrice , rating, img}) => {
    //       return (
    //         <div className={styles.item} key={id}>
    //           <h2>{name}</h2>
    //           <img
    //             className={styles.itemsIMG}
    //             // src={require("../../db/img/7cfa27f3-0a3d-469a-b9a5-5451534bccc8.png")}
    //             src={
    //               img
    //                 ? require(`../../../../back_pyvnagavan/static/${img}`)
    //                 : "https://img.freepik.com/free-vector/glitch-error-404-page_23-2148105404.jpg"
    //             }
    //             alt={name}
    //           />
    //           <p>Стара ціна за літр {oldPrice}</p>
    //           <p>Ціна за 1 літр {price} грн</p>
    //           <p>Рейтинг {rating}</p>
    //           <button type="button" className={styles.button}>
    //             Заказать{" "}
    //           </button>
    //         </div>
    //       );
    //     })}
    //   </div>
    // </div>

    <h1>Items</h1>
  );
}
