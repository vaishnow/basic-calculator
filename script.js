function press(b) {
	c_screen.value += b
	console.log(exp);
}

function calculate() {
	try {
		c_screen.value = eval(c_screen.value)
	}
	catch {
		c_screen.value = "Syntax Error"
		setTimeout(() => { c_screen.value = '' }, 2000)
	}
}

function backspace() {
	c_screen.value = c_screen.value.slice(0, -1)

}

function clr() {
	c_screen.value = ''
}