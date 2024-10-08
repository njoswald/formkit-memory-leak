import { genesisIcons } from "@formkit/icons"
import { rootClasses } from "./formkit.theme"
import { defineFormKitConfig } from '@formkit/vue'
import { createProPlugin, inputs } from '@formkit/pro'

const pro = createProPlugin('{Insert Pro Key}', inputs)

export default defineFormKitConfig(() => ({
  plugins: [pro],
  icons: { ...genesisIcons },
  config: { rootClasses }
}))
