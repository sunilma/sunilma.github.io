$(document).ready(function(){

	// adding skills and removing the top skill
	$("#addSkill").click(function(){
		var name = $("#skillName").val();
		var level = $("#skillLevel").val();
		var add = "<tr><td>"+name+"</td><td>"+level+"</td></tr>";
		if (name != ""){
			$("#mytable > tbody > tr:first").remove();
			$("#mytable > tbody:last-child").append(add);
		}
	});

	// bootstrap scrollspy
	$('body').scrollspy({target: ".navbar"});

	/* smooth scrolling snippet from "https://css-tricks.com/snippets/jquery/smooth-scrolling/" */
	$('a[href*="#"]:not([href="#"])').click(function() {
    	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      		var target = $(this.hash);
      		target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      		if (target.length) {
        		$('html, body').animate({
          			scrollTop: target.offset().top
        		}, 1000);
        		return false;
      		}
    	}
  	});

	

	// displaying clock on the bottom right corner of page
	function GetClock(){
		var d=new Date();
		var nmonth=d.getMonth() + 1;
		var ndate=d.getDate();
		var nyear=d.getYear();
		if(nyear<1000){
			nyear+=1900;
		}
		if (nmonth<10){
			nmonth = "0" + nmonth;
		}
		if (ndate<10){
			ndate = "0" + ndate;
		}

		var nhour=d.getHours(); nmin=d.getMinutes();
		if(nmin<=9){
			nmin="0"+nmin;
		} 

		if(nhour<=9){
			nhour="0"+nhour;
		} 

		$('#clockbox').html(""+(nmonth)+"/"+ndate+"/"+nyear+" "+nhour+":"+nmin+"");
	}


	window.onload=function(){
		GetClock();
		setInterval(GetClock,1000);
	}



	// display all skills
	var skills_array = ['react', 'redux', 'nodejs', 'javascript', 'mongodb','html5', 'css3', 'jquery', 'bootstrap', 'c', 'firebase','java', 'python', 'graphql'];
	var skills_template = (data) => (`<div class="col-md-2 skill-section">
					<div>
						<img src="./images/skills/${data}.png" alt="${data}" >
					</div>
					<h3>${data}</h3>
				</div>`);

	var myskills = ''

	for (skill of skills_array){
		myskills += skills_template(skill);
	}

	document.getElementById("myskills").innerHTML = myskills;


	// display list of all projects
	var projects = [
		{
			title: "Ecommerce App",
			img: "ecommerce",
			gh_url: "https://github.com/sunilma/ecommerce",
			demo_url: "https://meroecom-live.herokuapp.com"
		},
		{
			title: "Developer Connector",
			img: "developer_connector",
			gh_url: "https://github.com/sunilma/developerConnector",
			demo_url: "https://merodevcon.herokuapp.com/"
		},
		{
			title: "Todo List",
			img: "todo_list",
			gh_url: "https://github.com/sunilma/react_todo_list",
			demo_url: "https://sunilma.github.io/react_todo_list/"
		},
		{
			title: "Hotel Resort",
			img: "beach_resort",
			gh_url: "https://github.com/sunilma/beach_resort",
			demo_url: "https://sunilma.github.io/beach_resort/"
		},
		{
			title: "Monsters Rolodex",
			img: "monsters_rolodex",
			gh_url: "https://github.com/sunilma/monsters/tree/master",
			demo_url: "https://sunilma.github.io/monsters/"
		},
		{
			title: "Random Quotes Generator",
			img: "random_quotes",
			gh_url: "https://github.com/sunilma/random_quotes",
			demo_url: "https://sunilma.github.io/random_quotes/"
		},
		{
			title: "Github Finder",
			img: "github_finder",
			gh_url: "https://github.com/sunilma/github_finder",
			demo_url: "https://sunilma.github.io/github_finder/"
		},
		{
			title: "Calorie Tracker",
			img: "calorie_tracker",
			gh_url: "https://github.com/sunilma/calorie_tracker",
			demo_url: "https://sunilma.github.io/calorie_tracker/"
		},
		{
			title: "Calculator",
			img: "calculator",
			gh_url: "https://github.com/sunilma/calculator",
			demo_url: "https://sunilma.github.io/calculator/"
		},
		{
			title: "Pomodoro Clock",
			img: "pomodoro_clock",
			gh_url: "https://github.com/sunilma/pomodoro_clock",
			demo_url: "https://sunilma.github.io/pomodoro_clock/"
		},
		{
			title: "tictactoe",
			img: "tictactoe",
			gh_url: "https://github.com/sunilma/tictactoe",
			demo_url: "https://sunilma.github.io/tictactoe/"
		},
		{
			title: "Wiki Search",
			img: "wiki_search",
			gh_url: "https://github.com/sunilma/wiki_search",
			demo_url: "https://sunilma.github.io/wiki_search/"
		},
		{
			title: "Picture Searcher",
			img: "picsearch",
			gh_url: "https://github.com/sunilma/search_pic",
			demo_url: "https://sunilma.github.io/search_pic/"
		}
	];

	var projects_template = (data) => (`
	<div class="col-md-3 fader">
		<h3>${data.title}</h3>
		<img src="images/project/${data.img}.png" />
		<a class="btn pull-left" href="${data.demo_url}" target="_blank">View Demo</a>
		<a class="btn pull-right" href="${data.gh_url}" target="_blank">View Source</a>
	</div>
	`);

	var myprojects = '';

	for (project of projects) {
		myprojects += projects_template(project);
	}

	console.log(myprojects);

	document.getElementById("myprojects").innerHTML = myprojects;





	// getting form data
	$("form").submit(function(event){
		var inputs = $(this).serializeArray();
		var myString = "Hi, " + inputs[0].value + " " + inputs[1].value + "<br />";
		myString += "Email: " + inputs[3].value + "<br />";
		myString += "Website: " + inputs[4].value  + "<br />";
		myString += "Comment: " + inputs[5].value + "<br />";
		myString += "Thank you for you comment. I will get back to you as soon as possible!" + "<br />" + "Cheers";
		$("#form_data").html(myString);

	})
	
});

// resetting form
function resetForm(){
		document.getElementById("myForm").reset();
	}
