

export const ResponseJson = (res, code, obj) => {
    return res.status(code).json(obj)
}