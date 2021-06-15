const validate = values => {
  const errors = {}
  console.log(values)
  if (!values.name){
    errors.name = 'Required'
  }

  return errors
}

export default validate