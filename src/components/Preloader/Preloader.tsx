import Lottie from "lottie-react";
import preloader from '../../lotties/preloader.json'

const stylePreloader = {
    height: 300,
    width: 300,
};

const Preloader: React.FC = () => {

    return (
        <Lottie
            animationData={preloader}
            style={stylePreloader}
      />
    )
}

export default Preloader;