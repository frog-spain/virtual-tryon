import { Link } from 'react-router-dom';

export default function BackButton() {
  return (
    <Link to="/" class="back-button">
      ← Back
    </Link>
  );
}
