type FormFieldProps = {
  label: string
  placeholder: string
  onChange: any
}

export const FormField = ({ label, placeholder, onChange }: FormFieldProps) => {
  return (
    <>
      <div className="create-fields-container">
        <h3>{label.charAt(0).toUpperCase() + label.slice(1)}</h3>

        <input
          type="text"
          id={label}
          name={label}
          placeholder={`Type ${placeholder}`}
          onChange={onChange}
        />
      </div>
    </>
  )
}
