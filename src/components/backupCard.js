const Card = (props) => {
    return (
        <div className="card">
            <Icon icon={props.iconName} size="3rem" color="rgba(58, 139, 194)" />
            <h4 className="card-title">{props.title}</h4>
            <p className="card-body">{props.body}</p>
            {/*use either a tag or link tag ..it depends on the purpose */}
            <Link to="/about" className="btn btn-outline-primary">
                Read More
            </Link>
        </div>
    )
}