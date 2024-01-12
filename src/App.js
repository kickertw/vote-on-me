import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

import CsvImport from './components/CsvImport';

import './App.css';

function App() {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([]);

  const saveImportedValues = (values) => {
    setItems(values);    
  }

  return (  
    <Container className="p-3">
      <div className="jumbotron ">
        <h1 className="header">Vote On Me</h1>
        <Button
          className="mb-3"
          variant="link"
          onClick={() => setOpen(!open)}
          aria-controls="example-fade-text"
          aria-expanded={open}
        >
          Import something...
        </Button>
        <Collapse in={open}>
          <div id="example-fade-text">
            <CsvImport saveImportedValues={saveImportedValues}/>
          </div>
        </Collapse>
        <br/>
        <div id="output">
          <ul>
            {items.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
}

export default App;
