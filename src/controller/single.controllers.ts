import { Request, Response } from "express";
import { lkList } from "../../linkedList/single/lkList";
class SingleController {
    async singleHandler(req:Request,res:Response) {
        const payload = {
            choice: parseInt(req.query.choice as string) as number | 0,
            value: req.query.value as string,
        };
        const menu = {
            1: "Insert element at beginning",
            2: "Traverse All the element",
        };
        let response;
        console.log("------------", payload);
        switch(payload.choice) {
            case 1:
                const val: number = parseInt(payload.value);
                if(!val) {
                    return res.send({
                        result:{prompt:"Enter the valid value"},
                        menu:{...menu}
                    })
                }
                response = lkList.insertAtBeginning(val);
                return res.send({
                    result:{...response},
                    menu:{...menu}
                })
            break;
            case 2:
                response = lkList.traverse();
                return res.send({
                    result:{...response},
                    menu:{...menu}
                })
            break;
        }
        return res.send(menu);
    }
}
export const singleController = new SingleController();