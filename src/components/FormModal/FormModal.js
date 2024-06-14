// == Import
import { changeFormSubmitMessage } from 'actions/app';
import PropTypesLib from 'prop-types';
import { useDispatch } from 'react-redux';
// == Composant
function FormModal({success, message}) {
    const dispatch = useDispatch();
    const handleClickOnCloseModal = () => {
        dispatch(changeFormSubmitMessage(false, ''));
    }
    return (
        <div className={`fixed top-1/2 right-0 flex justify-between items-center bg-lele-blue text-white rounded-l-3xl px-4 pl-4 py-2 w-52 shadow-lg ${success ? "bg-lele-blue" : "bg-lele-orange"}`}>
            <p className="w-36">{message}</p>
            <svg
                className="fill-white w-4"
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="6.98 6.98 34.04 34.04"
                onClick={handleClickOnCloseModal}
            >
                <path d="M 39.486328 6.9785156 A 1.50015 1.50015 0 0 0 38.439453 7.4394531 L 24 21.878906 L 9.5605469 7.4394531 A 1.50015 1.50015 0 0 0 8.484375 6.984375 A 1.50015 1.50015 0 0 0 7.4394531 9.5605469 L 21.878906 24 L 7.4394531 38.439453 A 1.50015 1.50015 0 1 0 9.5605469 40.560547 L 24 26.121094 L 38.439453 40.560547 A 1.50015 1.50015 0 1 0 40.560547 38.439453 L 26.121094 24 L 40.560547 9.5605469 A 1.50015 1.50015 0 0 0 39.486328 6.9785156 z"></path>
            </svg>
        </div>
    );
}

FormModal.propTypes = {
    success: PropTypesLib.bool,
    message: PropTypesLib.string.isRequired,
}

// == Export
export default FormModal;
