import chai from 'chai';
import {shallow} from 'enzyme';
chai.should();

import CekiTable, {
    colClassActive,
    colClassActiveReverse
} from '../ceki-table/CekiTable.jsx';
import {header, columnList} from './utils';

const HEADERS = Object.freeze(['name', 'sex', 'age']);
const ROWS = Object.freeze([
    ['Alex', 'Male', 10],
    ['Bella', 'Female', 13],
    ['Mona', 'Female', 9]
]);
const UNSORTED_NAMES = Object.freeze(['Alex', 'Bella', 'Mona']);
const NAMES_BY_NAME = Object.freeze(['Alex', 'Bella', 'Mona']);
const NAMES_BY_AGE = Object.freeze(['Mona', 'Alex', 'Bella']);
const NAMES_BY_AGE_REVERSED = NAMES_BY_AGE.concat().reverse();
const AGES_BY_AGE = Object.freeze(['9', '10', '13']);

describe('<CekiTable/>', () => {
    let element = <CekiTable headers={HEADERS} rows={ROWS}/>;

    it('should sort by column after click on header', () => {
        const TARGET_COLUMT = 0;
        let wrapper = shallow(element);
        header(wrapper, 0).simulate('click');
        columnList(wrapper, TARGET_COLUMT).should.be.deep.equal(NAMES_BY_NAME);

        let col = wrapper.find('colgroup > col').at(TARGET_COLUMT);
        chai.expect(col.hasClass(colClassActive)).to.be.true;
    });

    it('should sort all columns after click on header', () => {
        let wrapper = shallow(element);
        header(wrapper, 2).simulate('click');
        columnList(wrapper, 0).should.be.deep.equal(NAMES_BY_AGE);
        columnList(wrapper, 2).should.be.deep.equal(AGES_BY_AGE);
    });

    it('should sort and change order after 2x click on header', () => {
        const TARGET_COLUMN = 2;
        let wrapper = shallow(element);
        for (let count = 0; count < 2; count++) {
            header(wrapper, TARGET_COLUMN).simulate('click');
        }
        columnList(wrapper, 0).should.be.deep.equal(NAMES_BY_AGE_REVERSED);

        let col = wrapper.find('colgroup > col').at(TARGET_COLUMN);
        chai.expect(col.hasClass(colClassActive)).to.be.true;
    });

    it('should reset sort after 3x click on header', () => {
        const TARGET_COLUMN = 2;
        let wrapper = shallow(element);
        for (let count = 0; count < 3; count++) {
            header(wrapper, TARGET_COLUMN).simulate('click');
        }
        columnList(wrapper, 0).should.be.deep.equal(UNSORTED_NAMES);

        let col = wrapper.find('colgroup > col').at(TARGET_COLUMN);
        chai.expect(col.hasClass(colClassActiveReverse)).to.not.be.true;
    });
});
