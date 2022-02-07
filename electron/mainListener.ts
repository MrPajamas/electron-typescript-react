import { ipcMain, nativeTheme } from 'electron'

export default () => {
  ipcMain.on('message', (_, message) => {
    console.log(message)
  })

  ipcMain.handle('dark-mode:toggle', () => {
    if (nativeTheme.shouldUseDarkColors) {
      nativeTheme.themeSource = 'light'
    } else {
      nativeTheme.themeSource = 'dark'
    }
    return nativeTheme.shouldUseDarkColors
  })
}