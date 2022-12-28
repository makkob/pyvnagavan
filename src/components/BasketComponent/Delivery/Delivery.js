import React from "react";

import styles from "./Delivery.module.css";


export default function Delivery() {
  return (
    <div>
      <form>
        <div className={styles.block}>
          <label className={styles.label}>
            Контактні дані:{" "}
            <input
              type="text"
              name="name"
              placeholder="Ім'я"
              required
              className={styles.input}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Телефон"
              required
              className={styles.input}
            />
            <input
              type="email"
              name="email"
              placeholder="Email "
              required
              className={styles.input}
            />
          </label>
        </div>

        
        <div className={styles.block}>
          <label className={styles.label}>
            Доставка:{" "}
            <input
              type="text"
              name="street-address"
              placeholder="Адреса"
              required
              className={styles.input}
            />
            <input
              type="text"
              name="house"
              placeholder="Будинок"
              required
              className={styles.input}
            />
            <input
              type="text"
              name="apartment"
              placeholder="Квартира"
              required
              className={styles.input}
            />
            <br />
            <input
              type="text"
              name="code"
              placeholder="Код"
              className={styles.input}
            />
            <input
              type="text"
              name="floor"
              placeholder="Поверх"
              required
              className={styles.input}
            />
            <input
              type="text"
              name="comment"
              placeholder="Коментар"
              className={styles.input}
            />
          </label>
        </div>


        <div className={styles.block}>
          <label className={styles.label}>
            Час:{" "}
            <input
              type="date"
              name="date"
              placeholder="День"
              className={styles.input}
            />
            <input
              type="time"
              name="time"
              placeholder="Час"
              className={styles.input}
            />
            <label className={styles.label}>
              Якнайшвидше{" "}
              <div className={styles.checkbox}>
                <input type="checkbox" name="asap" /><div></div>
              </div>
            </label>
          </label>
        </div>


        <div className={styles.block}>
          <label className={styles.label}>
            Оплата:{" "}
            <input
              type="text"
              name="discount"
              placeholder="Купон на знижку"
              className={styles.input}
            />
            <input
              type="number"
              name="change"
              placeholder="Решта з"
              className={styles.input}
            />
            <label className={styles.label}>
              Без решти
              <div className={styles.checkbox}>
                <input type="checkbox" name="no-change" /><div></div>
              </div>
            </label>
            <select name="payment" className={styles.input}>
              <option value="card">Оплата карткою онлайн</option>
            </select>
          </label>
        </div>
        <input type="submit" className={styles.input} />
      </form>
    </div>
  );
}
