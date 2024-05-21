import {useDispatch} from "react-redux";
import {bindActionCreators} from "@reduxjs/toolkit";
import actions from "app/store/actions";

export default function useAction() {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
}
