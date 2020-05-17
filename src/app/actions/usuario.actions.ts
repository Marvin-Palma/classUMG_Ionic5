
import { createAction, props } from '@ngrx/store';
import { usuarioState } from '../interfaces/interfaces';

export const guardarDatosCompletos = createAction(
    '[Usuario] guardarDatosCompletos', 
    props<{usuario:usuarioState}>()
);