const request = require('request')
const cheerio = require('cheerio')
const url =
  'https://www.espncricinfo.com/series/indian-premier-league-2022-1298423/rajasthan-royals-vs-mumbai-indians-44th-match-1304090/ball-by-ball-commentary'

console.log('Before')
request(url, (err, response, html) => {
  if (err) {
    console.log(err)
  } else {
    extractHTML(html)
  }
})

function extractHTML(html) {
  let $ = cheerio.load(html)
  let elemsArr = $('.first-letter\\:ds-capitalize')
  let text = $(elemsArr[0]).text()
  let htmlData = $(elemsArr[0]).html()
  console.log('text data:', text)
  console.log('html data:', htmlData)
}

console.log('After')
