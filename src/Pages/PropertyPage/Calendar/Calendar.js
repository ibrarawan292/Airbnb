import React, { useState } from 'react'
import './Calendar.css'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';

// import { addDays, format } from 'date-fns';

const Calendar = () => {

    const [startDate, setStartDate] = useState(new Date());
    const [ endDate, setEndDate] = useState(new Date());


    const handleSelect = (ranges) => {
        console.log(ranges)
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    };

    const clearDates = () => {
        
    }
    
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection"

    }

   
  return (
    <div className='calendar-wrapper'>
        <div className="calendar-inner">
            <h1>Select check-in date</h1>
            <p>Add your travel dates for exact pricing</p>
        </div>

        <div className="calendar-picker">
            <DateRangePicker ranges={[selectionRange]}
             minDate={new Date()}
             rangeColors={['#FD5B61']}
             onChange={handleSelect}
             dateFormat="MM/yyyy/dd"
            />
        </div>

        <div className="calendar-reset">
            <button onClick={clearDates}>Clear Dates</button>
        </div>
    </div>
  )
}

export default Calendar