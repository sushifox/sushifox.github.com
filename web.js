function hideAll() {
	document.getElementById("copy_div2").style.display = "none";
	document.getElementById("copy_div3").style.display = "none";
	document.getElementById("copy_div4").style.display = "none";
	document.getElementById("copy_div5").style.display = "none";
	document.getElementById("copy_div6").style.display = "none";
	document.getElementById("tab1").className = "highlighted_tab";
	document.getElementById("bracket1").innerHTML = "<img src = 'images/bracket8shg.png'>";
}

function Show(div_name, tab_name, bracket_name) {
	document.getElementById("copy_div1").style.display = "none";
	document.getElementById("copy_div2").style.display = "none";
	document.getElementById("copy_div3").style.display = "none";
	document.getElementById("copy_div4").style.display = "none";
	document.getElementById("copy_div5").style.display = "none";
	document.getElementById("copy_div6").style.display = "none";
	document.getElementById(div_name).style.display = "";
	document.getElementById('tab1').className = "tab";
	document.getElementById('tab2').className = "tab";
	document.getElementById('tab3').className = "tab";
	document.getElementById('tab4').className = "tab";
	document.getElementById('tab5').className = "tab";
	document.getElementById('tab6').className = "tab";
	document.getElementById(tab_name).className = "highlighted_tab";
	document.getElementById('bracket1').innerHTML = "";
	document.getElementById('bracket2').innerHTML = "";
	document.getElementById('bracket3').innerHTML = "";
	document.getElementById('bracket4').innerHTML = "";
	document.getElementById('bracket5').innerHTML = "";
	document.getElementById('bracket6').innerHTML = "";
	document.getElementById(bracket_name).innerHTML = "<img src = 'images/bracket8shg.png'>";
}