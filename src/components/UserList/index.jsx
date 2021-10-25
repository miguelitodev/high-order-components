import User from "../User";
import LoadingHOC from "../../hoc/LoadingHOC";

import "./styles.css";

const UserList = ({ users }) => (
	<section className="users">
		{users.map((user) => (
			<User key={user.id} user={user} />
		))}
	</section>
);

export default LoadingHOC(UserList);
