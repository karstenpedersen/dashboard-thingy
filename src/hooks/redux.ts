import { StoreDispatch, StoreState } from "@/store/store";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";

export const useAppSelector: TypedUseSelectorHook<StoreState> = useSelector;
