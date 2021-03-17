import React, { Component } from 'react'
import { connect } from "react-redux";
import { Button, Table, Modal } from 'reactstrap';
import '../styles/Notes.css';
import {
  getNotes,
  createNote,
  updateNote,
} from '../actions';
import NoteForm from '../components/NoteModal';
import Header from './Header';

class Notes extends Component {

  constructor() {
    super();
    this.state = {
      isOpen: false,
      noteToUpdate: null,
    }
  }

  componentDidMount() {
    this.props.getNotes();
  }

  submit = (data, callback, isUpdate) => {
    if(isUpdate) {
      this.props.updateNote(data, callback)
    } else {
      this.props.createNote(data, callback)
    }
  }

  render() {
    return (
      <>
        <Header />
        <div className="notes-management bg-light-grey p-5">
          <div className="notes shadow p-3 bg-white">
            <div className="title-head d-flex">
              <h3 className="header-title"><span>Notes Management</span></h3>
              <Button color="primary" className="ml-auto mr-3" onClick={() => {this.setState({ isOpen: true })}}>
                Add Note
              </Button>
            </div>
            <Table hover className="mt-3">
              <thead>
                <tr>
                <th className="text-Left">S.No</th>
                <th className="text-Left">Emailid</th>
                  <th>Title</th>
                  <th className="text-Left">Description</th>
                </tr>
              </thead>
              <tbody>
                {this.props.notes.map((note, index) => 
                  <tr key={index + 1}>
                    <th scope="row">{index + 1}</th>
                    <td>{note.Record.Emailid}</td>
                    <td>{note.Record.Title}</td>
                    <td>{note.Record.Notes}</td>
                    <td className="text-center">
                      <span className="small btn-link pl-2 cursor-pointer" onClick={() => this.setState({ isOpen: true,noteToUpdate: note})}>
                        Edit
                      </span>
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>
            <NoteForm
              isOpen={this.state.isOpen}
              toggle={() => this.setState({ isOpen: false, noteToUpdate: null })}
              submit={this.submit}
              noteToUpdate={this.state.noteToUpdate}
            />
          </div>
        </div>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notesReducer.notes,
  }
}

export default connect(mapStateToProps, {
  getNotes,
  createNote,
  updateNote,
})(Notes);

