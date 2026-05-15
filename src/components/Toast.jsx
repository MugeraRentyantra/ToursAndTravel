import { useEffect, useRef } from 'react';
import '../styles/Toast.css';

export default function Toast({ toasts, removeToast }) {
  return (
    <div className="toast-container" aria-live="polite">
      {toasts.map((toast) => (
        <ToastItem key={toast.id} toast={toast} onRemove={removeToast} />
      ))}
    </div>
  );
}

function ToastItem({ toast, onRemove }) {
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      onRemove(toast.id);
    }, 3000);
    return () => clearTimeout(timerRef.current);
  }, [toast.id, onRemove]);

  const icons = { success: '✓', error: '✕', info: 'ℹ' };

  return (
    <div className={`toast toast--${toast.type || 'success'}`}>
      <span className="toast__icon">{icons[toast.type] || icons.success}</span>
      <span className="toast__message">{toast.message}</span>
      <button
        className="toast__close"
        onClick={() => onRemove(toast.id)}
        aria-label="Close notification"
      >
        ×
      </button>
    </div>
  );
}
