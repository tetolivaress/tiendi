const validate = values => {
  const errors = {}
  console.log(values)
  if (!values.name){
    errors.name = 'El nombre es requerido'
  }

  return errors
}

export default validate