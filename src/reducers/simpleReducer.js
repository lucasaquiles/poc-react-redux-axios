
export default (state = {
    result: {
        load: true,
        data:[]
    }
}, action) => {
    console.log("type action", state);
    switch(action.type){

        case 'SIMPLE_ACTION':
            return {
                load: false,
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