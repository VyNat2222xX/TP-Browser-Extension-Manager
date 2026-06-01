// QUERRY SELECTOR
const $grid = document.querySelector("#extensions");
const $mode = document.querySelector("#theme");

// MEMORY
const APIurl = "http://10.69.4.8:3000/v1/extensions";
const APIkey = "123";

// CODE

document.addEventListener("DOMContentLoaded", () => {
	searsh();
});

async function searsh() {
	const response = await fetch(APIurl, {
		headers: {
			Authorization: APIkey,
		},
	});
	const DATA = await response.json();

	console.log(DATA);

	for (let i = 0; i < DATA.length; i++) {
		// Elements
		const div1 = document.createElement("div");
		const div2 = document.createElement("div");
		const div3 = document.createElement("div");
		const div4 = document.createElement("div");

		const img = document.createElement("img");

		const h2 = document.createElement("h2");
		const p = document.createElement("p");

		const button = document.createElement("button");
		const input = document.createElement("input");

		// Utility
		div1.classList.add("extension");
		div2.classList.add("extension-header");
		div3.classList.add("extension-header-content");
		div4.classList.add("extension-append");

		p.classList.add("text-neutral-600");
		p.textContent = DATA[i].description;
		h2.textContent = DATA[i].name;

		button.textContent = "Remove";
		input.type = "checkbox";
		if (DATA[i].isActive) {
			input.checked = true;
		}

		img.src = DATA[i].logo;

		// Appendchild
		div4.appendChild(button);
		div4.appendChild(input);

		div3.appendChild(h2);
		div3.appendChild(p);

		div2.appendChild(img);
		div2.appendChild(div3);

		div1.appendChild(div2);
		div1.appendChild(div4);

		$grid.appendChild(div1);
	}
}
