import { AnnouncerEdit } from '../constants/soundSettings'



// 异步的 action
export function announcerEdit(data) {
  return (dispatch) => {
      dispatch({
        type: AnnouncerEdit,
        value: data
      })
  }
}