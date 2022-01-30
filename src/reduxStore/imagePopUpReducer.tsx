export interface iImagePopUp {
  show: boolean;
  children: any;
}

export const PopUpAction = {
  SHOW: "SHOW",
  RESET: "RESET",
};

type PopUpAction = {
  type: "SHOW" | "RESET";
  payload: iImagePopUp;
};

export const initialState: iImagePopUp = {
  show: false,
  children: <></>,
};

export default function imagePopUpReducer(
  state = initialState,
  action: PopUpAction
) {
  switch (action.type) {
    case PopUpAction.SHOW: {
      console.log("Set Redux Store To Show.");
      return {
        show: true,
        children: action.payload,
      };
    }
    case PopUpAction.RESET: {
      console.log("Reet Redux Store.");

      return initialState;
    }
    default:
      return state;
  }
}
