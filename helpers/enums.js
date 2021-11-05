const FACILITY_ICON = [
  'headset',
  'flower1',
  'droplet',
  'thermometer-half',
  'door-closed',
  'bicycle',
  'tv',
  'camera-reels',
  'wifi',
  'lightning',
  'stoplights',
  'lamp',
  'arrows-fullscreen',
  'tag',
  'key',
  'lock',
  'unlock',
  'shield-plus',
  'bar-chart-steps'
]

const IMPORT_UNIT_COLUMNS = {
  xid: 'ID_SITEPLAN_UNIT',
  title: 'Judul',
  type: 'Tipe Unit',
  type_number: 'Nomor Unit',
  address: 'Alamat',
  display_address: 'Alamat Tampil',
  description: 'Deskripsi',
  surface_area: 'Luas Tanah (dalam meter)',
  building_area: 'Luas Bangunan (dalam meter)',
  bedroom: 'Kamar Tidur',
  bathroom: 'Kamar Mandi',
  number_of_floors: 'Jumlah Lantai',
  property_type: 'Jenis Property (rumah_tapak/ruko_rukan/apartment)',
  price: 'Harga Total Unit',
  nup_price: 'Harga NUP',
  nup_max: 'Batas NUP',
  booking_fee_price: 'Harga Booking Price'
  // project_id: 'ID_PROJECT_EXPO'
}

const PROPERTY_TYPE_ENUMS = {
  rumah_tapak: 'Rumah Tapak',
  ruko_rukan: 'Ruko / Rukan',
  apartment: 'Apartemen'
}

export default {
  FACILITY_ICON,
  PROPERTY_TYPE_ENUMS,
  IMPORT_UNIT_COLUMNS
}
