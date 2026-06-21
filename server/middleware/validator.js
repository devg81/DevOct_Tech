import Joi from "joi";

const intakeSchema = Joi.object({
  name: Joi.string().min(1).max(120).required(),
  email: Joi.string().email().required(),
  budget: Joi.string().max(40).allow(""),
  message: Joi.string().min(1).max(2000).required(),
});

export function validateIntake(req, res, next) {
  const { error } = intakeSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ received: false, error: error.details[0].message });
  }
  next();
}
