

//////////////////////////////////////////// RESPUESTA NORMAL DE SERVIDOR   ///////////////////////
export interface respuestaServidorNormal{
  codigo?:Number,
  status?:Boolean,
  jwt?:String,
  mensaje?:String
}
//////////////////////////////////////////// FIN  RESPUESTA NORMAL DE SERVIDOR   ///////////////////////

//////////////////////////////////////////// RESPUESTA A RECUPERACION DE PREGUNTAS ////////////////
export interface respuestaServidorRecuperarPassword{
  codigo?:Number,
  status?:Boolean,
  pregunta?:String
}
//////////////////////////////////////////// FIN RESPUESTA A RECUPERACION DE PREGUNTAS ////////////////