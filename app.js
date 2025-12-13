const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true })); 
app.use(express.json());

app.get('/' , (req , res) => {
	res.sendFile(path.join(__dirname , 'views' , 'index.html'));
});

app.post('/calculate' , (req , res) => {
	const weight = req.body.weight;
	const height = req.body.height;
	const bmi = weight / (height * height / 10000);
	res.status(200).json({
		bmi: bmi
		});
	});

app.listen(port , () => {
	console.log(`Address is http://localhost:${port}  ${__dirname}`);
});

