interface stackItemProps {
  stack: {
    name: string
    image: string
  }[]
}

export const Stack = ({ stack }: stackItemProps) => {
  return (
    <>
      {stack.map(stackItem => (
        <div className="stack__item" key={stackItem.name}>
          <img src={stackItem.image} alt={`logo do ${stackItem.name}`} />
          <p>{stackItem.name}</p>
        </div>
      ))}
    </>
  )
}
