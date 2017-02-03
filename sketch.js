var txt = "The experimental rocket-powered aircraft programs started by NACA were extended by NASA as support for manned spaceflight. This was followed by a one-man space capsule program, and in turn by a two-man capsule program. Reacting to loss of national prestige and security fears caused by early leads in space exploration by the Soviet Union, in 1961 President John F. Kennedy proposed the ambitious goal of landing a man on the Moon by the end of [the 1960s], and returning him safely to the Earth. This goal was met in 1969 by the Apollo program, and NASA planned even more ambitious activities leading to a manned mission to Mars. However, reduction of the perceived threat and changing political priorities almost immediately caused the termination of most of these plans. NASA turned its attention to an Apollo-derived temporary space laboratory, and a semi-reusable Earth orbital shuttle. In the 1990s, funding was approved for NASA to develop a permanent Earth orbital space station in cooperation with the international community, which now included the former rival, post-Soviet Russia. To date, NASA has launched a total of 166 manned space missions on rockets, and thirteen X-15 rocket flights above the USAF definition of spaceflight altitude, 260,000 feet (80 km)."

var order = 3;
var ngrams = {};
var button;
function setup(){
	noCanvas();

	for(var i =0; i <= txt.length-order; i++){
		var gram = txt.substring(i,i+order);
		//ngrams.push(gram); //capture every trigram in the text... 
		if(!ngrams[gram]){
			ngrams[gram]= [];
		}
		ngrams[gram].push(txt.charAt(i+order));
	}
	button = createButton('generate');
	button.mousePressed(markovIt); 
	console.log(ngrams);
}


function markovIt(){ //generate the text
//based on the input
	var currGram = txt.substring(0,order);
	var result = currGram;
	for(var i =0; i<100;i++){
		var possibilities = ngrams[currGram];
		var next = random(possibilities); //pick random from the array... 
		result = result+next;
		currGram = result.substring(result.length-order,result.length);
}
	createP(result);
}