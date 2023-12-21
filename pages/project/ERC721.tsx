import styles from "../../styles/Home.module.css"
import HeroCard from '../../components/HeroCard';
import { useContract, useContractMetadata } from "@thirdweb-dev/react";
import { ERC721_CONTRACT_ADRESS } from "../../constants/addresses";

export default function ERC721() {
    const {
        contract
    } = useContract(ERC721_CONTRACT_ADRESS, 'signature-drop')

    const {
        data: contractMetadata,
        isLoading: contractMetadataIsLoading,
    } = useContractMetadata(contract);

    return(
        <div className={styles.container}>
            <div className={styles.contractPage}>
                <HeroCard
                isLoading={contractMetadataIsLoading}
                title={contractMetadata?.title!}
                description={contractMetadata?.description!}
                image={contractMetadata?.image!}
                />
                <div className={styles.grid}>
                    <div className={styles.componentCard}>
                        <h3>Claim ERC721</h3>   
                        <p>Gratis klaim!</p> 
                        <Web3Button
                        contractAddress={ERC721_CONTRACT_ADRESS}
                        action={(contract) => contract.erc721.claim(1)}
                        onSuccess={() => alert("Selamat, NFT Sudah diklaim")}
                        >Klaim</Web3Button>
                    </div>
                    <div className={styles.componentCard}>
                        <h3>Contract Stats</h3>
                    </div>
                    <div className={styles.componentCard}>
                        <h3>Your NFTs</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}