// YourComponent.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react'

import ButtonComponent from './button'

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof ButtonComponent> = {
  component: ButtonComponent
}

export default meta
type Story = StoryObj<typeof ButtonComponent>

export const Primary: Story = {
  args: {
    bg: 'bg-cyan-400',
    label: 'primary'
  }
}
