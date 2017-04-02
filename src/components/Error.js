import { h } from 'preact';
import { Link } from 'react-router-dom';

export default function Error() {
  return (
    <div>
      <p>Error!</p>
      <p><Link to="/">Home</Link></p>
    </div>
  )
}