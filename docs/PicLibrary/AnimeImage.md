# Anime Image API

## 🚀 接口地址
```get
https://api.luoh-an.me/PicLibrary/AnimeImage/
```

## 📝 请求方法
`GET`

## ⚙️ 请求参数说明

| 名称 | 必填 | 类型   | 说明                             |
| ---- | ---- | ------ | -------------------------------- |
| t    | 是   | string | 获取哪一类的图片 <br> 详情查看 [此处](#3-1-AnimeImage) |
| r    | 否   | string | 返回格式 <br> 可选择 `json` `images` <br> 默认为 `image` |

## 🖼️ 返回示例

```json
{
  "status": "200",
  "url": "https://cdn.s2.luoh-an.me/image/ecy/anime/first/85a1dd13bc908d1c.webp"
}
```

## 🔍 返回参数说明

| 名称 | 类型 | 说明 |
| - | - | - |
| status | int | 状态码 |
| url | string | 图片链接 |

## 🎯 请求示例

```get
https://api.luoh-an.me/PicLibrary/AnimeImage/?t=anime/first&r=image
```

![AnimeImage](https://api.luoh-an.me/PicLibrary/AnimeImage/?t=anime/first&r=image)