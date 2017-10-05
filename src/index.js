import fileExtension from 'file-extension'
import imageExtensions from 'image-extensions'

export default function (filepath) {
  const ext = fileExtension(filepath)
  const lowerCaseExt = ext.toLowerCase()
  return imageExtensions.some(ext => ext === lowerCaseExt)
}
