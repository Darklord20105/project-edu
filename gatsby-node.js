// const path = require(`path`)

// exports.createPages = ({ graphql, actions }) => {
//     const { createPage } = actions
//     return graphql(`
// query {
//     allContentfulBlogPost {
//         edges {
//             node {
//                 slug
//             }
//         }
//     }
// }
//     `).then(result => {
//         result.data.allContentfulBlogPost.edges.forEach(({ node }) => {
//             createPage({
//                 path: `/blog/${node.slug}`,
//                 component: path.resolve(`./src/templates/post.js`),
//                 context: {
//                     slug: node.slug,
//                 },
//             })
//         })
//     })
// }

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions

    const blogPost = path.resolve(`./src/templates/post.js`)
    // 1. extract data from GraphQL
    return graphql(
        `
        query {
            allContentfulBlogPost(
                sort: { fields: [publishedDate], order: DESC }
                limit: 100
                ) {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
        `
    ).then(result => {
        // if (result.errors) {
        //     throw result.errors
        //     console.log(result.errors)
        // }
        const posts = result.data.allContentfulBlogPost.edges

        // 2. create blog post pages
        posts.forEach((post, index) => {
            const previous = index === posts.length - 1 ? null : posts[index + 1].node
            const next = index === 0 ? null : posts[index - 1].node

            createPage({
                path: `/blog/${post.node.slug}`,
                component: blogPost,
                context: {
                    slug: post.node.slug,
                    previous,
                    next,
                },
            })
        })

        // Create blog post list pages
        const postsPerPage = 2;
        const numPages = Math.ceil(posts.length / postsPerPage);

        Array.from({ length: numPages }).forEach((_, i) => {
            createPage({
                path: i === 0 ? `/blog/` : `/blog/${i + 1}`,
                component: path.resolve('./src/pages/blog.js'),
                context: {
                    limit: postsPerPage,
                    skip: i * postsPerPage,
                    numPages,
                    currentPage: i + 1
                },
            });
        });

    })
}

// exports.onCreateNode = ({ node, actions, getNode }) => {
//     const { createNodeField } = actions

//     if (node.internal.type === `ContentfulBlogPost`) {
//         const value = createFilePath({ node, getNode })
//         createNodeField({
//             name: `slug`,
//             node,
//             value,
//         })
//     }
// }

