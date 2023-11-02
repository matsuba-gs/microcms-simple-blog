import styles from './index.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Link href='/'>
          <Image
            src='/company-logo.svg'
            alt='株式会社現場サポート'
            className={styles.companyLogo}
            width={348}
            height={133}
            priority
          />
        </Link>
        <p className={styles.socialIcons}>
          <Link href='https://www.facebook.com/' target="_blank">
            <Image src='/social-icon-facebook.svg' alt='Facebook' className={styles.socialIcon} width={16} height={16} priority />
          </Link>
          <Link href='https://www.instagram.com/' target="_blank">
            <Image src='/social-icon-instagram.svg' alt='Instagram' className={styles.socialIcon} width={16} height={16} priority />
          </Link>
          <Link href='https://twitter.com/' target="_blank">
            <Image src='/social-icon-x.svg' alt='X' className={styles.socialIcon} width={16} height={16} priority />
          </Link>
        </p>
      </div>
    </footer>
  );
}
