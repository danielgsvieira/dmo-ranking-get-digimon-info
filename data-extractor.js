import { constants } from "./constants.js";
import { instantiateDigimonFromWikitext } from "./digimon-data-extractor.js";
import { get } from "./http.js";
import { print } from "./output.js";

async function getDigimonList() {
  print('Getting pageId lists...');
  const idList = await getIdList();

  const digimons = [];

  for (let i = 0; i < idList.length; i += 1) {
    const percentage = ((i / idList.length) * 100).toFixed(1) + '%';
    print(`Getting digimon data... ${percentage}`, false);
    const digimon = await getDigimonDataByPageId(idList[i]);
    digimons.push(digimon);
  }

  return digimons;
}

async function getIdList() {
  const pageIds = [];

  for (let i = 0; i < constants.ranks.length; i += 1) {
    print(`Getting pageId list for Rank ${constants.ranks[i]}...`);
    const ids = await getIdListByRank(constants.ranks[i]);
    pageIds.push(...ids);
  }

  return pageIds;
}

async function getIdListByRank(rank) {
  const url = `${constants.apiBaseUrl}?${constants.rankQueryString}${rank}`;
  const { data } = await get(url);

  const result = data.query.categorymembers.map((el) => el.pageid);

  return result;
}

async function getDigimonDataByPageId(pageId) {
  const url = `${constants.apiBaseUrl}?${constants.digimonQueryString}${pageId}`;
  const { data } = await get(url);

  const result = instantiateDigimonFromWikitext(data.parse);

  return result;
}

export { getDigimonList };
