import React from "react";
import Card from "./Card";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Footer from "./Footer";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	let dataCards = [
		{ title: "Bob Marley", vinculo: "https://es.wikipedia.org/wiki/Bob_Marley", description: "Cantante Jamaiquino de Reggae, pionero en el género.", image: "https://th.bing.com/th/id/R.6101795e623364385588827ffd88b4e8?rik=MZ1cFb4aOV7ing&riu=http%3a%2f%2fwww.bobmarley.com%2fwp-content%2fuploads%2f2013%2f11%2fbob-marley-wallpaper1.jpg&ehk=8SlDmyCK6txZVCG3cSeetmjD6%2fFb0N3Lxi5ie1P0W3Y%3d&risl=&pid=ImgRaw&r=0" },
		{ title: "Freddie Mercury", vinculo: "https://es.wikipedia.org/wiki/Freddie_Mercury", description: "Cantante lider de la banda queen. Rey del Rock", image: "https://th.bing.com/th/id/R.ef13f912f1939f4fafd27d0293aa8d3d?rik=d4ygyaDJEO8MnQ&riu=http%3a%2f%2fimages2.fanpop.com%2fimage%2fphotos%2f13300000%2fFreddie-Mercury-freddie-mercury-13367184-1664-2560.jpg&ehk=VemrdYRLjK3SqRiGMjGeb4OOrqF2yavwsAiRGC6vbc0%3d&risl=1&pid=ImgRaw&r=0" },
		{ title: "Michael Jackson", vinculo: "https://es.wikipedia.org/wiki/Michael_Jackson", description: "Cantante apodado como el rey del pop.", image: "https://cdn.amomama.com/2ab8926c86a78b6b24091e084dd8868c.jpg" },
		{ title: "Luis Miguel", vinculo: "https://es.wikipedia.org/wiki/Luis_Miguel", description: "Cantante apodado el sol de Mexico. Las Rncheras", image: "https://45secondes.fr/wp-content/uploads/2021/11/Pour-cette-raison-Luis-Miguel-a-precise-que-sa-serie.jpg" }
	]
	return (
		<div>
			<div className="bg-dark">
				<Navbar />
			</div>
			<div className="container mt-5">
				{/* <div className="d-flex justify-content-center p-5"> */}
					<div className="row">
						<div className="col">
					<Jumbotron />
					</div>
					</div>
				{/* </div> */}
				
			</div>
			<div className="container p-0 my-5">
			<div className="text-center d-flex justify-content-center container pb-3">
					<div className="row">
					{dataCards.map((value, index, array) => {
						return <Card key={index} title={value.title} vinculo={value.vinculo} description={value.description} image={value.image} />
					})}
					</div>
				</div>
			</div>
			<div className="d-flex justify-content-center align-items-center bg-dark py-5 text-light">
				<Footer />
			</div>
		</div>
	);
};

export default Home;
