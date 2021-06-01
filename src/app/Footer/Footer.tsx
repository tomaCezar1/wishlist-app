function Footer(): JSX.Element {
    const date = new Date().getFullYear();

    return (
        <footer className="footer">
            <p>Copyright &copy; {date} Wishlist Dashboard 2. All rights reserved</p>
        </footer>
    );
}

export default Footer;
