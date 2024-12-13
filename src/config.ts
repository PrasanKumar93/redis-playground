import { fashionSearchIndex } from "./data/db-indexes/fashion-ds/search-index.js";
import { UPLOAD_TYPES_FOR_IMPORT } from "./utils/constants.js";

//#region interfaces and enums
enum DATA_SOURCE_ID {
  FASHION_DS = "FASHION_DS",
  TEST_CSV_DS = "TEST_CSV_DS",
  TEST_JSON_ARR_DS = "TEST_JSON_ARR_DS",
}
enum DB_INDEX_ID {
  FASHION_DS_SEARCH_INDEX = "FASHION_DS_SEARCH_INDEX",
}

interface IDataSource {
  dataSourceId: DATA_SOURCE_ID;
  uploadType: string;
  uploadPath: string;
  idField?: string;
  keyPrefix?: string;
  jsFunctionString?: string;
}

interface IDbIndex {
  dbIndexId: DB_INDEX_ID;
  dbIndexName: string;
  dbIndexQuery: string;
  dataSourceId: DATA_SOURCE_ID;
  keyPrefix?: string;
}
interface IQueryViewData {
  query: string;
  queryId?: string;
  dbIndexId: string;
  dataSourceId: string;
}
//#endregion

//#region helper functions
const getKeyPrefix = (dataSourceId: DATA_SOURCE_ID) => {
  const dataSource = DATA_SOURCES.find(
    (ds) => ds.dataSourceId === dataSourceId
  );
  return dataSource?.keyPrefix || "";
};

const getDbIndexes = () => {
  let retObj = DB_INDEXES_RAW;

  retObj = retObj.map((dbIndex) => {
    dbIndex.keyPrefix = getKeyPrefix(dbIndex.dataSourceId);

    let dbIndexQuery = dbIndex.dbIndexQuery;
    dbIndexQuery = dbIndexQuery.replace("{dbIndexName}", dbIndex.dbIndexName);
    dbIndexQuery = dbIndexQuery.replace("{keyPrefix}", dbIndex.keyPrefix);
    dbIndex.dbIndexQuery = dbIndexQuery;

    return dbIndex;
  });

  return retObj;
};

const getFilteredDbIndexes = (
  dbIndexIds: DB_INDEX_ID[],
  isAll: boolean = false
) => {
  let filteredDbIndexes: IDbIndex[] = [];

  if (!dbIndexIds) {
    dbIndexIds = [];
  }

  if (isAll) {
    filteredDbIndexes = DB_INDEXES;
  } else if (dbIndexIds.length > 0) {
    filteredDbIndexes = DB_INDEXES.filter((di) =>
      dbIndexIds.includes(di.dbIndexId)
    );
  }

  return filteredDbIndexes;
};

const getFilteredDataSources = (
  dataSourceIds: DATA_SOURCE_ID[],
  isAll: boolean = false
) => {
  let filteredDataSources: IDataSource[] = [];
  if (isAll) {
    filteredDataSources = DATA_SOURCES;
  } else if (dataSourceIds?.length > 0) {
    filteredDataSources = DATA_SOURCES.filter((ds) =>
      dataSourceIds.includes(ds.dataSourceId)
    );
  }
  return filteredDataSources;
};

//#endregion

//#region config keys
const REDIS_KEYS = {
  PREFIX: {
    APP: "pg:", //playground app
  },
};

const DATA_SOURCES: IDataSource[] = [
  {
    dataSourceId: DATA_SOURCE_ID.FASHION_DS,
    uploadType: UPLOAD_TYPES_FOR_IMPORT.JSON_FOLDER,
    uploadPath: "data/data-sources/fashion-ds",
    idField: "productId",
    keyPrefix: `${REDIS_KEYS.PREFIX.APP}fashion:`,
    jsFunctionString: `
        function formatter(jsonObj) { 

        jsonObj.productId = parseInt(jsonObj.productId);
        jsonObj.price = parseInt(jsonObj.price);

        jsonObj.brandName = jsonObj.brandName.trim().toLowerCase().replace(/ /g, '_');
        jsonObj.gender = jsonObj.gender.trim().toLowerCase();

        jsonObj.masterCategoryType = jsonObj.masterCategory_typeName.trim().toLowerCase().replace(/ /g, '_');
        delete jsonObj.masterCategory_typeName;

        jsonObj.subCategoryType = jsonObj.subCategory_typeName.trim().toLowerCase().replace(/ /g, '_');
        delete jsonObj.subCategory_typeName;

        jsonObj.productDescription = jsonObj.productDescriptors_description_value;
        delete jsonObj.productDescriptors_description_value;
        
        jsonObj.imageLink = jsonObj.styleImages_default_imageURL;
        delete jsonObj.styleImages_default_imageURL;

        return jsonObj; 
      }
    `,
  },
  {
    dataSourceId: DATA_SOURCE_ID.TEST_CSV_DS,
    uploadType: UPLOAD_TYPES_FOR_IMPORT.CSV_FILE,
    uploadPath: "data/data-sources/test-csv-ds/ecommerce-test.csv",
    idField: "productId",
    keyPrefix: `${REDIS_KEYS.PREFIX.APP}csvSource:`,
    jsFunctionString: "",
  },
  {
    dataSourceId: DATA_SOURCE_ID.TEST_JSON_ARR_DS,
    uploadType: UPLOAD_TYPES_FOR_IMPORT.JSON_ARRAY_FILE,
    uploadPath: "data/data-sources/test-json-arr-ds/ecommerce-test.json",
    idField: "productId",
    keyPrefix: `${REDIS_KEYS.PREFIX.APP}jsonArrSource:`,
    jsFunctionString: "",
  },
];

const DB_INDEXES_RAW: IDbIndex[] = [
  {
    dbIndexId: DB_INDEX_ID.FASHION_DS_SEARCH_INDEX,
    dbIndexName: `${REDIS_KEYS.PREFIX.APP}fashionSearchIndex`,
    dbIndexQuery: fashionSearchIndex,
    dataSourceId: DATA_SOURCE_ID.FASHION_DS,
  },
];
const DB_INDEXES = getDbIndexes();

const MIN_REDIS_SAMPLE_DATA_COUNT = 1;
const MAX_REDIS_SAMPLE_DATA_COUNT = 1000;

//#endregion

export {
  DATA_SOURCES,
  DATA_SOURCE_ID,
  DB_INDEXES,
  DB_INDEX_ID,
  MIN_REDIS_SAMPLE_DATA_COUNT,
  MAX_REDIS_SAMPLE_DATA_COUNT,
  getFilteredDbIndexes,
  getFilteredDataSources,
};

export type { IDataSource, IDbIndex, IQueryViewData };