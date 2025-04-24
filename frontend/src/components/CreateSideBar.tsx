import { ArrowLeftRight } from 'lucide-react'
import { ChevronDown } from 'lucide-react'
import { Trash2 } from 'lucide-react'
import { FormField } from '../components/FormField'
import { CreateEditButtons } from '../components/CreateEditButtons'

type CreateSchemaType = 'skill' | 'technology' | 'project'

type CreateSideBarProps = {
  schema: CreateSchemaType
  onDiscard: () => void
}

const itemStack = 'https://imgur.com/mpjlXh4.png'

export const CreateSideBar = ({ schema, onDiscard }: CreateSideBarProps) => {
  return (
    <>
      {schema === 'project' ? (
        <>
          <div className="text-fields-container">
            <FormField label="Title" placeholder={`${schema} title`} />
            <FormField label="Logo" placeholder="logo url" />
            <FormField label="Mockup" placeholder="mockup url" />
            <FormField label="Repository" placeholder="repository name" />
            <FormField label="Site" placeholder="site url" />
            <FormField label="Video" placeholder="video url" />
          </div>
          <h3>Select Technologies</h3>
          <div className="stack-fields create-stack-fields">
            <div className="stack-fields__add-button">
              <ChevronDown />
              <p>Add</p>
            </div>
            <ArrowLeftRight color="#9CA3AF" />

            <div className="stack-card">
              <h4>Stack</h4>
              <div className="stack-fields">
                <div className="stack-fields-item">
                  <img src={itemStack} alt="" />
                  <p>Css</p>
                  <div className="stack-fields-icon">
                    <Trash2 size={15} />
                  </div>
                </div>
                <div className="stack-fields-item">
                  <img src={itemStack} alt="" />
                  <p>Css</p>
                  <div className="stack-fields-icon">
                    <Trash2 size={15} />
                  </div>
                </div>
                <div className="stack-fields-item">
                  <img src={itemStack} alt="" />
                  <p>Css</p>
                  <div className="stack-fields-icon">
                    <Trash2 size={15} />
                  </div>
                </div>
                <div className="stack-fields-item">
                  <img src={itemStack} alt="" />
                  <p>Css</p>
                  <div className="stack-fields-icon">
                    <Trash2 size={15} />
                  </div>
                </div>
                <div className="stack-fields-item">
                  <img src={itemStack} alt="" />
                  <p>Css</p>
                  <div className="stack-fields-icon">
                    <Trash2 size={15} />
                  </div>
                </div>
                <div className="stack-fields-item">
                  <img src={itemStack} alt="" />
                  <p>Css</p>
                  <div className="stack-fields-icon">
                    <Trash2 size={15} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : schema === 'skill' ? (
        <>
          <div className="text-fields-container">
            <FormField label="Icon" placeholder="icon url" />
            <FormField label="Title" placeholder={`${schema} title`} />
          </div>
        </>
      ) : schema === 'technology' ? (
        <>
          <div className="text-fields-container">
            <FormField label="Icon" placeholder="icon url" />
            <FormField label="AppIcon" placeholder="app icon url" />
            <FormField label="Name" placeholder={`${schema} name`} />
          </div>
        </>
      ) : null}
      {['project', 'skill', 'technology'].includes(schema) && (
        <CreateEditButtons type="Add" schema={schema} onDiscard={onDiscard} />
      )}
    </>
  )
}
