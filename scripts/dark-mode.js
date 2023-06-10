const themeBtn = document.querySelector('.theme-btn');

const changeTheme = () => {
	const body = document.querySelector('body');

	if (body.style.backgroundColor == 'white') {
		body.style.backgroundColor == '#2A3B49';
	} else {
		body.style.backgroundColor == 'white';
	}
};

themeBtn.onclick = changeTheme;
