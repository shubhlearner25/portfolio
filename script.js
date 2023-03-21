/* *********** */
/* variables */
/* *********** */
const yearEl = document.getElementById("year");
const projectsEl = document.getElementById("projects");
const filterEls = document.querySelectorAll("#filters li");

// filterEls[0].addEventListener('click', function() { 
// 	console.log('clicked')
// })
// filterEls[1].addEventListener('click', function() { 
// 	console.log('clicked')
// })
// filterEls[2].addEventListener('click', function() { 
// 	console.log('clicked')
// })
// filterEls[3].addEventListener('click', function() { 
// 	console.log('clicked')
// })
// filterEls[4].addEventListener('click', function() { 
// 	console.log('clicked')
// })
// filterEls[5].addEventListener('click', function() { 
// 	console.log('clicked')
// })

for (let i = 0; i < filterEls.length; i++) {
	filterEls[i].addEventListener('click', function (e) { 
		document.querySelector("#filters li.active").classList.remove('active');
		filterEls[i].classList.add('active');
		let tag = e.target.id;
		renderProjects(tag);
	})
}

yearEl.innerHTML = new Date().getFullYear();

/* *********** */
/* projects */
/* *********** */
const projects = [
	{
		name: "ToDo App",
		img: "todo.jpg",
		codeUrl: "https://github.com/justdecodeme/portfolio/tree/master/projects/todo",
		liveUrl: "https://justdecodeme.github.io/portfolio/projects/todo/",
		tags: ['html', 'css', 'js']
	},
	{
		name: "Slider App",
		img: "slider.png",
		codeUrl: "https://github.com/justdecodeme/portfolio/tree/master/projects/slider",
		liveUrl: "https://justdecodeme.github.io/portfolio/projects/slider/",
		tags: ['html', 'css', 'js']
	},
	{
		name: "Stunning landing page",
		img: "stunning-landing-page.jpg",
		codeUrl: "https://github.com/shubhlearner25/Assignment-1-Stunning-Landing-Page",
		liveUrl: "https://shubhlearner25.github.io/Assignment-1-Stunning-Landing-Page/",
		tags: ['html', 'css']
	},
    {
		name:"dynamic html grid",
		img: "dynamic-html-grid.png",
		codeUrl: "https://github.com/shubhlearner25/Assignment---3-Dynamic-HTML-Grid.git",
		liveUrl: "https://shubhlearner25.github.io/Assignment---3-Dynamic-HTML-Grid/",
		tags: ['html', 'css']
	},
    {
		name:"quizapp",
		img: "quizapp.jpg",
		codeUrl: "https://github.com/shubhlearner25/quizapp.git",
		liveUrl: "https://shubhlearner25.github.io/quizapp/",
		tags: ['html', 'css','js']
	},
    {
		name:"movieapp",
		img: "movieapp.jpg",
		codeUrl: "https://github.com/shubhlearner25/movieapp.git",
		liveUrl: "https://shubhlearner25.github.io/movieapp/",
		tags: ['html', 'css','js']
	},
    {
		name:"password generator",
		img: "passwordgenerator.jpg",
		codeUrl: "https://github.com/shubhlearner25/passwordgenerator.git",
		liveUrl: "https://shubhlearner25.github.io/passwordgenerator/",
		tags: ['html', 'css','js']
	},
    {
		name:" fav food web app",
		img: "chai.jpg",
		codeUrl: "https://github.com/shubhlearner25/Assignment-1-Favorite-Foods-Webapp.git",
		liveUrl: "https://shubhlearner25.github.io/Assignment-1-Favorite-Foods-Webapp/",
		tags: ['html', 'css']
	},
    {
		name:" javascrpt events",
		img: "javascript-events.jpg",
		codeUrl: "https://github.com/shubhlearner25/Assignment-4-JavaScript-Events.git",
		liveUrl:"https://shubhlearner25.github.io/Assignment-4-JavaScript-Events/",
		tags: ['html', 'css', 'js']
	},
];

function renderProjects(tag) {
	let output = "";
	// <img src="img/project/${projects[i].img}" alt="Calculator Project Image">

	for (let i = 0; i < projects.length; i++) {
		if(tag == 'all' || projects[i].tags.includes(tag)) {
				output += `<div class="project">
				<div class="project-img" style="
					background-image: url('img/project/${projects[i].img}');
				">
				</div>
				<div class="content flex">
					<p>${projects[i].name}</p>
					<p class="flex">
						<a href="${projects[i].codeUrl}" target="_blank"><img src="images/github.svg" alt="GitHub"></a>
						<a href="${projects[i].liveUrl}" target="_blank"><img src="images/link.svg" alt="External link"></a>
					</p>
				</div>
			</div> `;
		}
	}
	
	projectsEl.innerHTML = output;
}

renderProjects('all');