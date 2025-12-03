import {
  emailSchema,
  nameSchema,
  phoneSchema,
  descriptionSchema,
} from "../../../utils/validation/ValidationSchemas";

export const LanguageValidationSchema = {
  // country_id: nameSchema,
  locale: nameSchema,
  // city: nameSchema,
  name: nameSchema,
};
