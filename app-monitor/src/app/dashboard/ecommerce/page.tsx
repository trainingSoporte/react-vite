import { commandRepository } from "@/infrastructure/repository/commands";
import { CommandItem } from "@/interfaces";
import { CardCommand } from "@/presentation/components/card-command/CardCommand";

const getCommandItemList = async():Promise<CommandItem[]> => {
    return  await commandRepository.getCommandList();
     
}

export default async function EcommerceControlPage() {

    const commandList:CommandItem[] = await getCommandItemList();

    return (
        <>
        <div>
        EcommerceMenuOptionsPage
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
      </>
    )
}