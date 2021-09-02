import React, { useState } from 'react';

import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

import CsvImport from './Components/CsvImport';

import './App.css';

const ExampleToast = ({ children }) => {
  const [show, toggleShow] = useState(true);

  return (
    <>
      {!show && <Button onClick={() => toggleShow(true)}>Show Toast</Button>}
      <Toast show={show} onClose={() => toggleShow(false)}>
        <Toast.Header>
          <strong className="mr-auto">React-Bootstrap</strong>
        </Toast.Header>
        <Toast.Body>{children}</Toast.Body>
      </Toast>
    </>
  );
};

function App() {
  const [open, setOpen] = useState(false);

  return (  
    <Container className="p-3">
      <div class="jumbotron ">
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
            <CsvImport/>
          </div>
        </Collapse>      
        <ExampleToast>
          We now have Toasts
          <span role="img" aria-label="tada">
            🎉
          </span>
        </ExampleToast>
      </div>
    </Container>
  );
}

export default App;
