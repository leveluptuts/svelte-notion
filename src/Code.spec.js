import Code from './Code.svelte'
import { mount } from 'cypress-svelte-unit-test'

describe('Code', () => {
  it('has syntax highlighting', () => {
    mount(Code, {
      props: {
        lang: 'js',
        code: '// this is a component test\n' + 'const cy = "Cypress"',
      },
    })
    cy.contains('.hljs-comment', '// this is a component test')
    cy.contains('.hljs-keyword', 'const')
  })
})
