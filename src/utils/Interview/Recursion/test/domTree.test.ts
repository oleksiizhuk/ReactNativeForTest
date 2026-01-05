import { domTree, TreeNode } from '../domTree'

export const tree: TreeNode = {
  name: 'body',
  children: [
    {
      name: 'p',
      children: 'Hello ,world',
    },
    {
      name: 'div',
      children: [
        {
          name: 'div',
          children: [
            {
              name: 'p',
              children: 'Hello, inner content',
            },
          ],
        },
        {
          name: 'p',
          children: '',
        },
      ],
    },
  ],
}

describe('domTree', () => {
  it('should correctly convert tree to HTML structure', () => {
    const expectedResult = [
      '<body>',
      '<p>Hello ,world</p>',
      '<div>',
      '<div>',
      '<p>Hello, inner content</p>',
      '</div>',
      '<p></p>',
      '</div>',
      '</body>',
    ]
    expect(domTree(tree, [])).toEqual(expectedResult)
  })
})
