import Notion from './Notion.svelte'
import { mount } from 'cypress-svelte-unit-test'

describe('Notion', () => {
  it('renders blocks', () => {
    // we could move this object into a fixture or import from separate file
    const blocks = [
      {
        type: 'header',
        properties: {
          title: [['Notion test']],
        },
      },
      {
        type: 'page',
        properties: {
          title: [['Page']],
        },
      },
      {
        type: 'text',
        properties: {
          title: [['This is a Cypress component test']],
        },
      },
      {
        type: 'divider',
      },
      {
        type: 'code',
        properties: {
          title: [['some code here // plus comment']],
          language: [['javascript']],
        },
      },
    ]
    mount(
      Notion,
      {
        props: {
          blocks,
        },
      },
      {
        cssFile: 'public/global.css',
      },
    )
  })
})
