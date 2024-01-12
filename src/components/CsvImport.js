import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CsvImport({saveImportedValues}) {
    const [values, setValues] = useState('');
    const [parsedValues, saveParsedValues] = useState([]);

    const handleChange = (event) => {
        const textInput = event.target.value;
        setValues(event.target.value);
        let rawValues = textInput.split(/\r?\n/);        

        let retVal = [];
        for(let ii = 0; ii < rawValues.length; ii++) {
            if (rawValues[ii].length > 0) {
                retVal.push(rawValues[ii]);
            }
        }

        saveParsedValues(retVal);
    }

    const handleClick = () => {
        saveImportedValues(parsedValues);
    }

    return (
      <Form>
        <Row className="mb-3">
          <Col>
            <Form.Control
                as="textarea"
                placeholder="Load a list of values (CSV format)"
                rows={3}
                value={values}
                onChange={handleChange} />
          </Col>
          <Col>
            <Button variant="primary" onClick={handleClick}>Submit</Button>
          </Col>
        </Row>
      </Form>        
    );
}

export default CsvImport;