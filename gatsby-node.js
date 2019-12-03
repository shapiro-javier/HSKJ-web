const path = require('path')

module.exports.onCreateNode = ({node,actions})=>{
    const {createNodeField} =  actions
    if(node.internal.type==='MarkdownRemark'){
        const slug = path.basename(node.fileAbsolutePath,'.md')
        console.log("000000000000",slug)

        createNodeField({
            node,
            name:'slug',
            value:slug
        })

    }
} 
module.exports.createPages = async({graphql,actions})=>{
    const {createPage} = actions
    const blogTemplate = path.resolve('./src/templates/blog.js')

   const response = await graphql(`
    query{
        allMarkdownRemark{
            edges{
                node{
                    fields{
                        slug
                    }
                }
            }
        }
    }
    `)
response.data.allMarkdownRemark.edges.forEach(e=>{
    createPage({
        component : blogTemplate,
        path: `/math/${e.node.fields.slug}`,
        context: {
            slug:e.node.fields.slug
        }
    })
})

}
