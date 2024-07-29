// pending => menunggu
// resolved => ditepati
// rejected => diingkari

const janji = new Promise((resolve, reject) => {
    const isPay = false

    if(isPay == false){
        reject("gagal bayar hutang, duitnya kurang")
    } else {
        resolve("sudah bayar hutang")
    }
})

Promise
.then((value) => {
    console.log(value)
})
.catch((value) => {
    console.log(value)
})