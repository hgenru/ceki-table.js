import chai from 'chai';
import {shallow} from 'enzyme';
chai.should();

import CekiTable, {thClassText} from '../ceki-table/CekiTable.jsx';
import {columnList} from './utils';

const HEADERS = Object.freeze(['name', 'sex', 'age']);
const ROWS = Object.freeze([
    ['Alex', 'Male', 10],
    ['Bella', 'Female', 13],
    ['Mona', 'Female', 9]
]);

describe('<CekiTable/>', () => {
    it('should change column order', () => {
        let element = <CekiTable headers={HEADERS} rows={ROWS}/>;
        let wrapper = shallow(element);
        wrapper.setState({columnOrder: ['sex', 'name', 'age']});
        let headers = wrapper.find(`.${thClassText}`);
        headers.at(0).text().should.be.equal('sex');
        headers.at(1).text().should.be.equal('name');
        columnList(wrapper, 0).should.be.deep.equal(
            ['Male', 'Female', 'Female']);
        columnList(wrapper, 1).should.be.deep.equal(
            ['Alex', 'Bella', 'Mona']);
    });

    it('should change column order by .changeOrder(columnName, newIndex)', () => {
        let element = <CekiTable headers={HEADERS} rows={ROWS}/>;
        let wrapper = shallow(element);
        wrapper.instance().changeOrder(2, 0);
        wrapper.instance().state.columnOrder.should.be.deep.equal(
            ['age', 'name', 'sex']);
    });
});
