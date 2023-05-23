import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import type { StateType, DispatchType } from './store';

export const useAppDispatch: () => DispatchType = useDispatch;
export const useAppSelector: TypedUseSelectorHook<StateType> = useSelector;
