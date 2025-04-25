import { createContext, useState, useContext } from 'react'
type AdminContextType = {
  isMenuVisible: boolean
  setIsMenuVisible: (visible: boolean) => void
  formMode: 'preview' | 'create' | 'update' | null
  setFormMode: (mode: 'preview' | 'create' | 'update' | null) => void
  selectedItemId: string | null
  setSelectedItemId: (id: string | null) => void
  schema: 'skill' | 'technology' | 'project'
  setSchema: (schema: 'skill' | 'technology' | 'project') => void
}
const AdminContext = createContext<AdminContextType | null>(null)

export const AdminProvider = ({ children }: { children: React.ReactNode }) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false)
  const [formMode, setFormMode] = useState<
    'preview' | 'create' | 'update' | null
  >(null)
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null)
  const [schema, setSchema] = useState<'skill' | 'technology' | 'project'>(
    'skill'
  )

  return (
    <AdminContext.Provider
      value={{
        isMenuVisible,
        setIsMenuVisible,
        formMode,
        setFormMode,
        selectedItemId,
        setSelectedItemId,
        schema,
        setSchema
      }}
    >
      {children}
    </AdminContext.Provider>
  )
}

export const useAdmin = () => useContext(AdminContext)!
