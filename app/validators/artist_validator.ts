import vine from '@vinejs/vine'

/**
 * Validator to validate the payload when creating
 * a new artist.
 */
export const createArtistValidator = vine.compile(
  vine.object({
    name: vine.string(),
    origin: vine.string(),
    yearsActive: vine.string(),
    nbAlbumStudio: vine.number(),
    imgPath: vine.file({
      size: '10mb',
      extnames: ['jpg', 'png'],
    }),
  })
)

/**
 * Validator to validate the payload when updating
 * an existing artist.
 */
export const updateArtistValidator = vine.compile(
  vine.object({
    name: vine.string(),
    origin: vine.string(),
    yearsActive: vine.string(),
    nbAlbumStudio: vine.number(),
    imgPath: vine.file({
      size: '10mb',
      extnames: ['jpg', 'png'],
    }),
  })
)
