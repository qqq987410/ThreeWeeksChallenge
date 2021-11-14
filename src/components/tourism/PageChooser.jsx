import { Link } from 'react-router-dom';
import './pageChooser.scss';

export default function PageChooser() {
  return (
    <div className="page-chooser">
      <Link to="/tourism">Tourism</Link>
      <Link to="/bike">Bikeeee</Link>
      <Link to="/bus">Bus</Link>
    </div>
  );
}
