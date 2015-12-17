$(document).ready(function() {
	// append function to clear button
	$('#clc').click(function() {
		$('#attk_num').val('');
		$('#dfd_num').val('');

	});

	$('#fight').click(function() {
		// get the number of attackers and defenders
		var attk = $('#attk_num').val();
		attk = parseInt(attk, 10);
		var dfd = $('#dfd_num').val();
		dfd = parseInt(dfd, 10);

		while (attk > 0 && dfd > 0) {
			var i = Math.min(3, attk);
			var j = Math.min(2, dfd);

			var attk_res = [];
			var dfd_res = [];
			for (k = 0; k < i; k++) {
				var dice = Math.random()*6+1; dice = Math.floor(dice);
				attk_res.push(dice);
			}
			for (k = 0; k < j; k++) {
				var dice = Math.random()*6+1; dice = Math.floor(dice);
				dfd_res.push(dice);
			}
			attk_res.sort(); dfd_res.sort();
			attk_res.reverse(); dfd_res.reverse();

			for (k =0; k < i && k<j; k++) {
				if (attk_res[k] > dfd_res[k]) {
					dfd--;
				} else {
					attk--;
				}
			}
		}
	

		if (attk > 0) {
			$('#result').text('Attackers wins!');
			$('#detail').text('Attackers left: ' + attk);
		} else {
			$('#result').text('Defenders wins!');
			$('#detail').text('Defenders left: ' + dfd);

											
		}
	})

});

