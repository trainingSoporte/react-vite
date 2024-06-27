import { CommandItem } from "../../../interfaces";
import { CommandDTO } from "../../dtos";
import { http } from "../../http";


export const commandRepository = {
    getCommandList: async ():Promise<CommandItem[]> => {
        const commandList = await http.get<CommandDTO[]>('http://localhost:3000/commandList');
        return commandList.map((commandItem:CommandDTO):CommandItem => ({
            id: commandItem.id,
            commandName:commandItem.commandName,
            runPercent: commandItem.runPercent
        }))
    }
}