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