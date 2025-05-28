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
            { path: 'userId', select: 'username' }
        ])

        // const result = await res.getModelList(Blog, {}, ['categoryId', 'userId']);

        res.status(200).send({
            error: false,
            details: await res.getModelListDetails(Blog),
            result

        })
    },

    create: async (req,res) => {

        /*
        #swagger.tags = ["Blogs"]
        #swagger.summary = "Create Blog"
        #swagger.parameters['body'] = {
            in: 'body',
            required: true,
            schema: {
               $ref: "#/components/schemas/Blog"
            }
        }
        */

        const result = await Blog.create(req.body)

        res.status(201).send({
            error:false,
            result
        })


    },
    read: async (req,res) => {

        /*
        #swagger.tags = ["Blogs"]
        #swagger.summary = "Get Single Blog"
        */

        const result = await Blog.findById(req.params.id).populate([
            { path: 'categoryId', select: 'name' },
            { path: 'userId', select: 'username email' }
        ])

        if(!result) throw new CustomError("Blog not found",404);

        res.status(200).send({
            error:false,
            result
        })

    },

    update: async (req, res) => {
        /*
        #swagger.tags = ["Blogs"]
        #swagger.summary = "Update Blog"
        #swagger.parameters['body'] = {
            in: 'body',
            required: true,
            schema: {
               $ref: "#/components/schemas/Blog"
            }
        }
        */


        const result = await Blog.findByIdAndUpdate(req.params.id, req.body, {
            runValidators: true,
            new: true,
        });

    if (!result) throw new CustomError("Update failed, blog not found", 404);

        res.status(202).send({
        error: false,
        result,
        });
  },

  deletee: async (req, res) => {
        /*
            #swagger.tags = ["Blogs"]
            #swagger.summary = "Delete Blog"
        */

        const result = await Blog.findByIdAndDelete(req.params.id)

        if (!result) throw new CustomError("Delete failed, blog not found or already deleted", 404);

        res.status(200).send({
            error: false,
            result
        });
    },

    }