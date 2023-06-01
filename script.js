//your JS code here. If required.
function name() {
return new Promise((res,rej)=>{
	setTimeout(()=>res("Hello, world!"),1000)
})
}

name.then(res=>{
	document.getElementById("output").innerText = res
})
