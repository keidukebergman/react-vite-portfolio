export function AboutView(props) {
    return (
        <section id="about">
            <div className="container">
                <div className="about_header">
                    <div className="about_title_container">
                        <h1 className="about_title">About me</h1>
                    </div>
                </div>
                <div className="about_container">
                    {props.aboutme}
                </div>
            </div>
        </section>
    );
} 