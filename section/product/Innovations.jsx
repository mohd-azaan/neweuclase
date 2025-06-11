import './Innovation.css';
function Innovations() {
	return (
		<div className='innovations-container'>
			{/* <h4>Our Innovations</h4> */}
			<h2>Industry Focused Products!</h2>
			<div className='product-grid'>
				<div className='product-item'>
					<h3>Marble Collection</h3>
					<span className='p-head'>
						Explore <b>Euclase's</b> Marble Collection—ideal for luxurious flooring, elegant countertops, wall accents, and decorative features.
					</span>
					<p>
						<li>
							<b>
								<span className='square'>&#9632;</span> Sophisticated Design:
							</b>{' '}
							Crafted to deliver sophistication and lasting beauty with a smooth, polished finish.
						</li>
						<li>
							<b>
								<span className='square'>&#9632;</span> Premium Quality:
							</b>{' '}
							Upholds the highest standards for elegance and durability in natural stone.
						</li>
						<li>
							<b>
								<span className='square'>&#9632;</span> Versatile Application:
							</b>{' '}
							Perfect for flooring, countertops, wall accents, and bespoke décor elements.
						</li>
					</p>
				</div>

				<div className='product-item'>
					<h3>Granite Collection</h3>
					<span className='p-head'>
						Discover Euclase's Granite Collection—perfect for countertops, flooring, wall cladding, and architectural detailing.
					</span>
					<p>
						<li>
							<b>
								<span className='square'>&#9632;</span>Strength:
							</b>{' '}
							Built for long-lasting performance in high-traffic and demanding environments.
						</li>
						<li>
							<b>
								<span className='square'>&#9632;</span> Refined Elegance:
							</b>{' '}
							Combines natural textures with polished aesthetics for timeless interiors.
						</li>
						<li>
							<b>
								<span className='square'>&#9632;</span> Versatile Application:
							</b>{' '}
							Ideal for countertops, cladding, flooring, and detailed architectural features.
						</li>
					</p>
				</div>

				
				<div className='product-item'>
					<h3>Ferro Alloys</h3>
					<span className='p-head'>
						At Euclase, we cater to industries reliant on high-quality ferro
						alloys to enhance performance and durability.
					</span>
					<p>
						<li>
							<b>
								{' '}
								<span className='square'>&#9632;</span> Steel Manufacturing:
							</b>{' '}
							Essential for deoxidation, alloying, and refining processes to
							produce high-strength steel.
						</li>
						<li>
							<b>
								{' '}
								<span className='square'>&#9632;</span> Automotive:
							</b>{' '}
							Used in lightweight and durable alloys for critical vehicle
							components.
						</li>
					</p>
				</div>
			</div>
		</div>
	);
}

export default Innovations;
