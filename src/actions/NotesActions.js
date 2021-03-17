import { executeCall } from './AxiosCall';
const API_URL = process.env.REACT_APP_API;

export const notesEnum = {
  ADD_NOTE: 'ADD_NOTE',
  UPDATE_NOTE: 'UPDATE_NOTE',
  GET_NOTES: 'GET_NOTES',
}

export const getNotes = () => async (dispatch) => {
  try {
    const response = await executeCall(`http://localhost:8081/getAllnotes`);
    dispatch({
      type: notesEnum.GET_NOTES,
      payload: response.data,
    });
  } catch (e) {
    console.log(e)
  }
}

export const createNote = (data, cb) => async (dispatch) => {
  try {
    const response = await executeCall(
      `http://localhost:8081/create_notes`,
      'POST',
      data,
    );
    dispatch({
      type: notesEnum.ADD_NOTE,
      payload: response.data,
    });
    cb();
  } catch (e) {
    console.log(e)
  }
}

export const updateNote = (data, cb) => async (dispatch) => {
  try {
    const response = await executeCall(
      `http://localhost:8081/update_notes`,
      'POST',
      data,
    );
    dispatch({
      type: notesEnum.UPDATE_NOTE,
      payload: response.data,
    });
    cb();
  } catch (e) {
    console.log(e)
  }
}