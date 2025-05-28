"use strict"

const Blog =require('../models/blog')
const CustomError = require('../helpers/customError');


module.exports = {
    list: async (req, res) => {

        /*
        #swagger.tags = ["Blogs"]
        #swagger.summary = "List Blogs"
        #swagger.description = `
            You can use <u>filter[] & search[] & sort[] & page & limit</u> queries with endpoint.
            <ul> Examples:
                <li>URL/?<b>filter[field1]=value1&filter[field2]=value2</b></li>
                <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                <li>URL/?<b>sort[field1]=asc&sort[field2]=desc</b></li>
                <li>URL/?<b>limit=10&page=1</b></li>
            </ul>
        */
    

        const result = await res.getModelList(Blog, {},[
            { path: 'categoryId', select: 'name' },
            { path: 'userId', select: 'username email' }
        ])

        res.status(200).send({
            error: false,
            details: await res.getModelListDetails(Blog),
            result

        })
    }



}