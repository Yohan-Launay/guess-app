import vine from '@vinejs/vine'

/**
 * Validator to validate the payload when creating
 * a new label.
 */
export const createLabelValidator = vine.compile(
  vine.object({
    name: vine.string(),
  })
)

/**
 * Validator to validate the payload when updating
 * an existing label.
 */
export const updateLabelValidator = vine.compile(
  vine.object({
    name: vine.string(),
  })
)
