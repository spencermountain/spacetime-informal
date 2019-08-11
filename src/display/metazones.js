//from https://github.com/mj1856/TimeZoneNames
// and from  https://github.com/nodatime/nodatime/blob/master/data/cldr/windowsZones-35.xml

module.exports = {
  GMT: {
    standard: { name: 'Greenwich Standard Time' },
    daylight: {},
    zones: [
      'Africa/Abidjan',
      'Africa/Accra',
      'Africa/Bamako',
      'Africa/Banjul',
      'Africa/Bissau',
      'Africa/Conakry',
      'Africa/Dakar',
      'Africa/Freetown',
      'Africa/Lome',
      'Africa/Monrovia',
      'Africa/Nouakchott',
      'Africa/Ouagadougou',
      'Africa/Sao_Tome',
      'America/Danmarkshavn',
      'Antarctica/Troll',
      'Atlantic/Reykjavik',
      'Atlantic/St_Helena',
      'Etc/GMT',
      'Europe/Dublin',
      'Europe/Guernsey',
      'Europe/Isle_of_Man',
      'Europe/Jersey',
      'Europe/London'
    ]
  },

  //north america
  America_Central: {
    standard: { name: 'Central America Standard Time' },
    daylight: {},
    zones: [
      'America/Bahia_Banderas',
      'America/Belize',
      'America/Chicago',
      'America/Costa_Rica',
      'America/El_Salvador',
      'America/Guatemala',
      'America/Indiana/Knox',
      'America/Indiana/Tell_City',
      'America/Managua',
      'America/Matamoros',
      'America/Menominee',
      'America/Merida',
      'America/Mexico_City',
      'America/Monterrey',
      'America/North_Dakota/Beulah',
      'America/North_Dakota/Center',
      'America/North_Dakota/New_Salem',
      'America/Rainy_River',
      'America/Rankin_Inlet',
      'America/Regina',
      'America/Resolute',
      'America/Swift_Current',
      'America/Tegucigalpa',
      'America/Winnipeg',
      'CST6CDT'
    ]
  },
  America_Mountain: {
    standard: { name: 'Mountain Standard Time' },
    daylight: {},
    zones: [
      'America/Boise',
      'America/Cambridge_Bay',
      'America/Creston',
      'America/Dawson_Creek',
      'America/Denver',
      'America/Edmonton',
      'America/Fort_Nelson',
      'America/Inuvik',
      'America/Ojinaga',
      'America/Phoenix',
      'America/Yellowknife',
      'MST7MDT'
    ]
  },
  Atlantic: {
    standard: { name: 'Atlantic Standard Time' },
    daylight: {},
    zones: [
      'America/Anguilla',
      'America/Antigua',
      'America/Aruba',
      'America/Barbados',
      'America/Blanc-Sablon',
      'America/Curacao',
      'America/Dominica',
      'America/Glace_Bay',
      'America/Goose_Bay',
      'America/Grenada',
      'America/Guadeloupe',
      'America/Halifax',
      'America/Kralendijk',
      'America/Lower_Princes',
      'America/Marigot',
      'America/Martinique',
      'America/Moncton',
      'America/Montserrat',
      'America/Port_of_Spain',
      'America/Puerto_Rico',
      'America/Santo_Domingo',
      'America/St_Barthelemy',
      'America/St_Kitts',
      'America/St_Lucia',
      'America/St_Thomas',
      'America/St_Vincent',
      'America/Thule',
      'America/Tortola',
      'Atlantic/Bermuda'
    ]
  },
  America_Eastern: {
    standard: { name: 'Eastern Standard Time' },
    daylight: {},
    zones: [
      'America/Cancun',
      'America/Cayman',
      'America/Coral_Harbour',
      'America/Detroit',
      'America/Grand_Turk',
      'America/Indiana/Marengo',
      'America/Indiana/Petersburg',
      'America/Indiana/Vevay',
      'America/Indiana/Vincennes',
      'America/Indiana/Winamac',
      'America/Indianapolis',
      'America/Iqaluit',
      'America/Jamaica',
      'America/Kentucky/Monticello',
      'America/Louisville',
      'America/Nassau',
      'America/New_York',
      'America/Nipigon',
      'America/Panama',
      'America/Pangnirtung',
      'America/Port-au-Prince',
      'America/Thunder_Bay',
      'America/Toronto',
      'EST5EDT',
      'America/Montreal'
    ]
  },
  America_Pacific: {
    standard: { name: 'Pacific Standard Time' },
    daylight: {},
    zones: [
      'America/Dawson',
      'America/Los_Angeles',
      'America/Tijuana',
      'America/Vancouver',
      'America/Whitehorse',
      'PST8PDT'
    ]
  },
  Alaska: {
    standard: { name: 'Alaskan Standard Time' },
    daylight: {},
    zones: [
      'America/Anchorage',
      'America/Juneau',
      'America/Metlakatla',
      'America/Nome',
      'America/Sitka',
      'America/Yakutat'
    ]
  },
  Hawaii_Aleutian: {
    standard: { name: 'Hawaiian Standard Time' },
    daylight: {},
    alias: ['Aleutian Standard Time'],
    zones: ['America/Adak', 'Pacific/Honolulu', 'Pacific/Johnston']
  },
  Newfoundland: {
    standard: { name: 'Newfoundland Standard Time' },
    zones: ['America/St_Johns']
  },

  ///europe
  Europe_Central: {
    standard: { name: 'Central Europe Standard Time' },
    daylight: {},
    alias: ['Romance Standard Time'],
    zones: [
      'Africa/Algiers',
      'Africa/Ceuta',
      'Africa/Tunis',
      'Arctic/Longyearbyen',
      'Europe/Amsterdam',
      'Europe/Andorra',
      'Europe/Belgrade',
      'Europe/Berlin',
      'Europe/Bratislava',
      'Europe/Brussels',
      'Europe/Budapest',
      'Europe/Busingen',
      'Europe/Copenhagen',
      'Europe/Gibraltar',
      'Europe/Ljubljana',
      'Europe/Luxembourg',
      'Europe/Madrid',
      'Europe/Malta',
      'Europe/Monaco',
      'Europe/Oslo',
      'Europe/Paris',
      'Europe/Podgorica',
      'Europe/Prague',
      'Europe/Rome',
      'Europe/San_Marino',
      'Europe/Sarajevo',
      'Europe/Skopje',
      'Europe/Stockholm',
      'Europe/Tirane',
      'Europe/Vaduz',
      'Europe/Vatican',
      'Europe/Vienna',
      'Europe/Warsaw',
      'Europe/Zagreb',
      'Europe/Zurich'
    ]
  },
  Europe_Eastern: {
    standard: { name: 'Eastern Europe Standard Time' },
    daylight: {},
    zones: [
      'Africa/Cairo',
      'Africa/Tripoli',
      'Asia/Amman',
      'Asia/Beirut',
      'Asia/Damascus',
      'Asia/Famagusta',
      'Asia/Gaza',
      'Asia/Hebron',
      'Asia/Nicosia',
      'Europe/Athens',
      'Europe/Bucharest',
      'Europe/Chisinau',
      'Europe/Helsinki',
      'Europe/Kaliningrad',
      'Europe/Kiev',
      'Europe/Mariehamn',
      'Europe/Riga',
      'Europe/Sofia',
      'Europe/Tallinn',
      'Europe/Uzhgorod',
      'Europe/Vilnius',
      'Europe/Zaporozhye'
    ]
  },
  Europe_Western: {
    standard: { name: 'Western Europe Standard Time' },
    daylight: {},
    zones: [
      'Africa/Casablanca',
      'Africa/El_Aaiun',
      'Atlantic/Canary',
      'Atlantic/Faeroe',
      'Atlantic/Madeira',
      'Europe/Lisbon'
    ]
  },
  Turkey: {
    standard: { name: 'Turkey Standard Time' },
    daylight: {},
    zones: ['Europe/Istanbul']
  },
  // Samara: ['Europe/Samara', 'Europe/Saratov'],
  // Volgograd: ['Europe/Volgograd'],

  //africa
  Africa_Eastern: {
    standard: { name: 'East Africa Standard Time' },
    daylight: {},
    zones: [
      'Africa/Addis_Ababa',
      'Africa/Asmera',
      'Africa/Dar_es_Salaam',
      'Africa/Djibouti',
      'Africa/Juba',
      'Africa/Kampala',
      'Africa/Mogadishu',
      'Africa/Nairobi',
      'Indian/Antananarivo',
      'Indian/Comoro',
      'Indian/Mayotte'
    ]
  },
  Africa_Western: {
    standard: { name: 'West Central Africa Standard Time' },
    daylight: {},
    zones: [
      'Africa/Bangui',
      'Africa/Brazzaville',
      'Africa/Douala',
      'Africa/Kinshasa',
      'Africa/Lagos',
      'Africa/Libreville',
      'Africa/Luanda',
      'Africa/Malabo',
      'Africa/Ndjamena',
      'Africa/Niamey',
      'Africa/Porto-Novo'
    ]
  },
  Africa_Central: {
    standard: { name: 'Central Africa Time' },
    daylight: {},
    zones: [
      'Africa/Blantyre',
      'Africa/Bujumbura',
      'Africa/Gaborone',
      'Africa/Harare',
      'Africa/Khartoum',
      'Africa/Kigali',
      'Africa/Lubumbashi',
      'Africa/Lusaka',
      'Africa/Maputo',
      'Africa/Windhoek'
    ]
  },
  Africa_Southern: {
    standard: { name: 'South Africa Standard Time' },
    daylight: {},
    zones: ['Africa/Johannesburg', 'Africa/Maseru', 'Africa/Mbabane']
  },

  //australia
  Australia_Central: {
    standard: { name: 'Central Australia Standard Time' },
    daylight: {},
    zones: ['Australia/Adelaide', 'Australia/Broken_Hill', 'Australia/Darwin']
  },
  Australia_Eastern: {
    standard: { name: 'Eastern Australia Standard Time' },
    daylight: {},
    zones: [
      'Australia/Brisbane',
      'Australia/Currie',
      'Australia/Hobart',
      'Australia/Lindeman',
      'Australia/Melbourne',
      'Australia/Sydney'
    ]
  },
  Australia_Western: {
    standard: { name: 'Western Australia Standard Time' },
    daylight: {},
    zones: ['Antarctica/Casey', 'Australia/Perth']
  },
  Australia_CentralWestern: {
    standard: { name: 'Australia Central Western Standard Time' },
    daylight: {},
    zones: ['Australia/Eucla']
  },
  // Lord_Howe: ['Australia/Lord_Howe'],

  //russia
  Moscow: {
    standard: { name: 'Russian Standard Time' },
    daylight: {},
    zones: [
      'Europe/Astrakhan',
      'Europe/Minsk',
      'Europe/Moscow',
      'Europe/Simferopol',
      'Europe/Ulyanovsk',
      'Europe/Kirov'
    ]
  },

  //south america
  Brasilia: {
    standard: { name: '' },
    daylight: {},
    zones: [
      'America/Araguaina',
      'America/Bahia',
      'America/Belem',
      'America/Fortaleza',
      'America/Maceio',
      'America/Recife',
      'America/Santarem',
      'America/Sao_Paulo'
    ]
  },
  Argentina: {
    standard: { name: '' },
    daylight: {},
    zones: [
      'America/Argentina/La_Rioja',
      'America/Argentina/Rio_Gallegos',
      'America/Argentina/Salta',
      'America/Argentina/San_Juan',
      'America/Argentina/Tucuman',
      'America/Argentina/Ushuaia',
      'America/Buenos_Aires',
      'America/Catamarca',
      'America/Cordoba',
      'America/Jujuy',
      'America/Mendoza'
    ]
  },
  Amazon: {
    standard: { name: '' },
    daylight: {},
    zones: [
      'America/Boa_Vista',
      'America/Campo_Grande',
      'America/Cuiaba',
      'America/Manaus',
      'America/Porto_Velho'
    ]
  },
  Mexico_Pacific: {
    standard: { name: '' },
    daylight: {},
    zones: ['America/Chihuahua', 'America/Hermosillo', 'America/Mazatlan']
  },
  // Argentina_Western: ['America/Argentina/San_Luis'],
  // Paraguay: ['America/Asuncion'],
  // Colombia: ['America/Bogota'],
  // Venezuela: ['America/Caracas'],
  // French_Guiana: ['America/Cayenne'],
  // Acre: ['America/Eirunepe', 'America/Rio_Branco'],
  // Greenland_Western: ['America/Godthab'],
  // Ecuador: ['America/Guayaquil'],
  // Guyana: ['America/Guyana'],
  // Cuba: ['America/Havana'],
  // Bolivia: ['America/La_Paz'],
  // Peru: ['America/Lima'],
  // Pierre_Miquelon: ['America/Miquelon'],
  // Uruguay: ['America/Montevideo'],
  // Noronha: ['America/Noronha'],
  // Suriname: ['America/Paramaribo'],
  // Chile: ['America/Punta_Arenas', 'America/Santiago', 'Antarctica/Palmer'],
  // Mexico_Northwest: ['America/Santa_Isabel'],
  // Greenland_Eastern: ['America/Scoresbysund'],
  // Davis: ['Antarctica/Davis'],
  // DumontDUrville: ['Antarctica/DumontDUrville'],
  // Macquarie: ['Antarctica/Macquarie'],
  // Mawson: ['Antarctica/Mawson'],
  // New_Zealand: ['Antarctica/McMurdo', 'Pacific/Auckland'],
  // Rothera: ['Antarctica/Rothera'],
  // Syowa: ['Antarctica/Syowa'],
  // Vostok: ['Antarctica/Vostok'],

  //middle-east
  Arabian: {
    standard: { name: 'Arabic Standard Time' },
    daylight: {},
    zones: ['Asia/Aden', 'Asia/Baghdad', 'Asia/Bahrain', 'Asia/Kuwait', 'Asia/Qatar', 'Asia/Riyadh']
  },
  Iran: {
    standard: { name: 'Iran Standard Time' },
    daylight: {},
    zones: ['Asia/Tehran']
  },
  Pakistan: {
    standard: { name: 'Pakistan Standard Time' },
    daylight: {},
    zones: ['Asia/Karachi']
  },
  India: {
    standard: { name: 'India Standard Time' },
    daylight: {},
    zones: ['Asia/Calcutta', 'Asia/Colombo']
  },
  Indochina: {
    standard: { name: 'South East Asia Standard Time' },
    daylight: {},
    alias: ['indochina'],
    zones: ['Asia/Bangkok', 'Asia/Phnom_Penh', 'Asia/Saigon', 'Asia/Vientiane']
  },
  China: {
    standard: { name: 'China Standard Time' },
    daylight: {},
    zones: ['Asia/Macau', 'Asia/Shanghai']
  }

  // Kazakhstan_Eastern: ['Asia/Almaty', 'Asia/Qostanay'],
  // Anadyr: ['Asia/Anadyr'],
  // Kazakhstan_Western: ['Asia/Aqtau', 'Asia/Aqtobe', 'Asia/Atyrau', 'Asia/Oral', 'Asia/Qyzylorda'],
  // Turkmenistan: ['Asia/Ashgabat'],
  // Azerbaijan: ['Asia/Baku'],
  // Kyrgystan: ['Asia/Bishkek'],
  // Brunei: ['Asia/Brunei'],
  // Yakutsk: ['Asia/Chita', 'Asia/Khandyga', 'Asia/Yakutsk'],
  // Choibalsan: ['Asia/Choibalsan'],
  // Bangladesh: ['Asia/Dhaka'],
  // East_Timor: ['Asia/Dili'],
  // Gulf: ['Asia/Dubai', 'Asia/Muscat'],
  // Tajikistan: ['Asia/Dushanbe'],
  // Hong_Kong: ['Asia/Hong_Kong'],
  // Hovd: ['Asia/Hovd'],
  // Irkutsk: ['Asia/Irkutsk'],
  // Indonesia_Western: ['Asia/Jakarta', 'Asia/Pontianak'],
  // Indonesia_Eastern: ['Asia/Jayapura'],
  // Israel: ['Asia/Jerusalem'],
  // Afghanistan: ['Asia/Kabul'],
  // Kamchatka: ['Asia/Kamchatka'],
  // Nepal: ['Asia/Katmandu'],
  // Krasnoyarsk: ['Asia/Krasnoyarsk', 'Asia/Novokuznetsk', 'Asia/Barnaul'],
  // Malaysia: ['Asia/Kuala_Lumpur', 'Asia/Kuching'],
  // Magadan: ['Asia/Magadan'],
  // Indonesia_Central: ['Asia/Makassar'],
  // Philippines: ['Asia/Manila'],
  // Novosibirsk: ['Asia/Novosibirsk'],
  // Omsk: ['Asia/Omsk'],
  // Korea: ['Asia/Pyongyang', 'Asia/Seoul'],
  // Myanmar: ['Asia/Rangoon'],
  // Sakhalin: ['Asia/Sakhalin'],
  // Uzbekistan: ['Asia/Samarkand', 'Asia/Tashkent'],
  // Singapore: ['Asia/Singapore'],
  // Srednekolymsk: ['Asia/Srednekolymsk'],
  // Taipei: ['Asia/Taipei'],
  // Georgia: ['Asia/Tbilisi'],

  // Bhutan: ['Asia/Thimphu'],
  // Japan: ['Asia/Tokyo'],
  // Mongolia: ['Asia/Ulaanbaatar'],
  // Urumqi: ['Asia/Urumqi'],
  // Vladivostok: ['Asia/Ust-Nera', 'Asia/Vladivostok'],
  // Yekaterinburg: ['Asia/Yekaterinburg'],
  // Armenia: ['Asia/Yerevan'],
  // Azores: ['Atlantic/Azores'],
  // Cape_Verde: ['Atlantic/Cape_Verde'],
  // South_Georgia: ['Atlantic/South_Georgia'],
  // Falkland: ['Atlantic/Stanley'],

  //india
  // Indian_Ocean: ['Indian/Chagos'],
  // Christmas: ['Indian/Christmas'],
  // Cocos: ['Indian/Cocos'],
  // French_Southern: ['Indian/Kerguelen'],
  // Seychelles: ['Indian/Mahe'],
  // Maldives: ['Indian/Maldives'],
  // Mauritius: ['Indian/Mauritius'],
  // Reunion: ['Indian/Reunion'],

  //pacific
  // Apia: ['Pacific/Apia'],
  // Papua_New_Guinea: ['Pacific/Bougainville', 'Pacific/Port_Moresby'],
  // Chatham: ['Pacific/Chatham'],
  // Easter: ['Pacific/Easter'],
  // Vanuatu: ['Pacific/Efate'],
  // Phoenix_Islands: ['Pacific/Enderbury'],
  // Tokelau: ['Pacific/Fakaofo'],
  // Fiji: ['Pacific/Fiji'],
  // Tuvalu: ['Pacific/Funafuti'],
  // Galapagos: ['Pacific/Galapagos'],
  // Gambier: ['Pacific/Gambier'],
  // Solomon: ['Pacific/Guadalcanal'],
  // Chamorro: ['Pacific/Guam', 'Pacific/Saipan'],
  // Line_Islands: ['Pacific/Kiritimati'],
  // Kosrae: ['Pacific/Kosrae'],
  // Marshall_Islands: ['Pacific/Kwajalein', 'Pacific/Majuro'],
  // Marquesas: ['Pacific/Marquesas'],
  // Samoa: ['Pacific/Midway', 'Pacific/Pago_Pago'],
  // Nauru: ['Pacific/Nauru'],
  // Niue: ['Pacific/Niue'],
  // Norfolk: ['Pacific/Norfolk'],
  // New_Caledonia: ['Pacific/Noumea'],
  // Palau: ['Pacific/Palau'],
  // Pitcairn: ['Pacific/Pitcairn'],
  // Ponape: ['Pacific/Ponape'],
  // Cook: ['Pacific/Rarotonga'],
  // Tahiti: ['Pacific/Tahiti'],
  // Gilbert_Islands: ['Pacific/Tarawa'],
  // Tonga: ['Pacific/Tongatapu'],
  // Truk: ['Pacific/Truk'],
  // Wake: ['Pacific/Wake'],
  // Wallis: ['Pacific/Wallis'],
  // Tomsk: ['Asia/Tomsk']
}
