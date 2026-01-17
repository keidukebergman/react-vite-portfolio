export function ContactView(props) {
    return (
        <section id="contact">
            <div className="container">
                <div className="contact_header">
                    <div className="contact_title_container">
                        <h1 className="contact_title">Contact</h1>
                    </div>
                </div>
                <div className="contact_container">
                    {props.aboutme}
                </div>
            </div>
        </section>
    );
} 