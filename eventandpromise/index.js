const PromiEvent = require("web3-core-promievent")


let foo = () => {
  let pe = new PromiEvent();
  setTimeout( ()=>{
		pe.eventEmitter.emit("step1", "done!")
	}, 500)
	 setTimeout( ()=>{
		pe.eventEmitter.emit("step2", "done!")
	}, 1000)
		 setTimeout( ()=>{
	pe.resolve("success!")	
	}, 1500)
	
return pe.eventEmitter
}


foo()
.on("step1", console.log)
.on("step2", console.log)
.then(console.log)
