import {Component, PropTypes} from 'react';

const initialSortState = {
    sortBy: null,
    sortReverseOrder: false
};
const initialState = Object.assign({
    columnOrder: null
}, initialSortState);

export const colClass = 'ceki-table__col';
export const colClassActive = 'ceki-table__col ceki-table__col--active';

export const thClass = 'ceki-table__th';
export const thClassDrag = 'ceki-table__th-drag';
export const thClassText = 'ceki-table__th-text';
export const thClassMove = 'ceki-table__th--move';

export const thClassDragZone = 'ceki-table__th-dragzone';
export const thClassDragZoneActive_ = `${thClassDragZone}--active`;
export const thClassDragZoneBefore = `${thClassDragZone} ${thClassDragZone}--before`;
export const thClassDragZoneAfter = `${thClassDragZone} ${thClassDragZone}--after`;

export const thClassActive = 'ceki-table__th ceki-table__th--active';
export const thClassActiveReverse = 'ceki-table__th ceki-table__th--active ceki-table__th--reverse';

export const bodyMoveClass = 'ceki-table-move';

class CekiTable extends Component {
    constructor() {
        super();
        this.state = initialState;
    }

    handleHeaderClick(header) {
        let state = {sortBy: header};
        if (header === this.state.sortBy) {
            let {sortReverseOrder} = this.state;
            if (sortReverseOrder !== initialSortState.sortReverseOrder) {
                return this.setState(initialSortState);
            }
            state.sortReverseOrder = !this.state.sortReverseOrder;
        }
        this.setState(state);
    }

    getSortedRows(rows) {
        let sortBy = this.state.sortBy;
        let sortByIndex = this.props.headers.indexOf(sortBy);
        let sortReverseOrder = this.state.sortReverseOrder;
        if ((sortBy === null) || (sortBy === undefined)) {
            return rows;
        }
        let rowsCopy = rows.concat();
        let prevLess = sortReverseOrder ? 1 : -1;
        let prevMore = sortReverseOrder ? -1 : 1;
        // TODO: cache
        return rowsCopy.sort((prevRow, nextRow) => {
            let prevVal = prevRow[sortByIndex];
            let nextVal = nextRow[sortByIndex];
            if (prevVal < nextVal) {
                return prevLess;
            }
            if (prevVal > nextVal) {
                return prevMore;
            }
            return 0;
        });
    }

    getSortedColumns(headers, rows) {
        // TODO: cache
        let {columnOrder} = this.state;
        if (!columnOrder) {
            return {headers, rows};
        }
        let sortedRows = [];
        for (let i = 0; i < rows.length; i++) {
            let currentRow = rows[i];
            let newRow = [];
            for (let i = 0; i < columnOrder.length; i++) {
                let sortedHeader = columnOrder[i];
                let currentIndex = headers.indexOf(sortedHeader);
                newRow.push(currentRow[currentIndex]);
            }
            sortedRows.push(newRow);
        }
        return {headers: columnOrder, rows: sortedRows};
    }

    changeOrder(currentIndex, newIndex) {
        let order = this.state.columnOrder || this.props.headers.concat();
        let maxIndex = order.length - 1;
        newIndex = Math.min(newIndex, maxIndex);
        newIndex = Math.max(0, newIndex);
        let columnName = order[currentIndex];
        order.splice(currentIndex, 1);
        order.splice(newIndex, 0, columnName);
        this.setState({columnOrder: order});
    }

    moveAt(element, clientX) {
        element.style.left = clientX + 'px';
    }

    handleTableMouseDown(e) {
        if (!e.target.classList.contains(thClassDrag)) {
            return;
        }
        let originalElement = e.target.parentNode;
        originalElement.classList.add(thClassMove);
        let dragElement = originalElement.cloneNode(true);
        let currentIndex = Number(
            dragElement.getAttribute('data-column-index')
        );
        Array.from(dragElement.getElementsByClassName(thClassDragZone)).forEach(
            (zone) => zone.remove()
        );
        dragElement.style.position = 'fixed';
        dragElement.style.top = e.clientY + 'px';
        dragElement.style.pointerEvents = 'none';
        document.body.classList.add(bodyMoveClass);
        document.body.appendChild(dragElement);
        this.moveAt(dragElement, e.clientX);

        let mousemove = (e) => {
            let {target} = e;
            if (target.classList.contains(thClassDragZone)) {
                let removeClass = (e) => {
                    target.classList.remove(thClassDragZoneActive_);
                    target.removeEventListener('mouseout', removeClass);
                };
                target.addEventListener('mouseout', removeClass);
                target.classList.add(thClassDragZoneActive_);
            }
            this.moveAt(dragElement, e.clientX);
            return false;
        };
        let mouseup = (e) => {
            let {target} = e;
            document.removeEventListener('mousemove', mousemove, true);
            document.removeEventListener('mouseup', mouseup, true);
            document.body.removeChild(dragElement);
            document.body.classList.remove(bodyMoveClass);
            originalElement.classList.remove(thClassMove);
            if (target.classList.contains(thClassDragZone)) {
                console.log(target);
                let wantIndex = Number(
                    target.getAttribute('data-target-column-index')
                );
                this.changeOrder(currentIndex, wantIndex);
            }
        };
        document.addEventListener('mousemove', mousemove, true);
        document.addEventListener('mouseup', mouseup, true);
        return false;
    }

    render() {
        let {headers, rows} = this.getSortedColumns(
            this.props.headers,
            this.props.rows
        );
        rows = this.getSortedRows(rows);

        let {sortBy, sortReverseOrder} = this.state;
        let thActive = sortReverseOrder ?
            thClassActiveReverse : thClassActive;
        return (
            <table ref="table" className="ceki-table"
                onMouseDown={this.handleTableMouseDown.bind(this)}
            >
                <colgroup>
                    {headers.map((header) =>
                        <col key={header} className={
                            sortBy === header ? colClassActive : colClass
                        }/>
                    )}
                </colgroup>
                <thead>
                    <tr key={headers}>
                        {headers.map((header, index) =>
                            <th key={header}
                                className={
                                    sortBy === header ? thActive : thClass
                                }
                                onClick={() => this.handleHeaderClick(header)}
                                data-column-index={index}
                            >
                                <div className={thClassDragZoneBefore}
                                    data-target-column-index={index - 1}/>
                                <div className={thClassDragZoneAfter}
                                    data-target-column-index={index + 1}/>
                                <span className={thClassDrag}>═</span>
                                <span className={thClassText}>{header}</span>
                            </th>
                        )}
                    </tr>
                </thead>
                <tbody>
                {rows.map((row) =>
                    <tr key={row}>
                        {row.map((cell, index) =>
                            <td key={cell}>
                                {cell}
                            </td>
                        )}
                    </tr>
                )}
                </tbody>
            </table>
        );
    }
}

CekiTable.propTypes = {
    headers: PropTypes.array.isRequired,
    rows: PropTypes.arrayOf(PropTypes.array).isRequired
};

export default CekiTable;
