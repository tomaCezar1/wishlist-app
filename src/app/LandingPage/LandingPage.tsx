import Image from 'next/image';

function LandingPage(): JSX.Element {
    return (
        <div className="landing-container">
            <div className="landing-title-container">
                <h1 className="landing-title">Wishlist</h1>
                <h1 className="landing-title">
                    Dashboard <span className="title-2">2</span>
                </h1>
                <h2 className="landing-greeting">
                    A modern and minimal solution for your wishlists management
                </h2>
            </div>

            <div className="landing-img-container">
                <Image src="/dashboard.svg" width={600} height={600} alt="Dashboard" />
            </div>
        </div>
    );
}

export default LandingPage;
