
//****************************************** Interfaces Redux               **********************/


export interface appState{
  usuario: any;
}

export interface usuarioState{
  avatar: string,
  email: string,
  nombre: string,
  stars: number,
  preguntaSeguridad:string
}

//****************************************** Fin Interfaces Redux           **********************/


//////////////////////////////////////////// RESPUESTA NORMAL DE SERVIDOR   ///////////////////////
export interface respuestaServidorNormal{
  codigo?:Number,
  status?:Boolean,
  jwt?:String,
  mensaje?:any,
  usuario?:any
}
//////////////////////////////////////////// FIN  RESPUESTA NORMAL DE SERVIDOR   ///////////////////////

//////////////////////////////////////////// RESPUESTA A RECUPERACION DE PREGUNTAS ////////////////
export interface respuestaServidorRecuperarPassword{
  codigo?:Number,
  status?:Boolean,
  pregunta?:String
}
//////////////////////////////////////////// FIN RESPUESTA A RECUPERACION DE PREGUNTAS ////////////////

//////////////////////////////////////////// COMPONENTE DE SIDE MENU ///////////////////////////////////

export interface Componente{
  icon:string;
  name:string;
  redirectTo:string;
}

//////////////////////////////////////////// FIN COMPONENTE DE SIDE MENU ///////////////////////////////////

//////////////////////////////////////////// ENCABEZADO DE HOME          ///////////////////////////////////

export interface EncabezadoHome{
  titulo?:string;
  contenido?:string;
  imagenes?:any;
}
//////////////////////////////////////////// FIN ENCABEZADO DE HOME      ///////////////////////////////////

//////////////////////////////////////////// NOTICIA HOME                ///////////////////////////////////

export interface NoticiaHome{
  titulo?:string;
  subtitulo?:string;
  contenido?:string;
  imagenes?:any;
}
////////////////////////////////////////////  FIN NOTICIA HOME           ///////////////////////////////////