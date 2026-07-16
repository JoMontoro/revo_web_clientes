import { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import styles from './Header.module.css';

export default function Header() {
  const { t, toggleLang, lang } = useLanguage();
  const { isDark, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.title = t('page.title');
  }, [lang, t]);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className="container nav">
        <a href="#inicio" className={styles.logo}>
          <span className={styles.logoMark}>R</span>
          <span>REVO Match Circular<small>{t('header.tagline')}</small></span>
        </a>

        <nav className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`}>
          <a href="#solucion" onClick={handleNavClick}>{t('nav.solution')}</a>
          <a href="#productos" onClick={handleNavClick}>{t('nav.products')}</a>
          <a href="#sectores" onClick={handleNavClick}>{t('nav.sectors')}</a>
          <a href="#como-funciona" onClick={handleNavClick}>{t('nav.how')}</a>
          <a href="#cotizar" onClick={handleNavClick}>{t('nav.quote')}</a>
          <a className="btn primary small" href="#cotizar" onClick={handleNavClick}>{t('nav.cta')}</a>
        </nav>

        <div className={styles.tools}>
          <button className={styles.langBtn} onClick={toggleLang} title="Switch language">{lang.toUpperCase()}</button>
          <button className={styles.iconBtn} onClick={toggleTheme} title="Cambiar tema">
            <i className={`bi ${isDark ? 'bi-sun-fill' : 'bi-moon-fill'}`}></i>
          </button>
          <button className={styles.menuBtn} onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menú">
            <i className="bi bi-list"></i>
          </button>
        </div>
      </div>
    </header>
  );
}
