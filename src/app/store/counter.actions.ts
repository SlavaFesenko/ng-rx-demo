import { createAction, props } from '@ngrx/store';

// этот Action просто триггер, поэтому к нему не нужно аттачить данные
export const init = createAction(
  '[Counter] Init'
)

// а этот Action явялется результатом Effect-а, поэтому ему нужен props
export const set = createAction(
  '[Counter] Set',
  props<{value: number}>(),
)

export const increment = createAction(
  '[Counter] Increment',
  props<{value: number}>()
)

export const decrement = createAction(
  '[Counter] Decrement',
  props<{value: number}>()
)

// export const INCREMENT = '[Counter] Increment'

// export class IncrementAction implements Action {
//   readonly type = INCREMENT;

//   constructor(public value: number) {}
// }

// export type CounterActions = IncrementAction;
