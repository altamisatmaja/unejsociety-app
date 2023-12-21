import styles from "../../styles/Home.module.css"
import HeroCard from '../../components/HeroCard';
import { useClaimedNFTSupply, useContract, useContractMetadata, useTotalCount } from "@thirdweb-dev/react";
import { ERC721_CONTRACT_ADRESS } from "../../constants/addresses";

export default function ERC721() {
    const {
        contract
    } = useContract(ERC721_CONTRACT_ADRESS, 'signature-drop')

    const {
        data: contractMetadata,
        isLoading: contractMetadataIsLoading,
    } = useContractMetadata(contract);

    const {
        data: totalSupply,
        isLoading: totalSupplyIsLoading,
    } = useTotalCount(contract);

    const {
        data: totalClaimedSupply,
        isLoading: totalClaimedSupplyIsLoading,
    } = useClaimedNFTSupply(contract);

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
                        <p>
                            Total Supply: 
                            {totalSupplyIsLoading ? (
                                "Loading..."
                            ) : (
                                `${totalSupply?.toNumber()}`
                            )}
                        </p>
                        <p>
                            Total Claimed: 
                            {totalClaimedSupplyIsLoading ? (
                                "Loading..."
                            ) : (
                                `${totalClaimedSupply?.toNumber()}`
                            )}
                        </p>
                    </div>
                    <div className={styles.componentCard}>
                        <h3>Your NFTs</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}