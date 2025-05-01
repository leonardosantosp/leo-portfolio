import { useAdmin } from './AdminProvider'
import { FormBuilder } from './FormBuilder'

export const EditSideBar = () => {
  const { isLight, selectedItemId, schema, setIsMenuVisible } = useAdmin()!

  return (
    <>
      <FormBuilder />
    </>
  )
}
