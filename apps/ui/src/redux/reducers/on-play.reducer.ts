import { OnPlay } from '../../interfaces/action.interface';

const initialState: OnPlay = {
  isPlaying: false
};

type Action = {
  type: string,
  payload: boolean
}

export const onPlayReducer = (state: OnPlay = initialState, action: Action) => {
  switch (action.type) {
    case 'TOGGLE_PLAYING_SONG': {
      return { ...state, isPlaying: !state.isPlaying };
    }
    case 'CHANGE_PLAYING_SONG': {
      return { ...state, isPlaying: state.isPlaying };
    }
    default: {
      return state;
    }
  }
};
