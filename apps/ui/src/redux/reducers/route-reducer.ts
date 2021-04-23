export interface LocalUrl {
  path: string;
}

const initialState = {
  path: ''
};
type Action = {
  type: 'GET_URL_PATH',
  payload: string;
}
export const routeReducer = (state: LocalUrl = initialState, action: Action) => {
  switch (action.type) {
    case 'GET_URL_PATH': {
      return {
        ...state,
        path: action.payload
      };
    }
    default: {
      return state;
    }
  }
};
