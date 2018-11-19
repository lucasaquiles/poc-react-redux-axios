import React from 'react';
import { shallow, mount, render } from  'enzyme';

import PaginatorComponent from '../PaginatorComponent'

describe('Paginator', () => {

    it('should render ', ()=> {
        const component = shallow (<PaginatorComponent debug />)
        expect(component).toMatchSnapshot();
    });
})