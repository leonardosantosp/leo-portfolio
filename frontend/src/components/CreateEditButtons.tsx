type OperationsType = 'Add' | 'Edit'

type SchemaType = 'skill' | 'project' | 'technology'

type CreateEditButtonsProps = {
  onDiscard: () => void
  type: OperationsType
  schema: SchemaType
}

export const CreateEditButtons = ({
  onDiscard,
  type,
  schema
}: CreateEditButtonsProps) => {
  return (
    <div className="create-stack-fields__buttons">
      <button className="create-stack-fields__buttons-add" type="button">
        {`${type} ${schema.charAt(0).toUpperCase() + schema.slice(1)}`}
      </button>
      <button
        className="create-stack-fields__buttons-discard"
        type="button"
        onClick={() => onDiscard()}
      >
        Discard
      </button>
    </div>
  )
}
