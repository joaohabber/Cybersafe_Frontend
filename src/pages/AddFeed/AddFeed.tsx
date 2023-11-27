import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './AddFeed.css';
import { ArrowLeftCircle } from 'react-bootstrap-icons';
import { useState } from 'react';
import AddFeedForm from '../../components/AddFeed/AddFeedForm';

function Feeds() {

    const navigate = useNavigate();

    function onGoBack() {
        console.log("Go Back");
        navigate('/feeds');
    }   

    return (
        <div className="page-container">
            <Row className="no-margins">
                <Col className="no-margins title-container">
                    <ArrowLeftCircle className="back-icon" onClick={onGoBack}/>
                    <h1 className="feeds-title">Add Feed</h1>
                </Col>
            </Row>
            <Row className="add-feed-form-row">
                <AddFeedForm/>
            </Row>
        </div>
    );
}

export default Feeds;