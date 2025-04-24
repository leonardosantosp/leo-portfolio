import { SkillList } from '../components/SkillList'

type SchemaType = 'skill' | 'technology' | 'project'

type ModeType = 'preview' | 'create' | 'update' | null

type SchemaListProps = {
  schema: SchemaType
  onOpenForm: () => void
  // onDeleteClick: () => void
  onChangeFormMode: (mode: ModeType) => void
  setSelectedItemId: (id: string) => void
}

export const SchemaList = ({
  schema,
  onOpenForm,
  // onDeleteClick,
  onChangeFormMode,
  setSelectedItemId
}: SchemaListProps) => {
  return (
    <>
      {schema === 'skill' ? (
        <SkillList
          schema={schema}
          onOpenForm={onOpenForm}
          // onDeleteClick={onDeleteClick}
          onChangeFormMode={onChangeFormMode}
          setSelectedItemId={setSelectedItemId}
        />
      ) : (
        ''
      )}
    </>
  )
}
