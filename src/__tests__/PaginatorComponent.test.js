import React from 'react';
import { shallow, mount, render } from  'enzyme';
import configureStore from 'redux-mock-store';
import PaginatorComponent from '../PaginatorComponent';

const mockStore = configureStore();
const store = mockStore({});

describe('Paginator', () => {

    it('should render ', ()=> {


        const total={total_pages:2}  
        const current={page:1}

        const wrapper = mount (<PaginatorComponent  total={total} current={current} />, {context: {store}});
        
        expect(wrapper).toMatchSnapshot();
       
    });
})