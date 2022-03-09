import { GatsbyNode } from "gatsby"

export const createPages: GatsbyNode["createPages"] = ({ actions }) => {
  actions.createRedirect({
    fromPath: "/",
    toPath: "/en",
    isPermanent: true,
    redirectInBrowser: true,
  })
}
