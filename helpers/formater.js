const numeral = require('numeral')
const moment = require('moment-timezone')

// Configs
numeral.register('locale', 'ind', {
  delimiters: {
    thousands: '.',
    decimal: ','
  },
  abbreviations: {
    thousand: 'rb',
    million: 'jt',
    billion: 'M',
    trillion: 'T'
  },
  currency: {
    symbol: 'Rp'
  }
})
numeral.locale('ind')

moment.locale('id')
moment.tz.setDefault('Asia/Jakarta')
moment.updateLocale('id', {
  relativeTime: {
    future: 'in %s',
    past: '%s lalu',
    s: 'beberapa detik',
    ss: '%d detik',
    m: '1 menit',
    mm: '%d menit',
    h: '1 jam',
    hh: '%d jam',
    d: '1 hari',
    dd: '%d hari',
    w: '1 minggu',
    ww: '%d minggu',
    M: '1 bulan',
    MM: '%d bulan',
    y: '1 tahun',
    yy: '%d tahun'
  }
})

const date = {
  dformat: (v, f = 'YYYY-MM-DD') => moment(v).format(f),
  dlformat: (v, f = 'DD MMMM YYYY') => moment(v).format(f),
  dltformat: (v, f = 'DD MMMM YYYY, LTS') => moment(v).format(f),
  dtformat: (v, f = 'DD MMM YYYY HH:mm') => moment(v).format(f),
  dtlformat: (v, f = 'YYYY-MM-DD LTS') => moment(v).format(f),
  datformat: (v, f = 'YYYY-MM-DD') => moment().diff(moment(v), 'day') > 7 ? date.dtformat(v) : moment(v).fromNow()
}
const number = {
  nformat: (v, f = '0,0') => numeral(v).format(f),
  naformat: (v, f = '0,0.00a') => numeral(v).format(f),
  nlformat: (v, f = '0,0.00a') => numeral(v).format(f),
  cformat: (v, f = '$0,0') => numeral(v).format(f),
  caformat: (v, f = '$0,0.00a') => numeral(v).format(f),
  clformat: (v, f = '$0,0.00a') => numeral(v).format(f),
  parsenumber: (v, f = '0,0') => {
    if (isNaN(v)) { return v }
    return numeral(Number(v)).format(f)
  }
}

export default {
  numeral,
  moment,
  date,
  number
}
