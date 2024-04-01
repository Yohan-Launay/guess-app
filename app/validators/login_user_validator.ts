import vine from '@vinejs/vine'

/**
 * Validator to validate the payload when creating
 * a new login user.
 */
export const createLoginUserValidator = vine.compile(
  vine.object({
    email: vine.string().email().trim().escape().minLength(3).maxLength(255),
    password: vine.string().minLength(9).maxLength(32),
  })
)

/**
 * Validator to validate the payload when updating
 * an existing login user.
 */
export const updateLoginUserValidator = vine.compile(vine.object({}))
