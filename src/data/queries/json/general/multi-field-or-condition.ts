import {
  DB_INDEX_ID,
  DATA_SOURCE_ID,
  IQueryViewData,
} from "../../../../config.js";

const queryViewData: IQueryViewData = {
  query: `//Searches for users who are either from Australia or are male
FT.SEARCH '{dbIndexName}' '(@country:{AUSTRALIA}) | (@gender:{M})'`,
  dbIndexId: DB_INDEX_ID.USER_DS_SEARCH_INDEX,
  dataSourceId: DATA_SOURCE_ID.USER_DS,
};

export default queryViewData;
