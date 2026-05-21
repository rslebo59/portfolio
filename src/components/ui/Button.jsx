import { Link } from 'react-router-dom';
import "../../styles/components/ui/button.scss";

export default function Button({ children, href, variant = null, onClick }) {
  if (href) {
    return (
        <Link to={href} className={['btn', variant && `btn--${variant}`].filter(Boolean).join(' ')}>
            {children}
        </Link>
    )
  }

  return (
    <button className={['btn', variant && `btn--${variant}`].filter(Boolean).join(' ')} onClick={onClick}>
      {children}
    </button>
  )
}