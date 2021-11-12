//用來模擬test中的moment()
import {jest} from '@jest/globals'
const moment=jest.requireActual('moment');

export default (timeStamp=0)=>{
    return moment(timeStamp)
}