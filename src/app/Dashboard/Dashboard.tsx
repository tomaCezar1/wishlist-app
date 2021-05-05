import Wishlistcard from '../WishlistCard/WishlistCard';

function Dashboard({ wishlists }): JSX.Element {
    return (
        <section className="dashboard-container">
            {wishlists.map((wishlist) => {
                const date: string = wishlist.wishListDate.split('T')[0];
                return (
                    <Wishlistcard
                        key={wishlist.id}
                        title={wishlist.title}
                        id={wishlist.id}
                        date={date}
                    />
                );
            })}
        </section>
    );
}

export default Dashboard;
