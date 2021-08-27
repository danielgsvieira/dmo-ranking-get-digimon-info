const constants = {
  apiBaseUrl: 'https://dmowiki.com/api.php',
  rankQueryString: 'action=query&list=categorymembers&format=json&cmlimit=500&cmtitle=Category:Digimon_Rank_',
  digimonQueryString: 'action=parse&contentmodel=wikitext&prop=wikitext&format=json&pageid=',
  ranks: ['A', 'A%2B', 'S', 'S%2B', 'SS', 'SS%2B', 'SSS', 'SSS%2B', 'U', 'U%2B'],
};

export { constants };
