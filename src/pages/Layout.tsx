import { ReactNode } from 'react';
import OffCanvasMenu from '../components/off-canvas/off-canvas';
import { Col, Row } from 'react-bootstrap';
import './Layout.css';

function Layout({ children }: { children: ReactNode }) {
    return (
        <Row className="layout">
            <Col xs={4} className="off-canvas-width">
                <OffCanvasMenu/>
            </Col>
            <Col xs={8} className="background">
                {children}
            </Col>
        </Row>
    );
}

export default Layout;
