import React, { Component } from 'react'
import { Modal, ModalHeader, ModalFooter, ModalBody, Button, FormGroup, Input, Row, Col } from 'reactstrap';

export default class NoteForm extends Component {

  constructor() {
    super();
    this.state = {
      emailid:'',
      title: '',
      notes: '',
    }
  }

  componentDidUpdate() {
    const note = this.props.noteToUpdate;
    if(!!note) {
      if(!this.state.title) {
        this.setState({ emailid: note.Record.Emailid,title: note.Record.Title, notes: note.Record.Notes })
      }
    }
  }

  toggle = () => {
    this.setState({ emailid:"",title: '', notes: ""})
    this.props.toggle();
  }

  submit = () => {
    const { emailid,title, notes } = this.state;
    this.props.submit(
      {
        emailid,
        title,
        notes,
      },
      this.toggle,
      !!this.props.noteToUpdate,
      );
  }

  render() {
    return (
      <Modal isOpen={this.props.isOpen} toggle={this.toggle}>
        <ModalHeader toggle={this.toggle}>Create Note</ModalHeader>
        <ModalBody>
        <FormGroup>
            <Row>
              <Col lg={12}>
                <Input
                  required
                  type="text"
                  name="emailid"
                  className="ml-0"
                  placeholder="Emailid"
                  defaultValue={this.state.emailid}
                  onChange={(e) => this.setState({ emailid: e.target.value })}
                />
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row>
              <Col lg={12}>
                <Input
                  required
                  type="text"
                  name="title"
                  className="ml-0"
                  placeholder="Title"
                  defaultValue={this.state.title}
                  onChange={(e) => this.setState({ title: e.target.value })}
                />
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row>
              <Col lg={12}>
                <Input
                  required
                  type="textarea"
                  name="notes"
                  className="ml-0"
                  placeholder="Notes"
                  defaultValue={this.state.notes}
                  onChange={(e) => this.setState({ notes: e.target.value })}
                />
              </Col>
            </Row>
          </FormGroup>
        </ModalBody>
        <ModalFooter className="text-center">
          <Button color="primary" onClick={this.submit}>Save</Button>{' '}
          <Button color="secondary" onClick={this.toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    )
  }

}