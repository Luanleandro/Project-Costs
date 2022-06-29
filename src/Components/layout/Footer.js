import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'

import styles from './Footer.module.css'

const Footer = () => {
    return ( <footer className={styles.footer}>
        <ul className={styles.containerSocials}>
            <li  className={styles.item}>
                <FaFacebook/>
            </li>
            <li className={styles.item}>
                <FaInstagram/>
            </li>
            <li className={styles.item}>
                <FaLinkedin/>
            </li>
        </ul>
        <p className={styles.copy_right}><span>Costs</span> &copy; 2021</p>
    </footer> );
}
 
export default Footer;