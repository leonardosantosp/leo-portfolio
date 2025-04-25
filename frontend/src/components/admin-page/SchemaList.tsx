import { SkillList } from '../admin-page/SkillList'
import { useAdmin } from './AdminProvider'

export const SchemaList = () => {
  const { schema } = useAdmin()!
  return <>{schema === 'skill' ? <SkillList /> : ''}</>
}
