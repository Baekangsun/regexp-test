const str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://localhost:1234
`
// 문자열.match(정규식) = 일치하는 문자를 배열데이터로 반환
// const regexp = new RegExp('the', 'gi') // 생성자 방식
// const regexp = /the/gi // 리터럴 방식
// console.log(str.match(regexp)) // 같은값

// 정규식.test(문자열) = 일치하는 문자를 boolean 데이터로 반환
// const regexp = /fox/gi
// console.log(regexp.test(str)) // true

// 문자열.replace(정규식, 대체문자) = 일치하는 문자 변경
// const regexp = /fox/gi
// console.log(str.replace(regexp, 'AAA')) //같은값
// str = str.replace(regexp, 'AAA'
// console.log(str) // 같은값

// const regexp = /the/g
// console.log(str.match(regexp))
console.log(
  str.match(/d$/gm),
  str.match(/^t/gim),
  str.match(/h..p/g), // http
  str.match(/fox|dog/), // 앞의 fox 만 찾는다
  str.match(/https?/g), // http, https
)
