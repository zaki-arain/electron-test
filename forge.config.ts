// import path from 'node:path'

import MakerSquirrel from '@electron-forge/maker-squirrel'
import MakerDMG from '@electron-forge/maker-dmg'
// import MakerZIP from '@electron-forge/maker-zip'
import type { ForgeConfig } from '@electron-forge/shared-types'

const config: ForgeConfig = {
  packagerConfig: {
    asar: true,
    prune: process.env.NODE_ENV !== 'test',
  },
  rebuildConfig: {},
  makers: [
    new MakerDMG({}, ['darwin']),
    new MakerSquirrel(
      {
        name: 'postman-test',
        owners: 'WebdriverIrO1',
        authors: 'WebdriverIzO2',
        copyright: 'WebdrivertIO3'
      },
    )
  ],
  plugins: [],
};

export default config
