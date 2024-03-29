window.onload = function(){
	const container = document.querySelector(".container");

	// display 설정
	const radiosDisplay = document.querySelectorAll("input[name='containerType']");

	radiosDisplay.forEach((radio) => {
		radio.addEventListener("change", (e) => {
			const current = e.currentTarget;

			console.log(current);
			if(current.checked){
				container.style.display =  current.value;
			}
		});
	});


	// flex-direction (배치 방향 설정)
	const radiosFlexDirection = document.querySelectorAll("input[name='flex-direction']");

	radiosFlexDirection.forEach((radio) => {
		radio.addEventListener("change", (e) => {
			let radioDisplayValue = document.querySelector("input[name='containerType']:checked").value;

			const current = e.currentTarget;
			
			if(current.checked){
				if(radioDisplayValue  == "flex" || radioDisplayValue == "inline-flex"){
					container.style.cssText = `flex-direction:${current.value}`;					
				}else{
					alert("display가 flex 관련인 경우에만 가능합니다.");
					return;
				}
			}
		});
	});


	// flex-wrap (줄넘길 처리 설정)
	const radiosFlexWrap = document.querySelectorAll("input[name='flex-wrap']");

	radiosFlexWrap.forEach((radio) => {
		radio.addEventListener("change", (e) => {
			let radioDisplayValue = document.querySelector("input[name='containerType']:checked").value;

			const current = e.currentTarget;
			
			if(current.checked){
				if(radioDisplayValue  == "flex" || radioDisplayValue == "inline-flex"){
			
					if(current.value === ""){
						container.style.cssText = "";				
					}else{
						container.style.cssText = `flex-wrap:${current.value};width:200px;`;					
					}
				}else{
					alert("display가 flex 관련인 경우에만 가능합니다.");
					return;
				}
			}
		});
	});
};

