<script>
	function GFGexample(fact, callback){
	var myFact = "GeeksforGeeks Is Awesome, " + fact;
	callback(myFact); // 2
	}
	
	function logFact(fact){
	console.log(fact);
	}
	GFGexample("Learning is easy since", logFact);
</script>
