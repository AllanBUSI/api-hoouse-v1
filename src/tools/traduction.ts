import translate from "deepl";

export const DeeplTrad = async({
    lang,
    title,
    description
}) => {
    const [titleTrad, descriptionTrad] = await Promise.all([
        translate({
            free_api: true,
            text: title,
            target_lang: lang,
            auth_key: process.env.DEEPL_AUTH_KEY,
        }),
        translate({
            free_api: true,
            text: description,
            target_lang: lang,
            auth_key: process.env.DEEPL_AUTH_KEY,
        }),
    ]);
    return [titleTrad, descriptionTrad]
}