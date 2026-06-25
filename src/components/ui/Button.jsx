import { Link } from 'react-router-dom';
import "../../styles/components/ui/button.scss";

export default function Button({ children, href, variant = null, onClick }) {
  if (href) {
    return (
      <div className={['button', variant && `button--${variant}`].filter(Boolean).join(' ')}>
        <Link to={href} className="button__link">
            {children}
        </Link>
      </div>
    )
  }

  return (
    <div className={['button', variant && `button--${variant}`].filter(Boolean).join(' ')}>
      <button className="button__link" onClick={onClick}>
        {children}
      </button>
    </div>
  )
}