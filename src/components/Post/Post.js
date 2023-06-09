// == Import
import arrow from 'assets/img/arrow-down-white.svg';
import { Link } from 'react-router-dom';

// == Composant
function Post() {
  return (
    <div className="flex flex-col p-4">
      <h1 className="font-brandon-fat uppercase text-xl text-lele-blue mt-4">Non, partir en France ne va pas transformer ta vie en vie de rêve</h1>
      <div className="mt-5 text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet mauris rhoncus, suscipit ante eu, maximus neque. Nunc id massa sapien. Suspendisse vel orci quis nulla iaculis convallis dictum id orci. Sed convallis, urna sed semper elementum, justo eros auctor nunc, nec bibendum quam eros vel tortor. Pellentesque sit amet urna congue, egestas turpis id, aliquam nunc. Curabitur viverra augue non tortor rutrum, non tincidunt mi euismod. Donec egestas enim sed nulla tincidunt, eu laoreet diam ornare. Quisque vitae consequat orci, quis efficitur erat. Sed cursus orci ac massa porta congue. Suspendisse quis dolor sed sem cursus faucibus eu eget lorem. Maecenas eu sollicitudin diam, vel vehicula nisi. Aliquam erat volutpat. Integer semper mi metus, sed iaculis arcu porttitor eu. Maecenas ut mattis sapien. Ut egestas leo et velit sodales, at ullamcorper leo iaculis. Curabitur consectetur id leo nec mattis.</div>
      <div className="mt-8 self-end"><span>publié le 6 juin 2023</span></div>
      <Link 
        className="flex items-center bg-lele-blue text-white w-fit p-3 rounded-lg font-brandon-med text-lg mt-8 h-12"
        to="/posts"
      >
        <img 
            src={arrow}
            className='w-5 rotate-90'
        />
        <p className='ml-1'>Toutes mes publications</p>
      </Link>
    </div>
  );
}

// == Export
export default Post;
