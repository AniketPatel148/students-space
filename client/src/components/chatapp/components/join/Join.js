import React, { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./join.module.css";

export default function SignIn() {
	const [name, setName] = useState("");
	const [room, setRoom] = useState("");

	return (
		<div className={styles.joinOuterContainer}>
			<div className={styles.homebutton}>
				<a href="/"> Home</a>
			</div>
			<div className={styles.joinInnerContainer}>
				<h1 className={styles.heading}>Join</h1>
				<div>
					<input
						placeholder="Name"
						className={styles.joinInput}
						type="text"
						onChange={(event) => setName(event.target.value)}
					/>
				</div>
				<div>
					<input
						placeholder="Room"
						className={styles.joinInput1}
						type="text"
						onChange={(event) => setRoom(event.target.value)}
					/>
				</div>
				<Link
					onClick={(e) => (!name || !room ? e.preventDefault() : null)}
					to={`/chat?name=${name}&room=${room}`}
				>
					<button className={styles.button} type="submit">
						Sign In
					</button>
				</Link>
			</div>
		</div>
	);
}
