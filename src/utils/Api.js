export const getBusqueda = async (busqueda, offSet = 0) => {
  const URL = `https://es.wikipedia.org/w/api.php?format=json&action=query&list=search&srprop=snippet&srsearch=${busqueda}&sroffset=${offSet}`;
  const {query} = await fetch(URL).then((response) => response.json());
  return query.search;
};

export const getPage = async (pageid) => {
  const URL = `https://es.wikipedia.org/w/api.php?format=json&action=parse&prop=text&pageid=${pageid}`;
  const {parse} = await fetch(URL).then((response) => response.json());
  return parse.text['*'];
};
