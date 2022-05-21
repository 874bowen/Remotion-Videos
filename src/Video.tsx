import {Composition, Img, Sequence, useVideoConfig} from 'remotion';
import cloudinary from './cloudinary.png'

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="Main"
				component={Main}
				durationInFrames={30*3}
				fps={30}
				width={1920}
				height={1080}
			/>
		</>
	);
};
