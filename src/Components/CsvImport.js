import React from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CsvImport() {
    return (
      <Form>
        <Row className="mb-3">
          <Col>
            <Form.Control type="text" placeholder="Load a list of values (CSV format)" />
          </Col>
          <Col>
            <Button variant="primary">Submit</Button>
          </Col>
        </Row>
      </Form>        
    );
}

export default CsvImport;