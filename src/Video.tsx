import {Composition, Img, Sequence, useCurrentFrame, useVideoConfig, spring, Audio} from 'remotion';
import cloudinary from './cloudinary.png';
import audios from './audios.mp3';

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
const CloudinaryImage = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const translate = spring({frame, fps, to: 100})
	return(
		<Img
		src={cloudinary} alt='cloudinary'
		style={{
			display: 'block',
			marginLeft: 'auto',
			marginRight: 'auto',
			width: '30%',
			height: '50%',
			transform: `translateY(${translate}px)`
		}}
	/> 
	);
}
const Title = () => 
	<h1
	style={{
		position: 'absolute',
		top: '50%',
		width: '100%',
		textAlign: 'center',
		fontSize: '3rem',
	}}
	>Welcome to Cloudinary</h1>
const Subtitle = () => {
	const frame = useCurrentFrame();
	const opacity = frame > 30 ? 1 : frame / 30;
	return (
 	<h3
 	style={{
		position: 'absolute',
		top: '60%',
		width: '100%',
		textAlign: 'center',
		fontSize: '3rem',
		opacity
	}}
 >Transform images and videos to load faster with no visual degradation, automatically generate image and video variants, and deliver high quality responsive experiences to increase conversions.</h3>
 );
}

const Main = () => {
	const {fps, durationInFrames} = useVideoConfig();
	return (
		<div style={{backgroundColor: 'white', flexGrow: 1}}>
			<Audio src={audios} startFrom={0} endAt={90}/>
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