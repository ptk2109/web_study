window.onload = function(){
	const radios = document.querySelectorAll("input[name='like']");
	const txt = document.querySelector("#txt");

	radios.forEach((radio) => {
		radio.addEventListener("change", (e) => {
			const current = e.currentTarget;
			if(current.checked){
				txt.textContent = `좋아하는 음식은 ${current.value}입니다`;
			}
		});
	});
};

