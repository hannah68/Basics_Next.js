import Link from "next/link";
import styles from "../styles/Home.module.css";
import Head from "next/head";

export default function Home() {
	return (
		<>
			<Head>
        <title>Next.js | Home </title>
      </Head>
			<div>
				<h1 className={styles.title}>Home page</h1>
				<p className={styles.text}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
					delectus labore doloremque perferendis laboriosam laborum adipisci.
					Est enim eos tenetur. Quisquam, veritatis quidem non nostrum, iste
					laboriosam dicta est perferendis voluptatibus ipsam quo doloribus
					praesentium animi mollitia cupiditate, molestias eum.
				</p>
				<Link href="/ninjas" className={styles.btn}>
					see ninjas
				</Link>
			</div>
		</>
	);
}
