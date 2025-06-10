import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '1.5rem 0'
    }}>
      <div className="container" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1rem'
      }}>
        <p style={{
          textAlign: 'center',
          fontSize: '0.875rem',
          lineHeight: '1.5',
          color: 'var(--muted-foreground)'
        }}>
          © {new Date().getFullYear()} Тренажери Швидкочитання. Всі права захищено.
        </p>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem'
        }}>
          <Link 
            href="/about" 
            style={{
              fontSize: '0.875rem',
              color: 'var(--muted-foreground)',
              textDecoration: 'none'
            }}
            className="footer-link"
          >
            Про проєкт
          </Link>
        </div>
      </div>
    </footer>
  );
}
