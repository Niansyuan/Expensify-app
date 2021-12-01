import React from "react";
import { connect } from "react-redux";
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from "../actions/filters.js";
import { DateRangePicker } from "react-dates";

export class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    };

    handleDateChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };
    handleFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }))
    }
    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value)
    }
    onSortChange = (e) => {
        if (e.target.value === "date") {
            this.props.sortByDate()
        };
        if (e.target.value === "amount") {
            this.props.sortByAmount()
        }
    }
    render() {
        return (
            <div className="contain-container">
                <div className="filter">
                    <div className="filter__contain">
                        <input
                            className="text-input"
                            type="text"
                            value={this.props.filters.text}
                            onChange={this.onTextChange}
                            placeholder='Search expenses' />
                    </div>
                    <div className="filter__contain">
                        <select
                            className="select"
                            value={this.props.filters.sortBy}
                            onChange={this.onSortChange}>
                            <option value="date">Date</option>
                            <option value="amount">Amount</option>
                        </select>
                    </div>
                    <div className="filter__contain">
                        <DateRangePicker
                            startDate={this.props.filters.startDate}
                            startDateId={"startDate"}
                            endDate={this.props.filters.endDate}
                            endDateId={"endDate"}
                            onDatesChange={this.handleDateChange}
                            focusedInput={this.state.calendarFocused}
                            onFocusChange={this.handleFocusChange}
                            numberOfMonths={1} //一次顯示幾個月
                            isOutsideRange={() => false}
                            showClearDates={true}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
};
const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate)),
    sortByAmount: () => dispatch(sortByAmount()),
    sortByDate: () => dispatch(sortByDate())
})
export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);