"use client";
import { KadoContext } from "@/contexts/KadoContext";
import { useContext, useReducer } from "react";

interface IKadoState {
  items: Record<string, any>[];
  shape: string;
  color: string;
}
const initialState: IKadoState = {
  items: [],
  shape: "",
  color: "",
};
// تعریف نوع‌های اکتشن‌ها
enum KadoActionTypes {
  Set_Color = "Set_Color",
  Set_Add_Items = "Set_Add_Items",
  Set_Remove_Items = "Set_Remove_Items",
  Set_Shape = "Set_Shape",
}

type TKadoAction =
  | { type: KadoActionTypes.Set_Color; payload: string }
  | { type: KadoActionTypes.Set_Add_Items; payload: Record<string, any> }
  | { type: KadoActionTypes.Set_Remove_Items; payload: Record<string, any> }
  | { type: KadoActionTypes.Set_Shape; payload: string };

function reducer(state: IKadoState, action: TKadoAction): IKadoState {
  switch (action.type) {
    case KadoActionTypes.Set_Color:
      return { ...state, color: action.payload };

    case KadoActionTypes.Set_Shape:
      return { ...state, shape: action.payload };

    case KadoActionTypes.Set_Add_Items:
      const _state = { ...state }
      console.log(_state.items , '_state');
      
      const existItemIndex = _state.items.findIndex((item) => item.id === action.payload.id)
      console.log(existItemIndex , 'existItemIndex');
      
      if (existItemIndex === -1) {
        _state.items.push(action.payload)
        return _state
      }
      _state.items.splice(existItemIndex, 1)
      return _state
    case KadoActionTypes.Set_Remove_Items:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      };
    default:
      throw new Error(`اکشن نامعتبر در Kado Reducer`);
  }
}

const KadoProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <KadoContext.Provider value={{ state, dispatch }}>
      {children}
    </KadoContext.Provider>
  );
};

export default KadoProvider;

export const useCreateBox = () => {
  const context = useContext(KadoContext);

  if (!context) {
    throw Error("useCreateBox باید داخل KadoProvider استفاده شود");
  }

  const { state, dispatch } = context;

  const setShape = (payload: string) =>
    dispatch({ type: KadoActionTypes.Set_Shape, payload });

  const setColor = (payload: string) =>
    dispatch({ type: KadoActionTypes.Set_Color, payload });

  const setAddItems = (payload: Record<string, any>) =>
    dispatch({ type: KadoActionTypes.Set_Add_Items, payload });

  const setRemoveItems = (payload: Record<string, any>) =>
    dispatch({ type: KadoActionTypes.Set_Remove_Items, payload });

  return {
    state,
    setShape,
    setColor,
    setAddItems,
    setRemoveItems,
  };
};
