import Link from 'next/link'

export default function Header() {
  return (
    <header className="site-container">
      <nav className="space-x-4 mt-6 mb-4">
        <Link href="/">
          <a> Anasayfa </a>
        </Link>
        <Link href="/blog">
          <a> Yazılarım </a>
        </Link>
      </nav>
    </header>
  )
}
