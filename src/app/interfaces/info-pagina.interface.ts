

export interface InfoPagina{
  titulo?: string;
  email?: string;
  nombre_corto?: string;
  pagina_autor?: string;
  facebook?: string;
  twitter?: string;
  instagram?: string;
  equipo_trabajo?: any[];
}

//el signo de pregunta es porque puede ser que venga o no y asi el info-pagina.service.ts no nos da error