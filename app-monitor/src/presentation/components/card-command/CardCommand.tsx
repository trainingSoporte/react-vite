"use client"

import { FormEvent, useState } from "react"
import { RunStatus } from "@/interfaces";
import { IconProgressive } from "../icon/IconProgressive";
import { FaCircleCheck, FaCircleXmark, FaGear, FaGears, FaRotateRight } from "react-icons/fa6";
import { FaChevronDown, FaPlay } from "react-icons/fa";



//TODO
//* Refactor IconProgressive
// ! fix React Icons

interface Props {
    commandName: string;
    runPercent: number;
}

export const CardCommand = ({commandName,runPercent}:Props) => {
    const [runStatus, setRunStatus] = useState<RunStatus>({
        isRunning: false,
        isCheckSuccessfully: undefined //! modify -> true, false
    })
    const handleRunCommand = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setRunStatus({
            isRunning: true,
            isCheckSuccessfully: undefined
        })
        return
    }
    return (
        <form
            onSubmit={handleRunCommand}
            className="flex flex-row justify-center items-center gap-2 flex-grow bg-zinc-300 shadow-md
             shadow-zinc-400 hover:shadow-red-200 rounded-md w-11/12 p-1"
        >
            
            <div
                className="p-1 pr-2"
            >
                {/* {
                    (runStatus.isRunning)
                        ? <i className={"fa-solid fa-gear fa-spin text-sm text-red-300"} ></i>
                        : <i className={"fa-solid fa-gears text-sm text-white"} ></i>
                } */}
                {
                    (runStatus.isRunning)
                        ?  <div className="text-sm text-red-300 animate-spin"><FaGear /></div>
                        : <div className="text-sm text-white"><FaGears/></div>
                }
            </div>
            <button
                className="shadow-lg text-sm text-zinc-400 bg-zinc-200 hover:bg-zinc-300 hover:text-white rounded-md px-5 py-2"
            >
                {/* {
                    (runStatus.isRunning)
                        ? <i className="fa-solid fa-play text-blue-400"></i>
                        : (runStatus.isCheckSuccessfully === undefined)
                            ? <i className="fa-solid fa-play"></i>
                            : (runStatus.isCheckSuccessfully)
                                ? <i className="fa-solid fa-rotate-right"></i>
                                : <i className="fa-solid fa-chevron-down"></i>
                } */}
                {
                    (runStatus.isRunning)
                        ? <div className="text-blue-400"><FaPlay/></div>
                        : (runStatus.isCheckSuccessfully === undefined)
                            ? <div className=""><FaPlay/></div>
                            : (runStatus.isCheckSuccessfully)
                                ? <div className=""><FaRotateRight/></div>
                                : <div className=""><FaChevronDown/></div>
                }
            </button>
            <label className="shadow-lg text-sm text-zinc-500 bg-zinc-200 rounded-md p-2 w-4/5">
                {commandName}
                
            </label>
            <div
                className="pr-4"
            >
                <i className="fa-solid fa-circle-info text-sm text-zinc-400 hover:text-blue-500 hover:text-base"></i>
            </div>
            <div
                className="flex shadow-lg bg-zinc-200 rounded-md"
            >
                {
                    (runStatus.isRunning)
                        ? <IconProgressive percent={runPercent} />
                        : (runStatus.isCheckSuccessfully === undefined)
                            ? <IconProgressive percent={0} />
                            : (runStatus.isCheckSuccessfully)
                                ? <div className="px-4 py-2 text-sm text-blue-400"><FaCircleCheck/></div>
                                : <div className="px-4 py-2 text-sm text-red-500"><FaCircleXmark/></div>
                }
            </div>

        </form>
    )
}
