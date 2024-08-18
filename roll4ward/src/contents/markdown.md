---
title: 마크다운 테스트
---
# 제목 1
## 제목 2
### 제목 3
#### 제목 4
##### 제목 5
###### 제목 6

1. 순서가 있는 항목
1. 순서가 있는 항목
    1. 순서가 없는 항목
    1. 순서가 없는 항목
1. 순서가 있는 항목
1. 순서가 있는 항목

- 순서가 없는 항목
- 순서가 없는 항목
    - 순서가 없는 항목
    - 순서가 없는 항목

[GOOGLE](https://google.com)

![대체 텍스트(Alternative Text)](https://picsum.photos/1000/400 "링크 설명(Title)")
![이미지입니다!][Image]

[Image]: https://picsum.photos/500/300 "이미지입니다!"

`background` 혹은 `background-image` 속성으로 요소에 배경 이미지를 삽입할 수 있습니다.

```html
<a href="https://www.google.co.kr/" target="_blank">GOOGLE</a>
```

```css
.list > li {
  position: absolute;
  top: 40px;
}
```

```javascript
function add(a, b = 1) {
  console.log(a, b)
  return a + b
}
```

```bash
$ npm run dev
```
 
```python
s = "Python syntax highlighting"
print s
```
 
```plaintext
No language indicated, so no syntax highlighting. 
But let's throw in a <b>tag</b>.
```

| 값 | 의미 | 기본값 |
|---|:---:|---:|
| `static` | 유형(기준) 없음 / 배치 불가능 | `static` |
| `relative` | 요소 자신을 기준으로 배치 |  |
| `absolute` | 위치 상 부모(조상)요소를 기준으로 배치 |  |
| `fixed` | 브라우저 창을 기준으로 배치 |  |
| `sticky` | 스크롤 영역 기준으로 배치 |  |

값 | 의미 | 기본값
---|:---:|---:
`static` | 유형(기준) 없음 / 배치 불가능 | `static`
`relative` | 요소 자신을 기준으로 배치 |
`absolute` | 위치 상 부모_(조상)요소를 기준으로 배치 |
`fixed` | 브라우저 창을 기준으로 배치 |
`sticky` | 스크롤 영역 기준으로 배치 |

> 인용문 - 남의 말이나 글에서 직접 또는 간접으로 따온 문장.
> _(네이버 국어 사전)_

BREAK!

> 인용문을 작성하세요!
>> 중첩된 인용문(nested blockquote)을 만들 수 있습니다.
>>> 중중첩 인용문 1
>>> 중중첩 인용문 2
>>> 중중첩 인용문 3