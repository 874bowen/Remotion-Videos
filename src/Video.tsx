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

const Main = () => {
	const {fps, durationInFrames} = useVideoConfig();
	return (
		<div style={{backgroundColor: 'white', flexGrow: 1}}>
			<Sequence from={fps*0.3} durationInFrames={durationInFrames}>
				<CloudinaryImage />
			</Sequence>
			<Sequence from={fps} durationInFrames={durationInFrames}>
				<Title />
			</Sequence>
			<Sequence from={fps*2} durationInFrames={durationInFrames}>
				<Subtitle />
			</Sequence>
		</div>
		// <div style={{backgroundColor: 'white', flexGrow: 1}}>
		// 	<h1>Cloudinary</h1>
		// 	<Img src={cloudinary} alt='logo' className='text-center'/>
		// 	<p>Unleash the full potential of your digital media
		// 	Transform images and videos to load faster with no visual degradation, automatically generate image and video variants, and deliver high quality responsive experiences to increase conversions.</p>
		// </div>
	);
}