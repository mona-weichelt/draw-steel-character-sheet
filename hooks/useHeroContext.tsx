import { Condition, HeroData, HeroDataAction, Status } from "@/types/heroData";
import { ReactNode, createContext, useContext, useReducer } from "react";

const initialStateShort: HeroData = {
  class: undefined,
  level: undefined,
  stamina: {
    current: 16,
    temporary: 14,
    maximum: 30,
    winded: 15,
    recovery: 10,
  },
  recoveries: {
    current: 6,
    maximum: 8,
  },
  adventure: { victories: 6, heroTokens: 3 },
  combat: {
    size: 1,
    speed: 5,
    stability: 3,
    disengage: 1,
  },
  conditions: new Map<Condition, Status>(),
};

const initialStateLong: HeroData = {
  class: undefined,
  level: undefined,
  stamina: {
    current: 51,
    temporary: 142,
    maximum: 300,
    winded: 150,
    recovery: 100,
  },
  recoveries: {
    current: 9,
    maximum: 17,
  },
  adventure: { victories: 6, heroTokens: 3 },
  combat: {
    size: 1,
    speed: 5,
    stability: 3,
    disengage: 1,
  },
  conditions: new Map<Condition, Status>(),
};

const HeroContext = createContext<{
  state: HeroData;
  dispatch: React.Dispatch<HeroDataAction>;
}>({
  state: initialStateLong,
  dispatch: () => {},
});

const heroReducer = (state: HeroData, action: HeroDataAction) => {
  switch (action.type) {
    case "Reset Short":
      return {
        ...state,
        ...initialStateShort,
      };
    case "Reset Long":
      return {
        ...state,
        ...initialStateLong,
      };
    case "Set Stamina":
      return {
        ...state,
        stamina: action.payload,
      };
    case "Set Current Stamina":
      return {
        ...state,
        stamina: { ...state.stamina, current: action.payload },
      };
    case "Take Damage":
      const newTemporaryStamina = Math.max(
        0,
        state.stamina.temporary - action.payload
      );
      const newCurrentStamina =
        state.stamina.current -
        Math.max(0, action.payload - state.stamina.temporary);
      return {
        ...state,
        stamina: {
          ...state.stamina,
          current: newCurrentStamina,
          temporary: newTemporaryStamina,
        },
      };
    case "Set Temporary Stamina":
      return {
        ...state,
        stamina: { ...state.stamina, temporary: action.payload },
      };
    case "Set Maximum Stamina":
      return {
        ...state,
        stamina: {
          ...state.stamina,
          maximum: action.payload,
          winded: Math.trunc(action.payload * 0.5),
          recovery: action.payload / 3,
        },
      };
    case "Set Recoveries":
      return {
        ...state,
        recoveries: action.payload,
      };
    case "Use Recovery":
      return {
        ...state,
        recoveries: {
          ...state.recoveries,
          current: state.recoveries.current - 1,
        },
        stamina: {
          ...state.stamina,
          current: Math.min(
            state.stamina.current + state.stamina.recovery,
            state.stamina.maximum
          ),
        },
      };
    default:
      return state;
  }
};

export const HeroProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(heroReducer, initialStateShort);

  return (
    <HeroContext.Provider value={{ state, dispatch }}>
      {children}
    </HeroContext.Provider>
  );
};

export const useHeroContext = () => useContext(HeroContext);
