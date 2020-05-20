
import { createReducer, on } from '@ngrx/store';
import * as actions from '../actions/usuario.actions';
import { usuarioState } from '../interfaces/interfaces';
 
export const estadoInicial:usuarioState={nombre:'', avatar:'', email:'', stars:0, preguntaSeguridad:''};
 
const _usuarioReducer = createReducer(estadoInicial,
  on(actions.guardarDatosCompletos, ( state, {usuario} ) => usuario),
  on(actions.borrarDatosCompletos, state => estadoInicial),
);
 
export function usuarioReducer(state, action) {
  return _usuarioReducer(state, action);
}
