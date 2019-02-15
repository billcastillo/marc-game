import Link from 'next/link'

const PostLink = (props) => {
	return (
		<li>
			<Link prefetch href={props.href}>
				<a>{props.title}</a>
			</Link>

			<style jsx>{`
				li {
					display: inline-block;
				}

				li:not(:last-child) {
					margin-right: 48px;
				}

				a {
					font-family: 'Source Sans Pro';
					font-weight: 400;
					font-size: 18px;
					color: black;
					text-decoration: none;
					text-transform: uppercase;
					letter-spacing: 1px;
				}

				a:hover {
        	opacity: 0.6;
      	}
			`}</style>
		</li>
	);
}

export default PostLink