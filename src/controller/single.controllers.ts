import { Request, Response } from "express";
import { lkList } from "../../linkedList/single/lkList";
import { MENU } from "../enum/MENU";
import { RESPONSE_MESSAGES } from "../enum/response.messages";
class SingleController {
    async singleHandler(req:Request,res:Response) {
        const payload = {
            choice: parseInt(req.query.choice as string) as number | 0,
            value: req.query.value as string,
        };
        const menu = {
            1: MENU.INSERT_ELEMENT_BEGINNING,
            2: MENU.TRAVERSE_ALL_ELEMENT,
            3: MENU.INSERT_ELEMENT_END,
            4: MENU.DELETE_ELEMENT_BEGINNING,
        };
        let response;
        let val: number = 0;
        console.log("------------", payload);
        switch(payload.choice) {
            case 1:
                val = parseInt(payload.value);
                if(!val) {
                    return res.send({
                        result:{prompt: RESPONSE_MESSAGES.ENTER_VALID_VALUE},
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
            case 3:
                val = parseInt(payload.value);
                if(!val) {
                    return res.send({
                        result:{prompt: RESPONSE_MESSAGES.ENTER_VALID_VALUE},
                        menu:{...menu}
                    })
                }
                response = lkList.insertAtEnd(val);
                return res.send({
                    result:{...response},
                    menu:{...menu}
                })
            case 4:
                    response = lkList.deleteElementFromStart();
                    return res.send({
                        result:{...response},
                        menu:{...menu}
                    })
                
        }
        return res.send(menu);
    }
}
export const singleController = new SingleController();