"use strict"

	var botonCrear = document.getElementById("crear");
	var botonEliminar = document.getElementById("eliminar");
	var idLista = document.getElementById("zonaDeLista");

	
	botonCrear.addEventListener('click',()=>{
   const tarea = document.createElement("div");
	 const checkbox = document.createElement("input");
   const list = document.createElement("p");
	 checkbox.type = "checkbox";
   
	 checkbox.style.cssText = "width: 30px; height:30px;";
	 list.style.cssText = "font-size: 30px; width:100%; height:100%; border-bottom:1px solid; outline: none; margin:none";
	 tarea.style.cssText = "display: flex; flex-direction: row; align-items: center;";
	 list.setAttribute("contenteditable", true);

   tarea.classList.add("list");
   tarea.appendChild(checkbox);
   tarea.appendChild(list);
	 idLista.appendChild(tarea);

	 list.focus();
	 console.log(list.style.cssText);

	 checkbox.addEventListener('click', ()=>{
	  botonEliminar.style.cssText = "opacity:1; cursor:pointer;";
		if (checkbox.checked) {
			list.style.cssText = "text-decoration: line-through; font-size: 30px; width:100%; height:30px; border-bottom:1px solid; outline: none;";
		} else{
			list.style.cssText = "font-size: 30px; width:100%; height:30px; border-bottom:1px solid; outline: none;";
		}
	 });
	
		botonEliminar.addEventListener('click', ()=>{
			const listas = document.querySelectorAll('.list');

			// para cada lista hacer:
			listas.forEach((lista) => {

				// guarda el input checkbox en la variable checkbox
				const checkbox = lista.querySelector('input[type="checkbox"]');
				if (checkbox.checked) {
					lista.remove();
				}
			});
		});

		// evento al presionar 'Enter'
		list.addEventListener('keydown', (event) => {
			console.log('Keydown event:', event.key);
			if (event.key === 'Enter') {
				event.preventDefault();
				
				// Encuentra el índice del elemento <p> actual en la lista
				const index = Array.from(idLista.querySelectorAll('p')).indexOf(list);
				
				// Encuentra el siguiente elemento <p> en la lista
				const nextList = idLista.querySelectorAll('p')[index + 1];
				
				// Si hay un siguiente elemento <p>, enfócalo
				if (nextList) {
					nextList.focus();
				}
			}
		});
});