import lodash from 'lodash'
import enums from './enums'
import formater from './formater'

const copyString = (str) => {
  // Create new element
  const el = document.createElement('textarea')
  // Set value (string to be copied)
  el.value = str
  // Set non-editable to avoid focus and move outside of view
  el.setAttribute('readonly', '')
  el.style = { position: 'absolute', left: '-9999px' }
  document.body.appendChild(el)
  // Select text inside element
  el.select()
  // Copy text to clipboard
  document.execCommand('copy')
  // Remove temporary element
  document.body.removeChild(el)
}

const copyLink = (to, router = null) => {
  const root = location.protocol + '//' + location.host
  const path = router.resolve(to)
  const link = root + path.href
  // console.log('COPY_LINK', { root, path, link })
  copyString(link)
}

export default {
  lodash,
  enums,
  formater,
  moment: formater.moment,
  numeral: formater.numeral,
  copyString,
  copyLink
}
