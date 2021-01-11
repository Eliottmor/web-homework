export function convertToRoman (num, isRoman) {
  if (!isRoman) { return num }
  let dict = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 }
  let roman = ''
  for (let i in dict) {
    while (num >= dict[i]) {
      roman += i
      num -= dict[i]
    }
  }
  return roman
}

const gibberish = '~†bø)‚žá¨H~¶vø&ÂšÑ«Ià6ÈÖŽÞäXKz·c6©ÖþÞÀXP:¼1ÍÔUŸ(˜j†¯"üÊàW>†bì)Þå˜K*·_6¸òŽÅ¤S;}ÓaèiŽ®ä|Ka÷hF®²üuçJ˜7*–Ÿ.è N‰ôfÇjÒ¯±ÆôRÇ}’¡­¸}²¡µ¸w2¦•ºï3ÅÏÏE”3/UÜ?Ð'
function getRandomInt (max) {
  return Math.floor(Math.random() * Math.floor(max))
}

export const getGibberish = (i18n, word) => {
  const wordLength = word.length
  const gibberishLength = gibberish.length
  const range = getRandomInt(gibberishLength)

  if (range + wordLength > gibberishLength && range - wordLength > 0) {
    return i18n === true ? gibberish.substr(range - word.length, range) : word
  } else if (range - wordLength < 0 && range + wordLength < gibberishLength) {
    return i18n === true ? gibberish.substr(range, range + word.length) : word
  } else if (range - wordLength > 0 || range + wordLength < gibberishLength) {
    return i18n === true ? gibberish.substr(range, range + wordLength) : word
  }
  return word
}
