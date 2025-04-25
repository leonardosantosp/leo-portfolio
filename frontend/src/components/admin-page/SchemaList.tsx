import { SkillList } from '../admin-page/SkillList'
import { useAdmin } from './AdminProvider'
import { TechnologyList } from './TechnologyList'

export const SchemaList = () => {
  const { schema } = useAdmin()!
  return (
    <>
      {schema === 'skill' ? (
        <SkillList />
      ) : schema === 'technology' ? (
        <TechnologyList />
      ) : null}
    </>
  )
}
