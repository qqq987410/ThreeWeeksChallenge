import { Link } from 'react-router-dom';
import './pageChooser.scss';

export default function PageChooser() {
  return (
    <div className="page-chooser">
      <Link to="/ThreeWeeksChallenge">Home</Link>
      <Link to="/ThreeWeeksChallenge/tourism">Tourism</Link>
      <Link to="/ThreeWeeksChallenge/bike">Bike</Link>
      <Link to="/ThreeWeeksChallenge/bus">Bus</Link>
    </div>
  );
}
