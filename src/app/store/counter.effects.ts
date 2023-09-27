import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs';

import { decrement, increment } from './counter.actions';

@Injectable()
export class CounterEffects {
    saveCount = createEffect(
        () =>
            // actions$ Observable emit-ит new Value каждый раз,
            // когда во ВСЕМ приложении вызывается ЛЮБОЙ store.dispatch(action)
            this.actions$.pipe(

                // фильтр action-ов, для которых актуален данный Effect
                ofType(increment, decrement),

                // действия, которые необходимо произвести с целевым action
                tap((action) => {
                    console.log(action);
                    localStorage.setItem('count', action.value.toString());
                })
            ),
            
        // т.к. последним оператором идет tap(), не эмитящий новых Observable,
        // в конфигурации effect-а необходимо явно указать, что он 
        // не диспатчит никаких actions
        { dispatch: false }
    )

    constructor(private actions$: Actions) { }
}
