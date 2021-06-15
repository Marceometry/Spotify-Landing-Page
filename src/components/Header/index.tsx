import Image from 'next/image'
import Link from 'next/link'
import styles from './style.module.scss'

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="https://spotify-ui-clone.vercel.app/">
        <a>
          <Image width={132} height={42} src="/logo.svg" alt="Spotify" />
        </a>
      </Link>

      <ul>
        <li>
          <Link href="https://spotify-ui-clone.vercel.app/">
            <a>Premium</a>
          </Link>
        </li>
        <li>
          <Link href="https://spotify-ui-clone.vercel.app/">
            <a>Suporte</a>
          </Link>
        </li>
        <li>
          <Link href="https://spotify-ui-clone.vercel.app/">
            <a>Baixar</a>
          </Link>
        </li>

        <li className={styles.divide}> | </li>

        <li>
          <Link href="https://spotify-ui-clone.vercel.app/">
            <a>Inscrever-se</a>
          </Link>
        </li>
        <li>
          <Link href="https://spotify-ui-clone.vercel.app/">
            <a>Entrar</a>
          </Link>
        </li>
      </ul>
    </header>
  )
}
