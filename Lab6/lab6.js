(() =>{
	class ImgGallary extends HTMLElement {
		constructor(){
			super();
			this.imgopen = null;
		}
		//створюємо внутрішній DOM
		connectedCallback(){
			const imgEl = document.createElement('div');
			imgEl.className = 'modal_open';
			this.imgopen = document.createElement('div');
			this.imgopen.className = 'close';
			imgEl.appendChild(this.imgopen);
			this.appendChild(imgEl);

			var modal = document.getElementById('modal_windows');
			var modalImg = document.getElementById("img_close");
			var List = [document.getElementById('img1'), document.getElementById('img2'), document.getElementById('img3'), document.getElementById('img4'),
			document.getElementById('img5'), document.getElementById('img6'), document.getElementById('img7')];

			for( var i = 0; i<List.length; i++ ){
			List[i].onclick = function(){
				modal.style.display = "block";
				modalImg.src = this.src;
				}
			}
		
			var span = document.getElementByClassName("close");
			span.onclick = function(){	
			modal.style.display = "none";
			}
		}
	}
			
	window.customElements.define('img-gallary', ImgGallary);
})();






