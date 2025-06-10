import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{
      background: 'linear-gradient(to right, #8e2de2, #4a00e0)',
      backgroundSize: '200% 200%',
      padding: '2rem 0',
      color: 'white',
      position: 'relative',
      boxShadow: '0 -5px 15px rgba(0, 0, 0, 0.1)',
      marginTop: '3rem'
    }}>
      {/* Декоративна текстура */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.03) 0%, transparent 20%), radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.03) 0%, transparent 20%)',
        opacity: 0.7,
        zIndex: 0
      }} />
      
      <div className="container" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1.5rem',
        position: 'relative',
        zIndex: 1,
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem'
      }}>
        {/* Навігація */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          width: '100%',
          marginBottom: '1rem'
        }}>
          <Link 
            href="/" 
            style={{
              fontSize: '0.95rem',
              color: 'rgba(255, 255, 255, 0.9)',
              textDecoration: 'none',
              fontWeight: 500,
              padding: '0.5rem 0',
              borderBottom: '2px solid transparent',
              transition: 'all 0.3s ease'
            }}
            className="footer-link"
          >
            Головна
          </Link>
          <Link 
            href="/about" 
            style={{
              fontSize: '0.95rem',
              color: 'rgba(255, 255, 255, 0.9)',
              textDecoration: 'none',
              fontWeight: 500,
              padding: '0.5rem 0',
              borderBottom: '2px solid transparent',
              transition: 'all 0.3s ease'
            }}
            className="footer-link"
          >
            Про проєкт
          </Link>
        </div>
        
        {/* Контакти */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          <p style={{
            fontSize: '1rem',
            fontWeight: 600,
            marginBottom: '0.25rem'
          }}>
            Контакти
          </p>
          <a 
            href="mailto:uriosmart@gmail.com" 
            style={{
              fontSize: '0.95rem',
              color: 'rgba(255, 255, 255, 0.9)',
              textDecoration: 'none',
              transition: 'color 0.3s ease'
            }}
          >
            uriosmart@gmail.com
          </a>
        </div>
        
        {/* Копірайт */}
        <p style={{
          textAlign: 'center',
          fontSize: '0.875rem',
          lineHeight: '1.5',
          color: 'rgba(255, 255, 255, 0.7)',
          marginTop: '1rem'
        }}>
          © {new Date().getFullYear()} Speed Reading Hub. Всі права захищені.
        </p>
      </div>
      
      {/* Додаємо стилі для ховер-ефектів */}
      <style jsx>{`
        .footer-link:hover {
          color: white !important;
          border-bottom-color: white !important;
        }
        a:hover {
          color: white !important;
          text-decoration: underline !important;
        }
      `}</style>
    </footer>
  );
}
