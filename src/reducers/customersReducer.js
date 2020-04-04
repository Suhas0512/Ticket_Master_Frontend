const customersInitial=[]

const customersreducer=(state=customersInitial,action)=>{
    switch(action.type){
        case 'UPDATE_CUSTOMER':{
            return state.map(customer=>{
                if(customer._id==action.payload._id){
                    return {...customer,...action.payload}
                }else{
                    return {...customer}
                }
            })
        }
        case 'REMOVE_CUSTOMER':{
            return state.filter(customer=>customer._id!=action.payload)
        }
        case 'ADD_CUSTOMER':{
            return [...state,action.payload]
        }
        case 'SET_CUSTOMERS':{
            return [...action.payload]
        }
        default:{
            return [...state]
        }
    }
}

export default customersreducer