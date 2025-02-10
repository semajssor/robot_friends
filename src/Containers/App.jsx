import React, { useState, useEffect } from "react";
import CardList from "../Components/CardList";
import SearchBox from "../Components/SearchBox";
import AnimatedGif from "../Components/AnimatedGif";
import loadingGif from "../assets/loading.gif";
import Scroll from "../Components/Scroll";
import "./App.css";

// function App extends Component {
function App() {
	// constructor() {
	// 	super();
	// 	this.state = {
	// 		robots: [],
	// 		searchfield: "",
	// 	};
	// }

	// New way to use state with hooks (useState)
	const [robots, setRobots] = useState([]);
	const [searchfield, setSearchfield] = useState("");

	// componentDidMount() {
	// 	fetch("https://jsonplaceholder.typicode.com/users")
	// 		.then((response) => {
	// 			if (!response.ok) {
	// 				throw new Error("Network response was not ok");
	// 			}
	// 			return response.json();
	// 		})
	// 		.then((users) => this.setState({ robots: users }))
	// 		.catch((error) => {
	// 			console.error("Error fetching data:", error);
	// 		});
	// }

	// New way to use lifecycle methods with hooks (useEffect)
	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => {
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				return response.json();
			})
			.then((users) => {setRobots(users)})
			.catch((error) => {
				console.error("Error fetching data:", error);
			});
	},[]);

	const onSearchChange = (event) => {
		setSearchfield(event.target.value);
	};

	const filteredRobots = robots.filter((robot) => {
		return robot.name.toLowerCase().includes(searchfield.toLowerCase());
	});

	return !robots.length ? (
		<div className="loading-container">
			{" "}
			<AnimatedGif src={loadingGif} alt="loading Pac Man Gif" />
			{/* <AnimatedGif src="https://cdn.pixabay.com/animation/2022/10/11/03/16/03-16-39-160_512.gif" alt="loading" /> */}
		</div>
	) : (
		<div className="tc">
			<h1 className="f1">Robofriends</h1>
			<SearchBox searchChange={onSearchChange} />
			<Scroll>
				<CardList robots={filteredRobots} />
			</Scroll>
		</div>
	);
}

export default App;
