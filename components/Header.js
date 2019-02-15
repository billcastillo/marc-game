import linkData from '../data/links'
import PostLink from './post-link'
import Container from './Container'
import Link from 'next/link'

const Header = (props) => {
	return (
		<Container>
			<header className="header">
				<div className="header-logo">
					<Link href="./">
						<a><img src="/static/mgh.svg" alt="mg logo" /></a>
					</Link>
				</div>

				<ul className="header-navigation">
					{
						linkData.map((link, index) => {
							return (
								<PostLink key={index} href={link.href} title={link.title} />
							);
						})
					}
				</ul>

				<style jsx>{`
					header {
						display: flex;
						justify-content: space-between;
						align-items: center;
					}

					.header-logo img {
						max-width: 250px
					}

					ul {
						list-style-type: none;
					}
				`}</style>

				{ props.children }
			</header>
		</Container>
	);
}

export default Header