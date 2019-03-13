import { Component } from 'react'
import Layout from '../components/Layout'
import Container from '../components/Container'
import GameFormData from '../data/game-form'
import GameForm from '../components/GameForm'
import GameList from '../components/GameList'
import base from '../components/rebase'

class Index extends Component {
	constructor(props) {
    super(props);
    this.state = {
      games: [],
    };
	}

	componentWillMount() {
		console.log('not loaded');
		this.ref = base.bindCollection('games', {
      context: this,
      state: 'games',
			withRefs: true,
			then() {
				this.setState(state => ({
					...state
				}))
				console.log('loaded')
			}
		});
	}

	handleAddItem(value) {
		console.log('value 1:', value);
		base.addToCollection('games', value);
	}

	componentWillUnmount() {
		base.removeBinding(this.ref);
	}

	render() {
		const { games } = this.state;
		return (
			<Layout>
				<Container>
					<div className="subheading">
						Your local pirate - we have everything for all your gaming and tech needs.
					</div>

					<div className="nene">
						<h2>Add a game</h2>
						<GameForm
							formData={ GameFormData }
							formId="newGameForm"
							addItem={this.handleAddItem} />
					</div>

					<div className="game-list">
						<GameList gameData={ games } />
					</div>

					<style>{`
						.nene {
							height: 100vh;
						}
					`}</style>
				</Container>
			</Layout>
		);
	}
}

export default Index