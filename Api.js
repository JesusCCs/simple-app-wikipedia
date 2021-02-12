export const getBusqueda = async (busqueda) => {
  const URL = `https://es.wikipedia.org/w/api.php?format=json&action=query&list=search&srsearch=${busqueda}&srprop=snippet`;
  const {query} = await fetch(URL).then((response) => response.json());
  return query.search;
};

export const getPage = async (pageid) => {
  const URL = `https://es.wikipedia.org/w/api.php?format=json&action=parse&pageid=${pageid}`;
  const {parse} = await fetch(URL).then((response) => response.json());
  return parse.text['*'];
};
