var pDemo = document.getElementById("demo")
	var imageSrc = document.getElementById("img")
	pDemo.innerHTML = "Hello"
	//document.getElementsByClassName("demo2").innerHTML = "This is how you get an element by class name"
	//document.getElementsByTagName("p")

	imageSrc.src = "https://images.unsplash.com/photo-1544412999-66f234eb4e2c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" 

	pDemo.style.color = "red"


	// EVENT HANDLERS
	// onclick=js
	// element.addEventListener(event, fucnction, useCapture)
	// element.addEventListener("click" function() {
	//	do something
	// })

	// element.addEventListener("click", myFucntion)
	//	fucntion myFucntion() {
	//		do something
	//	}

	var colors = ["#7F0000", "#2D65FF", "#1D7F21", "#FF782F"]
	var btn = document.getElementById("btn")

	btn.addEventListener("click", changeColor)
		function changeColor() {
		document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
	}


	// SCOPE

	var foo = 'bar': // GLOBAL VARIABLES
				function someFunction(params1, params2) { // PARAMS1 AND PARAMS2 ARE LOCAL VARIABLES
					var bar = 'foo' // local
				}
				
				function myFunction() {
					console.log(bar) // ERROR
					console.log(foo) //  'BAR'
				}

				function whatIsThis() {
					baz = "What variable is this?"
				}

				

				//console.log(baz) // THIS WOULD GIVE ERROR CAUSE ITS A LOCAL SCOPE

				whatIsThis()
				
				console.log(baz) // THIS DOESNT GIVE ERROR CAUSE ITS CALLED BEFORE ITS CONSOLE.log

				myFunction