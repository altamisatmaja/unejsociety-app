import { Link } from "react-router-dom";
import styles from "../styles/Home.module.css";
import { useContract, useContractMetadata, MediaRenderer } from "@thirdweb-dev/react";

type CardProps = {
    href: string;
    contractAddress: string;
    title: string;
    description: string;
}

export default function ContractCard(props: CardProps) {
    const {
        contract
    } = useContract(props.contractAddress);
    
    const {
        data: contractMetadata,
        isLoading: isContractMetadataLoading,
    } = useContractMetadata(contract);

    return (
        <Link
            to={props.href}
            className={styles.card}
        >
            <MediaRenderer src={contractMetadata?.image}
            width="100%"
            height="auto"
            />
            <div className={styles.cardText}>
                <h2 className={styles.gradientText1}>{props.title}</h2>
                <p>{props.description}</p>
            </div>
        </Link>
    )
}