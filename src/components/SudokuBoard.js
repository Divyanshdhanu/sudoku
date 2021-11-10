import React, { Component } from 'react'
import SudokuField from './SudokuField';


export default class SudokuBoard extends Component {
    
    render() {
        const {sudoku} = this.props;


        return (
            <div> 
                {/* {JSON.stringify(this.props.sudoku)} */}
                {sudoku.rows.map(row => {
                return <div className="row" key={row.index}>
                        {row.cols.map(field => {
                            return <SudokuField field={field} key={field.col} />
                        })}
                    </div>
                })}
            </div>
        )
    }
}
