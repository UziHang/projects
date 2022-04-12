import Image from 'next/image'
import Link from 'next/link'
import styles from './ExampleCard.module.css'


export function ExampleCard({ link, originalLink, thumbnail, title,introduction}) {
  return (
    <li className={styles['card']}>
      <Image width={300} height={300} src={thumbnail} alt="" />
      <div className={styles['card__content']}>
        <Link href={link}>
          <a 
            className={styles['card__sandbox-link']}
            target="_blank"
            rel="noreferrer">
            查看项目
          </a>
        </Link>
        {originalLink && <Link href={originalLink}>
          <a 
            className={styles['card__sandbox-link']}
            target="_blank"
            rel="noreferrer">
            前往项目
          </a>
        </Link>}

        <h3 className={styles['card__title']}>
          {title}
        </h3>
       <div className={styles['card__introduction']}>
         {introduction}
       </div>
      </div>
    </li>
  )
}
