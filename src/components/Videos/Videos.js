// == Import

import YoutubeEmbed from "components/YoutubeEmbed/YoutubeEmbed";
import DOMPurify from "dompurify";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// == Composant
function Videos() {
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
            const sanitizedTitle = DOMPurify.sanitize(video.snippet.title);
              return (
                <div key={video.id.videoId} className="md:w-[32rem] md:mx-auto lg:w-[40rem]">
                  <hr className="mt-12 h-0.5 border-t-0 bg-transparent bg-gradient-to-r from-transparent via-lele-blue to-transparent opacity-25 dark:opacity-100" />
                  <h2 className="font-brandon-fat text-xl text-lele-orange text-center tracking-wider uppercase mt-8">
                    <Link
                        to={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                        target='_blank'
                        rel="noopener noreferrer"
                        dangerouslySetInnerHTML={{__html: sanitizedTitle}}
                    />
                  </h2>
    
                  <div className="mt-4 h-64 rounded-sm md:h-80 lg:h-96">
                    <YoutubeEmbed embedId={video.id.videoId} />
                  </div>
                </div>
              )
          })
        ) : (
          <p className="mt-20 text-lg text-center italic text-lele-blue">Il semblerait que les vidéos de notre chère Lele n'aient pas pu être récupérées. Raffraichissez la page ou bien ré-essayez plus tard!</p>
        )
      }

    </div>
  );
}

// == Export
export default Videos;
