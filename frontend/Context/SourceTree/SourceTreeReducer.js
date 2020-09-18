import {
  SET_TREE,
  SHOW_TREE_SELECTOR,
  HIDE_TREE_SELECTOR,
  SET_FILETREE_CHECKED,
  SET_MULTIPLE,
  SET_SAVE_BUTTON_ACTION,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case SET_TREE:
      return { ...state, tree: action.payload, checked: [] };
    case SHOW_TREE_SELECTOR:
      return { ...state, open: true };
    case HIDE_TREE_SELECTOR:
      return { ...state, open: false };
    case SET_FILETREE_CHECKED:
      return { ...state, checked: action.payload };
    case SET_MULTIPLE:
      return { ...state, multiple: action.payload };
    case SET_SAVE_BUTTON_ACTION:
      return { ...state, save: action.payload };
    default:
      return state;
  }
};
