import isImage from './index'

describe('is-image-2', () => {

  it('returns true if the file name has an image extension', () => {
    expect(isImage('filename.jpg')).toBeTruthy()
  })
  it('returns true if the file name has an image extension', () => {
    expect(isImage('filename.png')).toBeTruthy()
  })
  it('returns true if the file name has an image extension', () => {
    expect(isImage('filename.gif')).toBeTruthy()
  })
  it('returns true if the file name has an image extension', () => {
    expect(isImage('filename.jpeg')).toBeTruthy()
  })
  it('returns false if the file name does not have an image extension', () => {
    expect(isImage('filename.mov')).toBeFalsy()
  })

})
