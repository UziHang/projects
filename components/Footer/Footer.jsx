import Image from 'next/image'
import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
        <a
          href="https://github.com/UziHang/projects"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>Created by</div>
            <div>
          <Image src="/YunHang.svg" alt="My Family Logo" width={20} height={20} style={{margin:'0 5px'}} />
          <strong>UziHang</strong>
          </div>

        </a>
      </footer>
  )
}
