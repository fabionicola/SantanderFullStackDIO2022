const BASE_URL = 'https://thatcopy.pw/catapi/rest/';

const getCats = async () => {
	try {
		const data = await fetch(BASE_URL);
		const json = await data.json();
		//return json.webpurl;
		return "https://thatcopy.github.io/catAPI/imgs/webp/2b74f7c.webp";
	} catch (e) {
		console.log(e.message);
	}
};


const loadImg = async () => {
	const img = document.getElementsByTagName('img')[0];
	img.src = await getCats();
};

loadImg();

const btn = document.getElementById('btnCat');
btn.addEventListener('click', loadImg);