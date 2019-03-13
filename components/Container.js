const Container = props => {
	return (
		<>
			<div className={`container ${props.style ? props.style : ''}`}>
				{props.children}
			</div>

			<style jsx>{`
				.container {
					padding: 24px;
				}

				.container.full {
					padding: 0;
				}
			`}</style>
		</>
	);
}

export default Container