//dummy data for test
import moment from 'moment';

export default[{
    id:'1',
    description:'Gum',
    note:'',
    amount:100,
    createAt:1000
},{
    id:'2',
    description:'Rent',
    note:'',
    amount:8500,
    createAt:moment(0).subtract(4,'days').valueOf()
},{
    id:'3',
    description:'Phone',
    note:'',
    amount:1200,
    createAt:moment(0).add(4,'days').valueOf()
}]