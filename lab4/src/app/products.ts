export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  rating: number;
  image: string[];
  link: string;
}

export const products = [
  {
    id: 1,
    name: 'Refrigerator La Beaute MFA-08 white plastic, glass',
    price:32750,
    description:
        'cover material: plastic, glass\n' +
        'width: 19.5 cm\n' +
        'White color\n' +
        'country of origin: China',
    rating: 5,
    image:
        ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h37/h22/51089545691166/la-beaute-mfa-08-belyj-plastik-steklo-104922221-1.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5d/h90/51089545920542/la-beaute-mfa-08-belyj-plastik-steklo-104922221-2.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h37/h4d/50984020803614/la-beaute-mfa-08-belyj-plastik-steklo-104922221-3.jpg'],
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-z-flip4-8-gb-128-gb-seryi-106305928/?c=750000000#!/item',
  },
  {
    id: 2,
    name: 'Refrigerator Fridge Pink pink plastic, glass',
    price: 33000,
    description: 'cover material: plastic, glass\n' +
        'width: 18 cm\n' +
        'pink colour\n' +
        'country of origin: China',
    rating: 5,
    image:
        ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1c/h33/67359941623838/fridge-pink-kholodil-nik-dlya-kosmetiki-rozovyi-plastik-steklo-108245871-1.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf7/haa/67359941885982/fridge-pink-kholodil-nik-dlya-kosmetiki-rozovyi-plastik-steklo-108245871-2.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h4c/h68/67359934316574/fridge-pink-kholodil-nik-dlya-kosmetiki-rozovyi-plastik-steklo-108245871-4.jpg'],
    link: 'https://kaspi.kz/shop/p/fridge-pink-rozovyi-plastik-steklo-108245871/?c=750000000#!/item',
  },
  {
    id: 3,
    name: 'Case VG-SCLA00G/RU green',
    price: 91990,
    description:
        'type: case\n' +
        'material: plastic\n' +
        'Green colour',
    rating: 5,
    image:
        ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h14/h8b/52160423690270/cehol-vg-scla00g-ru-zelenyj-105653025-1.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hbd/h4c/52160425394206/cehol-vg-scla00g-ru-zelenyj-105653025-2.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h93/h68/52160426704926/cehol-vg-scla00g-ru-zelenyj-105653025-3.jpg'],
    link: 'https://kaspi.kz/shop/p/samsung-lf27t350fhixci-chernyi-100677519/?c=750000000#!/item',
  },
  {
    id: 4,
    name: 'Laptop stand TATKRAFT Olaf',
    price: 13900,
    description:
        'type: no cooling, laptop diagonal: 17, backlight: no',
    rating: 4.5,
    image:
        ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he3/hdd/50016820396062/tatkraft-olaf-11878-104459101-1.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hbc/h4d/50112487718942/tatkraft-olaf-11878-104459101-2.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf2/h2f/50112488636446/tatkraft-olaf-11878-104459101-4.jpg'],
    link: 'https://kaspi.kz/shop/p/tatkraft-olaf-11878-104459101/?c=750000000#!/item',
  },
  {
    id: 5,
    name: 'Home theater LG LHB655NK',
    price: 519990,
    description:
        'Type: QLED TV, diagonal: 55 inch, Resolution: 3840x2160, HD support: HDR, Smart TV technology: Yes, wifi: yes, inputs: HDMI, Ethernet (RJ-45),USB, Bluetooth',
    rating: 5,
    image:
        ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h57/hf7/31583642517534/lg-lhb655nk-cernyj-2100099-1-Container.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1a/h63/31583646777374/lg-lhb655nk-cernyj-2100099-2-Container.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3f/h14/31583652544542/lg-lhb655nk-cernyj-2100099-3-Container.jpg'],
    link: 'https://kaspi.kz/shop/p/lg-lhb655nk-2100099/?c=750000000#!/item',
  },
  {
    id: 6,
    name: 'Headphones Samsung Galaxy Buds Pro black',
    price: 69835,
    description:
        'type: headset, type: intracanal, connection: wireless, type of acoustic design: open, mount type: no mount, Active Noise Cancellation: Yes, microphone: yes',
    rating: 5,
    image:
        ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h4e/hc2/50133779808286/samsung-galaxy-buds-pro-sm-r190nzkacis-cernyj-100956349-1-Container.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd0/h25/50133780037662/samsung-galaxy-buds-pro-sm-r190nzkacis-cernyj-100956349-2-Container.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he9/h88/33443840262174/samsung-galaxy-buds-pro-sm-r190nzkacis-cernyj-100956349-3-Container.jpg'],
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-buds-pro-sm-r190nzkacis-chernyi-100956349/?c=750000000#!/item',
  },
  {
    id: 7,
    name: 'Refrigerator Samsung silver',
    price: 689990,
    description:
        'type: headset, type: intracanal, connection: wireless, type of acoustic design: open, mount type: no mount, Active Noise Cancellation: Yes, microphone: yes',
    rating: 5,
    image:
        ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha1/h8d/52153347342366/samsung-rf48a4000m9-wt-serebristyj-105648516-1.jpg',  'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd6/h3d/52153347801118/samsung-rf48a4000m9-wt-serebristyj-105648516-2.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h70/hb9/52153348259870/samsung-rf48a4000m9-wt-serebristyj-105648516-3.jpg'],
    link: 'https://kaspi.kz/shop/p/samsung-rf48a4000m9-wt-serebristyi-105648516/?c=750000000#!/item',
  },
  {
    id: 8,
    name: 'Bluetooth tracker Apple Airtag white',
    price: 422000,
    description:
        'bluetooth version: 4.0\n' +
        'range: 10 m\n' +
        'gps: yes',
    rating: 5,
    image:
        ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h06/h17/33379647356958/apple-airtag-belyj-101522198-1-Container.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha9/h1c/33379652829214/apple-airtag-belyj-101522198-2-Container.jpg'],
    link: 'https://kaspi.kz/shop/p/apple-airtag-belyi-101522198/?c=750000000#!/item',
  },
  {
    id: 9,
    name: 'Wardrobe ANREX, Monaco',
    price: 341900,
    description:
        'installation type: floor standing, material: chipboard, width, cm: 152, depth, cm: 62, height, cm: 214, color: beige, country: Belarus',
    rating: 5,
    image:
        ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3d/hb5/49215173787678/anreks-monako-3d4s-sosna-vintaz-14700062-1-Container.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hba/h7a/49215174017054/anreks-monako-3d4s-sosna-vintaz-14700062-2-Container.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5b/h3b/49215174508574/skaf-anrex-152x62x214-sm-monako-3d4s-14700062-3.jpg'],
    link: 'https://kaspi.kz/shop/p/anrex-152x62x214-sm-monako-3d4s-14700062/?c=750000000#!/item',
  },
  {
    id: 10,
    name: 'Dining table All Chairs.KZ EAMES DSW, 80x80x75 cm, white',
    price: 68990 ,
    description:
        'type: classic\n' +
        'shape: round\n' +
        'material: MDF\n' +
        'length, cm: 80\n' +
        'width, cm: 80\n' +
        'height, cm: 75\n' +
        'White color\n' +
        'country Russia',
    rating: 5,
    image:
        ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8b/hcc/32575166906398/vse-stula-kz-eames-dsw-80-belyj-100189409-1-Container.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h0e/h1a/32575187386398/vse-stula-kz-eames-dsw-80-belyj-100189409-2-Container.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h9c/h6f/32575213010974/vse-stula-kz-eames-dsw-80-belyj-100189409-3-Container.jpg'],
    link: 'https://kaspi.kz/shop/p/vse-stul-ja-kz-eames-dsw-80x80x75-sm-belyi-100189409/?c=750000000#!/item',
  },
  {
    id: 11,
    name: 'Soft Bear Boyds 1473, height 200 cm',
    price: 33989,
    description: 'тип: мягкая игрушка\n' +
        'высота: 200 см\n' +
        'наполнитель: синтепух\n' +
        'пол ребенка: универсальный\n' +
        'цвет: белый\n' +
        'основной материал: искусственный мех',
    rating: 5,
    image: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h66/h54/49836795625502/magkij-miska-boyds-200-sm-belyj-1473-101717772-1-Container.jpg'],
    link: 'https://kaspi.kz/shop/p/mjagkii-mishka-boyds-1473-vysota-200-sm-101717772/?c=750000000#!/item'
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/