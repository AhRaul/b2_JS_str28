const logCompliment = function(firstName) {
	console.log(`You 're doing great, ${firstName}!`);
};
logCompliment("Molly");
logCompliment("Piter");

logCompliment = function(secondName) {
	console.log(`Try change name ${secondName}`);
};

logCompliment("Brawn");