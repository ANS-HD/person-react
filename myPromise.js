// myPromise 
class Promise {
    static PENDING = 'pending';
    static REJECTED = 'rejected';
    static FULFILLED = 'fufilled';
    
    constructor(executor){ 
        this.status = Promise.PENDING;
        this.value = undefined;
        this.reason = undefined
        
        //d     定义resolve
        const resolve = (v) => {
            if(this.status === Promise.PENDING){
                this.status === Promise.FULFILLED
                this.value = v
            }
            
        }

        // 定义reject
        const reject =(reason) => {
            if(this.status === Promise.PENDING){
                this.status = Promise.REJECTED
                this.reason = reason
            }
        }

        executor(resolve, reject)
    }
    then(onFulfilled, onRejected) {
            if(this.status === Promise.FULFILLED){
                onFulfilled(this.value)
            }
            if(this.status === promsie)
    }
}

const promise1 = new Promise (( resolve, reject) => {
    resolve(1)
})

console.log(promise1);