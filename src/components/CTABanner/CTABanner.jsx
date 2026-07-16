import { useLanguage } from '../../context/LanguageContext';

export default function CTABanner() {
  const { t } = useLanguage();

  return (
    <section className="section reveal">
      <div className="container cta">
        <div>
          <h2>{t('cta.title')}</h2>
          <p>{t('cta.text')}</p>
        </div>
        <a className="btn primary" href="#cotizar">{t('cta.btn')}</a>
      </div>
    </section>
  );
}
