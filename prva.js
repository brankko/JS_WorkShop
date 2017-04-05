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

console.log(korisnik.punoIme());