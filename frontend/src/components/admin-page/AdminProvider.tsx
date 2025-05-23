import { createContext, useState, useContext } from 'react'
type AdminContextType = {
  query: string
  setQuery: (item: string) => void
  isMenuVisible: boolean
  isLight: boolean
  isTable: boolean
  setIsTable: (isTable: boolean) => void
  setIsLight: (isLight: boolean) => void
  setIsMenuVisible: (visible: boolean) => void
  formMode: 'preview' | 'create' | 'update' | null
  setFormMode: (mode: 'preview' | 'create' | 'update' | null) => void
  selectedItemId: string | null
  setSelectedItemId: (id: string | null) => void
  schema: 'skill' | 'technology' | 'project'
  setSchema: (schema: 'skill' | 'technology' | 'project') => void
  reloadList: boolean
  setReloadList: (load: boolean) => void
}
const AdminContext = createContext<AdminContextType | null>(null)

export const AdminProvider = ({ children }: { children: React.ReactNode }) => {
  const [query, setQuery] = useState('')
  const [reloadList, setReloadList] = useState(false)
  const [isMenuVisible, setIsMenuVisible] = useState(false)
  const [isLight, setIsLight] = useState(false)
  const [isTable, setIsTable] = useState(true)
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
        reloadList,
        setReloadList,
        isMenuVisible,
        setIsMenuVisible,
        formMode,
        setFormMode,
        selectedItemId,
        setSelectedItemId,
        schema,
        setSchema,
        isLight,
        setIsLight,
        isTable,
        setIsTable,
        query,
        setQuery
      }}
    >
      {children}
    </AdminContext.Provider>
  )
}

export const useAdmin = () => useContext(AdminContext)!
