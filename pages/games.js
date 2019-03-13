import base from '../components/rebase'
import { withRouter } from 'next/router'
import { Component } from 'react'
import Container from '../components/Container'
import Layout from '../components/Layout'

// const gameData = withRouter((props) => {
// 	// const data = getGameData(props.router.query);
// 	console.log('props:', props);
// 	// console.log('dataaa:', data);

// 	base.bindDoc('test', {
// 		then() {
// 			console.log('ww')
// 		}
// 	}).then(data => {
// 		console.log('wattaince:', data);
// 		return data;
// 	}).catch(err => {
// 		console.error('err fetching game data:', err);
// 	})

// 	return `walla ${props.router.query}`
// })
	
// class Game extends Component {
// 	constructor(props) {
// 		super(props)

// 		this.state = {
// 			game: {}
// 		}
// 	}

// 	componentWillMount() {
// 		console.log('props:', this.props);
// 		base.get('games/test', {
// 			context: this,
// 		}).then(data => {
// 			console.log('data:', data);
// 			this.setState({ game: data });
// 			//do something with data
// 		}).catch(err => {
// 			console.log('err:', err);
// 			//handle error
// 		});
// 	}

// 	render() {
// 		return (
// 			<div>
// 				{console.log('state:', this.state)}
// 			</div>
// 		)
// 	}
// }

// const gamePageLayout = 

const Game = ( props ) => {
	// const data = getGameData(props.router.query);
	console.log('props1:', props);
	// console.log('dataaa:', data);

	// base.get(`games/test`, {
  // }).then(data => {
	// 	console.log('wattaince:', data);
	// 	return data;
  // }).catch(err => {
	// 	console.error('err fetching game data:', err);
	// })

	// getGameData()

	// props = getGameData(props);
	console.log('props 2:', props);

	return (
		<Layout>
			<Container>
				<div>
					<h1>{props.name}</h1>
					<p>{props.subtitle}</p>
				</div>
			</Container>
		</Layout>
	);
}

const getGameData = ref => {

	base.get(`games/${ref.id}`, {
  }).then(data => {
		console.log('wattaince:', data);
		return data;
  }).catch(err => {
		console.error('err fetching game data:', err);
		return {};
	});
	
	// base.get(`games/${query.id}`, {
  //   context: this,
  // }).then(data => {
	// 	return data;
  // }).catch(err => {
	// 	console.log('errz:', err);
	// });
}

Game.getInitialProps = async function({ query }) {
	console.log('query:', query);
	const data = await base.get(`games/${query.id}`, {})
		.then(data => {
			console.log('dataeh :', data);
			return data;
		})
		.catch(err => {
			console.error('err fetching game data:', err);
			return {};
		});

	return data;
}

export default Game