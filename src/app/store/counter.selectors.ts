import { createSelector } from "@ngrx/store";

// counter -> app.module.imports: StoreModule.forRoot({ counter: counterReducer })
export const selectCount = (state: { counter: number }) => state.counter


// пример комбинирования селекторов для избежания дублирования кода
export const selectDoubleCount = createSelector(
    selectCount,
    state => state * 2
)


// селектор может возвращать более одной части state-а
export type CountAndAuth = { counter: number; auth: string }
export const selectCountAndAuth = (state: CountAndAuth) => {
    state.counter, state.auth
}
