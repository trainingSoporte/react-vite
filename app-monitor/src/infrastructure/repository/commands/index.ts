import { CommandItem } from "../../../interfaces";
import { CommandDTO } from "../../dtos";
import { http } from "../../http";


export const commandRepository = {
    getCommandList: async (database:string):Promise<CommandItem[]> => {
        const data = await http.get<{"commandList":CommandDTO[]}>(`http://localhost:4000/${database}`);
        const commandList:CommandDTO[] = data.commandList
        return commandList.map((commandItem:CommandDTO):CommandItem => ({
            id: commandItem.id,
            commandName:commandItem.commandName,
            runPercent: commandItem.runPercent
        }))
    }
}