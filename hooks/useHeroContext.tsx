import { initialHeroStateLong, initialHeroStateShort } from "@/data/hero";
import { Condition, Hero, HeroAction, Status } from "@/types/hero";
import { ReactNode, createContext, useContext, useReducer } from "react";

const HeroContext = createContext<{
  state: Hero;
  dispatch: React.Dispatch<HeroAction>;
}>({
  state: initialHeroStateLong,
  dispatch: () => {},
});

const heroReducer = (state: Hero, action: HeroAction) => {
  switch (action.type) {
    case "Reset Short":
      return {
        ...state,
        ...initialHeroStateShort,
      };
    case "Reset Long":
      return {
        ...state,
        ...initialHeroStateLong,
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
  const [state, dispatch] = useReducer(heroReducer, initialHeroStateShort);

  return (
    <HeroContext.Provider value={{ state, dispatch }}>
      {children}
    </HeroContext.Provider>
  );
};

export const useHeroContext = () => useContext(HeroContext);
