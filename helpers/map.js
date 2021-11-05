import L from 'leaflet'
import omnivore from '@mapbox/leaflet-omnivore'

const getProjectAssets = (keyLink) => {
  return `/webapi/manage/projects/assets/${encodeURIComponent(keyLink)}`
}
const fetchProjectAssets = (keyLink, $axios = null) => {
  return $axios.post('/webapi/assets', { key: keyLink }).then(x => x.data)
}

export default {
  L,
  omnivore,
  getProjectAssets,
  fetchProjectAssets
}
