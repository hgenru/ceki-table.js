import chai from 'chai';
import {shallow} from 'enzyme';
chai.should();

import CekiTable from '../ceki-table/CekiTable.jsx';

describe('<CekiTable/>', () => {
    it('should render headers', () => {
        let headers = ['name', 'sex', 'age'];
        let element = <CekiTable headers={headers} rows={[]}/>;
        let wrapper = shallow(element);
        wrapper.find('thead > tr').should.have.length(1);
        wrapper.find('thead > tr > th').should.have.length(3);
    });

    it('should render multi-line headers', () => {
        let headers = ['name', 'sex', 'age'];
        let element = <CekiTable headers={headers} rows={[]}/>;
        let wrapper = shallow(element);
        wrapper.find('thead > tr').should.have.length(1);
        wrapper.find('thead > tr > th').should.have.length(3);
    });

    it('should render single row', () => {
        let rows = [['Alex', 'Male', 25]];
        let element = <CekiTable headers={[]} rows={rows}/>;
        let wrapper = shallow(element);
        wrapper.find('tbody > tr').should.have.length(1);
        wrapper.find('tbody > tr > td').should.have.length(3);
    });

    it('should render multiple rows', () => {
        let rows = [
            ['Alex', 'Male', '25'],
            ['Plauline', 'Female', 18]
        ];
        let element = <CekiTable headers={[]} rows={rows}/>;
        let wrapper = shallow(element);
        wrapper.find('tbody > tr').should.have.length(2);
        wrapper.find('tbody > tr > td').should.have.length(6);
    });
});
