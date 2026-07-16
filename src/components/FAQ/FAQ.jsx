import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { faqItems } from '../../data/content';
import styles from './FAQ.module.css';

export default function FAQ() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="section reveal" id="faq">
      <div className="container">
        <div className="section-head">
          <div className="copy">
            <span className="eyebrow">{t('faq.eyebrow')}</span>
            <h2>{t('faq.title')}</h2>
          </div>
        </div>
        <div className={styles.faq}>
          {faqItems.map((item, i) => (
            <div key={i} className={`${styles.item} ${openIndex === i ? styles.open : ''}`}>
              <button className={styles.q} onClick={() => toggle(i)}>
                <span>{t(item.qKey)}</span>
                <span>+</span>
              </button>
              <div className={styles.a}>{t(item.aKey)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
