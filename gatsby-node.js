const path = require('path')

module.exports.createPages = async({graphql,actions})=>{
    const {createPage} = actions
    const blogTemplate = path.resolve('./src/templates/blog.js')

   const response = await graphql(`
    query{
        allContentfulBLogPost {
           edges{
               node{
                   slug
               }
           }
       }
    }
    `)
response.data.allContentfulBLogPost.edges.forEach(e=>{
    createPage({
        component : blogTemplate,
        path: `/about/${e.node.slug}`,
        context: {
            slug:e.node.slug
        }
    })
})

}
