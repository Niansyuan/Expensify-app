import moment from "moment";

const filters={
    text:'',
    sortBy:'date',
    startDate:undefined,
    endDate:undefined
}

const altFilters={
    text:'water bill',
    sortBy:'amount',
    startDate:moment(0),
    endDate:moment(0).add(4,'days')
}

export {filters,altFilters};