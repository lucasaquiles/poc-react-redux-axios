import axios from 'axios'

export const simpleAction = () => (dispatch) => {

    return axios.get('https://reqres.in/api/users')
        .then(resp=>{
            return dispatch({
                type: 'SIMPLE_ACTION',
                payload: resp.data
        });
    }).catch(error => {
        throw(error);
    }); 
}

export const pagitationAction = (page) => (dispatch) => {
    console.log("page selecionado", page);
    return axios.get('https://reqres.in/api/users?page='+page)
        .then(resp=>{
            return dispatch({
                type: 'PAGINATION_ACTION',
                payload: resp.data
        });
    }).catch(error => {
        throw(error);
    }); 
}