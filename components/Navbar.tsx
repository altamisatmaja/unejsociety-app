import styles from "../styles/Home.module.css";
import Link from 'next/link';
import { ConnectWallet } from "@thirdweb-dev/react";

export default function Navbar() {
    return (
        <div className={styles.navbarContainer}>
            <Link href="/">
                <p className={styles.gradientText1} style={{cursor: 'pointer', fontSize: '1.2rem', fontWeight: 'bold'}}>unejsociety</p>
            </Link>
            <ConnectWallet
                btnTitle='Login'
                modalTitle='Pilih metode untuk login'
                detailsBtn={() => {
                    return <p>Profile</p>
                }}
            />
        </div>
    )
}
