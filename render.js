$.getJSON("objects.json", function(data) {
	console.log(data);
	let objects = data.objects;

    dpi_y = document.getElementById('testdiv').offsetHeight;



  	objects.sort(function(a, b) { 
	    return a.height - b.height;
	})

	for (let i = 0; i < objects.length; i++) {
		var object = objects[i];


		// var color = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
		var color = "hsl(" + 360 * Math.random() + ',' +
             (25 + 70 * Math.random()) + '%,' + 
             (85 + 10 * Math.random()) + '%)';

		$("#items").append( 
			`<div class="item">
				<div class="tooltip">
					${object.title}
					<span class="tooltiptext">${object.height}cm</span>
				</div>
				<div class="bar" style="height: ${object.height}cm; border-color: ${color}"></div>
			</div>`);
	}
});
