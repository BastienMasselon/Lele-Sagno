// == Import

import { fetchAllYoutubeVideos } from "actions/apiData";
import YoutubeEmbed from "components/YoutubeEmbed/YoutubeEmbed";
import DOMPurify from "dompurify";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setDocumentTitle } from "utils/utils";

// == Composant
function Videos() {
  setDocumentTitle('Vidéos');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllYoutubeVideos());
  }, []);

  const { allYoutubeVideos } = useSelector((state) => state.data);
  return (
    <div className="pt-6 p-2 md:p-8">
      <p className="text-xl text-center">Ici, tu trouveras mes dernières vidéos. Tu peux voir plus de vidéos sur <span className="text-lele-blue font-brandon-med underline">
            <Link 
                to="https://www.youtube.com/@lelesagno1187" 
                target='_blank'
                rel="noopener noreferrer"
            >
                ma chaîne Youtube
            </Link>
        </span>!
      </p>

      { 
        allYoutubeVideos.length > 0 ? (
          allYoutubeVideos.map((video) => {
            // sanitizing title as it will be put as a not safe inner html
            const title = DOMPurify.sanitize(video.title);
              return (
                <div key={video.id} className="md:w-[32rem] md:mx-auto lg:w-[40rem]">
                  <hr className="mt-12 h-0.5 border-t-0 bg-transparent bg-gradient-to-r from-transparent via-lele-blue to-transparent opacity-25 dark:opacity-100" />
                  <h2 className="font-brandon-fat text-xl text-lele-orange text-center tracking-wider uppercase mt-8">
                    <Link
                        to={`https://www.youtube.com/watch?v=${video.id}`}
                        target='_blank'
                        rel="noopener noreferrer"
                        dangerouslySetInnerHTML={{__html: title}}
                    />
                  </h2>
    
                  <div className="mt-4 h-64 rounded-sm md:h-80 lg:h-96">
                    <YoutubeEmbed embedId={video.id} />
                  </div>
                </div>
              )
          })
        ) : (
          <p className="mt-20 text-lg text-center italic text-lele-blue">Les vidéos de Lele n'ont pas pu être récupérées. Raffraichissez la page ou bien ré-essayez plus tard!</p>
        )
      }

    </div>
  );
}

// == Export
export default Videos;
