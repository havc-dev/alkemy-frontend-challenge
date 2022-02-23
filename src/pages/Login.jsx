import { useNavigate, useLocation, Navigate, Outlet } from "react-router-dom";

const Login = () => {
	let navigate = useNavigate();
	let location = useLocation();
	let auth = useAuth();

	let from = location.state?.from?.pathname || "/";

	function handleSubmit(e) {
		e.preventDefault();

		let formData = new FormData(e.currentTarget);
		let username = formData.get("username");

		auth.signin(username, () => {
			navigate(from, { replace: true });
		});
	}

	return (
		<div>
			<p>You must log in to view the page at {from}</p>

			<form onSubmit={handleSubmit}>
				<label>
					Username: <input name='username' type='text' />
				</label>{" "}
				<button type='submit'>Login</button>
			</form>
		</div>
	);
};
