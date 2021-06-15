const validate = values => {
  const errors = {}
  if (!values.name)
    errors.firstName = 'Required'

    return errors
}

export default validate