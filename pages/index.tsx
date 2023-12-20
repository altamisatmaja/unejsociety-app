import styles from "../styles/Home.module.css";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            welcome to{" "}
            <span className={styles.gradientText0}>
              <a
                href="https://thirdweb.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                unejsociety
              </a>
            </span>
          </h1>

          <p className={styles.description}>Get started by configuring your desired network in{" "}</p>
        </div>

        <div className={styles.grid}>
          
        </div>
      </div>
    </main>
  );
};

export default Home;
