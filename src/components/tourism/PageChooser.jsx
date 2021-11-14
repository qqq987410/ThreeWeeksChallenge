import { Link } from 'react-router-dom';
import './pageChooser.scss';

export default function PageChooser() {
  return (
    <div className="page-chooser">
      <Link to="/">Home</Link>
      <Link to="/tourism">Tourism</Link>
      <Link to="/bike">Bike</Link>
      <Link to="/bus">Bus</Link>
    </div>
  );
}
