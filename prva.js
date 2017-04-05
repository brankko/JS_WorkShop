var x = 5;
var y = 12;
var z = x + y;

var ime = 'Ivana';
var prezime = 'Ivanic';
var punoIme = ime + ' ' + prezime;

var niz = [1, 2, 3];

var korisnik = {
	ime: 'Ivana',
	prezime: 'Ivanic',
	punoIme: function(){
		return this.ime + ' ' + this.prezime;
	}
};

function imeFunkcije() {
	console.log('Cao ja sam funkcija');
}
imeFunkcije();

function printName(name) {
	console.log('Cao ' + name);
}
printName('Marija');

function getName(name) {
	return name;
}
var mojeIme = getName('Branko');
console.log('A moje ime je ' + mojeIme);

function getFirstElement(niz) {
	return niz[0];
}
console.log(getFirstElement(niz));

function printAllElements(niz) {
	for (var i = 0; i < niz.length; i++) {
		console.log(niz[i]);
	}
}
printAllElements(niz);

function veciOdDvaBroja(a, b) {
	if (a > b) {
		return a;
	} else {
		return b;
	}
}

function najveciOdTriBroja(a, b, c) {
	if (a > b) {
		if (a > c) {
			return a;
		} else {
			return c;
		}
	} else {
		if (b > c) {
			return b;
		} else {
			return c;
		}
	}
}