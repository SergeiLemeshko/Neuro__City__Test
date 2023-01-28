const video = document.getElementsByTagName('video')[0],
	timePicker = document.getElementById('timer');

//воспроизведение/пауза по клику на видео
video.addEventListener('click', function () {
	if (video.paused) {
		video.play();
	} else {
		video.pause();
	}
}, false);

//переход на начальный кадр при окончании видео
video.addEventListener('ended', function () {
	video.currentTime = 0;
}, false);

// таймер
video.addEventListener('timeupdate', function () {
	timePicker.innerHTML = ToTime(video.currentTime);
}, false);

// рассчет отображаемого времени
function ToTime(time) {

	let h = Math.floor(time / (60 * 60)),
		dm = time % (60 * 60),
		m = Math.floor(dm / 60),
		ds = dm % 60,
		s = Math.ceil(ds);
	if (s === 60) {
		s = 0;
		m = m + 1;
	}
	if (s < 10) {
		s = '0' + s;
	}
	if (m === 60) {
		m = 0;
		h = h + 1;
	}
	if (m < 10) {
		m = '0' + m;
	}
	if (h === 0) {
		fulltime = m + ':' + s;
	} else {
		fulltime = h + ':' + m + ':' + s;
	}
	return fulltime;
}
