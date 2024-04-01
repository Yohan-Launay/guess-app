import vine from '@vinejs/vine'

/**
 * Validator to validate the payload when creating
 * a new register user.
 */
export const createRegisterUserValidator = vine.compile(
  vine.object({
    username: vine.string().trim().escape().minLength(3).maxLength(255),
    email: vine.string().email().trim().escape().minLength(3).maxLength(255),
    password: vine.string().minLength(9).maxLength(32),
  })
)

/**
 * Validator to validate the payload when updating
 * an existing register user.
 */
export const updateRegisterUserValidator = vine.compile(
  vine.object({
    username: vine.string().trim().escape().minLength(3).maxLength(255),
    email: vine.string().email().trim().escape().minLength(3).maxLength(255),
    password: vine.string().minLength(9).maxLength(32),
  })
)
