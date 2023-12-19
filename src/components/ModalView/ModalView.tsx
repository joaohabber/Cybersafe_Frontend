import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './ModalView.css';	

function ModalView({ handleSave, handleClose, show, children, title, modalClassName }: any) {
  return (
    <div className="modal-center">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className={`${modalClassName} no-border header-padding`}>
          <Modal.Title className="modal-title">{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className={`${modalClassName} no-border body-padding`}>{children}</Modal.Body>
        <Modal.Footer className={`${modalClassName} no-border footer-padding`}>
          <Button className="close-button" type="submit" onClick={handleClose}>
            Close
          </Button>
          <Button className="save-button" type="submit" onClick={handleSave}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalView;
