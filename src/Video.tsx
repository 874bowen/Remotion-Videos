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
const CloudinaryImage = () => 
	<Img
	src={cloudinary} alt='cloudinary'
	style={{
		display: 'block',
		marginLeft: 'auto',
		marginRight: 'auto',
		width: '30%',
		height: '50%',
	}}
	/>
const Title = () => 
	<h1
	style={{
		position: 'absolute',
		top: '40%',
		width: '100%',
		textAlign: 'center',
		fontSize: '3rem',
	}}
	>Welcome to Cloudinary</h1>
const Subtitle = () =>
 <h3
 style={{
	position: 'absolute',
	top: '70%',
	width: '100%',
	textAlign: 'center',
	fontSize: '3rem',
}}
 >Transform images and videos to load faster with no visual degradation, automatically generate image and video variants, and deliver high quality responsive experiences to increase conversions.</h3>

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