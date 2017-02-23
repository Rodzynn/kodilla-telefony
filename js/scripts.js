function Telefon(marka, cena, kolor, power) {
	this.marka = marka; 
	this.cena = cena;
	this.kolor = kolor;
	this.power = power;
}

Telefon.prototype.printInfo = function() {
	console.log("To jest telefon marki " + this.marka + ", kosztuje " + this.cena + " złotych i ma kolor " + this.kolor);
};

Telefon.prototype.printFunction = function() {
	console.log("Power function dla tego telefonu: " + this.power);
};

var iPhone6S = new Telefon("Apple", 2250, "srebrny", "Touch ID");
var onePlus = new Telefon("OnePlus", 1800, "czarny", "6GB RAM");
var galaxyS = new Telefon("Samsung", 2190, "złoty", "Wybucha");

iPhone6S.printInfo();
iPhone6S.printFunction();

onePlus.printInfo();
onePlus.printFunction();

galaxyS.printInfo();
galaxyS.printFunction();