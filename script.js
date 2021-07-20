function show_Bare(obj){
	next=obj.nextElementSibling;
		if(next.style.display=="block")
			next.style.display="none";
		else
			next.style.display="block";
}