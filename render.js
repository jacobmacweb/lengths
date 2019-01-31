// https://stackoverflow.com/a/35970894
var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
};

getJSON("objects.json", function(err, data) {
	console.log(data);
	if (err !== null) {
		alert('Something went wrong: ' + err);
	} else {
		let objects = data.objects;

	  	objects.sort(function(a, b) { 
		    return a.height - b.height;
		})

		for (let i = 0; i < objects.length; i++) {
			var object = objects[i];
			var pixelHeight = object.height * 96 / 2.54;
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
					<div class="bar" style="height: ${pixelHeight}px; border-color: ${color}"></div>
				</div>`);
		}
	}
});