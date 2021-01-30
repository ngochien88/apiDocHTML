define({ "api": [
  {
    "type": "get",
    "url": "v1/price/getBieuDo",
    "title": "Lấy dữ liệu biểu đồ giá",
    "name": "getBieuDo",
    "group": "BieuDoRoutes",
    "parameter": {
      "fields": {
        "Query string": [
          {
            "group": "Query string",
            "type": "String",
            "optional": false,
            "field": "time",
            "description": "<p>Khoảng thời gian năm người dùng chọn.</p>"
          },
          {
            "group": "Query string",
            "type": "String",
            "optional": false,
            "field": "provinceCode",
            "description": "<p>thành phố.</p>"
          },
          {
            "group": "Query string",
            "type": "String",
            "optional": false,
            "field": "districtCode",
            "description": "<p>Quận.</p>"
          },
          {
            "group": "Query string",
            "type": "String",
            "optional": false,
            "field": "villageCode",
            "description": "<p>Phường.</p>"
          },
          {
            "group": "Query string",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>Thể loại đăng tin rao bán.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "http://175.41.154.174:4000/v1/price/getBieuDo?time=2019&provinceCode=ho-chi-minh&districtCode=quan-1&villageCode=phuong-da-kao&category=Bán căn hộ chung cư",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n[{\"_id\":\"600ff7e4110a4816609eef62\",\"time\":\"1/2019\",\"price\":8666666.667000001,\"provinceCode\":\"ho-chi-minh\",\"districtCode\":\"quan-1\",\"villageCode\":\"phuong-da-kao\",\"category\":\"Bán căn hộ chung cư\",\"unit\":\"vnđ/m^2\",\"year\":2019},{\"_id\":\"600ff7e4110a4816609eef63\",\"time\":\"2/2019\",\"price\":40384057.970000006,\"provinceCode\":\"ho-chi-minh\",\"districtCode\":\"quan-1\",\"villageCode\":\"phuong-da-kao\",\"category\":\"Bán căn hộ chung cư\",\"unit\":\"vnđ/m^2\",\"year\":2019},{\"_id\":\"600ff7e4110a4816609eef64\",\"time\":\"3/2019\",\"price\":135661822.85290325,\"provinceCode\":\"ho-chi-minh\",\"districtCode\":\"quan-1\",\"villageCode\":\"phuong-da-kao\",\"category\":\"Bán căn hộ chung cư\",\"unit\":\"vnđ/m^2\",\"year\":2019},{\"_id\":\"600ff7e4110a4816609eef65\",\"time\":\"4/2019\",\"price\":137320058.90471265,\"provinceCode\":\"ho-chi-minh\",\"districtCode\":\"quan-1\",\"villageCode\":\"phuong-da-kao\",\"category\":\"Bán căn hộ chung cư\",\"unit\":\"vnđ/m^2\",\"year\":2019},{\"_id\":\"600ff7e4110a4816609eef66\",\"time\":\"5/2019\",\"price\":119886312.19000001,\"provinceCode\":\"ho-chi-minh\",\"districtCode\":\"quan-1\",\"villageCode\":\"phuong-da-kao\",\"category\":\"Bán căn hộ chung cư\",\"unit\":\"vnđ/m^2\",\"year\":2019},{\"_id\":\"600ff7e4110a4816609eef67\",\"time\":\"6/2019\",\"price\":108585427.73789473,\"provinceCode\":\"ho-chi-minh\",\"districtCode\":\"quan-1\",\"villageCode\":\"phuong-da-kao\",\"category\":\"Bán căn hộ chung cư\",\"unit\":\"vnđ/m^2\",\"year\":2019},{\"_id\":\"600ff7e4110a4816609eef68\",\"time\":\"7/2019\",\"price\":110422582.39730771,\"provinceCode\":\"ho-chi-minh\",\"districtCode\":\"quan-1\",\"villageCode\":\"phuong-da-kao\",\"category\":\"Bán căn hộ chung cư\",\"unit\":\"vnđ/m^2\",\"year\":2019},{\"_id\":\"600ff7e4110a4816609eef69\",\"time\":\"8/2019\",\"price\":89200627.3746154,\"provinceCode\":\"ho-chi-minh\",\"districtCode\":\"quan-1\",\"villageCode\":\"phuong-da-kao\",\"category\":\"Bán căn hộ chung cư\",\"unit\":\"vnđ/m^2\",\"year\":2019},{\"_id\":\"600ff7e4110a4816609eef6a\",\"time\":\"9/2019\",\"price\":139239077.91279998,\"provinceCode\":\"ho-chi-minh\",\"districtCode\":\"quan-1\",\"villageCode\":\"phuong-da-kao\",\"category\":\"Bán căn hộ chung cư\",\"unit\":\"vnđ/m^2\",\"year\":2019},{\"_id\":\"600ff7e4110a4816609eef6b\",\"time\":\"10/2019\",\"price\":123043834.19000001,\"provinceCode\":\"ho-chi-minh\",\"districtCode\":\"quan-1\",\"villageCode\":\"phuong-da-kao\",\"category\":\"Bán căn hộ chung cư\",\"unit\":\"vnđ/m^2\",\"year\":2019},{\"_id\":\"600ff7e4110a4816609eef6c\",\"time\":\"11/2019\",\"price\":147683379.83166668,\"provinceCode\":\"ho-chi-minh\",\"districtCode\":\"quan-1\",\"villageCode\":\"phuong-da-kao\",\"category\":\"Bán căn hộ chung cư\",\"unit\":\"vnđ/m^2\",\"year\":2019},{\"_id\":\"600ff7e4110a4816609eef6d\",\"time\":\"12/2019\",\"price\":107301587.3,\"provinceCode\":\"ho-chi-minh\",\"districtCode\":\"quan-1\",\"villageCode\":\"phuong-da-kao\",\"category\":\"Bán căn hộ chung cư\",\"unit\":\"vnđ/m^2\",\"year\":2019}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/apiDoc/price_Doc.js",
    "groupTitle": "BieuDoRoutes"
  },
  {
    "type": "post",
    "url": "/v1/areas/addFavorite",
    "title": "Thêm khu vực yêu thích",
    "name": "addFavorite",
    "group": "areaRoutes",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Truyền username.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "areaId",
            "description": "<p>Truyền AreaID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "    http://175.41.154.174:4000/v1/areas/addFavorite\nPost\n\tusername: hien\n\tareaId: 5f9eb794bfeb451c39400633",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n   {\n    \"ok\": true\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/apiDoc/api_Doc.js",
    "groupTitle": "areaRoutes"
  },
  {
    "type": "post",
    "url": "/v1/areas/deleteFavorite",
    "title": "Xóa khu vực yêu thích",
    "name": "deleteFavorite",
    "group": "areaRoutes",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Truyền username.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "areaId",
            "description": "<p>Truyền AreaID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "    http://175.41.154.174:4000/v1/areas/deleteFavorite\nPost\n\tusername: hien\n\tareaId: 5f9eb794bfeb451c39400633",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n   {\n    \"ok\": true\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/apiDoc/api_Doc.js",
    "groupTitle": "areaRoutes"
  },
  {
    "type": "get",
    "url": "/v1/areas/getByBorder",
    "title": "Lấy thông tin Border",
    "name": "getByBorder",
    "group": "areaRoutes",
    "parameter": {
      "fields": {
        "Query string": [
          {
            "group": "Query string",
            "type": "String",
            "optional": false,
            "field": "border_id",
            "description": "<p>Truyền ID Border.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "http://175.41.154.174:4000/v1/areas/getByBorder?border_id=5ff7f56a15b2b03644824b5a",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\"_id\":\"5f9eb795bfeb451c39400637\",\"fullAddress\":\"Cà Mau\",\"type\":1,\"provinceCode\":\"ca-mau\",\"districtCode\":\"\",\"villageCode\":\"\",\"createdAt\":\"2020-09-05T06:52:28.458Z\",\"updatedAt\":\"2020-09-05T06:52:28.458Z\",\"__v\":0}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/apiDoc/api_Doc.js",
    "groupTitle": "areaRoutes"
  },
  {
    "type": "get",
    "url": "/v1/areas/search",
    "title": "Tìm kiếm khu vực",
    "name": "search",
    "group": "areaRoutes",
    "parameter": {
      "fields": {
        "Query string": [
          {
            "group": "Query string",
            "type": "String",
            "optional": false,
            "field": "_q",
            "description": "<p>Tên khu vực người dùng nhập.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "http://175.41.154.174:4000/v1/areas/search?_q=hồ",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n[{\"_id\":\"5f9eb7a1bfeb451c39400665\",\"fullAddress\":\"Hồ Chí Minh\",\"type\":1,\"provinceCode\":\"ho-chi-minh\",\"districtCode\":\"\",\"villageCode\":\"\"},{\"_id\":\"5f9eb7acbfeb451c39400691\",\"fullAddress\":\"Huyện Hồng Dân, Bạc Liêu\",\"type\":2,\"provinceCode\":\"bac-lieu\",\"districtCode\":\"huyen-hong-dan\",\"villageCode\":\"\"},{\"_id\":\"5f9eb7e5bfeb451c39400772\",\"fullAddress\":\"Thị xã Hồng Lĩnh, Hà Tĩnh\",\"type\":2,\"provinceCode\":\"ha-tinh\",\"districtCode\":\"thi-xa-hong-linh\",\"villageCode\":\"\"},{\"_id\":\"5f9eb7ffbfeb451c394007dc\",\"fullAddress\":\"Huyện Sìn Hồ, Lai Châu\",\"type\":2,\"provinceCode\":\"lai-chau\",\"districtCode\":\"huyen-sin-ho\",\"villageCode\":\"\"},{\"_id\":\"5f9eb7fcbfeb451c394007d0\",\"fullAddress\":\"Huyện Ngọc Hồi, Kon Tum\",\"type\":2,\"provinceCode\":\"kon-tum\",\"districtCode\":\"huyen-ngoc-hoi\",\"villageCode\":\"\"}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/apiDoc/api_Doc.js",
    "groupTitle": "areaRoutes"
  },
  {
    "type": "post",
    "url": "/v1/local/login",
    "title": "Đăng Nhập User",
    "name": "login",
    "group": "authRoutes",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Truyền username.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Truyền password.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "    http://175.41.154.174:4000/v1/local/login\nPost\n\tusername: hien\n\tpassword: hien123",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n   {\n    \"jwt\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDA1M2MxNzYwNzUyNTI0MzQxZjAxMDciLCJ1c2VybmFtZSI6ImhpZW4iLCJpYXQiOjE2MTA5NTY1OTksImV4cCI6MTYxMDk5MjU5OX0.wasA_Ga2fwRUp8YLtfg-T4lt3dJVQfIBhNr76psTZ5E\",\n    \"user\": {\n        \"_id\": \"60053c1760752524341f0107\",\n        \"block\": false,\n        \"provider\": \"local\",\n        \"username\": \"hien\",\n        \"email\": \"hien@gmail.com\",\n        \"createdAt\": \"2021-01-18T07:43:19.873Z\",\n        \"updatedAt\": \"2021-01-18T07:43:19.873Z\",\n        \"__v\": 0\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/apiDoc/api_Doc.js",
    "groupTitle": "authRoutes"
  },
  {
    "type": "post",
    "url": "/v1/local/register",
    "title": "Đăng ký User",
    "name": "register",
    "group": "authRoutes",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Truyền username.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Truyền password.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Truyền email.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "    http://175.41.154.174:4000/v1/local/register\nPost\n\tusername: hien\n\tpassword: hien123\n\temail: hien123@gmail.com",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n   {\n    \"jwt\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDA1M2MxNzYwNzUyNTI0MzQxZjAxMDciLCJ1c2VybmFtZSI6ImhpZW4iLCJpYXQiOjE2MTA5NTU3OTksImV4cCI6MTYxMDk5MTc5OX0.gTojKAh9f0yBEnuxu-f5oN2F28kwTVtMdwgdqRXFvaA\",\n    \"user\": {\n        \"block\": false,\n        \"provider\": \"local\",\n        \"favoriteAreas\": [],\n        \"_id\": \"60053c1760752524341f0107\",\n        \"username\": \"hien\",\n        \"email\": \"hien@gmail.com\",\n        \"createdAt\": \"2021-01-18T07:43:19.873Z\",\n        \"updatedAt\": \"2021-01-18T07:43:19.873Z\",\n        \"__v\": 0\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/apiDoc/api_Doc.js",
    "groupTitle": "authRoutes"
  },
  {
    "type": "get",
    "url": "/v1/borders/getByArea",
    "title": "Lấy Border khu vực bằng ID khu vực",
    "name": "getBorder",
    "group": "borderRoutes",
    "parameter": {
      "fields": {
        "Query string": [
          {
            "group": "Query string",
            "type": "String",
            "optional": false,
            "field": "area_id",
            "description": "<p>ID Area.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "http://175.41.154.174:4000/v1/borders/getByArea?area_id=5f9ec4e8bfeb451c39403324",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\"_id\":\"5ff87d1f86d0fc1cd486b1e4\",\"type\":\"Feature\",\"properties\":{\"GID_0\":\"VNM\",\"NAME_0\":\"Vietnam\",\"GID_1\":\"VNM.25_1\",\"NAME_1\":\"Hồ Chí Minh\",\"NL_NAME_1\":null,\"GID_2\":\"VNM.25.23_1\",\"NAME_2\":\"Tân Phú\",\"NL_NAME_2\":null,\"GID_3\":\"VNM.25.23.6_1\",\"NAME_3\":\"Sơn Kỳ\",\"VARNAME_3\":\"Son Ky\",\"NL_NAME_3\":null,\"TYPE_3\":\"Phường\",\"ENGTYPE_3\":\"Ward\",\"CC_3\":null,\"HASC_3\":null},\"geometry\":{\"type\":\"MultiPolygon\",\"coordinates\":[[[[106.62462615966808,10.801467895507812],[106.61368560791021,10.796729087829647],[106.60842895507824,10.80585861206066],[106.60676574707031,10.806114196777457],[106.60774230957031,10.813019752502555],[106.61489868164074,10.809328079223633],[106.63108062744146,10.805447578430233],[106.63278198242193,10.803494453430176],[106.62462615966808,10.801467895507812]]]]},\"provinceCode\":\"ho-chi-minh\",\"districtCode\":\"quan-tan-phu\",\"villageCode\":\"phuong-son-ky\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/apiDoc/api_Doc.js",
    "groupTitle": "borderRoutes"
  },
  {
    "type": "post",
    "url": "v1/review/addReviewPoint",
    "title": "Thêm điểm user review",
    "name": "addReviewPoint",
    "group": "reviewRoutes",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "point",
            "description": "<p>Điểm người dùng nhập.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "khongkhi_text",
            "description": "<p>Chất lượng không khí người dùng chọn.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "khongkhi_point",
            "description": "<p>Điểm chất lượng không khí người dùng chọn.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "giaothong_text",
            "description": "<p>Chất lượng giao thông người dùng chọn.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "giaothong_point",
            "description": "<p>Điểm giao thông người dùng chọn.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ngap_text",
            "description": "<p>Chất lượng ngập người dùng chọn.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ngap_point",
            "description": "<p>Điểm chất lượng ngập người dùng chọn.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "anninh_text",
            "description": "<p>Chất lượng an ninh người dùng chọn.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "anninh_point",
            "description": "<p>Điểm chất lượng an ninh người dùng chọn.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "    http://175.41.154.174:4000/v1/review/addReviewPoint\nPost\n{\n    \"point\": 1,\n    \"khongkhi_text\": \"Tốt\",\n    \"khongkhi_point\": 4,\n    \"giaothong_text\": \"Tốt\",\n    \"giaothong_point\": 2,\n    \"ngap_text\": \"Tốt\",\n    \"ngap_point\": 4,\n    \"anninh_text\": \"Tốt\",\n    \"anninh_point\": 4,\n    \"area_id\": \"5f9eb794bfeb451c39400633\"\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token người dùng.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDA1M2MxNzYwNzUyNTI0MzQxZjAxMDciLCJ1c2VybmFtZSI6ImhpZW4iLCJpYXQiOjE2MTEzOTMxNDIsImV4cCI6MTYxMTQyOTE0Mn0.oh1iAOVbmy9D_NAz3hJZJwDkzzr-1g0oaJBuLXavEGY'\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n  {\n  \"ketqua\": \"add thanh cong\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/apiDoc/review.js",
    "groupTitle": "reviewRoutes"
  },
  {
    "type": "post",
    "url": "v1/review/addReviewText",
    "title": "Thêm bình luận user",
    "name": "addReviewText",
    "group": "reviewRoutes",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "review_text",
            "description": "<p>Bình luận người dùng</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "area_id",
            "description": "<p>AreaID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "    http://175.41.154.174:4000/v1/review/addReviewText\nPost\n{\n    \"review_text\": \"mon ngon\",\n    \"area_id\": \"5f9eb794bfeb451c39400633\"\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token người dùng.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDA1M2MxNzYwNzUyNTI0MzQxZjAxMDciLCJ1c2VybmFtZSI6ImhpZW4iLCJpYXQiOjE2MTEzOTMxNDIsImV4cCI6MTYxMTQyOTE0Mn0.oh1iAOVbmy9D_NAz3hJZJwDkzzr-1g0oaJBuLXavEGY'\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n {\n  \"ketqua\": \"add thanh cong\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/apiDoc/review.js",
    "groupTitle": "reviewRoutes"
  },
  {
    "type": "post",
    "url": "v1/review/deleteReviewPoint",
    "title": "Xóa điểm user review",
    "name": "deleteReviewPoint",
    "group": "reviewRoutes",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "area_id",
            "description": "<p>Area ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "    http://175.41.154.174:4000/v1/review/deleteReviewPoint\nPost\n{\n    \"area_id\": \"5f9eb794bfeb451c39400633\"\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token người dùng.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDA1M2MxNzYwNzUyNTI0MzQxZjAxMDciLCJ1c2VybmFtZSI6ImhpZW4iLCJpYXQiOjE2MTEzOTMxNDIsImV4cCI6MTYxMTQyOTE0Mn0.oh1iAOVbmy9D_NAz3hJZJwDkzzr-1g0oaJBuLXavEGY'\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n {\n  \"kq\": \"xoa thanh cong\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/apiDoc/review.js",
    "groupTitle": "reviewRoutes"
  },
  {
    "type": "post",
    "url": "v1/review/deleteReviewText",
    "title": "Xóa bình luận user review",
    "name": "deleteReviewText",
    "group": "reviewRoutes",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "area_id",
            "description": "<p>Area ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "    http://175.41.154.174:4000/v1/review/deleteReviewText\nPost\n{\n    \"area_id\": \"5f9eb794bfeb451c39400633\"\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token người dùng.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDA1M2MxNzYwNzUyNTI0MzQxZjAxMDciLCJ1c2VybmFtZSI6ImhpZW4iLCJpYXQiOjE2MTEzOTMxNDIsImV4cCI6MTYxMTQyOTE0Mn0.oh1iAOVbmy9D_NAz3hJZJwDkzzr-1g0oaJBuLXavEGY'\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n {\n  \"kq\": \"xoa thanh cong\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/apiDoc/review.js",
    "groupTitle": "reviewRoutes"
  },
  {
    "type": "get",
    "url": "/v1/review/getReviewPointByArea",
    "title": "Lấy điểm đánh giá bằng AreaID",
    "name": "getReviewPointByArea",
    "group": "reviewRoutes",
    "parameter": {
      "fields": {
        "Query string": [
          {
            "group": "Query string",
            "type": "String",
            "optional": false,
            "field": "area_id",
            "description": "<p>Area ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "http://175.41.154.174:4000/v1/review/getReviewPointByArea?area_id=5f9eb794bfeb451c39400633",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n   [\n  {\n    \"_id\": \"6012e4ba36dcdb2d9592c1e3\",\n    \"point\": 4,\n    \"khongkhi_text\": \"tốt\",\n    \"khongkhi_point\": 5,\n    \"giaothong_text\": \"Trung bình\",\n    \"giaothong_point\": 2,\n    \"ngap_text\": \"kém\",\n    \"ngap_point\": 8,\n    \"anninh_text\": \"Giỏi\",\n    \"anninh_point\": 4,\n    \"area_id\": \"5f9eb794bfeb451c39400633\",\n    \"user_id\": \"5fffd0ad144fb71c25d993f5\",\n    \"__v\": 0\n  }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/apiDoc/review.js",
    "groupTitle": "reviewRoutes"
  },
  {
    "type": "get",
    "url": "/v1/review/getReviewPointByUser",
    "title": "Lấy điểm đánh giá bằng UserID",
    "name": "getReviewPointByUser",
    "group": "reviewRoutes",
    "parameter": {
      "fields": {
        "Query string": [
          {
            "group": "Query string",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": "<p>User ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "http://175.41.154.174:4000/v1/review/getReviewPointByUser?user_id=5fffd0ad144fb71c25d993f5",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n   [\n  {\n    \"_id\": \"6012e4ba36dcdb2d9592c1e3\",\n    \"point\": 4,\n    \"khongkhi_text\": \"tốt\",\n    \"khongkhi_point\": 5,\n    \"giaothong_text\": \"Trung bình\",\n    \"giaothong_point\": 2,\n    \"ngap_text\": \"kém\",\n    \"ngap_point\": 8,\n    \"anninh_text\": \"Giỏi\",\n    \"anninh_point\": 4,\n    \"area_id\": \"5f9eb794bfeb451c39400633\",\n    \"user_id\": \"5fffd0ad144fb71c25d993f5\",\n    \"__v\": 0\n  }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/apiDoc/review.js",
    "groupTitle": "reviewRoutes"
  },
  {
    "type": "get",
    "url": "/v1/review/getReviewTextByArea",
    "title": "Lấy bình luận đánh giá bằng AreaID",
    "name": "getReviewTextByArea",
    "group": "reviewRoutes",
    "parameter": {
      "fields": {
        "Query string": [
          {
            "group": "Query string",
            "type": "String",
            "optional": false,
            "field": "area_id",
            "description": "<p>Area ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "http://175.41.154.174:4000/v1/review/getReviewTextByArea?area_id=5f9eb794bfeb451c39400633",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n   [\n    {\n        \"_id\": \"60139850c5344009104f8860\",\n        \"review_text\": \"mon ngon\",\n        \"area_id\": \"5f9eb794bfeb451c39400633\",\n        \"user_id\": \"5fffd0ad144fb71c25d993f5\",\n        \"__v\": 0\n    },\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/apiDoc/review.js",
    "groupTitle": "reviewRoutes"
  },
  {
    "type": "get",
    "url": "/v1/review/getReviewTextByUser",
    "title": "Lấy bình luận đánh giá bằng UserID",
    "name": "getReviewTextByUser",
    "group": "reviewRoutes",
    "parameter": {
      "fields": {
        "Query string": [
          {
            "group": "Query string",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": "<p>User ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "http://175.41.154.174:4000/v1/review/getReviewTextByUser?user_id=5fffd0ad144fb71c25d993f5",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n   [\n    {\n        \"_id\": \"60139850c5344009104f8860\",\n        \"review_text\": \"mon ngon\",\n        \"area_id\": \"5f9eb794bfeb451c39400633\",\n        \"user_id\": \"5fffd0ad144fb71c25d993f5\",\n        \"__v\": 0\n    },\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/apiDoc/review.js",
    "groupTitle": "reviewRoutes"
  },
  {
    "type": "get",
    "url": "/v1/utilitie/count",
    "title": "Đếm số tiện ích trong 1 khu vực",
    "name": "countArea",
    "group": "utilitieRoutes",
    "parameter": {
      "fields": {
        "Query string": [
          {
            "group": "Query string",
            "type": "String",
            "optional": false,
            "field": "border_id",
            "description": "<p>ID Border.</p>"
          },
          {
            "group": "Query string",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>nhà hàng, giải trí, mua sắm, cuộc sống về đêm, làm đẹp, ẩm thực đường phố, sức khỏe, giáo dục, cafe, Các cây ATM, Tài chính, Khách sạn và chỗ ở, du lịch, dịch vụ, giao thông, thể thao, tổ chức.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "http://175.41.154.174:4000/v1/utilities/count?border_id=5f9ec4e8bfeb451c39403324&category=C%C3%A1c%20c%C3%A2y%20ATM",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\"count\":5,\"category\":\"Các cây ATM\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/apiDoc/utilityRoutes_Doc.js",
    "groupTitle": "utilitieRoutes"
  },
  {
    "type": "get",
    "url": "/v1/utilitie/count",
    "title": "Đếm số tiện ích trong 1 border",
    "name": "countBorder",
    "group": "utilitieRoutes",
    "parameter": {
      "fields": {
        "Query string": [
          {
            "group": "Query string",
            "type": "String",
            "optional": false,
            "field": "border",
            "description": "<p>tọa độ 2 điểm hình chữ nhật trên màn hình.</p>"
          },
          {
            "group": "Query string",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>nhà hàng, giải trí, mua sắm, cuộc sống về đêm, làm đẹp, ẩm thực đường phố, sức khỏe, giáo dục, cafe, Các cây ATM, Tài chính, Khách sạn và chỗ ở, du lịch, dịch vụ, giao thông, thể thao, tổ chức.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "http://175.41.154.174:4000/v1/utilities/count?border=10.797928,106.605149,10.811585,106.626574&category=C%C3%A1c%20c%C3%A2y%20ATM",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\"count\":5,\"category\":\"Các cây ATM\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/apiDoc/utilityRoutes_Doc.js",
    "groupTitle": "utilitieRoutes"
  },
  {
    "type": "get",
    "url": "/v1/utilitie/search",
    "title": "Tìm kiếm tiện ích trong 1 khu vực",
    "name": "searchArea",
    "group": "utilitieRoutes",
    "parameter": {
      "fields": {
        "Query string": [
          {
            "group": "Query string",
            "type": "String",
            "optional": false,
            "field": "_limit",
            "description": "<p>Giới hạn tiện ích trả về.</p>"
          },
          {
            "group": "Query string",
            "type": "String",
            "optional": false,
            "field": "border_id",
            "description": "<p>ID Border.</p>"
          },
          {
            "group": "Query string",
            "type": "String",
            "optional": false,
            "field": "page",
            "description": "<p>Phân trang.</p>"
          },
          {
            "group": "Query string",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>nhà hàng, giải trí, mua sắm, cuộc sống về đêm, làm đẹp, ẩm thực đường phố, sức khỏe, giáo dục, cafe, Các cây ATM, Tài chính, Khách sạn và chỗ ở, du lịch, dịch vụ, giao thông, thể thao, tổ chức.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "http://175.41.154.174:4000/v1/utilities/search?_limit=5&border_id=5ff7f56a15b2b03644824b4e&category=C%C3%A1c%20c%C3%A2y%20ATM&page=2",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n[{\"_id\":\"5fdb0a64bcaa773878ec899b\",\"gps\":{\"type\":\"Point\",\"coordinates\":[106.63173676,10.80448055]},\"hash\":\"384359014550541\",\"category\":\"Các cây ATM\"},{\"_id\":\"5fdb0a64bcaa773878ec898f\",\"gps\":{\"type\":\"Point\",\"coordinates\":[106.62998962,10.80547523]},\"hash\":\"753956292549977\",\"category\":\"Các cây ATM\"},{\"_id\":\"5fdb0a64bcaa773878ec898e\",\"gps\":{\"type\":\"Point\",\"coordinates\":[106.62779999,10.80602455]},\"hash\":\"3714308804559427\",\"category\":\"Các cây ATM\"},{\"_id\":\"5fdb0a64bcaa773878ec8a17\",\"gps\":{\"type\":\"Point\",\"coordinates\":[106.62004852,10.80772877]},\"hash\":\"3274362591778644\",\"category\":\"Các cây ATM\"},{\"_id\":\"5fdb0a64bcaa773878ec8a46\",\"gps\":{\"type\":\"Point\",\"coordinates\":[106.61247253,10.81052971]},\"hash\":\"597577700609799\",\"category\":\"Các cây ATM\"}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/apiDoc/utilityRoutes_Doc.js",
    "groupTitle": "utilitieRoutes"
  },
  {
    "type": "get",
    "url": "/v1/utilitie/search",
    "title": "Tìm kiếm tiện ích theo 1 border",
    "name": "searchBorder",
    "group": "utilitieRoutes",
    "parameter": {
      "fields": {
        "Query string": [
          {
            "group": "Query string",
            "type": "String",
            "optional": false,
            "field": "_limit",
            "description": "<p>Giới hạn tiện ích trả về.</p>"
          },
          {
            "group": "Query string",
            "type": "String",
            "optional": false,
            "field": "border",
            "description": "<p>tọa độ 2 điểm hình chữ nhật trên màn hình.</p>"
          },
          {
            "group": "Query string",
            "type": "String",
            "optional": false,
            "field": "page",
            "description": "<p>Phân trang.</p>"
          },
          {
            "group": "Query string",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>nhà hàng, giải trí, mua sắm, cuộc sống về đêm, làm đẹp, ẩm thực đường phố, sức khỏe, giáo dục, cafe, Các cây ATM, Tài chính, Khách sạn và chỗ ở, du lịch, dịch vụ, giao thông, thể thao, tổ chức.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "http://175.41.154.174:4000/v1/utilities/search?_limit=5&border=10.797928,106.605149,10.811585,106.626574&category=C%C3%A1c%20c%C3%A2y%20ATM&page=2",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n[{\"_id\":\"5fdb0a64bcaa773878ec899b\",\"gps\":{\"type\":\"Point\",\"coordinates\":[106.63173676,10.80448055]},\"hash\":\"384359014550541\",\"category\":\"Các cây ATM\"},{\"_id\":\"5fdb0a64bcaa773878ec898f\",\"gps\":{\"type\":\"Point\",\"coordinates\":[106.62998962,10.80547523]},\"hash\":\"753956292549977\",\"category\":\"Các cây ATM\"},{\"_id\":\"5fdb0a64bcaa773878ec898e\",\"gps\":{\"type\":\"Point\",\"coordinates\":[106.62779999,10.80602455]},\"hash\":\"3714308804559427\",\"category\":\"Các cây ATM\"},{\"_id\":\"5fdb0a64bcaa773878ec8a17\",\"gps\":{\"type\":\"Point\",\"coordinates\":[106.62004852,10.80772877]},\"hash\":\"3274362591778644\",\"category\":\"Các cây ATM\"},{\"_id\":\"5fdb0a64bcaa773878ec8a46\",\"gps\":{\"type\":\"Point\",\"coordinates\":[106.61247253,10.81052971]},\"hash\":\"597577700609799\",\"category\":\"Các cây ATM\"}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/apiDoc/utilityRoutes_Doc.js",
    "groupTitle": "utilitieRoutes"
  }
] });
