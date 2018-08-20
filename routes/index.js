var express = require('express');
var router = express.Router();

const bios = {
	helicopterson: {
		name: 'Helicopterson dos Santos',
	    role: 'Escritor, poeta, filantropo',
	    birth: '1870',
	    death: '1950',
	    background: 'Helicopterson sempre foi um jovem diferenciado, no mundo da lua, com aspirações muito além de sua geração. Com todos os seus sonhos e com muito esforço, um dia aprendeu a voar. Isso, ele aprendeu a voar, fazendo justiça à seu nome tão único. Ele continuou se esforçando, aprendendo muito e dominando a arte do voô, sempre chegando a alturas cada vez maiores. Até que um dia chegou na Lua, e essa na verdade é a última notícia que se tem dele. Depois disso, ele continuou voando cada vez mais alto, e ninguém mais o viu.',
	    photo: '/images/helicopterson.png',
	    quote: 'Se não for pra voar, eu nem desço pro play',
	    highlights: ['Nasceu', 'Voou', 'Voou mais alto', 'Primeiro homem a pisar na lua', 'Sumiu'],
	},
	lincoln: {
		name: 'Abraham Lincoln',
	    role: 'Ex-presidente, advogado',
	    birth: '1809',
	    death: '1865',
	    photo: '/images/lincoln.png',
	    background: 'Abraham Lincoln foi um político norte-americano que serviu como o 16° presidente dos Estados Unidos, posto que ocupou de 4 de março de 1861 até seu assassinato em 15 de abril de 1865. Lincoln liderou o país de forma bem-sucedida durante sua maior crise interna, a Guerra Civil Americana, preservando a União e abolindo a escravidão, fortalecendo o governo nacional. Lincoln tem sido consistentemente considerado por estudiosos e pelo povo como um dos três maiores presidentes dos Estados Unidos.',
	    quote: 'Governo das pessoas, pelas pessoas, para as pessoas, nunca deixará de existir na Terra.',
	    highlights: ['Aprovou a Lei da Propriedade Rural', 'Emitiu a Proclamação de Emancipação, que levou à abolição da escravatura nos EUA', 'Liderou a União à vitória da Guerra Civil'],
	},
	gatilson: {
		name: 'Gatilson de Souza',
	    role: 'Ser fofíneo, companheiríneo',
	    birth: '2015',
	    death: 'vivo',
	    photo: '/images/gatilson.png',
	    background: 'Responsável por subir nos móveis, derrubar objetos de decoração e ignorar seus donos como se fosse a última bolacha do pacote.',
	    quote: 'Gatos amam mais as pessoas do que elas permitiriam. Mas eles têm sabedoria suficiente para manter isso em segredo.',
	    highlights: ['Os gatos têm cerca de 100 sons vocais ao contrário dos cães que apresentam apenas 10', 'Um gato pode ficar vários dias sem comer, caso o alimento não lhe agrada, e pode até morrer de fome.', 'Os felinos podem chegar a dormir até 16 horas por dia, divididas em vários períodos. Isto quer dizer que um gato de 7 anos só esteve realmente acordado durante dois anos.', 'O gato tem 245 ossos, enquanto que o homem tem 206 no total.', 'Quando o gato está assustado, seu pelo se eriça por todo o corpo. Quando ele vai atacar, o pelo se eriça apenas numa estreita faixa dorsal.', 'O gato pode alcançar uma velocidade de até 50 km/h.', 'Os gatos esfregam o rosto em objetos e pessoas para marcá-los com seu cheiro. O cheiro é produzido por glândulas localizadas na parte anterior do rosto.'],
	},
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { bios: bios });
});


/* GET Bios. */
router.get('/:id', function(req, res, next) {
  const id = req.params.id;
  res.render('bio', bios[id]);
});

module.exports = router;
