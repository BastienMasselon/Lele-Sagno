// == Import
import PropTypesLib from 'prop-types';

// == Composant
function HoneypotField({name, value, onChange}) {
  return (
    <input 
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      style={{ display: 'none' }}
    /> 
  );
}

HoneypotField.defaultProps = {
  name: 'extraInformations',
  value: '',
}

HoneypotField.propTypes = {
  name: PropTypesLib.string.isRequired,
  value: PropTypesLib.any,
  onChange: PropTypesLib.func.isRequired,
}
// == Export
export default HoneypotField;
