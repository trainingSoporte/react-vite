import { useEffect, useState } from "react"

import { commandRepository } from "../../../infrastructure/repository/commands"
import { CommandItem } from "../../../interfaces";
import { CardCommand } from "../../components";

// TODO
//* Refactor components CardCommand
//* Refactor useEffect add exception handle
//* Add loading component
//* Make Styles

export const EcommerceControlPage = () => {


  const [commandList, setCommandList] = useState<CommandItem[]>([]);

  useEffect(() => {

    console.log('in effect');
    (async() => {
      const _commandList = await commandRepository.getCommandList();
      setCommandList(_commandList);
    })();

    return () => {
      console.log('out effect');
      
    }
  }, [])
  
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
