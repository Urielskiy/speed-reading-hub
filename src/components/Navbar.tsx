import Link from 'next/link';

export default function Navbar() {
  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      width: '100%',
      borderBottom: '1px solid var(--border)',
      backgroundColor: 'var(--background)',
      backdropFilter: 'blur(8px)'
    }}>
      <div className="container" style={{
        display: 'flex',
        height: '3.5rem',
        alignItems: 'center',
        justifyContent: 'flex-start'
      }}>
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          <Link href="/" style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 'var(--radius)',
            fontSize: '0.875rem',
            fontWeight: '500',
            height: '2.5rem',
            paddingLeft: '1rem',
            paddingRight: '1rem',
            backgroundColor: 'transparent',
            color: 'var(--foreground)',
            textDecoration: 'none',
            transition: 'background-color 0.2s'
          }}>Головна</Link>
          <Link href="/about" style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 'var(--radius)',
            fontSize: '0.875rem',
            fontWeight: '500',
            height: '2.5rem',
            paddingLeft: '1rem',
            paddingRight: '1rem',
            backgroundColor: 'transparent',
            color: 'var(--foreground)',
            textDecoration: 'none',
            transition: 'background-color 0.2s'
          }}>Про проєкт</Link>
        </nav>
      </div>
    </header>
  );
}
