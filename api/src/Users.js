import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Users() {
	const [users, setUsers] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchUsers = async () => {
			try {
				setError(null);
				setUsers(null);
				setLoading(true);
				const response = await axios.get(
					'http://localhost:3000/questions'
				);
				setUsers(response.data);
				console.log(response.data);
			} catch (e) {
				setError(e);
			}
			setLoading(false);
		};
		fetchUsers();
	}, []);
	// const data = Response.data.result[0].content;
	if (loading) return <div>loading...</div>;
	if (error) return <div>error occured!</div>;
	if (!users) return null;
	return (
		<div></div>
	);
}

export default Users;
