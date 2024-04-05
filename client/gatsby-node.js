const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = async ({
  node,
  loadNodeContent,
  actions: { createNodeField },
}) => {
  if (node.name !== "example") return

  try {
    // Ensure Gatsby loads the item into memory so that its content becomes
    // available in the GraphQL File node. We create a child node with the file
    // content using `createNodeField` to ensure LMDB is updated. Note that
    // `internal.content` is for memoization and should not be used directly.
    const nodeContent = await loadNodeContent(node)
    createNodeField({ node, name: `content`, value: nodeContent })
  } catch (error) {
    console.error(error)
  }
}

exports.sourceNodes = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type SiteSiteMetadata implements Node {
      logo: File @fileByRelativePath
    }
  `
  createTypes(typeDefs)
}
