import { executeCall } from './AxiosCall';
const API_URL = process.env.REACT_APP_API;

export const userEnum = {
  SIGN_IN: 'SIGN_IN',
}

export const signInUser = (data) => async (dispatch) => {
  try {
    const response = await executeCall(
      `http://localhost:8081/login`,
      'POST',
      data,
    );
    dispatch({
      type: userEnum.SIGN_IN,
    });
    if(response.status === 200) {
      localStorage.setItem("accessToken", response.data.accessToken)
      window.location.href = "/"
    }
  } catch (e) {
    console.log(e)
  }
}