const regexps = {
    first_name: /^[A-ZА-ЯЁ]+[A-Za-zА-Яа-яЁё-]{0,}/gm,
    last_name: /^[A-ZА-ЯЁ]+[A-Za-zА-Яа-яЁё-]{0,}/gm,
    login: /^[A-Za-z]+([A-Za-z0-9-_]){2,19}/gm,
    email: /(^[0-9A-Za-z]+[-._0-9A-Za-z]*)@(?:[A-Za-z0-9](?:[A-Za-z0-9-_]{0,}[A-Za-z0-9])?\.)+[A-Za-z0-9]{2,}.?$/,
    password: /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,40}$/gm,
    phone:  /^[+0-9]+([0-9]){9,14}/gm,
    messages: /.+/gm,
}

export const validateField = (value: string, field: string) => {
    const reg: RegExp = regexps[field];
    if (!!reg) return (new RegExp(reg)).test(value)
    else return true
}