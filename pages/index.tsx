import ContractCard from "../components/ContractCard";
import { ERC20_CONTRACT_ADRESS } from "../constants/addresses";
import { ERC721_CONTRACT_ADRESS } from "../constants/addresses";
import { ERC1155_CONTRACT_ADRESS } from "../constants/addresses";
import { STAKING_CONTRACT_ADRESS } from "../constants/addresses";
import { PROFILE_STATUS_CONTRACT_ADRESS } from "../constants/addresses";
import { TIP_JAR_CONTRACT_ADRESS } from "../constants/addresses";
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
          <ContractCard
            href="/project/ERC20"
            contractAddress={ERC20_CONTRACT_ADRESS}
            title="ERC20 - Fasilkom"
            description="Token ERC20 Fakultas Ilmu Komputer"
          />
          <ContractCard
            href="/project/ERC721"
            contractAddress={ERC721_CONTRACT_ADRESS}
            title="ERC721 - Fasilkom"
            description="Token ERC721 Fakultas Ilmu Komputer"
          />
          <ContractCard
            href="#"
            contractAddress={ERC1155_CONTRACT_ADRESS}
            title="ERC1155 - Fasilkom"
            description="Token ERC1155 Fakultas Ilmu Komputer"
          />
          <ContractCard
            href="#"
            contractAddress={STAKING_CONTRACT_ADRESS}
            title="STAKING - Fasilkom"
            description="Token STAKING Fakultas Ilmu Komputer"
          />
          <ContractCard
            href="#"
            contractAddress={PROFILE_STATUS_CONTRACT_ADRESS}
            title="PROFILE_STATUS - Fasilkom"
            description="Token PROFILE_STATUS Fakultas Ilmu Komputer"
          />
          <ContractCard
            href="#"
            contractAddress={TIP_JAR_CONTRACT_ADRESS}
            title="PROFILE_STATUS - Fasilkom"
            description="Token PROFILE_STATUS Fakultas Ilmu Komputer"
          />
        </div>
      </div>
    </main>
  );
};

export default Home;
