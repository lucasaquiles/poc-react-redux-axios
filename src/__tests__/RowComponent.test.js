import React from 'react';
import { shallow, mount, render } from  'enzyme';
import configureStore from 'redux-mock-store';
import RowComponent from '../RowComponent';
import toJson from 'enzyme-to-json';

const mockStore = configureStore();

const initialState = {

    simpleReducer: {
        result: {
            load: true,
            data:[]
        }
    }
}

const store = mockStore(initialState);

describe('<RowComponent />', () => {

    it('should render row', ()=> {
        
        const info = {"id":1,"first_name":"George","last_name":"Bluth","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"};
        
        const wrapper = mount (<RowComponent info={info} />)
        
        expect(wrapper).toMatchSnapshot();
    });
})