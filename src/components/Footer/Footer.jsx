import { useLanguage } from '../../context/LanguageContext';

export default function Footer({ leadsCount, onOpenLeads }) {
  const { t } = useLanguage();

  return (
    <footer>
      <div className="container footer-grid">
        <div className="logo">
          <span className="logo-mark">R</span>
          <span>REVO Match Circular<small>{t('footer.tagline')}</small></span>
        </div>
        <div className="footer-links">
          <a href="#productos">{t('footer.products')}</a>
          <a href="#cotizar">{t('footer.quote')}</a>
          <a href="#faq">{t('footer.faq')}</a>
          <span className="lead-count" onClick={onOpenLeads} title="Ver solicitudes guardadas">
            <i className="bi bi-clipboard-data"></i> {leadsCount}
          </span>
        </div>
      </div>
    </footer>
  );
}
