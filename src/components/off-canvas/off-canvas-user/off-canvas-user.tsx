import './off-canvas-user.css';
import { Image } from 'react-bootstrap';

function OffCanvasUser() {

  return (
    <div className="off-canvas-user">
      <div className="cybersafe-user-icon-container">
        <Image className="user-icon" src="src/assets/cybersafe-icon.png"/>
      </div>
      <div className="name-and-function-container">
        <div className="name">
          <p className="name">Habber</p>
        </div>
        <div className="function">
          <p className="function">Cybersafe Admin</p>
        </div>
      </div>
    </div>
  );
}

export default OffCanvasUser;