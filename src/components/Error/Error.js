// == Import

import { Link } from "react-router-dom";
import palmTrees from 'assets/img/palm-trees.PNG';

// == Composant
function Error() {
    return (
        <div className="flex flex-col items-center justify-center mt-10 p-2">
            <p className="text-center text-lg">Désolé, une erreur s'est produite ou bien cette page n'existe pas.</p>
            
            <Link 
                to="/"
                className="mt-8 uppercase tracking-wide underline text-lg text-lele-blue font-brandon-med font-bold"
            >Retour à l'accueil</Link>
            <img src={palmTrees} className="w-40 mt-12" />
            
        </div>
    );
}

// == Export
export default Error;
