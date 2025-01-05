function About() {
    return (
        <section className="about">
            <h2>About me!</h2>
            <div>
                <p>Hi, I'm a software developer with a passion for creating innovative and user-friendly applications.</p>
            </div>
            <div>
                <button onClick={() => alert('Contact form coming soon!')}>Contact now</button>
            </div>
        </section>
    );
}

export default About;