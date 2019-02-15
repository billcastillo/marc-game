import HeadTag from './head-tag'
import "../CSS/reset.css"
import Header from './Header'

const Layout = props => {
	return (
		<>
			<HeadTag />
			<div className="wrapper">
				<Header />
				{ props.children }
			</div>

			<style jsx>{`
				.wrapper {

				}
			`}</style>
		</>
	);
}

export default Layout