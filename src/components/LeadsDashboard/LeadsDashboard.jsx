import { useLanguage } from '../../context/LanguageContext';
import { useToast } from '../../context/ToastContext';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import styles from './LeadsDashboard.module.css';

export default function LeadsDashboard({ isOpen, onClose }) {
  const { t, lang } = useLanguage();
  const { showToast } = useToast();
  const [leads, setLeads] = useLocalStorage('revo_leads', []);

  const handleClear = () => {
    if (confirm(lang === 'en' ? 'Delete all saved requests?' : '¿Eliminar todas las solicitudes guardadas?')) {
      setLeads([]);
      onClose();
      showToast(lang === 'en' ? 'All requests cleared.' : 'Todas las solicitudes eliminadas.');
    }
  };

  return (
    <div className={`modal ${styles.modal}`} onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal-card">
        <div className="modal-head">
          <div>
            <span className="eyebrow">{t('leads.eyebrow')}</span>
            <h3 style={{marginTop: '12px'}}>{t('leads.title')}</h3>
          </div>
          <button className="icon-btn" onClick={onClose}><i className="bi bi-x-lg"></i></button>
        </div>

        <div>
          {leads.length === 0 ? (
            <div className={styles.empty}>{t('leads.empty')}</div>
          ) : (
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>{lang === 'en' ? 'Company' : 'Empresa'}</th>
                  <th>{lang === 'en' ? 'Product' : 'Producto'}</th>
                  <th>{lang === 'en' ? 'Match' : 'Compat.'}</th>
                  <th>{lang === 'en' ? 'Status' : 'Estado'}</th>
                  <th>{lang === 'en' ? 'Date' : 'Fecha'}</th>
                </tr>
              </thead>
              <tbody>
                {leads.map((l, i) => {
                  const badgeClass = l.match >= 90 ? 'high' : l.match >= 80 ? 'medium' : 'low';
                  const pLabel = lang === 'en' ? 'Priority' : 'Prioridad';
                  return (
                    <tr key={i}>
                      <td>{l.empresa}</td>
                      <td>{l.product}</td>
                      <td><span className={`badge ${badgeClass}`}>{l.match}%</span></td>
                      <td><span className={`badge ${badgeClass}`}>{pLabel}: {l.priority}</span></td>
                      <td>{new Date(l.createdAt).toLocaleDateString(lang === 'en' ? 'en-US' : 'es-PE')}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>

        <div className="form-actions">
          <button className="btn secondary" onClick={onClose}>{t('modal.close')}</button>
          <button className="btn dark" onClick={handleClear}>{t('leads.clear')}</button>
        </div>
      </div>
    </div>
  );
}
