const createWindowsInstaller = require('electron-winstaller').createWindowsInstaller
const path = require('path')

getInstallerConfig()
  .then(createWindowsInstaller)
  .catch((error) => {
    console.error(error.message || error)
    process.exit(1)
  })

function getInstallerConfig () {
  console.log('creating windows installer')
  const rootPath = path.join('./')
  const outPath = path.join(rootPath, 'release-builds')

  return Promise.resolve({
    //Directorio donde creo el instalador
    appDirectory: path.join(outPath, 'release-builds/ejemploelectron-win32-ia32/'),
    authors: '',
    noMsi: true,
    outputDirectory: path.join(outPath, 'windows-installer'),
    //Nombre del ejecutable
    exe: 'ejemploelectron.exe',
    //Nombre del instalador
    setupExe: 'ElectronAppInstaller.exe',
    setupIcon: path.join(rootPath, 'icon.ico')
  })
}