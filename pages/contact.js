import React from "react";
import styles from "../styles/Contact.module.css";
import Link from "next/link";

function contact() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Contact Page</h2>

      <div className={styles.details}>
        <ui>
          <li className={styles.list}>
            <lable className={styles.label}>Name : </lable>
            <p className={styles.value}>Sairak Dabgaew</p>
          </li>
          <li className={styles.list}>
            <lable className={styles.label}>Email : </lable>
            <p className={styles.value}>Sairakswk@gmail.com</p>
          </li>
        </ui>
      </div>

      <br></br>

      <Link href="/">
        <a className={styles.buttom}>Go Back</a>
      </Link>
    </div>
  );
}

export default contact;
