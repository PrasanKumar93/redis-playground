# pgGenerateNewUserData

## Request

```json
POST http://localhost:3001/api/pgGenerateNewUserData
{
  "customUserId":"123",
  "isAll":false,
  "dbIndexIds":["FASHION_DS_SEARCH_INDEX"],
  "dataSourceIds":["FASHION_DS"]
}
```

## Response

```json
{
  "data": {
    "pgLoadDataSourceInRedis": [
      // same as pgLoadDataSourceInRedis API response array
    ],
    "pgCreateIndexInRedis": [
      // same as pgCreateIndexInRedis API response array
    ],
    "userId": "123"
  },
  "error": null
}
```
