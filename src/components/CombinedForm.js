import React from 'react';
import { Tabs,Tab,Modal } from 'react-bootstrap';
import AddItemForm from "./AddItemForm";
import myImage from "../Group11.png";
import "../css/form.css"

class CombinedForm extends React.Component{
    constructor(props, context) {
      super(props, context);

      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);

      this.state = {
        show: false
      };
    }

    handleClose() {
      this.setState({ show: false });
    }

    handleShow() {
      this.setState({ show: true });
    }

    render(){
      return (
        <div style={{float:"left"}}>
            <button id="add-button" style={{padding:"0px",border:"none"}} onClick={this.handleShow}>
              <img src={myImage} alt="add_button" />
            </button>
            <div >
            <Modal show={this.state.show} onHide={this.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Create New</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div>
                  <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                    <Tab eventKey={1} title="File">
                      <AddItemForm type="file"/>
                    </Tab>
                    <Tab eventKey={2} title="Folder">
                      <AddItemForm type="folder"/>
                    </Tab>
                  </Tabs>
                </div>
              </Modal.Body>
            </Modal>
            </div>
        </div>

      )
    }
}

export default CombinedForm;
