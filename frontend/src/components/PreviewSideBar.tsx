import microservices from '../assets/bar-images/microservices.png'
import react from '../assets/react.png'
import reactApp from '../assets/app-images/react.png'
const logo = 'https://imgur.com/i9UWRS8.png'
const mockup = 'https://imgur.com/LtdTASQ.png'
const itemStack = 'https://imgur.com/mpjlXh4.png'
import { PreviewField } from './PreviewField'

type PreviewSideBarSchema = 'skill' | 'technology' | 'project'

type PreviewSideBarProps = {
  schema: PreviewSideBarSchema
}

export const PreviewSideBar = ({ schema }: PreviewSideBarProps) => {
  return (
    <>
      {schema === 'skill' ? (
        <>
          <h2>Microsserviços</h2>
          <PreviewField label="Icon" value={microservices} type="image" />
          <PreviewField label="Title" value="Microsserviços" type="text" />
        </>
      ) : schema === 'technology' ? (
        <>
          <h2>React</h2>
          <>
            <div className="images-container">
              <PreviewField label="Icon" value={react} type="image" />
              <PreviewField label="AppIcon" value={reactApp} type="image" />
            </div>
            <PreviewField label="Slug" value="react" type="text" />
            <PreviewField label="Name" value="React" type="text" />
          </>
        </>
      ) : schema === 'project' ? (
        <>
          <h2>Full Stack Spotify</h2>
          <div className="images-container">
            <PreviewField label="Logo" value={logo} type="image" />
            <PreviewField
              label="Mockup"
              value={mockup}
              type="image"
              width={177}
              height={134}
            />
          </div>
          <div className="text-fields-container">
            <PreviewField
              label="Title"
              value="Full Stack Spotify"
              type="text"
            />
            <PreviewField
              label="Repository"
              value="full-stack-spotify"
              type="text"
            />
            <PreviewField label="Slug" value="full-stack-spotify" type="text" />
            <PreviewField
              label="Site URL"
              value="https://github.com/leonardosantosp/full-stack-spotify"
              type="url"
            />
            <PreviewField
              label="Video URL"
              value="https://github.com/leonardosantosp/full-stack-spotify"
              type="url"
            />

            <div className="text-fields">
              <h3>Stack</h3>
              <div className="stack-fields">
                <div className="stack-fields-item">
                  <img src={itemStack} alt="" />
                  <p>Css</p>
                </div>
                <div className="stack-fields-item">
                  <img src={itemStack} alt="" />
                  <p>Css</p>
                </div>
                <div className="stack-fields-item">
                  <img src={itemStack} alt="" />
                  <p>Css</p>
                </div>
                <div className="stack-fields-item">
                  <img src={itemStack} alt="" />
                  <p>Css</p>
                </div>
                <div className="stack-fields-item">
                  <img src={itemStack} alt="" />
                  <p>Css</p>
                </div>
                <div className="stack-fields-item">
                  <img src={itemStack} alt="" />
                  <p>Css</p>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  )
}
