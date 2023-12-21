import styles from "../../styles/Home.module.css";
import HeroCard from '../../components/HeroCard';
import { useAddress, useContract, useContractMetadata, useTokenBalance, useTokenSupply } from "@thirdweb-dev/react";
import { ERC20_CONTRACT_ADRESS } from "../../constants/addresses";

export default function ERC20() {
    const address = useAddress();

    const {
        contract
    } = useContract(ERC20_CONTRACT_ADRESS, "token");

    const {
        data: contractMetadata,
        isLoading: contractMetadataIsLoading,
    } = useContractMetadata(contract);

    const {
        data: tokenSupply,
        isLoading: tokenSupplyIsLoading,
    } = useTokenSupply(contract);

    const {
        data: tokenBalance,
        isLoading: tokenSupplyIsLoading,
    } = useTokenBalance(contract, address);

    return (
        <div className={styles.container}>
            <HeroCard
                isLoading={contractMetadataIsLoading}
                title={contractMetadata?.title!}
                description={contractMetadata?.description!}
                image={contractMetadata?.image!}
            />
            <div className={styles.grid}>
                <div className={styles.componentCard}>
                    <h3>Stats Token</h3>
                    {tokenSupplyIsLoading ? (
                        <div className={styles.loadingText}>
                            <p>Loading supply...</p>
                        </div>
                    ): (
                        <p>Total supply: {tokenSupply?.displayValue} {tokenSupply?.symbol}</p>
                    )}    
                </div>
                <div className={styles.componentCard}>
                    <h3>Saldo Token</h3>
                    {tokenBalanceIsLoading ? (
                        <div className={styles.loadingText}>
                            <p>Loading balance...</p>
                        </div>
                    ): (
                        <p>Total balance: {tokenBalance?.displayValue} {tokenBalance?.symbol}</p>
                    )}
                    <Web3Button
                        contractAddress={ERC20_CONTRACT_ADRESS}
                        action={(contract) => contract.erc20.burn(10)}
                    >Burn 10 Token</Web3Button>
                </div>
                <div className={styles.componentCard}>
                    <h3>Dapatkan Token</h3>
                    <p>Dapatkan token lainnya dari staking ERC721 NFT</p>
                    <div>
                        <Link to={'/project/Staking'}>
                            <button className={styles.matchButton}">Stake ERC721</button>
                        </Link>
                        <Link to={'/project/ERC721'}>
                            <button className={styles.matchButton}">Claim ERC721</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}