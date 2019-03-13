import { Component } from 'react'

class GameForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: false
		};
	}

	serializeForm(form) {
		// Convert Form data values to JSON
		let obj = {};
		const formData = form.querySelectorAll(`input, select, textarea`);
		console.log('form2 2:', formData);

		Object.keys(formData).forEach(form => {
			if (formData[form].name) {
				obj[formData[form].name] = formData[form].value;
			}
		});

		return obj;
	}

	componentDidMount() {
		// Prevent page refresh on submit
		const form = document.querySelector(`#${this.props.formId}`);
		form
			.addEventListener('submit', (e) => {
				e.preventDefault();
				this.setState({ loading: true });
				const formData = this.serializeForm(form);
				this.props.addItem(formData);

				this.clearForm(form);
				this.setState({ loading: false });
			});
	}

	clearForm(form) {
		const allForms = form.querySelectorAll(`input, select, textarea`);
		allForms.forEach(form => {
			form.value = '';
		})
	}

	render() {
		return (
			<form id={this.props.formId ? this.props.formId : ''}>
				{
					Object.keys(this.props.formData).map(formObject => {
						const formObjectData = this.props.formData[formObject]
						switch (formObjectData.type) {
							case 'input':
								return (
									<div className="form-group" key={formObject}>
										<label htmlFor={formObjectData.id}> {formObjectData.label} </label>
										<input
											type={formObjectData.inputType ? formObjectData.inputType : 'text'}
											id={formObjectData.id}
											className={formObjectData.class}
											name={formObjectData.name}
											placeholder={formObjectData.placeholder}
											regex={formObjectData.regex ? formObjectData.regex : ''} 
											required={formObjectData.required ? formObjectData.required : ''} />
									</div>
								);

							case 'button':
								return (
									<div className="form-group" key={formObject}>
										<button
											type={formObjectData.inputType ? formObjectData.inputType : 'button'}
											disabled={this.state.loading} >
												{this.state.loading ? 'Sending...' : formObjectData.label}
										</button>
									</div>
								);

							case 'textarea':
								return (
									<div className="form-group" key={formObject}>
										<label htmlFor={formObjectData.id}> {formObjectData.label} </label>
										<textarea
											id={formObjectData.id}
											className={formObjectData.class}
											name={formObjectData.name}
											placeholder={formObjectData.placeholder}
											maxLength={formObjectData.max} />
									</div>
								);
						}
					})
				}

				<style>{`
					form {
						width: 100%;
						max-width: 600px;
						margin: 0 auto;
					}

					.form-group {
						font-family: Source Sans Pro;
						margin-bottom: 12px; 
					}

					.form-group label {
						font-size: 20px;
						line-height: 1.6;
					}

					.form-group input,
					.form-group textarea {
						width: 100%;
						font-size: 16px;
						padding: 12px 8px;
						border: 1px solid #B0B0B6;
						border-radius: 3px;
						min-width: 250px;
					}

					.form-group label,
					.form-group input,
					.form-group textarea {
						display: block;
					}

				`}</style>
			</form>
		);
	}
}

export default GameForm