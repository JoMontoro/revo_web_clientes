import { useState, useRef, useCallback } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useToast } from '../../context/ToastContext';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';
import styles from './ImpactCalculator.module.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function ImpactCalculator() {
  const { t, lang } = useLanguage();
  const { showToast } = useToast();
  const [tons, setTons] = useState(10);
  const [showChart, setShowChart] = useState(false);

  const tires = Math.round(tons * 50);
  const material = tons;
  const trips = Math.max(1, Math.ceil(tons / 6));
  const co2 = Math.round(tons * 1.2);
  const energy = Math.round(tons * 420);

  const chartData = {
    labels: lang === 'en'
      ? ['NFU reused', 'CO₂ avoided (t)', 'Energy saved (kWh)']
      : ['NFU aprovechados', 'CO₂ evitado (t)', 'Energía ahorrada (kWh)'],
    datasets: [{
      label: lang === 'en' ? 'Environmental impact' : 'Impacto ambiental',
      data: [tires, co2, energy],
      backgroundColor: ['#168a58', '#35c17f', '#efb43f'],
      borderRadius: 8,
    }],
  };

  const chartOptions = {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: {
      y: { beginAtZero: true, ticks: { color: '#65736c' }, grid: { color: 'rgba(219,231,224,.5)' } },
      x: { ticks: { color: '#65736c' } },
    },
  };

  const handleCalc = useCallback(() => {
    setShowChart(true);
    showToast(lang === 'en' ? 'Impact reference updated.' : 'Impacto referencial actualizado.');
  }, [lang, showToast]);

  return (
    <section className="section alt reveal" id="impacto">
      <div className="container">
        <div className="section-head">
          <div className="copy">
            <span className="eyebrow">{t('impacto.eyebrow')}</span>
            <h2>{t('impacto.title')}</h2>
            <p className="lead">{t('impacto.subtitle')}</p>
          </div>
        </div>

        <div className="impact-box">
          <div className="impact-controls">
            <div className="field">
              <label>{t('impacto.label')}</label>
              <input
                type="range"
                min="1"
                max="100"
                value={tons}
                onChange={(e) => setTons(Number(e.target.value))}
              />
              <span className="muted"><strong>{tons}</strong> <span>{t('impacto.tons')}</span></span>
            </div>
            <button className="btn primary" onClick={handleCalc}>{t('impacto.btn')}</button>
          </div>

          <div className="impact-result">
            <div className="impact-card">
              <span className="muted">{t('impacto.card1')}</span>
              <strong>{tires.toLocaleString(lang === 'en' ? 'en-US' : 'es-PE')}</strong>
              <small>{t('impacto.card1d')}</small>
            </div>
            <div className="impact-card">
              <span className="muted">{t('impacto.card2')}</span>
              <strong>{material} t</strong>
              <small>{t('impacto.card2d')}</small>
            </div>
            <div className="impact-card">
              <span className="muted">{t('impacto.card3')}</span>
              <strong>{trips}</strong>
              <small>{t('impacto.card3d')}</small>
            </div>
          </div>

          {showChart && (
            <div className={styles.chartWrap}>
              <Bar data={chartData} options={chartOptions} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
