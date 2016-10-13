import {Component} from 'react';
import CekiTable from './CekiTable.jsx';

const headers = ['title', 'studio', 'year', 'score'];
const rows = [
    ['Great Teacher Onizuka', 'Studio Pierrot', 1999, 9.2140],
    ['Code Geass: Lelouch of the Rebellion R2', 'Sunrise', 2008, 9.1745],
    ['Fullmetal Alchemist: Brotherhood', 'Bones', 2009, 9.1692],
    ['Clannad After Story', 'Kyoto Animation', 2008, 9.1577],
    ['Steins;Gate', 'White Fox', 2011, 9.1529]
];

export default class AnimeTable extends Component {
    constructor() {
        super();
        this.state = {
            rows: rows.slice(0, 3)
        };
    }

    getMore() {
        this.setState({
            rows: rows.slice(0, this.state.rows.length + 1)
        });
    }

    render() {
        return (
            <div>
                <CekiTable headers={headers} rows={this.state.rows}/>
                <button onClick={this.getMore.bind(this)} disabled={
                        rows.length === this.state.rows.length
                }>get more anime pls</button>
            </div>
        );
    }
}
