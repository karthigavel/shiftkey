import React from "react";
import workwithus from "./workwithus.jpg";
import Image from "next/image";
// import "tailwindcss/tailwind.css";
import styles from "./team.module.css";

const Teampage = () => {
  return (
    <div>
      <section className="block">
        <div className={styles.herocontainer}>
          <Image
            src={workwithus}
            alt="Header Background"
            className={styles.nextImage}
            layout="responsive"
            priority
          />
          <div className={styles.heroContent}>WELCOME TO MY WEBSITE!</div>
        </div>
      </section>
    </div>
  );
};

export default Teampage;
