import './off-canvas-tab-button.css';
import * as ReactBootstrapIcons from 'react-bootstrap-icons';
import { Button } from 'react-bootstrap';

function OffCanvasTabButton({ name, icon, isActive, onPress }: { name: string, icon: keyof typeof ReactBootstrapIcons, isActive: boolean, onPress: any }) {
  const IconComponent = ReactBootstrapIcons[icon];
  console.log("Name", name, "Icon", icon, "isActive", isActive, "onPress:" , onPress);

  return (
    <Button id="off-canvas-tab-button" className={isActive ? 'off-canvas-tab-button-active' : ''} onClick={onPress}>
      <IconComponent className="button-icon"/>
      <p className="button-name"> {name} </p>
    </Button>
  );
}

export default OffCanvasTabButton;
