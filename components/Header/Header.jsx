import Image from 'next/image'
import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
       <a
          href="https://github.com/UziHang/projects"
          target="_blank"
          rel="noopener noreferrer"
        >
      <div className={styles.titleContainer}>
        <h1>
          <span>
          <Image src="/YunHang.svg" width={36} height={36} alt="" />
          <strong>UziHang</strong>
            </span>  Projects
        </h1>
      </div>
      </a>
      {/* <a className={styles.repoLink} href="https://github.com/UziHang/projects" target="_blank" rel="noreferrer"> 
        <Image src="/github.svg" alt="Github Icon" width={22} height={22} />
      </a> */}
    </header>
  )
}
