import './off-canvas.css';
import { useState } from 'react';
import { Offcanvas, Button }  from 'react-bootstrap';
import { BoxArrowLeft, List } from 'react-bootstrap-icons';
import OffCanvasUser from '../../components/off-canvas/off-canvas-user/off-canvas-user';
import OffCanvasTabButton from '../../components/off-canvas/off-canvas-tab-button/off-canvas-tab-button';
import { useNavigate } from 'react-router-dom';

function OffCanvasMenu() {
  const [show, setShow] = useState(true);
  const [activeTab, setActiveTab] = useState('Home');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();


  //Function to handle tab click and navigate to the respective page
  const handleTabClick = (tabValue:string) => {
    console.log("Tab Clicked", tabValue);
    setActiveTab(tabValue);
    navigate(`/${tabValue.toLowerCase()}`);
  };

  return (
    <>
      <Button id="toggle-off-canvas-icon" onClick={handleShow}>
        <List/>
      </Button>
      <Offcanvas id="off-canvas" show={show} onHide={handleClose} backdrop={false} autoFocus={false} scroll={true}>
        <Offcanvas.Header>
          <OffCanvasUser/>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="mb-2">
            <OffCanvasTabButton  
            name="Home" 
            icon="HouseDoor" 
            isActive={activeTab == 'Home'}
            onPress={() => handleTabClick('Home')}/>
          </div>
          <OffCanvasTabButton 
            name="Feeds" 
            icon="ListTask"
            isActive={activeTab == 'Feeds'}
            onPress={() => handleTabClick('Feeds')}/>
        </Offcanvas.Body>
        <div className="off-canvas-footer">
          <Button id="logout-button">
            <BoxArrowLeft className="logout-button-color"/>
            <p className="logout-button-label">Logout</p>
          </Button>
        </div>
      </Offcanvas>
    </>
  );
}

export default OffCanvasMenu;