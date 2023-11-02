import Image from 'next/image';
import Link from 'next/link';
import styles from './index.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="MATSUBA BLOG"
          className={styles.logo}
          width={211}
          height={64}
          priority
        />
      </Link>
    </header>
  );
}
