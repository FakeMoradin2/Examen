const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors({
    origin: "*",
    methods: ['GET', 'POST', 'DELETE', 'UPDATE']
    }));

const port = 3000;

function Token(req, res, next){
    const token = "123456";
    const auth = req.headers.authorization;
    if(auth === token){
        next();
    }else {
        res.send("no esta autorizado");
    }
}

const final = [
	{
		clase: "guerrero",
		atributos: {
			fuerza: 15,
			destreza: 20,
			inteligenia: 10,
			carisma: 13,
			suerte: 8
		},
		Armas:["hacha", "espada", "escudo"]	
	},
	{
		clase: "paladin",
		atributos: {
			fuerza: 14,
			destreza: 15,
			inteligenia: 16,
			carisma: 20,
			suerte: 12
		},
		Armas:["baculo", "espada", "escudo"]
	},
    {
        clase: "Hechicero",
        atributos:{
            fuerza: 20,
			destreza: 12,
			inteligenia: 18,
			carisma: 10,
			suerte: 130
        },
        Armas:["varita", " baston", "escudo"]
    }
];

app.get('/', (req, res) => {
    res.json(final);
});

/*for (let i = 0; i < final.length; i++) {
    app.get('/' + final[i], Token, (req, res) => {
        res.json(final[i]);
    });
}*/

app.listen(port, () => {
    console.log("escuchando ");
});
