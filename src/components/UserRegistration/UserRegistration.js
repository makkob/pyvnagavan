// import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import styles from "./UserRegistration.module.css";

export default function UserRegistration() {
  let now = new Date(),
    date18 = new Date(Number(now) - 1000 * 60 * 60 * 24 * 365.25 * 18)
      .toJSON()
      .slice(0, 10);

  return (
    <div className={styles.modal}>
      <button className={styles.button1}>
        <a href="">
          <h1 className={styles.h1}>
            Увійти
            </h1>
            </a>
      </button>
      <button className={styles.button2}>
        <a href="">
          <h1 className={styles.h1}>
            Зареєструватись
            </h1>
        </a>
      </button>
      <form className={styles.form} action="">
        <div className={styles.FormRegistration}>
          <div className={styles.labelTable}>
            <label htmlFor="textSurname">
              <h2 className={styles.h2}>
                Surname
              </h2>
            </label>
          </div>
          <div className={styles.inputTable}>
            <input className={styles.inputText} id="1" type="text" />
          </div>
          <div className={styles.labelTable}>
            <label htmlFor="textName">
              <h2 className={styles.h2}>
                TextName
              </h2>
            </label>
          </div>
          <div className={styles.inputTable}>
            <input className={styles.inputText} id="2" type="text" />
          </div>
          <div className={styles.labelTable}>
            <label htmlFor="numTel">
              <h2 className={styles.h2}>
                tel
              </h2>
            </label>
          </div>
          <div className={styles.inputTable}>
            <input className={styles.inputText}
              id="3" type="tel" pattern="[+]{1}-[3]{1}-[8]{1}-[(]{1}-[0-9]{3}-[)]{1}-[0-9]{3}-[0-9]{2}-[0-9]{2}"/>
          </div>
          <div className={styles.labelTable}>
            <label htmlFor="mail">
              <h2 className={styles.h2}>
                mail
                </h2>
            </label>
          </div>
          <div className={styles.inputTable}>
            <input className={styles.inputText} id="4" type="email" />
          </div>
          <div className={styles.labelTable}>
            <label htmlFor="date">
              <h2 className={styles.h2}>
                date
                </h2>
            </label>
          </div>
          <div className={styles.inputTable}>
            <input className={styles.inputText} id="5" type="date" value="2004-09-1" max={date18}/>
              {/* //дату на 18 лет до текущей
            // max="2004-02-01" */}
          </div>
          <div className={styles.labelTable}>
            <label htmlFor="favoritebeer">
              <h2 className={styles.h2}>
                beer
                </h2>
            </label>
          </div>
          <div className={styles.inputTable}>
            <input className={styles.inputText} id="6" rows="1" type="chose" />
          </div>
          <div className={styles.labelTable}>
            <label htmlFor="password">
              <h2 className={styles.h2}>
                password
                </h2>
            </label>
          </div>
          <div className={styles.inputTable}>
            <input className={styles.inputText} type="password" id="7" />
          </div>
          <div className={styles.labelTable}>
            <label htmlFor="confirmpassword">
              <h2 className={styles.h2}>
                confirmpassword
                </h2>
            </label>
          </div>
          <div className={styles.inputTable}>
            <input className={styles.inputConfirmPassword} type="password"id="7"/>
          </div>
        </div>
        <div >
          <button className={styles.buttonFinish}>
            <h1>
              END
              </h1>
              </button>
        </div>
      </form>
    </div>
  );
}