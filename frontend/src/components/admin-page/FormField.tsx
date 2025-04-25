type FormFieldProps = {
  label: string
  placeholder: string
  onChange: any
  error: string | undefined
}

export const FormField = ({
  label,
  placeholder,
  onChange,
  error
}: FormFieldProps) => {
  return (
    <>
      <div className="create-fields-container">
        <h3>{label.charAt(0).toUpperCase() + label.slice(1)}</h3>
        {error && <span className="error-text">{error}</span>}
        <input
          className={error && 'error'}
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
