import { IPostCreateSubcription } from '@interfaces/subcription'
import {Request, Response} from 'express'
import { ResponseJson } from 'src/utils/response';

export const subcriptionController = (req: Request, res: Response) => {
    const body = req.body as IPostCreateSubcription;
    try {
        ResponseJson(res, 201, {
            error: false,
            message: "test"
        })
    } catch(err) {
        ResponseJson(res, 500, {
            error: true,
            message: "test"
        })
    }
}