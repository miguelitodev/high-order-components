import { useEffect, useState } from "react";
import UserList from "./components/UserList";

import axios from "axios";

import "./App.css";

function App() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		setTimeout(async () => {
			const response = await axios({
				url: "https://api.github.com/users",
				method: "GET",
			});
			setUsers(response.data);
		}, 1000);
	}, []);

	return <UserList users={users} />;
}

export default App;
