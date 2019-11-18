import {
    emailValidate, requiredValidate
} from '../../shared/validations';

export const passwordValidator = password => {
    result = { passwordError: "" }

    if (!requiredValidate(password)) {
        return { passwordError: "Senha é obrigatória" }
    }

    return result;
}

export const nameValidator = name => {
    result = { nameError: "" }

    if (!requiredValidate(name)) {
        return { nameError: "Nome é obrigatório" }
    }

    return result;
}

export const usernameValidator = username => {
    result = { usernameError: "" }

    if (!requiredValidate(username)) {
        return { usernameError: "Usuário é obrigatório" }
    }

    return result;
}

export const emailValidator = email => {
    result = { emailError: "" }

    if (!emailValidate(email)) {
        return { emailError: "Email é obrigatório" }
    }

    return result;
}


