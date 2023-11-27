import { Button, Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Feeds.css';
import ModalView from '../../components/ModalView/ModalView';
import { useState } from 'react';
import AddFeedForm from '../../components/AddFeed/AddFeedForm';

function Feeds() {
  const navigate = useNavigate();

  function onAddFeed() {
    console.log("Add Feed");
    navigate('/feeds/add');
  }

  return (
    <div className="page-container">
      <Row className="no-margins">
        <Col className="no-margins">
          <h1 className="feeds-title">Feeds</h1>
        </Col>
        <Col className="button-container no-margins">
          <Button className="add-feed-button" type="submit" onClick={onAddFeed}>
            Add Feed
          </Button>
        </Col>
      </Row>
      <Row className="feeds-list no-margins">
      </Row>
    </div>
  );
}

export default Feeds;