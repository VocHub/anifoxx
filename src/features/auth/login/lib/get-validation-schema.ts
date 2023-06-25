import { object, string } from "yup"

export const getValidationSchema = () =>
  object({
    email: string()
      .email("Неверный формат email")
      .required("Обязательное поле"),
    password: string()
      .min(8, "Минимальная длина пароля - 8 символов")
      .max(50, "Максимальная длина пароля - 50 символов")
      .matches(/[A-Z]/, "Пароль должен содержать хотя бы одну заглавную букву")
      .matches(/[0-9]/, "Пароль должен содержать хотя бы одну цифру")
      .matches(
        /^[a-zA-Z0-9!"#$%&'()*+,\-./:;<=>?@\[\]^_{|}~]+$/,
        "Пароль должен состоять только из латинских символов"
      )
      .required("Обязательное поле"),
  })
