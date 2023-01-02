---
title: Vivi Zhao v1.0.0
language_tabs:
  - shell: Shell
  - http: HTTP
  - javascript: JavaScript
  - ruby: Ruby
  - python: Python
  - php: PHP
  - java: Java
  - go: Go
toc_footers: []
includes: []
search: true
code_clipboard: true
highlight_theme: darkula
headingLevel: 2
generator: "@tarslib/widdershins v4.0.17"

---

# Vivi Zhao

> v1.0.0

Base URLs:

# CMS-Manage  

## POST ArticleDelApi

POST /manage/article/remove

> Body Parameters

```yaml
id: 0

```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|cms-token|header|string| no |none|
|body|body|object| no |none|
|» id|body|integer| no |none|

> Response Examples

> Success

```json
{
  "errCode": 0
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» errCode|integer|true|none||none|
|» message|string|true|none||none|

## PUT ArticleUpdateApi

PUT /manage/article/update

> Body Parameters

```json
{
  "content": "string",
  "id": 0,
  "subTitle": "string",
  "title": "string"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|cms-token|header|string| no |none|
|body|body|object| no |none|
|» content|body|string| yes |none|
|» id|body|integer| yes |none|
|» subTitle|body|string| yes |none|
|» title|body|string| yes |none|

> Response Examples

> 200 Response

```json
{
  "errCode": 0,
  "message": "string"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» errCode|integer|true|none||none|
|» message|string|true|none||none|

## POST LoginApi

POST /manage/login

> Body Parameters

```json
{
  "password": "string",
  "username": "string"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|
|» password|body|string| yes |none|
|» username|body|string| yes |none|

> Response Examples

> 200 Response

```json
{
  "errCode": 0,
  "data": {
    "cms-token": "string",
    "avatar": "string"
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|success|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» errCode|integer|true|none||0 means succes|
|» data|object|true|none||none|
|»» cms-token|string|true|none||none|
|»» avatar|string|true|none||none|

## POST RegisterApi

POST /manage/register

> Body Parameters

```json
{
  "username": "string",
  "password": "string"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|
|» username|body|string| yes |none|
|» password|body|string| yes |none|

> Response Examples

> 200 Response

```json
{
  "errCode": 0,
  "message": "string",
  "data": "string"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|succes|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» errCode|integer|true|none||none|
|» message|string|true|none||none|
|» data|string|true|none||none|

## GET ArticleListApi

GET /manage/article

> Body Parameters

```yaml
num: 0
count: 0

```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|
|» num|body|integer| no |current page|
|» count|body|integer| no |How many items per page|

> Response Examples

> 200 Response

```json
{
  "errCode": 0,
  "message": "string",
  "data": {
    "total": 0,
    "count": 0,
    "num": 0
  },
  "arr": {
    "id": 0,
    "title": "string",
    "subTitle": "string",
    "author": "string",
    "date": "string",
    "content": "string"
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|success|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» errCode|integer|true|none||none|
|» message|string|true|none||none|
|» data|object|true|none||none|
|»» total|integer|true|none|total pages|none|
|»» count|integer|true|none|How many items per page|none|
|»» num|integer|true|none|current page|none|
|» arr|object|true|none||none|
|»» id|integer|true|none||none|
|»» title|string|true|none||none|
|»» subTitle|string|true|none||none|
|»» author|string|true|none||none|
|»» date|string|true|none||none|
|»» content|string|true|none||none|

## POST ArticleAddApi

POST /manage/article/add

> Body Parameters

```yaml
title: string
subTitle: string
content: string

```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|cms-token|header|string| no |none|
|body|body|object| no |none|
|» title|body|string| no |none|
|» subTitle|body|string| no |none|
|» content|body|string| no |none|

> Response Examples

> 200 Response

```json
{
  "errCode": 0,
  "message": "string"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» errCode|integer|true|none||none|
|» message|string|true|none||none|

## GET ArticleSearchApi

GET /manage/article/{id}

> Body Parameters

```yaml
id: 0

```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|cms-token|header|string| no |none|
|body|body|object| no |none|
|» id|body|integer| no |none|

> Response Examples

> 200 Response

```json
{
  "errCode": 0,
  "message": "string",
  "data": {
    "id": 0,
    "author": "string",
    "title": "string",
    "subTitle": "string",
    "date": "string",
    "content": "string"
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» errCode|integer|true|none||none|
|» message|string|true|none||none|
|» data|object|true|none||none|
|»» id|integer|true|none||none|
|»» author|string|true|none||none|
|»» title|string|true|none||none|
|»» subTitle|string|true|none||none|
|»» date|string|true|none||none|
|»» content|string|true|none||none|

# Data Schema

