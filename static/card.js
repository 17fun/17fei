$(function() {
	let card_version = localStorage.getItem('card_version') || 'lover0'
	let tasks = levels[card_version]

	let title = {
		'lover0': '恋爱版',
		'lover1': '热恋版',
		'sex0': '同居版',
		'sex1': '进阶版',
		'sex2': '私密版',
		'sm': 'sm版',
		'huwai': '户外版',
		'nvpu': '女仆版',
		'nanpu': '男仆版',
		'custom': '自定义',
	}

	$('#title').text(title[card_version])

	$('#card').on('change', () => {
		$('#content').text('')
		if (!$('#card')[0].checked) {
			new Howl({
				src: '/Gold2.wav',
				format: ["mp3"],
				autoplay: true,
				onload: function() {
					window.voice = null;
				},
			});

			setTimeout(function() {
				$('#content').text(tasks[Math.floor(tasks.length * Math.random())]);
			}, 200)
		}
	})
})
