import { AnnouncerEdit } from '../constants/soundSettings'

const INITIAL_STATE = {
  anchorConfig:  {
    "name": "知媛",
    "voice": "zhiyuan",
    "type": "普通话女声",
    "usageScenario": "通用场景",
    "language": "中文",
    "gender": "girl"
  }
}


export default function soundSettings(state = INITIAL_STATE, action) {
  switch (action.type) {
    case AnnouncerEdit:
      return {
        ...state,
        anchorConfig: action.value
      };
    default:
      return state
  }
}