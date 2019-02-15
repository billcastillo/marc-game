const Container = props => {
	return (
		<>
			<div className="container">
				{props.children}
			</div>

			<style jsx>{`
				.container {
					padding: 24px;
				}
			`}</style>
		</>
	);
}

export default Container