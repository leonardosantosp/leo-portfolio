import { SkillList } from '../admin-page/SkillList'
import { useAdmin } from './AdminProvider'
import { ProjectList } from './ProjectList'
import { TechnologyList } from './TechnologyList'

type SchemaListProps = {
  isLight?: boolean
}

export const SchemaList = ({ isLight }: SchemaListProps) => {
  const { schema } = useAdmin()!
  return (
    <>
      {schema === 'skill' ? (
        <SkillList isLight={isLight} />
      ) : schema === 'technology' ? (
        <TechnologyList isLight={isLight} />
      ) : schema === 'project' ? (
        <ProjectList isLight={isLight} />
      ) : null}
    </>
  )
}
