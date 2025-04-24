type FormFieldProps = {
  label: string
  placeholder: string
}

export const FormField = ({ label, placeholder }: FormFieldProps) => {
  return (
    <>
      <div className="create-fields-container">
        <h3>{label}</h3>

        <input
          type="text"
          id={label}
          name={label}
          placeholder={`Type ${placeholder}`}
        />
      </div>
    </>
  )
}
