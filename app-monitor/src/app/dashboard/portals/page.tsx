import { commandRepository } from "@/infrastructure/repository/commands";
import { CommandItem } from "@/interfaces";
import { CardCommand } from "@/presentation/components/card-command/CardCommand";

const getCommandItemList = async(database:string):Promise<CommandItem[]> => {
    return  await commandRepository.getCommandList(database);
     
}

export default async function PortalsControlPage() {

    const commandList:CommandItem[] = await getCommandItemList('portales');

    return (
        <div className="flex flex-col items-center bg-zinc-200 rounded-md p-2 shadow-lg">
        <div className="text-sm text-blue-400 text-left w-full">
        Controles de Portales
        </div>
        <div
          className="flex flex-col gap-2 w-full pl-6 py-2"
        >
         {
          commandList.map((commandItem:CommandItem) => (
            <CardCommand key={commandItem.id} {...commandItem}/>
          ))
         }
  
        </div>
      </div>
    )
}