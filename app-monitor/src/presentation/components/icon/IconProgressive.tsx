interface Props {
  percent: number
}

//TODO
//* Refactor IconProgressive

export const IconProgressive = ({  percent }: Props) => {
  
  return (
    <div
      className="flex items-center justify-center"
    >
    
      <span className="absolute text-xs text-blue-400">{percent}</span>
    </div>

  )
}
