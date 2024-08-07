// == Import
import PropTypesLib from "prop-types";

// == Composant
function FieldError({message}) {
  return (
    <>
        <p className="text-base text-red-500">
          {message}
        </p>
    </>
  );
}

FieldError.propTypes = {
    message: PropTypesLib.string.isRequired,
}
// == Export
export default FieldError;
