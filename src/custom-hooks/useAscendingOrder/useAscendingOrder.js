
function useAscendingOrder(data, order) {

    const sorted = [...data].sort((a,b)=>{
        if(order==="asc"){
            return a-b;
        }else if(order==="desc"){
            return b-a;
        }
   
    })
    return sorted
}

export default useAscendingOrder;
