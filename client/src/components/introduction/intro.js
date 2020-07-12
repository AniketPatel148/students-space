import React from "react";

import styles from "./intro.module.css";

const intro = () => {
	return (
		<div className={styles.main}>
			<div className={styles.intro1}>
				<h1>What all is about?</h1>
				<p>
					The current situation of students' worldwide is a matter to be
					concerned. We can clearly see the raising stats of a number of
					students suffering from depression, anxiety-like situation —one of the
					reason behind this a little or no interaction between peers.
				</p>
			</div>
			<div className={styles.intro2}>
				<h1>So, what is solution?</h1>
				<p>
					We at STUDENT'S SPACE try to provide a solution to the mentioned
					problem. We have designed this wonderful platform for students to
					interact among themselves. Here we provide multiple features on this
					platform for the cause of the same.
				</p>
			</div>
			<div className={styles.intro2}>
				<h1>Salient features</h1>
				<ul className={styles.features}>
					<li>
						CHAT : For a room chat with your best friends anytime anywhere.
					</li>
					<li>
						Mentor : We provide students with peer mentors for any Q&A.Drop your
						E-mail and our mentors will contact you.
					</li>
					<li>
						Community: We are huge community of students glad to help each other
						Join US.
					</li>
				</ul>
			</div>
		</div>
	);
};

export default intro;
