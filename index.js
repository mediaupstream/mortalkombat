/**
 * Mortal Kombat Character Names
 * 
 * @see  http://en.wikipedia.org/wiki/List_of_Mortal_Kombat_characters
 * @type {Object}
 */
var MortalKombat = module.exports = {

  /**
   * List of Characters
   * @type {Array}
   */
  characters: [
    'Goro',
    'Johnny Cage',
    'Kano',
    'Liu Kang',
    'Raiden',
    'Reptile',
    'Scorpion',
    'Shang Tsung',
    'Sonya Blade',
    'Sub-Zero',
    'Baraka',
    'Jade',
    'Jax',
    'Kintaro',
    'Kitana',
    'Kung Lao',
    'Mileena',
    'Noob Saibot',
    'Shao Kahn',
    'Smoke',
    'Chameleon',
    'Cyrax',
    'Ermac',
    'Kabal',
    'Khameleon',
    'Motaro',
    'Nightwolf',
    'Rain',
    'Sektor',
    'Sheeva',
    'Sindel',
    'Stryker',
    'Fujin',
    'Quan Chi',
    'Kia',
    'Jataaka',
    'Sareena',
    'Shinnok',
    'Jarek',
    'Kai',
    'Meat',
    'Reiko',
    'Tanya',
    'Blaze',
    'Bo Rai Cho',
    'Drahmin',
    'Frost',
    'Hsu Hao',
    'Kenshi',
    'Li Mei',
    'Mokap',
    'Moloch',
    'Nitara',
    'Ashrah',
    'Dairou',
    'Darrius',
    'Havik',
    'Hotaru',
    'Kira',
    'Kobra',
    'Monster',
    'Onaga',
    'Shujinko',
    'Daegon',
    'Taven',
    'Dark Kahn',
    'Cyber Sub-Zero',
    'Kratos',
    'Skarlet',
    'Belokk',
    'Hornbuckle',
    'Nimbus Terrafaux'
  ],

  /**
   * Get a random character from the list
   * @return {string} The name of a Mortal Kombat character
   */
  get: function(){
    var l = this.characters.length-1;
    return this.characters[ Math.floor( Math.random() * l ) ];
  }

};