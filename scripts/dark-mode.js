console.log(document);
const themeBtn = document.querySelector('.theme-btn');

const toggleTheme = () => {
	const body = document.querySelector('body');
	const pageTitle = document.querySelector('h1');
	const button = document.querySelector('.about-submit-now');
	const text = document.querySelectorAll('p');
	const detailBtn = document.querySelectorAll('a');
	console.log(6666);

	if (themeBtn.innerHTML === 'Dark Mode') {
		body.style.backgroundColor = '#2A3B49';
		pageTitle.style.color = 'white';
		themeBtn.innerHTML = 'Light Mode';
		for (let i = 0; i < text.length; i++) {
			text[i].style.color = 'white';
		}
		for (let i = 0; i < detailBtn.length; i++) {
			detailBtn[i].style.color = 'white';
		}
		button.style.border = '2px solid #7BFFE9';
	} else {
		body.style.backgroundColor = 'white';
		pageTitle.style.color = 'black';
		themeBtn.innerHTML = 'Dark Mode';
		for (let i = 0; i < text.length; i++) {
			text[i].style.color = 'black';
		}
		for (let i = 0; i < detailBtn.length; i++) {
			detailBtn[i].style.color = 'black';
		}
		button.style.border = 'none';
	}
};

themeBtn.onclick = toggleTheme;
