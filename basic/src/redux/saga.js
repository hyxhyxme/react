import { put, takeLatest } from  'redux-saga/effects'
export default function * () {
    console.log('saga');
    yield takeLatest("loadData", function * (){
        console.log(0)
        let result = yield new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(100000000)
            },2000)
        })
        yield put({type:'increment'})
    });
    /* put("loadData")*/
} 


