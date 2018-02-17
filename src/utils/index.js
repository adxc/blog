import axios from 'axios'

export default{
    /**
     * @method:axios异步请求数据
     * @param args:请求地址及参数
     * @param callback:回调函数
     * @returns:请求成功调用回调函数
     */
    sendAjax:(args,callback)=>{
        let url = args.url
        let params = args.params
        axios.get(url,{
            params:params
        }).then(Response =>{
            let msg = Response.data.msg
            if(Response.data.code === 0){
                callback(Response.data)
            }else{
                console.log(msg)
            }
        }).catch(error =>{
            console.log(error)
        })
    }
}