import { Form, Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './AddFeedForm.css';

function AddFeedForm() {

  // Variables for form fields
  const[name, setName] = useState('');
  const[feedType, setFeedType] = useState('');
  const[url, setUrl] = useState('');
  const[fileType, setFileType] = useState('');
  const[indicatorType, setIndicatorType] = useState('');

  //TODO implement submit logic

  return (
    <>
      <Form>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" className="" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Feed type</Form.Label>
              <Form.Select className="" value={feedType} onChange={(e) => setFeedType(e.target.value)}>
                <option value="">Select Feed type</option>
                <option value="White feed">Whitelist feed</option>
                <option value="Black feed">Blacklist feed</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>URL</Form.Label>
              <Form.Control type="text" className="" placeholder="URL" value={url} onChange={(e) => setUrl(e.target.value)}/>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>File type</Form.Label>
              <Form.Select className="" value={fileType} onChange={(e) => setFileType(e.target.value)}>
                <option value="">Select File type</option>
                <option value="Plain text">TXT</option>
                <option value="CSV">CSV</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Indicator type</Form.Label>
              <Form.Select className="" value={indicatorType} onChange={(e) => setIndicatorType(e.target.value)}>
                <option value="">Select Indicator type</option>
                <option value="IP">IP</option>
                <option value="Hash">Hash</option>
                <option value="URL">URL</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </>
  );
}

export default AddFeedForm;
