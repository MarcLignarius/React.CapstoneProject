import agnosticfrontflyer from '../assets/flyers/agnosticfrontflyer.jpg';
import ghostflyer from '../assets/flyers/ghostflyer.jpg';
import ironmaidenflyer from '../assets/flyers/ironmaidenflyer.jpg';
import mastodonflyer from '../assets/flyers/mastodonflyer.jpg';
import misfitsflyer from '../assets/flyers/misfitsflyer.jpg';
import slayerflyer from '../assets/flyers/slayerflyer.jpg';
import afi from '../assets/bands/afi.jpg';
import agnosticfront from '../assets/bands/agnosticfront.jpg';
import bloodceremony from '../assets/bands/bloodceremony.jpg';
import ghost from '../assets/bands/ghost.jpg';
import gorod from '../assets/bands/gorod.jpg';
import ironmaiden from '../assets/bands/ironmaiden.jpg';
import madball from '../assets/bands/madball.jpg';
import mastodon from '../assets/bands/mastodon.jpg';
import misfits from '../assets/bands/misfits.jpg';
import sabaton from '../assets/bands/sabaton.jpg';
import slayer from '../assets/bands/slayer.jpg';
import toxicholocaust from '../assets/bands/toxicholocaust.jpg';
import hawthornetheater from '../assets/venues/hawthornetheater.jpg';
import modacenter from '../assets/venues/modacenter.jpg';
import roselandtheater from '../assets/venues/roselandtheater.jpg';
import bossanovaballroom from '../assets/venues/bossanovaballroom.jpg';
import crystalballroom from '../assets/venues/crystalballroom.jpg';
import mississipistudios from '../assets/venues/mississipistudios.jpg';

export const shows = [
  {
    flyer: agnosticfrontflyer,
    genre: 'Hardcore',
    headlinerName: 'Agnostic Front',
    supportName: 'Madball',
    venueName: 'Hawthorne Theater',
    venuePhoto: hawthornetheater,
    venueAddress: '1507 SE 39th Ave, Portland, OR 97214',
    venueDescription: 'The Hawthorne Theatre, formerly known as the Sunnyside Masonic Lodge, is an historic building and music venue located at the intersection of Southeast Hawthorne Boulevard and Cesar Chavez Boulevard.',
    venuePhone: '(503) 233-7100',
    venueEmail: 'hawthornetheatrebooking@gmail.com',
    venueWebsite: 'http://hawthornetheatre.com/',
    date: '10/03/2019',
    time: 8,
    price: 15,
    ageLimit: '21+',
    hypeScore: 5,
  },
  {
    flyer: ghostflyer,
    genre: 'Rock',
    headlinerName: 'Ghost',
    supportName: 'Blood Ceremony',
    venueName: 'Crystal Ballroom',
    venuePhoto: crystalballroom,
    venueAddress: '1332 W Burnside St, Portland, OR 97209',
    venueDescription: 'Crystal Ballroom, originally built as Cotillion Hall, is a historic building in Portland, Oregon, United States. Cotillion Hall was built in 1914 as a ballroom, and dance revivals were held there through the Great Depression. Starting in the 1960s, the hall has also been host to many popular pop, rock, folk, blues and jazz artists, as well as beat poetry and other entertainment.',
    venuePhone: '(503) 225-0047',
    venueEmail: 'crystalballroombooking@gmail.com',
    venueWebsite: 'https://www.crystalballroompdx.com/',
    date: '10/08/2019',
    time: 8,
    price: 25,
    ageLimit: 'All Ages',
    hypeScore: 10,
  },
  {
    flyer: ironmaidenflyer,
    genre: 'Heavy Metal',
    headlinerName: 'Iron Maiden',
    supportName: 'Sabaton',
    venueName: 'Moda Center',
    venuePhoto: modacenter,
    venueAddress: '1 N Center Ct St, Portland, OR 97227',
    venueDescription: 'Moda Center, formerly known as the Rose Garden, is the primary indoor sports arena in Portland, Oregon, United States. It is used for basketball, ice hockey, rodeos, circuses, conventions, ice shows, concerts, and dramatic productions. The arena has a capacity of 19,393 spectators when configured for basketball.',
    venuePhone: '(503) 235-8771',
    venueEmail: 'modacenterbooking@gmail.com',
    venueWebsite: 'rosequarter.com/seating-charts/moda-center',
    date: '03/18/2020',
    time: 8,
    price: 35,
    ageLimit: 'All Ages',
    hypeScore: 20,
  },
  {
    flyer: mastodonflyer,
    genre: 'Heavy Metal',
    headlinerName: 'Mastodon',
    supportName: 'Gorod',
    venueName: 'Roseland Theater',
    venuePhoto: roselandtheater,
    venueAddress: '8 NW 6th Ave, Portland, OR 97209',
    venueDescription: 'The Roseland Theater, sometimes called the Roseland Theater and Grill, is a music venue located at 8 Northwest Sixth Avenue in the Old Town Chinatown neighborhood of Portland',
    venuePhone: '(971) 230-0033',
    venueEmail: 'roselandbooking@gmail.com',
    venueWebsite: 'http://roselandpdx.com/',
    date: '04/25/2020',
    time: 8,
    price: 25,
    ageLimit: '21+',
    hypeScore: 10,
  },
  {
    flyer: misfitsflyer,
    genre: 'Punk',
    headlinerName: 'Misfits',
    supportName: 'AFI',
    venueName: 'Mississipi Studios',
    venuePhoto: mississipistudios,
    venueAddress: '3939 N Mississippi Ave, Portland, OR 97227',
    venueDescription: 'Mississippi Studios is a music venue and recording studio in Portland, Oregon\'s Boise neighborhood, United States. The venue was formerly a Baptist church, but has since been completely rebuilt and enlarged, partially using materials from the church.',
    venuePhone: '(503) 288-3895',
    venueEmail: 'mississippistudiosbooking@gmail.com',
    venueWebsite: 'mississippistudios.com',
    date: '04/25/2020',
    time: 8,
    price: 35,
    ageLimit: 'All Ages',
    hypeScore: 15,
  },
  {
    flyer: slayerflyer,
    genre: 'Thrash',
    headlinerName: 'Slayer',
    supportName: 'Toxic Holocaust',
    venueName: 'Bossanova Ballroom',
    venuePhoto: bossanovaballroom,
    venueAddress: '722 E Burnside St, Portland, OR 97214',
    venueDescription: 'Bossanova Ballroom is an event space and former theater building located at 722 East Burnside Street in Portland, Oregon\'s Buckman neighborhood, in the United States. It features a dance floor, two stages and bars, and a game room. The venue has hosted comedy shows, and the queer event Blow Pony since 2016.',
    venuePhone: '(503) 206-7630',
    venueEmail: 'bossanovaballroombooking@gmail.com',
    venueWebsite: 'http://bossanovaballroom.com/',
    date: '05/07/2020',
    time: 8,
    price: 25,
    ageLimit: '21+',
    hypeScore: 15,
  }
]

export const bands = [
  {
    name: 'Agnostic Front',
    photo: agnosticfront,
    info: 'Agnostic Front is an American hardcore punk band from New York City. Founded in 1980, the band is considered an important influence to the New York hardcore scene, as well as for pioneering the crossover thrash genre.',
  },
  {
    name: 'Madball',
    photo: madball,
    info: 'Madball is a New York hardcore band that originated in the late 1980s as a side project of Agnostic Front. The band developed after Agnostic Front\'s front man Roger Miret would let his younger half-brother Freddy Cricien take the microphone and perform lead vocals during Agnostic Front shows.',
  },
  {
    name: 'Ghost',
    photo: ghost,
    info: 'Ghost is a Swedish rock band that was formed in Linköping, Sweden in 2006. Ghost is easily recognizable owing greatly to its eccentric on-stage presence. Seven of the group\'s eight members, its Nameless Ghouls, wear virtually identical, face-concealing costumes.',
  },
  {
    name: 'Blood Ceremony',
    photo: bloodceremony,
    info: 'Blood Ceremony is a Canadian rock band formed in 2006 in Toronto, Ontario. Blood Ceremony\'s style has been described as flute-tinged witch rock and their lyrics are filled with black magic imagery and references to classic horror films.',
  },
  {
    name: 'Iron Maiden',
    photo: ironmaiden,
    info: 'Iron Maiden are an English heavy metal band formed in Leyton, East London, in 1975 by bassist and primary songwriter Steve Harris. The band\'s discography has grown to thirty-nine albums, including sixteen studio albums, twelve live albums, four EPs, and seven compilations.',
  },
  {
    name: 'Sabaton',
    photo: sabaton,
    info: 'Sabaton is a Swedish power metal band from Falun. The band\'s main lyrical themes are based on war, historical battles, and acts of heroism. The name is a reference to a sabaton, knight\'s foot armor.',
  },
  {
    name: 'Mastodon',
    photo: mastodon,
    info: 'Mastodon is an American heavy metal band from Atlanta, Georgia, formed in 2000. The group is composed of Troy Sanders (bass/vocals), Brent Hinds (guitar/vocals), Bill Kelliher (guitar), and Brann Dailor (drums/vocals). Mastodon has released seven studio albums, as well as a number of other releases.',
  },
  {
    name: 'Gorod',
    photo: gorod,
    info: 'Gorod is a technical death metal band from Bordeaux, France.',
  },
  {
    name: 'Misfits',
    photo: misfits,
    info: 'Misfits were formed in 1977 in Lodi, New Jersey, by Glenn Danzig, who had previous experience performing in local bands. He named the band after actress Marilyn Monroe\'s final film, The Misfits.',
    
  },
  {
    name: 'AFI',
    photo: afi,
    info: 'AFI is an American rock band from Ukiah, California, formed in 1991. The band\'s lineup stabilized in 1998 with lead vocalist Davey Havok, drummer and backing vocalist Adam Carson, bassist, backing vocalist and keyboardist Hunter Burgan, and guitarist, backing vocalist and keyboardist Jade Puget.',
  },
  {
    name: 'Slayer',
    photo: slayer,
    info: 'Slayer is an American thrash metal band from Huntington Park, California. The band was formed in 1981 by guitarists Kerry King and Jeff Hanneman and vocalist and bassist Tom Araya.',
  },
  {
    name: 'Toxic Holocaust',
    photo: toxicholocaust,
    info: 'Toxic Holocaust is an American thrash metal band from Portland, Oregon.',
  }
]

export const venues = [
  {
    name: 'Bossanova Ballroom',
    photo: bossanovaballroom,
    address: '722 E Burnside St, Portland, OR 97214',
    info: 'Bossanova Ballroom is an event space and former theater building located at 722 East Burnside Street in Portland, Oregon\'s Buckman neighborhood, in the United States. It features a dance floor, two stages and bars, and a game room. The venue has hosted comedy shows, and the queer event Blow Pony since 2016.',
    phone: '(503) 206-7630',
    email: 'bossanovaballroombooking@gmail.com',
    website: 'http://bossanovaballroom.com/',
  },
  {
    name: 'Crystal Ballroom',
    photo: crystalballroom,
    address: '1332 W Burnside St, Portland, OR 97209',
    info: 'Crystal Ballroom, originally built as Cotillion Hall, is a historic building in Portland, Oregon, United States. Cotillion Hall was built in 1914 as a ballroom, and dance revivals were held there through the Great Depression. Starting in the 1960s, the hall has also been host to many popular pop, rock, folk, blues and jazz artists, as well as beat poetry and other entertainment.',
    phone: '(503) 225-0047',
    email: 'crystalballroombooking@gmail.com',
    website: 'https://www.crystalballroompdx.com/',
  },
  {
    name: 'Hawthorne Theater',
    photo: hawthornetheater,
    address: '1507 SE 39th Ave, Portland, OR 97214',
    info: 'The Hawthorne Theatre, formerly known as the Sunnyside Masonic Lodge, is an historic building and music venue located at the intersection of Southeast Hawthorne Boulevard and Cesar Chavez Boulevard.',
    phone: '(503) 233-7100',
    email: 'hawthornetheatrebooking@gmail.com',
    website: 'http://hawthornetheatre.com/',
  },
  {
    name: 'Moda Center',
    photo: modacenter,
    address: '1 N Center Ct St, Portland, OR 97227',
    info: 'Moda Center, formerly known as the Rose Garden, is the primary indoor sports arena in Portland, Oregon, United States. It is used for basketball, ice hockey, rodeos, circuses, conventions, ice shows, concerts, and dramatic productions. The arena has a capacity of 19,393 spectators when configured for basketball.',
    phone: '(503) 235-8771',
    email: 'modacenterbooking@gmail.com',
    website: 'rosequarter.com/seating-charts/moda-center',
  },
  {
    name: 'Mississipi Studios',
    photo: mississipistudios,
    address: '3939 N Mississippi Ave, Portland, OR 97227',
    info: 'Mississippi Studios is a music venue and recording studio in Portland, Oregon\'s Boise neighborhood, United States. The venue was formerly a Baptist church, but has since been completely rebuilt and enlarged, partially using materials from the church.',
    phone: '(503) 288-3895',
    email: 'mississippistudiosbooking@gmail.com',
    website: 'mississippistudios.com',
  },
  {
    name: 'Roseland Theater',
    photo: roselandtheater,
    address: '8 NW 6th Ave, Portland, OR 97209',
    info: 'The Roseland Theater, sometimes called the Roseland Theater and Grill, is a music venue located at 8 Northwest Sixth Avenue in the Old Town Chinatown neighborhood of Portland',
    phone: '(971) 230-0033',
    email: 'roselandbooking@gmail.com',
    website: 'http://roselandpdx.com/',
  },
]

export default shows;

