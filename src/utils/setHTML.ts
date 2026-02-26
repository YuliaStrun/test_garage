type SetHTMLTextParams = {
  html?: string
  text?: string
  paragraphMode?: boolean
}

function setHTML({ html, text, paragraphMode }: SetHTMLTextParams) {
  let htmlCode = html

  if (text) {
    if (paragraphMode) {
      htmlCode = text
        .split(/(?:\r)?\n/)
        .map((chunk) => `<p>\n${chunk}\n</p>\n`)
        .join('')
    } else {
      htmlCode = text.replace(/(?:\r)?\n/g, '<br/>')
    }
  }

  if (htmlCode) {
    return { dangerouslySetInnerHTML: { __html: htmlCode } }
  }

  return {}
}

export default setHTML
