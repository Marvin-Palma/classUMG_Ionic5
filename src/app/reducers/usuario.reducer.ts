
import { createReducer, on } from '@ngrx/store';
import * as actions from '../actions/usuario.actions';
import { usuarioState } from '../interfaces/interfaces';
 
export const estadoInicial:usuarioState={nombre:'', avatar:'', email:'', stars:0};
 
const _usuarioReducer = createReducer(estadoInicial,
  on(actions.guardarDatosCompletos, ( state, {usuario} ) => usuario),
);
 
export function usuarioReducer(state, action) {
  return _usuarioReducer(state, action);
}
