import {startups} from '../data/data.js'


export const getDataByPathParams = (req, res)=>{

    const {field , terms} = req.params
    const allowedFields = ['country', 'continent', 'industry']


    if(!allowedFields.includes(field)){
        return res.status(404).json({message:'Read the Documentation the Field is not Allowed'})
    }


    const filteredData = startups.filter(data => data[field].toLowerCase() === terms)

    res.json(filteredData)
}