
export default (state = {
    result: {data:[
        
    ]}
}, action) => {
    console.log("type action", action.type);
    switch(action.type){

        case 'SIMPLE_ACTION':
            return {
                result: action.payload
            }
        case 'PAGINATION_ACTION':
            
            return {
                result: action.payload
            }
        default:
            return state
    }
}