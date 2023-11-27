export type TreeNode = {
  name: string
  children: string | TreeNode[]
}

export const domTree = (tree: TreeNode, arr: string[] = []) => {
  if (Array.isArray(tree.children)) {
    arr.push(`<${tree.name}>`)
    for (let i = 0; i < tree.children.length; i++) {
      domTree(tree.children[i], arr)
    }
    arr.push(`</${tree.name}>`)
  } else {
    arr.push(`<${tree.name}>${tree.children}</${tree.name}>`)
  }
  return arr
}
