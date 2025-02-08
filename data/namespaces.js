const Namespace = require("../classes/Namespace");
const Room = require("../classes/Room");

const wikiNs = new Namespace(0,'Wikipedia','https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Wikipedia-logo-v2.svg/103px-Wikipedia-logo-v2.svg.png','/wiki')
const mozNs = new Namespace(1,'Modzilla','https://www.mozilla.org/media/img/logos/firefox/logo-quantum.9c5e96634f92.png','/mozilla')
const linuxNs = new Namespace(2,'Linux','https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png','/linux')


wikiNs.addRoom(new Room(0,"New Article",0))
wikiNs.addRoom(new Room(1,"Editors",0))
wikiNs.addRoom(new Room(2,"Other",0))

mozNs.addRoom(new Room(0,"New Firefox",1))
mozNs.addRoom(new Room(1,"Firefox2",1))
mozNs.addRoom(new Room(2,"Firefox3",1))

linuxNs.addRoom(new Room(0,"New Linux",2))
linuxNs.addRoom(new Room(1,"Linux1",2))
linuxNs.addRoom(new Room(2,"Linux2",2))


const namespaces = [wikiNs,mozNs,linuxNs];

module.exports = namespaces;