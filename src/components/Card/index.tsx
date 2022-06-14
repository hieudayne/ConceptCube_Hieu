import React from 'react';
import "./styles.css";

interface IProps {
    title: string,
    background_image: string,
}

function Card(props: IProps) {
    const { title, background_image } = props;

    return (
        <div className="card-item">
            <div className="card-thumbnail">
                <div className="card-image">
                    <img src={background_image} alt="thumbnail" />
                </div>
                <div className="overlay">
                    <div className="label">
                        <img src="/assets/images/label.png" alt="Label" />
                    </div>

                    <div className="overlay-content">
                        <p className='content max-line-2'>
                            {title}
                        </p>
                        <p className='time'>2:23</p>
                    </div>
                </div>
            </div>

            <div className="card-detail">
                <div className="card-info">
                    <div className="avatar">
                        <img src="/assets/images/avatar.jpg" alt="avatar" />
                    </div>
                    <div className="name">Kim Aeyong</div>
                </div>
                <div className="card-react">
                    <div className="react-item">
                        <div className="react-icon">
                            <img src="/assets/icons/like-icon.png" alt="Like icon" />
                        </div>
                        <p className="react-count">18</p>
                    </div>
                    <div className="react-item">
                        <div className="react-icon">
                            <img src="/assets/icons/view-icon.png" alt="View icon" />
                        </div>
                        <p className="react-count">18</p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Card;