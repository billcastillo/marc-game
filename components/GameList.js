import { Component } from 'react'
import Link from 'next/link'

class GameList extends Component {
	render() {
		const { gameData } = this.props;
		console.log('gamedata:', gameData);

		return (
			<ul>
				{
					gameData.map((game, index) => {
						return (
							<Link as={`/games/${game.ref.id}`} href={`/games?id=${game.ref.id}`} key={index}>
								<li>
									<p>{game.name}</p>
									<p>{game.subtitle}</p>
									<p>{game.description}</p>
									<p>{game.size}</p>
									<p>{game.prize}</p>
								</li>
							</Link>
						);
					})
				}
			</ul>
		);
	}
}

export default GameList