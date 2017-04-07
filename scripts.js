function Telefon(marka, cena, kolor) {
	this.marka = marka;
	this.cena = cena;
	this.kolor = kolor;	
}
Telefon.prototype.printInfo = function() {
	console.log("Marka telefonu to " + this.marka + ", kolor to " + this.kolor + ", a cena to " + this.cena + ".");
}

var samsungGalaxyS6 = new Telefon('Samsung', 2000, 'Czarny');
var iPhone6 = new Telefon('Apple', 2250, 'Biały');
var onePlusOne = new Telefon('Plus', 1500, 'Srebrny');

samsungGalaxyS6.printInfo();
iPhone6.printInfo();
onePlusOne.printInfo();