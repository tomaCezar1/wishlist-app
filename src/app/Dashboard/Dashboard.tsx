import Wishlistcard from '../WishlistCard/WishlistCard';

function Dashboard({ wishlists }): JSX.Element {
    return (
        <section className="dashboard-container">
            {wishlists.map((wishlist) => {
                let date: string;
                if (wishlist.wishListDate) {
                    date = wishlist?.wishListDate.split('T')[0];
                } else {
                    date = 'No time specified';
                }

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
